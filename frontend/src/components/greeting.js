import React from "react";


let Today = new Date();
let dd = Today.getDate();
let mm = Today.getMonth()+1; 
const yy = Today.getFullYear().toString().substr(-2);
let hours = Today.getHours()
let minutes = Today.getMinutes()
if(dd<10) dd=`0${dd}`
if(mm<10) mm=`0${mm}`
if(hours<10) hours=`0${hours}`
if(minutes<10) minutes=`0${minutes}`
const CurrentDate = `${mm}${dd}${yy}`
const CurrentTime = `${hours}${minutes}`

let greeting = ''
if (CurrentTime<1200 && CurrentTime>= '0000') {
    greeting = 'morning'
} else if (CurrentTime>1600) {
    greeting = 'evening'
} else {
    greeting = 'afternoon'
}

const Greeting = () => {
    return (
        <>
        <p>Good {greeting} Commanders , this is the strength for Signal Company as of {CurrentTime} on {CurrentDate}.</p>
        </>

    )
}

export default Greeting