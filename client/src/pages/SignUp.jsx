import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import api from '../utils/api';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid Email is required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be atleast 6 characters";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    try {
      await api.post("/auth/sign-up", formData);
      navigate('/signin');

    } catch (error) {
      if (error.response && error.response.data.error)
        setErrors({ api: error.response.data.error });
      else
        setErrors({ api: "Something went wrong. Please Try again" });
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <div className='pt-16 max-w-full'>
      <SignUpForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} loading={isLoading} />
    </div>

  )
}

export default SignUp;