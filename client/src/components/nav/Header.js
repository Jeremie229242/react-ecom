import React, { useState } from "react";


import { HiMiniUserCircle } from "react-icons/hi2";
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import logo from '../../assets/images/logo.png';
import DisplayCartItem from '../DisplayCartItem.js';
import DisplaySearchItem from '../DisplaySearchItem.js';
import DisplayConnItem from '../DisplayConnItem.js';
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";




const Header = () => {
  const [current, setCurrent] = useState("home");
  const [openCartSection,setOpenCartSection] = useState(false)
  const [openSearchSection,setOpenSearchSection] = useState(false)
  const [openConnSection,setOpenConnSection] = useState(false)
  const [openUserMenu,setOpenUserMenu] = useState(false)
  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  return (
   
     

      <header>
      
      <div className="container-fluid">
        <div className="row py-3 border-bottom">
          
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
            <Link to="/"> <img 
                                            src={logo}
                                           
                                            alt='logo'
                                            className='hidden lg:block'
                                        /></Link>
           
            </div>
          </div>
          
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar row bg-light p-2 my-2 rounded-4">
              <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div className="col-11 col-md-7">
                <form  className="text-center" >
                  <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                </form>
              </div>
              <div className="col-1">
                <svg  width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div>
          
          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <div className="support-box text-end d-none d-xl-block">
             
              <h5 className="mb-0">+229-96969696</h5>
            </div>

            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a  className="rounded-circle bg-light p-2 mx-1 " onClick={()=>setOpenConnSection(true)} >
                <svg width="24" height="24" > <HiMiniUserCircle size={26}/></svg>
                
                
                </a>
              </li>
              <li>
                <a  className="rounded-circle bg-light p-2 mx-1">
                <Link to="/heart"><svg width="24" height="24" > <BsHeart size={22}/></svg></Link>
                  
                </a>
              </li>
              <li className="d-lg-none">
                <a  className="rounded-circle bg-light p-2 mx-1" onClick={()=>setOpenCartSection(true)} >
                
                  <svg width="24" height="24" ><BsCart3 size={24}/></svg>
                </a>
              </li>
              <li className="d-lg-none">
                <a  className="rounded-circle bg-light p-2 mx-1" onClick={()=>setOpenSearchSection(true)} >
                
                  <svg width="24" height="24" ><IoSearch size={24}/></svg>
                </a>
              </li>
            </ul>

            <div className="cart text-end d-none d-lg-block ">
              <button onClick={()=>setOpenCartSection(true)} className="border-0 bg-transparent d-flex flex-column gap-2 lh-1"   >
                <span className="fs-6 text-muted ">Panier</span>
                <span className="cart-total fs-5 fw-bold">cfa1290.00</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="container-fluid">
        <div className="row py-3">
          <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
           

          <nav className="main-menu d-flex navbar navbar-expand-lg">
            

            <button onClick={()=>setOpenUserMenu(true)} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

<div class="offcanvas-header justify-content-center">
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>

<div class="offcanvas-body">

  <select class="filter-categories border-0 mb-0 me-5">
    <option>Shop by Departments</option>
    <option>Groceries</option>
    <option>Drinks</option>
    <option>Chocolates</option>
  </select>

  <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
    <li class="nav-item active">
    <Link to="/women" class="nav-link">Women</Link>
      
    </li>
    <li class="nav-item dropdown">
    <Link to="/men" className="nav-link">Men</Link>
     
    </li>
    <li class="nav-item">
    <Link to="/kids" class="nav-link">Kids</Link>
      
    </li>
    <li class="nav-item">
    <Link to="/acess" className="nav-link">Accessories</Link>
    
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
      <ul class="dropdown-menu" aria-labelledby="pages">
        <li>
        <Link to="/propos" class="dropdown-item">About Us</Link>
        
        </li>
        <li>
        <Link to="/sahop" className="dropdown-item">Shop</Link>
       
        </li>
       
      </ul>
    </li>
    <li class="nav-item">
    <Link to="/brand" className="nav-link">Brand</Link>
      
    </li>
    <li class="nav-item">
    <Link to="/sale" className="nav-link">Sale</Link>
     
    </li>
    <li class="nav-item">
    <Link to="/blog" className="nav-link">Blog</Link>
     
    </li>
  </ul>

</div>

</div>

            {openUserMenu && (
        <>
          <div
            className="offcanvas-backdrop fade show"
            onClick={() => setOpenUserMenu(false)}
            style={{ zIndex: 1040 }}
          />
          
          <div className="offcanvas offcanvas-end show d-block" tabIndex="-1" style={{ visibility: 'visible', backgroundColor: 'white', zIndex: 1050 }} close={() => setOpenUserMenu(false)} >

<div className="offcanvas-header justify-content-center">
  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" onClick={() => setOpenUserMenu(false)}></button>
</div>

<div className="offcanvas-body " style={{ maxHeight: '80vh', overflowY: 'auto' }}>

  <select className="filter-categories border-0 mb-0 me-5">
    <option>Shop by Departments</option>
    <option>Groceries</option>
    <option>Drinks</option>
    <option>Chocolates</option>
  </select>

  <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
    <li class="nav-item active">
    <Link to="/women" class="nav-link">Women</Link>
      
    </li>
    <li class="nav-item dropdown">
    <Link to="/men" className="nav-link">Men</Link>
     
    </li>
    <li class="nav-item">
    <Link to="/kids" class="nav-link">Kids</Link>
      
    </li>
    <li class="nav-item">
    <Link to="/acess" className="nav-link">Accessories</Link>
    
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
      <ul class="dropdown-menu" aria-labelledby="pages">
        <li>
        <Link to="/propos" class="dropdown-item">About Us</Link>
        
        </li>
        <li>
        <Link to="/sahop" className="dropdown-item">Shop</Link>
       
        </li>
       
      </ul>
    </li>
    <li class="nav-item">
    <Link to="/brand" className="nav-link">Brand</Link>
      
    </li>
    <li class="nav-item">
    <Link to="/sale" className="nav-link">Sale</Link>
     
    </li>
    <li class="nav-item">
    <Link to="/blog" className="nav-link">Blog</Link>
     
    </li>
  </ul>

</div>

</div>
        </>
      )}
           
          </nav>
          </div>
        </div>
      </div>
    

{openCartSection && (
        <>
          <div
            className="offcanvas-backdrop fade show"
            onClick={() => setOpenCartSection(false)}
            style={{ zIndex: 1040 }}
          />
          <DisplayCartItem close={() => setOpenCartSection(false)} />
        </>
      )}




{openSearchSection && (
        <>
          <div
            className="offcanvas-backdrop fade show"
            onClick={() => setOpenSearchSection(false)}
            style={{ zIndex: 1040 }}
          />
          <DisplaySearchItem close={() => setOpenSearchSection(false)} />
        </>
      )}


      {openConnSection && (
        <>
          <div
            className="offcanvas-backdrop fade show"
            onClick={() => setOpenConnSection(false)}
            style={{ zIndex: 1040 }}
          />
          <DisplayConnItem close={() => setOpenConnSection(false)} />
        </>
      )}



</header>


    
  );
};

export default Header;
