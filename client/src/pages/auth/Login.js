import React, { useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useDispatch } from "react-redux";
import { auth, googleAuthProvider } from "../../firebase";
import  { toast } from 'react-hot-toast';
import { GrGooglePlus } from "react-icons/gr";

const Login = ({ history }) => {
  const [email, setEmail] = useState("jeremie229242@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      // console.log(result);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
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

  // return (
  //   <div className="container p-5">
  //     <div className="row">
  //       <div className="col-md-6 offset-md-3">
  //         <h4>Se Connecter</h4>
  //         {loginForm()}
  //       </div>
  //     </div>
  //   </div>
  // );




  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <h4 className="text-danger">Patienter...</h4>
          ) : (
            <h4>Se Connecter</h4>
          )}
          {loginForm()}

          <button
            onClick={googleLogin}
            type="danger"
            className="btn btn-primary btn-raised mb-3"
            block
            shape="round"
            
            size="large"
          ><GrGooglePlus size={24} />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );


};

export default Login;
