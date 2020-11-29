import React from 'react';
import './Calendar.css';

function Calendar() {
    return (
        <div className='Calendar'>
            <h1>Calendário</h1>
            <br></br>
            <iframe src="https://calendar.google.com/calendar/embed?src=poalabifrs%40gmail.com&amp;ctz=America%2FSao_Paulo" 
            title='video' width="600" height="400" frameborder="0" scrolling="no">
            </iframe>
            <br></br>    
        </div>
    );
}

export default Calendar;
