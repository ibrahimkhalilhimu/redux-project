import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar shadow bg-primary fixed-top navbar-expand-sm navbar-dark">
               <div className="container">
               <Link className="navbar-brand" to="/">Connect</Link>
               <div className="">
                   <Link className="btn btn-light ml-auto"to="/contacts/add" >Create Contacts</Link> 
               </div>
               </div>
               
            </nav>
        </div>
    );
};

export default NavBar;