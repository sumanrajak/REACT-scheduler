import React from 'react'
import arrowmark from './images/back.png'
import './adduser.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';
const Addcompupdate = () => {
    const no=[1,2,4,56,1,2,4,56,1,2,4,56,1,2,4,56,]; 
    const row= ()=>{
        for ( let i = 0; i < no ; i++) {
         
      }
  }
    return (
        <div>
             <div className="save">
                <div className=""><Link to="/adduser">
                <img src={arrowmark} alt="l" className="backimg"  /></Link>
                </div>
            
            <div className="">
            <span ><button className="butn" type="submit"><Link to="/dashbord" style={{color:"white",textDecoration:"none" }}>Save</Link></button></span>
            </div>
            </div>
            <div className="main" style={{textAlign:"center"}}>
            <div className="upermain"><h3>Company info</h3></div>              
              <div className="" style={{padding:"100px 10px"}}>
              <div className="rowf">
                        <label><h4>Company Name</h4> </label>
                        <input className="inp"></input>
                        </div>
                        <div className="rowf">
                        <label><h4>Company zone</h4></label>
                        <input className="inp"></input>
                        </div>
                </div>
            </div>
            

        </div>
    )
}

export default Addcompupdate
