import React from "react";
import Newdate from '../newdate'

let Today = new Date();
let hours = Today.getHours()
let minutes = Today.getMinutes()

if(hours<10) hours=`0${hours}`
if(minutes<10) minutes=`0${minutes}`
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
        <p>Good {greeting} Commanders, this is the strength for Signal Company as of {CurrentTime} on {Newdate}.</p>
        </>

    )
}

export default Greeting