import React from 'react'
import arrowmark from './images/back.png'
import './adduser.css'
import { Link } from 'react-router-dom'

const Adduser = () => {
    return (
        <div>
            <div className="save">
                <div className=""><Link to="/dashbord">
                <img src={arrowmark} alt="l" className="backimg"  /></Link>
                </div>
            
            <div className="">
            <span ><button className="butn" type="submit"><Link to="/addc" style={{color:"white",textDecoration:"none" }}>Save</Link></button></span>
            </div>
            </div>
            <div className="main">
                <div className="upermain"><h3>User info</h3></div>
                <div className="lowermain">
                    <div className="left">
                        <div className="rowf">
                        <label>Name</label>
                        <input className="inp"></input>
                        </div>
                        <div className="rowf">
                        <label>Email</label>
                        <input className="inp"></input>
                        </div><div className="rowf">
                        <label>Mobile</label>
                        <input className="inp"></input>
                        </div><div className="rowf">
                        <label>Address</label>
                        <input className="inp_addess"></input>
                        </div>
                    </div>
                    <div className="right">
                    <div className="rowf">
                        <label>Usertype</label>
                        <select className="companydrop inp"  >
                            <option value="NA">Admin</option>
                            <option value="Mr.A">Cliant</option>
                            <option value="Mr.B">STUDENT</option>
                            <option value="Mr.C">CR</option> 
                            </select>
                        </div><div className="rowf">
                        <label>Username</label>
                        <input className="inp"></input>
                        </div><div className="rowf">
                        <label>Password</label>
                        <input className="inp"></input>
                        </div><div className="rowf">
                        <label>Zone</label>
                        <select className="companydrop inp"  >
                            <option value="NA">kolakta</option>
                            <option value="Mr.A">bbsr</option>
                            <option value="Mr.B">delhi</option>
                            <option value="Mr.C">goa</option> 
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adduser
