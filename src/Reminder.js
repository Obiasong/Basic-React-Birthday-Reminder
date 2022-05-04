import React, {useState} from 'react';
import { birthdays } from './birthdays';
//CSS
import './index.css';

const Reminder = () => {
    const [bdayReminders, setReminders] = useState(birthdays);
    const numbdays = bdayReminders.length;
    if(numbdays){
        return (
        <section className='article'>
            <h2 style={{textAlign: 'left', paddingLeft: '7%'}}>{numbdays} birthdays today</h2>
            {
            bdayReminders.map(rem =>{
                return <Birthday key={rem.id} {...rem}></Birthday>
            })
            }
            <div style={{paddingTop: '10%'}}>
                <button className='btn' onClick={()=>setReminders(0)}>Clear All Reminders</button>
            </div>
        </section>
        )
    }else{
        return (
            <section className='article'>
                You have no birthday reminders today
            </section>
        )
    }

}

const Birthday = (rems) => {
    const {name, age, gender, img} = rems
    return (<div className='bdaySection'>
        <div style={{float: 'left'}}>
            <img src={img}/>
        </div>
        <div><>
            <h4>{name}</h4>
            <span>{age} years </span>
            </>
        </div>
        </div>
    );
}
export default Reminder