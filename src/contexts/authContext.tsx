import React, { createContext, useContext, useState, useEffect } from "react";

interface IAuth {
  userData: any;
  loading: boolean;
  login: (name?: string, password?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuth>({} as IAuth);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<any>(null);

  const login = (email?: string, password?: string) => {
    setUserData({
      id: 1,
      name: "John Doe",
      email: "",
    });
  };

  const logout = () => {
    setUserData(null);
  };
  const value: IAuth = {
    userData,
    login,
    loading: false,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
