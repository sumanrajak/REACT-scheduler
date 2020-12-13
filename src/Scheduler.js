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
import Form from 'react-bootstrap/Form'
import axios from 'axios'


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
        const fetchdata= async ()=>{
            console.log("running")
          const {data}= await axios.get('/api/products');
         console.log(data) 
          console.log("running22")

          SetData(data);
         

    };
    
    fetchdata();



    }, [])

    

    // const data=[{EndTime: new Date(2020, 11, 15, 12, 30),
    // EndTimezone: null,
    // EventType: "TRAVEL",
    // Guid: "082bc393-0c7b-8f0e-b9fc-cd9990d9b209",
    // Id: 1,
    // RecurrenceRule: undefined,
    // StartTime:  new Date(2020, 11, 15, 9, 30),
    // StartTimezone: null,
    // Subject: "HII",
    // cliant_meeting: null,
    // company_name: null,
    // contact_persons: null,
    // cr_associates: null,
    // internal_meeting: null,
    // internal_notes: "",
    // notes: "" ,
    // notes_travel_descscription: "mbnjbjj",
    // reference: "",
    // travel_acompanied: "jbjbj"},]
    
    
    const instance = new Internationalization();
     const editorTemplate=(props) =>{ return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
     <tr><td className="e-textlabel">Add Title</td><td colSpan={4}>
       <input id="Subject" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} value={props.Subject || null}/>
     </td></tr>
     <tr><td className="e-textlabel">type</td><td colSpan={4}>
       <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['CLIANT', 'TRAVEL', 'INTERNAL']} value={props.EventType || null}></DropDownListComponent>
     </td></tr>
     <tr><td className="e-textlabel">From</td><td colSpan={4}>
       <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
     </td></tr>
     <tr>
         <td colSpan={10}> 
         <Tabs defaultActiveKey="home"  transition={false} id="noanim-tab-example" style={{    width: "fit-content"}}>




              {/* CLIENT */}



  <Tab eventKey="cliant" title="cliant">
      <table>
          <tbody>
          <tr>
              <td colSpan={4}>
              <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
              </td>
         </tr>
         <tr><td className="e-textlabel">company name </td><td colSpan={4}>
         <DropDownListComponent id="company_name" placeholder='company name' data-name="company_name" className="e-field" style={{ width: '100%' }} dataSource={['abc', 'xuz', 'sds']} value={props.company_name || null}></DropDownListComponent>
</td></tr>
<tr><td className="e-textlabel">contact person </td><td colSpan={4}>  <DropDownListComponent id="contact_persons" placeholder='contact person' data-name="contact_persons" className="e-field" style={{ width: '100%' }} dataSource={['Neasssw', 'Requsdsdested', 'Cosddsnfirmed']} value={props.contact_persons || null}></DropDownListComponent>
</td></tr>
<tr><td>from</td><td colSpan={4}>  <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
</td></tr>
<tr><td className="e-textlabel">To</td><td colSpan={4}>
       <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
     </td></tr><tr><td className="e-textlabel">meetings</td><td colSpan={4}>
     <DropDownListComponent id="cliant_meeting" placeholder='meeting' text="true" data-name="cliant_meeting" className="e-field" style={{ width: '100%' }} dataSource={['meeting', 'email', 'call']} value={props.cliant_meeting || null}></DropDownListComponent>
     </td></tr>
     <tr><td className="e-textlabel">cr associates </td><td colSpan={4}>
     <DropDownListComponent id="cr_associates" placeholder='cr associates' data-name="cr_associates" className="e-field" style={{ width: '100%' }} dataSource={['cr associates1', 'cr associates2', 'cr associates3']} value={props.cr_associates || null}></DropDownListComponent>
     </td></tr>
     <tr><td className="e-textlabel">reference</td><td colSpan={4}>
     <textarea id="reference" className="e-field e-input" name="reference" rows={3} cols={50} style={{ width: '100%', height: '20px !important', resize: 'vertical' }} value={props.reference || null}></textarea>
     </td></tr>
     
     <tr><td className="e-textlabel">notes</td><td colSpan={4}>
       <textarea id="notes_cliant" className="e-field e-input" name="notes" rows={3} cols={50} style={{ width: '100%', height: '40px !important', resize: 'vertical' }} value={props.notes_cliant || null}></textarea>
     </td></tr>

        </tbody></table>

                            
  </Tab>
 

  
      {/* travel */}


  <Tab eventKey="travel" title="travel">
  <table>
          <tbody>
          <tr>
              <td colSpan={4}>
              <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
              </td>
         </tr>
         
         <tr><td>from</td><td colSpan={4}>  <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
