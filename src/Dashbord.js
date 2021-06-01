import React from 'react'
import arrowmark from './images/back.png'
import './adduser.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';


function Dashbord() {
    const no=[1,2,4,56,12,2,2,2,2,2,2,22,2]; 
    const row= ()=>{
        for ( let i = 0; i < no ; i++) {
         
      }
  }
    return (
        <div>
             <div className="save">
                <div className=""><Link to="/">
                <img src={arrowmark} alt="l" className="backimg"  /></Link>
                </div>
            
            <div className="">
            <span ><button className="butn" type="submit"><Link to="/adduser" style={{color:"white",textDecoration:"none" }}>Save</Link></button></span>
            </div>
            </div>
            <div className="main">
            {/* <div className="upermain" style={{display:"flex" ,justifyContent:"space-between"}}>
            <div className="title" > Name</div>
            <div className="title">email</div>
            <div className="title">no</div>
            <div className="title">addrress</div>
            <div className="title">usertype</div>
            <div className="title"> username </div>
            <div className="title">zone</div>
            <div className="title">status</div>
            </div> */}
            <table>
                <tr className="tablemain">
                    <th>Name</th>
                    <th>email</th>
                    <th>no</th>
                    <th>addrress</th>
                    <th>usertype</th>
                    <th>username</th>
                    <th>zone</th>
                    <th>status</th>

                </tr>
                {
                    no.map(no=>{
                        return  <tr>
                        <td>suman</td>
                        <td>sumanrajak@ gmail</td>
                        <td>7001396147</td>
                        <td>kolkata</td>
                        <td>admin</td>
                        <td>bongboy</td>
                        <td>wb</td>
                        <td><FormControlLabel control={<Switch />} label="" color="primary" /></td>
                
                    </tr>
                    })
                }
                
                <tr>
                    <td>suman</td>
                    <td>sumanrajak@ gmail</td>
                    <td>7001396147</td>
                    <td>kolkata</td>
                    <td>admin</td>
                    <td>bongboy</td>
                    <td>wb</td>
                    <td><FormControlLabel control={<Switch />} label="" color="primary" /></td>

                </tr>
            </table>
            
            {/* <div className="" style={{display:"flex"  ,marginTop:"4px"}}>
            <div className="title" > suman</div>
            <div className="title">suman2001@gmail</div>
            <div className="title">700197614</div>
            <div className="title">kolkata</div>
            <div className="title">admin</div>
            <div className="title"> bongboy </div>
            <div className="title">wb</div>
            <div className="title"><FormControlLabel control={<Switch />} label="" color="primary" /></div>
            
            </div> */}
            </div>
            

        </div>
    )
}

export default Dashbord
