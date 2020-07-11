import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function (props) {
  const [user, setUser] = useState(null);

  return <AuthContext.Provider value={{ user, setUser }} {...props} />;
}
