let Today = new Date();
let dd = Today.getDate();
let mm = Today.getMonth()+1; 
const yy = Today.getFullYear().toString().substr(-2);

if(dd<10) dd=`0${dd}`
if(mm<10) mm=`0${mm}`

const Newdate = `${dd}${mm}${yy}`

export default Newdate