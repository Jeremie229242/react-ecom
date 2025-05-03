import React from 'react'
import { IoClose } from 'react-icons/io5'
import '../index.css';

import { FaCaretRight } from "react-icons/fa";




const DisplaySearchItem = ({close}) => {
  
   

   
  return (
  
    <div class="offcanvas offcanvas-end show d-block" tabIndex="-1" style={{ visibility: 'visible', backgroundColor: 'white', zIndex: 1050 }} >
    <div class="offcanvas-header justify-content-center">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" onClick={close}></button>
    </div>
    <div class="offcanvas-body">
      <div class="order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Search</span>
        </h4>
        <form role="search" action="index.html" method="get" class="d-flex mt-3 gap-0">
          <input class="form-control rounded-start rounded-0 bg-light" type="email" placeholder="What are you looking for?" aria-label="What are you looking for?"/>
          <button class="btn btn-dark rounded-end rounded-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>





  )
}

export default DisplaySearchItem
