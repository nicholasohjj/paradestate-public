import React, {useState} from "react";
import './loginpage.css';

const Loginpage = ({access,setnewaccess}) => {
    const [pass, setnewpass] = useState('')


    const Handlelogin = (event) => {
        setnewpass(event.target.value)
    }

    if (pass==='sigparadestate') {
        setnewaccess(!access)
    } 

    return (
        <>
        <div class="main">
    <p class="sign" align="center">Sign in</p>
    <form class="form1" />
          <input class="pass" type="password" align="center" placeholder="Password" onChange={Handlelogin}/>
          </div>
        </>
    )
}

export default Loginpage