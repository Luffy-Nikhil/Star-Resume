import React from "react";
import { Link } from 'react-router-dom';

const BuildHeader = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <Link className="navbar-brand" to="/">Resume_Builder </Link>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //       <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item active">
        //                 <Link className="nav-link" to="/">Home</Link>
        //             </li>
        //             <li className="nav-item dropdown">
        //                 <Link className="nav-link dropdown-toggle" to="/build" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                     Template
        //                 </Link>
        //                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                     <Link className="dropdown-item" to="/build">Action</Link>
        //                     <Link className="dropdown-item" to="/build">Another action</Link>
        //                     <div className="dropdown-divider"></div>
        //                     <Link className="dropdown-item" to="/build">Something else here</Link>
        //                 </div>
        //             </li>
        //         </ul>

        //     </div>
        // </nav>
        <nav className="nav-build">
            <div className="nav-head">
                <Link className="nav-a" to="/">Resume_Builder </Link>
            </div>
            <div className="nav-ul">
                <ul>
                    <li className="nav-li">
                        <Link className="nav-a" to="/">Home</Link>
                    </li>
                    <li className="nav-li">
                        <Link className="dropdown-toggle nav-a" to="/">
                            Template
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default BuildHeader;