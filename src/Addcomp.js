import React from 'react'
import arrowmark from './images/back.png'
import './adduser.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';
const Addcomp = () => {
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
            <span ><button className="butn" type="submit"><Link to="/compupdate" style={{color:"white",textDecoration:"none" }}>Save</Link></button></span>
            </div>
            </div>
            <div className="main" style={{display:"flex",textAlign:"center"}}>
                <div className="" style={{width:"50%"}}>
                <table>
                <tr className="tablemain">
                    <th> company Name</th>
                    <th>compani zone</th>
                

                </tr>
                {
                    no.map(no=>{
                        return  <tr>
                        <td><input type="radio" style={{marginRight:"10px"}}></input>suman</td>
                        <td>south</td>
                       
                    
                
                    </tr>
                    })
                }
                
                
            </table>
                </div>
                <div className="" style={{width:"50%"}}>
                <table>
                <tr className="tablemain">
                <th> company Name</th>
                    <th>compani zone</th>
                    

                </tr>
                {
                    no.map(no=>{
                        return  <tr>
                        <td><input type="radio" style={{marginRight:"10px"}}></input>suman</td>
                        <td>north</td>
                        
                
                    </tr>
                    })
                }
                
                
            </table>
                </div>
          
           
            
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

export default Addcomp
