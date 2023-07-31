import React, { Component } from 'react'

export class Navbar extends Component {
   render() {
      return (
         <nav className="navbar navbar-expand-lg bg-danger-subtle">
            <div className="container-fluid">
               <a className="navbar-brand" href="/">NewsMonkey</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                     <a className="nav-link active" aria-current="page" href="/">Home</a>
                     <a className="nav-link" href="/">About</a>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Topics
                        </a>
                        <ul className="dropdown-menu">
                           <li><a className="dropdown-item" href="/">Business</a></li>
                           <li><a className="dropdown-item" href="/">Entertainment</a></li>
                           <li><a className="dropdown-item" href="/">General</a></li>
                           <li><a className="dropdown-item" href="/">Health</a></li>
                           <li><a className="dropdown-item" href="/">Science</a></li>
                           <li><a className="dropdown-item" href="/">Sports</a></li>
                           <li><a className="dropdown-item" href="/">Technology</a></li>
                        </ul>
                     </li>
                  </div>
               </div>
            </div>
         </nav>
      )
   }
}
export default Navbar