</td></tr>
<tr><td className="e-textlabel">To</td><td colSpan={4}>
       <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
     </td></tr>
     <tr><td className="e-textlabel">notes</td><td colSpan={4}>
       <textarea id="notes_travel" className="e-field e-input" name="notes_travel_descscription" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}  value={props.notes_travel || null}></textarea>
     </td></tr>
     <tr><td className="e-textlabel">acompanied by</td><td colSpan={4}>
       <textarea id="travel_acompanied" className="e-field e-input" name="travel_acompanied" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}  value={props.travel_acompanied || null}></textarea>
     </td></tr>

        </tbody></table>
  </Tab>


                        {/* INTERNAL */}



  <Tab eventKey="internal" title="internal">
  <table>
          <tbody>
          <tr>
              <td colSpan={4}>
              <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
              </td>
         </tr>
        
     <tr><td className="e-textlabel">notes</td><td colSpan={4}>
       <textarea id="internal_notes" className="e-field e-input" name="internal_notes" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }} value={props.internal_notes || null}></textarea>
     </td></tr>
     <tr><td className="e-textlabel">meetings</td><td colSpan={4}>
     <DropDownListComponent id="internal_meeting" placeholder='company name' data-name="internal_meeting" className="e-field" style={{ width: '100%' }} dataSource={['meeting', 'email', 'call']} value={props.internal_meeting || null}></DropDownListComponent>
     </td></tr>

        </tbody></table>   
                            
  </Tab>
  
</Tabs>
         </td>
     </tr>
     
    </tbody></table> : <div></div>);}


const getDateHeaderText=(value) =>{
    return instance.formatDate(value, { skeleton: 'Ed' });
}
// const getWeather=(value) =>{
//     switch (value.getDay()) {
//         case 0:
//             return '<div class="weather-text">25°C</div>';
//         case 1:
//             return '<div class="weather-text">18°C</div>';
//         case 2:
//             return '<div class="weather-text">10°C</div>';
//         case 3:
//             return '<div class="weather-text">16°C</div>';
//         case 4:
//             return '<div class="weather-text">8°C</div>';
//         case 5:
//             return '<div class="weather-text">27°C</div>';
//         case 6:
//             return '<div class="weather-text">17°C</div>';
//         default:
//             return null;
//     }
// }
// const dateHeaderTemplate=(props)=> {
//     return (<div><div>{getDateHeaderText(props.date)}</div><div className="date-text" dangerouslySetInnerHTML={{ __html: getWeather(props.date) }}></div></div>);
// }
const getTimeString=(value)=> {
    return this.instance.formatDate(value, { skeleton: 'hm' });
}
const eventTemplate=(props)=> {
    return (<div className="weather-text" style={{ backgroundColor:green }}>

</div>);
}
const onEventRendered=(args)=> {
   //checking the event output
//    console.log(args.data)
//    console.log("event added");
   //setting color for different events
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
      console.log("created")

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
            //dateHeaderTemplate={dateHeaderTemplate.bind(this)}
          // eventSettings={{
            //     dataSource:  {
            //         Id: 1,
            //         Subject: 'Explosion of Betelgeuse Star',
            //         StartTime: new Date(2018, 1, 15, 9, 30),
            //         EndTime: new Date(2018, 1, 15, 11, 0)
            //     }, template: eventTemplate.bind(this)
            // }} 
            eventTemplate = {eventTemplate.bind(this)}
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

