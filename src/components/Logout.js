import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config";

const Logout = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <h4>User Logged In:</h4>
      {user ? user.email : "Not Logged In"}

      <button onClick={logout}>Sign Out</button>
    </div>
  );
};

export default Logout;
