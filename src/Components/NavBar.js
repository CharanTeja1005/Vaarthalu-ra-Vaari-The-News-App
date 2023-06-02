import React from 'react'
import {Link} from "react-router-dom"

const NavBar = (props) => {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Vaarthalu ra Vaari</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                </div>
                <div className="d-flex">
                  <div className="bg-primary rounded mx-2" onClick={() => {props.toggleColor('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                  <div className="bg-danger rounded mx-2" onClick={() => {props.toggleColor('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                  <div className="bg-success rounded mx-2" onClick={() => {props.toggleColor('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                  <div className="bg-warning rounded mx-2" onClick={() => {props.toggleColor('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                </div>
            </div>
        </nav>
      </div>
    )
}

export default NavBar
