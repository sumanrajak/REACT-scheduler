import React from 'react'
import { ScheduleComponent,ViewsDirective, Day, Week, WorkWeek, Month, Agenda, Inject, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { extend, Internationalization } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './App.css';
import { green } from '@material-ui/core/colors';



const Scheduler = () => {
    
    const instance = new Internationalization();
     const editorTemplate=(props) =>{ return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
     <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
       <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }}/>
     </td></tr>
     <tr><td className="e-textlabel">Status</td><td colSpan={4}>
       <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']} value={props.EventType || null}></DropDownListComponent>
     </td></tr>
     <tr><td className="e-textlabel">From</td><td colSpan={4}>
       <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
     </td></tr>
     <tr><td className="e-textlabel">To</td><td colSpan={4}>
       <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
     </td></tr>
     <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
       <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
     </td></tr></tbody></table> : <div></div>);}


const getDateHeaderText=(value) =>{
    return instance.formatDate(value, { skeleton: 'Ed' });
}
const getWeather=(value) =>{
    switch (value.getDay()) {
        case 0:
            return '<div class="weather-text">25°C</div>';
        case 1:
            return '<div class="weather-text">18°C</div>';
        case 2:
            return '<div class="weather-text">10°C</div>';
        case 3:
            return '<div class="weather-text">16°C</div>';
        case 4:
            return '<div class="weather-text">8°C</div>';
        case 5:
            return '<div class="weather-text">27°C</div>';
        case 6:
            return '<div class="weather-text">17°C</div>';
        default:
            return null;
    }
}
const dateHeaderTemplate=(props)=> {
    return (<div><div>{getDateHeaderText(props.date)}</div><div className="date-text" dangerouslySetInnerHTML={{ __html: getWeather(props.date) }}></div></div>);
}
const getTimeString=(value)=> {
    return this.instance.formatDate(value, { skeleton: 'hm' });
}
const eventTemplate=(props)=> {
    return (<div className="weather-text" style={{ backgroundColor:green }}>

</div>);
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
            >
        
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

