import React,{useState} from 'react';
import Loginpage from './components/loginpage/Loginpage';
import Appcontent from './Appcontent'

const App = () => {

    const [access, setnewaccess] = useState(false)


    if (access) {
        return <Appcontent />
    } else {
        return <Loginpage access={access} setnewaccess={setnewaccess}/>
    }

}

export default App