import React from 'react'
import { IoClose } from 'react-icons/io5'
import '../index.css';

import { FaCaretRight } from "react-icons/fa";




const DisplayCartItem = ({close}) => {
  
   

   
  return (
  

<div className="offcanvas offcanvas-end show d-block" tabIndex="-1" style={{ visibility: 'visible', backgroundColor: 'white', zIndex: 1050 }}>
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" onClick={close}></button>
      </div>
      <div className="offcanvas-body" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <div className="order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Growers cider</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Fresh grapes</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Heinz tomato ketchup</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
  
          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </div>
      </div>
    </div>



  )
}

export default DisplayCartItem
