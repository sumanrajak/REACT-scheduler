import React, { useEffect, useState } from 'react'
import { ScheduleComponent,ViewsDirective, Day, Week, WorkWeek, Month, Agenda, Inject, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { extend, Internationalization } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './App.css';
import { blue, green } from '@material-ui/core/colors';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import TextField from '@material-ui/core/TextField';

import Form from 'react-bootstrap/Form'
import axios from 'axios'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import BusinessSharpIcon from '@material-ui/icons/BusinessSharp';
const Scheduler = () => {
    //data

    const [data, SetData] = useState([{EndTime: new Date(2020, 11, 15, 12, 30),
        EndTimezone: null,
        EventType: "TRAVEL",
        Guid: "082bc393-0c7b-8f0e-b9fc-cd9990d9b209",
        Id: 1,
        RecurrenceRule: undefined,
        StartTime:  new Date(2020, 11, 15, 9, 30),
        StartTimezone: null,
        Subject: "TEST FROM ARRAY",
        cliant_meeting: null,
        company_name: null,
        contact_persons: null,
        cr_associates: null,
        internal_meeting: null,
        internal_notes: "",
        notes: "" ,
        notes_travel_descscription: "mbnjbjj",
        reference: "",
        travel_acompanied: "jbjbj"}])


    useEffect(() => {
    //     const fetchdata= async ()=>{
    //         console.log("running")
    //       const {data}= await axios.get('/api/products'); ///get data
    //      console.log(data) 
    //       console.log("running22")

    //       SetData(data);
         
    //       /api/products
    // };
    
    // fetchdata();



    }, [])


    const  Eventpost_travel = async(e)=>{
      
             console.log("post travel")
            await axios.post("/api/travelplan",{
                 "title":e.Subject,
                     "travel_date":e.EndTime,
                     "return_date":e.endtime_trav,
                     "travel_from":e.travel_from,
                     "travel_to":e.travel_to,
		     "accompanied_by" : [] , 
             }
                 
             )
             
 };
 const  Eventpost_cliant = async(e)=>{
      
  console.log("post cliant")
 await axios.post("/api/external/",{
"title" : e.Subject ,
     "meeting_date" : e.EndTime ,
        "open_time" : e.StartTime ,
        "close_time" : e.endtime ,
        "comp_id" :e.company_name ,
        "meeting_type" : e.cliant_meeting ,
	"assigned_to" : [1] ,
        "contact_id" : e.reference 
  }
      
  )
  
};
const  Eventpost_internal = async(e)=>{
      const kuch = {
        headers : {
          Authorization : "Token 2e2648b6ae86d707d24842a8b2d869fe47870154eeedb893379ffa966b9a87e6"
        }
      }
  console.log("post internal")
 await axios.post("/api/internal/",{
  "title" : e.Subject,
  "meeting_date" : e.EndTime,
     "open_time" : e.StartTime_int ,
     "close_time" : e.endtime_int ,
     "meeting_type" :e.internal_meeting ,
     "agenda" : e.internal_notes
},
kuch
      
  )
  
};

   
     
    //links
    // https://xd.adobe.com/view/75fd671b-3f85-4f6a-97f3-b34fde6728a8-20ae/screen/62023db1-e8cd-40f6-9ff0-c265da87bb2b/



    const instance = new Internationalization();
     const editorTemplate=(props) =>{ return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
     <tr><td className="e-textlabel">Add Title</td><td colSpan={4}>
       <input id="Subject" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} value={props.Subject || null}/>
     </td></tr>
     <tr><td className="e-textlabel">type</td><td colSpan={4}>
       <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['CLIANT', 'TRAVEL', 'INTERNAL']} value={props.EventType || null}></DropDownListComponent>
     </td></tr>
     {/* <tr><td className="e-textlabel">From</td><td colSpan={4}>
       <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
     </td></tr> */}
     <tr>
         <td colSpan={5}> 
         <Tabs defaultActiveKey="home"  transition={false} id="noanim-tab-example" style={{    width: "fit-content"}}>




              {/* CLIENT */}



  <Tab eventKey="cliant" title="cliant">
      <table>
          <tbody>
          <tr>
              <td colSpan={4}>
              <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.EndTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
              </td>
         </tr>
         <tr ><td className="e-textlabel"><BusinessSharpIcon/> </td><td colSpan={4}>
         <DropDownListComponent id="company_name" placeholder='company name' data-name="company_name" className="e-field" style={{ width: '100%' }} dataSource={['abc', 'xuz', 'sds']} value={props.company_name || null}></DropDownListComponent>
</td></tr>
<tr><td className="e-textlabel"><PeopleIcon/></td><td colSpan={4}>  <DropDownListComponent id="contact_persons" placeholder='contact person' data-name="contact_persons" className="e-field" style={{ width: '100%' }} dataSource={['Neasssw', 'Requsdsdested', 'Cosddsnfirmed']} value={props.contact_persons || null}></DropDownListComponent>
</td></tr>
<tr>
  <td><AccessTimeIcon/></td> 
  <td><DateTimePickerComponent format=' hh:mm a' id="StartTime" data-name="StartTime"style={{ width: '70%',paddingLeft:"5px"  }}  value={new Date(props.StartTime || props.StartTime_)} className="e-field"></DateTimePickerComponent>
  </td> 
  <td>to</td>
  <td >
  <DateTimePickerComponent format=' hh:mm a' id="endtime" data-name="endtime" style={{ width: '70%',  }}  value={new Date(props.endtime || props.endtime)} className="e-field"></DateTimePickerComponent>
      </td>
</tr>
<tr>
<td className="e-textlabel">meetings</td><td colSpan={4}>
     <DropDownListComponent id="cliant_meeting" placeholder='meeting' text="true" data-name="cliant_meeting" className="e-field" style={{ width: '100%' }} dataSource={['meeting', 'email', 'call']} value={props.cliant_meeting || null}></DropDownListComponent>
     </td></tr>
     <tr><td className="e-textlabel"><AccountCircleIcon/> </td><td colSpan={4}>
     <DropDownListComponent id="cr_associates" placeholder='cr associates' data-name="cr_associates" className="e-field" style={{ width: '100%' }} dataSource={['cr associates1', 'cr associates2', 'cr associates3']} value={props.cr_associates || null}></DropDownListComponent>
     </td></tr>
     <tr><td className="e-textlabel"><PersonIcon/></td><td colSpan={4}>
     <textarea id="reference" className="e-field e-input" name="reference" rows={3} cols={50} style={{ width: '100%', height: '20px !important', resize: 'vertical' }} value={props.reference || null}></textarea>
     </td></tr>
     
     <tr><td className="e-textlabel"><NoteAddOutlinedIcon/></td><td colSpan={4}>
       <textarea id="notes_cliant" className="e-field e-input" name="notes" rows={3} cols={50} style={{ width: '100%', height: '40px !important', resize: 'vertical' }} value={props.notes_cliant || null}></textarea>
     </td></tr>

        </tbody></table>

                            
  </Tab>
 

  
      {/* travel */}


  <Tab eventKey="travel" title="travel">
  <table >
          <tbody>
          
<tr style={{ paddingLeft: "4em"}}>
  <td><AccessTimeIcon/></td > 
  <td colSpan={4} >
  <TextField
        id="StartTime_trav"
        name="StartTime_trav"
        type="date"
        defaultValue="2017-05-24"
        value="props.StartTime_trav "
        InputLabelProps={{
          shrink: true,
        }}
      />
    {/* <DateTimePickerComponent format='yyyy/MM/dd' id="StartTime_trav"  value={props.StartTime_trav || null} className="e-field"></DateTimePickerComponent> */}
  </td> 
  <td>to</td>
  <td >
  <DateTimePickerComponent format='yyyy/MM/dd ' id="endtime_travv"  value="endtime_travv"  className="e-field"></DateTimePickerComponent>
      </td>
</tr>
<tr>
  <td><LocationOnIcon/></td> 
  <td><textarea id="travel_from" className="e-field e-input" name="travel_from" cols={50} style={{ width: '70%', paddingLeft:"5px"  }}  value={props.travel_from || null}></textarea>

</td>
<td>to</td>
<td colSpan={4}>
<textarea id="travel_to" className="e-field e-input" name="travel_to" cols={50} style={{ width: '70%', }}  value={props.travel_to || null}></textarea>
     </td>
</tr>

     <tr><td className="e-textlabel"><NoteAddOutlinedIcon/></td><td colSpan={4}>
       <textarea id="notes_travel" className="e-field e-input" name="notes_travel_descscription" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}  value={props.notes_travel || null}></textarea>
     </td></tr>
     <tr><td className="e-textlabel"><AccountCircleIcon/></td><td colSpan={4}>
       <textarea id="travel_acompanied" className="e-field e-input" name="travel_acompanied" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}  value={props.travel_acompanied || null}></textarea>
     </td></tr>

        </tbody></table>
  </Tab>


                        {/* INTERNAL */}



  <Tab eventKey="internal" title="internal">
  <table>
          <tbody>
          <tr style={{ paddingLeft: "4em"}}>
  <td><AccessTimeIcon/></td> 
  <td ><DateTimePickerComponent format=' hh:mm a' id="StartTime_int" data-name="StartTime_int"style={{ width: '70%',paddingLeft:"5px"  }}  value={new Date(props.startTime_int || props.startTime_int)} className="e-field"></DateTimePickerComponent>
  </td> 
  <td>to</td>
  <td >
  <DateTimePickerComponent format=' hh:mm a' id="endtime_int" data-name="endtime_int" style={{ width: '70%',  }}  value={new Date(props.endtime_int || props.endtime_int)} className="e-field"></DateTimePickerComponent>
      </td>
