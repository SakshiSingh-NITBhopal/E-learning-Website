import { useNavigate } from "react-router-dom";

const SignInForm = ({ formData, handleChange, handleSubmit, errors, loading }) => {
  const navigate = useNavigate();
  return (
    <form
      className="flex flex-col mt-12 gap-6 max-w-lg w-full mx-auto bg-secondary p-8 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-primary mb-2 text-center">Sign In</h2>
      {errors.api && (
        <p className="text-red-500 text-center">{errors.api}</p>
      )}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium text-text mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 rounded border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-medium text-text mb-1">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="px-4 py-2 rounded border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <button
        type="button"
        className="flex flex-row-reverse gap-2 rounded-md px-4 py-2 text-primary hover:text-primary/80 hover:cursor-pointer"
        onClick={() => navigate('/signup')}
      >
        <span>Don't have an account? <span className="underline">SignUp</span></span>

      </button>

      <button
        type="submit"
        disabled={loading}
        className={`mt-2 bg-primary text-white font-semibold py-2 rounded transition-colors 
        ${loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-primary hover:bg-accent hover:cursor-pointer'
          }`}
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  )
}

export default SignInForm;