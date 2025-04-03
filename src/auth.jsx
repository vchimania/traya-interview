import { useState } from "react";
import Login from "./login";

export const withAuth = (WrappedComponent) => {
  return function Authentication() {
    const [user, setUser] = useState(null);

    const handleLogin = (email) => {
      console.log({ email });

      setUser(email);
    };

    const storedEmail = localStorage.getItem("email");
    return user || storedEmail ? (
      <WrappedComponent user={user} storedEmail={storedEmail} />
    ) : (
      <Login onLogin={handleLogin} />
    );
  };
};
