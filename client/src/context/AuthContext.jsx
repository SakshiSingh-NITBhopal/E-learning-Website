import { useState, useEffect, createContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const savedAuth = localStorage.getItem("auth");
    if(savedAuth){
      setAuth(JSON.parse(savedAuth));
    }
    setLoading(false);
  }, []);

  const login = (authData) => {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value = {{auth, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;