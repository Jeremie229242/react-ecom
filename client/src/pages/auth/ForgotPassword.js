import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import  { toast } from 'react-hot-toast';
import { useSelector } from "react-redux";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);



  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Consultez votre courrier électronique pour obtenir le lien de réinitialisation du mot de passe");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log("Message d'erreur dans le cas d'un mot de passe oublié", error);
      });
  };

  return (
    <div className="container col-md-6 offset-md-3 p-5">
      {loading ? (
        <h4 className="text-danger">Patienter</h4>
      ) : (
        <h4>Mot de Passe Oublier</h4>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Entrer votre email"
          autoFocus
        />
        <br />
        <button className="btn btn-primary btn-raised" disabled={!email}>
          Valider
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
