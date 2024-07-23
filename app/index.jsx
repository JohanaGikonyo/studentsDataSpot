import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import "regenerator-runtime/runtime";
import RegisterForm from "./authentification/RegisterForm";
import LoginForm from "./authentification/LoginForm";
export default function Home() {
  const [isAppReady, setAppReady] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSplashScreenFinish = () => {
    setAppReady(true);
  };

  const navigateToLogin = () => {
    setShowLogin(true);
  };

  const navigateToRegister = () => {
    setShowLogin(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAppReady) {
    return <SplashScreen onFinish={handleSplashScreenFinish} />;
  }

  if (!isAuthenticated) {
    if (showLogin) {
      return <LoginForm navigateToRegister={navigateToRegister} onLoginSuccess={handleLoginSuccess} />;
    }
    return <RegisterForm navigateToLogin={navigateToLogin} />;
  }
}
