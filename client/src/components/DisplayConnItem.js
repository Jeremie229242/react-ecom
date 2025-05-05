import React from 'react'
import { IoClose } from 'react-icons/io5'
import '../index.css';
import { Link } from "react-router-dom";

import { FaCaretRight } from "react-icons/fa";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";




const DisplayConnItem = ({close}) => {
  
  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));
  let history = useHistory();



  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

   
  return (
  

<div className="offcanvas offcanvas-end show d-block" tabIndex="-1" style={{ visibility: 'visible', backgroundColor: 'white', zIndex: 1050 }}>
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" onClick={close}></button>
      </div>
      <div className="offcanvas-body" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <div className="order-md-last">
        {!user && (
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Page de connexion</span>
           
          </h4>
        )}

            {!user && (
              <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0" > <Link to="/login" class="nav-link"> <FaUser size={20} />Se Connecter</Link></h6>
              
              </div>
              
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0"><Link to="/register" class="nav-link"><FaUserEdit size={24} />S'inscrire</Link></h6>
               
              </div>
             
            </li>
           
           
          </ul>

      )}

      {user && (
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Dashboard</span>
           
          </h4>
          
         

        )}

        {user && (
          <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={logout}><HiOutlineLogout size={30} />Deconnexion</button>

          
         

        )}
           
  
        </div>
      </div>
    </div>



  )
}

export default DisplayConnItem