</tr>
        
     <tr><td className="e-textlabel"><NoteAddOutlinedIcon/></td><td colSpan={4}>
       <textarea id="internal_notes" className="e-field e-input" name="internal_notes" rows={3} cols={50} style={{ width: '100%', height: '60px !important',  }} value={props.internal_notes || null}></textarea>
     </td></tr>
     <tr><td className="e-textlabel">meetings</td><td colSpan={4}>
     <DropDownListComponent id="internal_meeting" placeholder='company name' data-name="internal_meeting" className="e-field" style={{ width: '100%' }} dataSource={['meeting', 'email', 'call']} value={props.internal_meeting || null}></DropDownListComponent>
     </td></tr>

        </tbody></table>   
                            
  </Tab>
  
</Tabs>
         </td>
     </tr>
     
    </tbody></table> : <div>lol</div>);}


const onEventRendered=(args)=> {
   
   let categoryColor
        if (args.data.EventType == "CLIANT") { 
            categoryColor = 'green'; 
        } else if (args.data.EventType == "TRAVEL") { 
            categoryColor = 'red'; 
        } 
        else if (args.data.EventType == "INTERNAL") { 
            categoryColor = 'yellow'; 
        } 
   args.element.style.backgroundColor = categoryColor;
}
//show dta when event created

const onActionBegin=(args)=> { 
    if (args.requestType === 'eventCreate') { 
      const eventData = args.data[0];
//
      if(eventData.EventType=="TRAVEL"){
        Eventpost_travel(eventData);
      }else if(eventData.EventType=="CLIANT"){
        Eventpost_cliant(eventData);
      }else{
        Eventpost_internal(eventData);
      }
      console.log("created")
      console.log(eventData.EventType)
      console.log(eventData)
      
      
      
    } else if(args.requestType === 'eventChange'){
        console.log("event updated")
        const eventData2 = args.data
        console.log(eventData2)

    }
  } 

    return (
        
        
        <div>
            <ScheduleComponent width= '100%' height='650px'
            editorTemplate={editorTemplate.bind(this)} 
            cssClass='e-prev'
           
            eventRendered={onEventRendered.bind(this)}
            eventSettings={{ dataSource: data }}
            actionBegin={onActionBegin.bind(this)}>
        
      <ViewsDirective >
        
        <ViewDirective option='Week' />
        <ViewDirective option='Month'/>
        <ViewDirective option='Day'/>
      </ViewsDirective>
      <Inject services={[Day, Week,  Month]}/>

      </ScheduleComponent>
        </div>
    )
}

export default Scheduler

