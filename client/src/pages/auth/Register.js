import React, { useState } from "react";
import { auth } from "../../firebase";
import  { toast } from 'react-hot-toast';
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (!email ) {
          toast.error("Email  is required");
          return;
        }

     console.log("ENV --->", process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true, 
    };





    
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `L'e-mail est envoyé à ${email}.  Cliquez sur le lien pour finaliser votre inscription..`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />

      <button type="submit" className="btn-primary mt-5 btn btn-raised">
      <MdOutlineMarkEmailUnread size={24} />  Register/ {email}
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
       
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
