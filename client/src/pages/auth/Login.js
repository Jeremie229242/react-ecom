import React, { useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(email, password);
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          autoFocus
        />
      </div>
<br/>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Votre mot de passe"
        />
      </div>

      <br />
      <button
        onClick={handleSubmit}
        
        className="btn btn-primary btn-raised mb-3"
        block
        shape="round"
        
        size="large"
        disabled={!email || password.length < 6}
      >
       <MdOutlineMarkEmailUnread size={24} />  VALIDER
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Se Connecter</h4>
          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
