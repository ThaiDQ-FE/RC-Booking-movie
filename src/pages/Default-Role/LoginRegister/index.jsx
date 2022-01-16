import React, { useState } from "react";
import Login from "../../../components/default/login";
import Register from "../../../components/default/register";

function LoginRegister() {
  const [switchs, setSwitchs] = useState(false);
  return (
    <div className="lr__wrapper">
      {switchs === false ? (
        <Register setSwitchs={setSwitchs} />
      ) : (
        <Login setSwitchs={setSwitchs} />
      )}
    </div>
  );
}

export default LoginRegister;
