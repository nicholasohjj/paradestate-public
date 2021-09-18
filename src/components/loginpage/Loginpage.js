// Show Hide Password
import React, {useState} from "react";
import { Text, Div, Input, Button, Icon} from "atomize";



const Loginpage = ({access,setnewaccess}) => {
    const [showPassword, setshowPassword] = useState(false)
    const [pass, setnewpass] = useState('')

    const Handleshowpassword = () => {
        setshowPassword(!showPassword)
    }

    const Handlelogin = (event) => {
        setnewpass(event.target.value)
    }

    if (pass==='paradestatepublic') {
        setnewaccess(!access)
    } 
    return (
        <Div align="center" p={{ x: { xs: '1rem', md: '4rem' }, y: { xs: '2rem', md: '0rem' }}}
        
>
            <Text p={{ xs: '1rem', md: '4rem' }}
            textAlign='center'
            textWeight="500"
            textSize="heading"
            fontFamily="Helvetica"
            pos="relative"
            >
              Login (Public Version)
            </Text>
            <Div
          bgImg="https://i.ibb.co/cthGK82/Parade-State-logos-black.png://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          bgSize="cover"
          bgPos="center"
          h="10rem"
        />

                <Input
                onChange = {Handlelogin}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          suffix={
            <Button
              pos="absolute"
              onClick={Handleshowpassword}
              bg="transparent"
              w="3rem"
              top="0"
              right="0"
              rounded={{ r: "md" }}
            >
              <Icon
                name={showPassword ? "EyeSolid" : "Eye"}
                color={showPassword ? "danger800" : "success800"}
                size="16px"
              />
            </Button>
          }
        />

<Text p={{ xs: '1rem', md: '4rem' }}
            textAlign='center'
            textWeight="600"
            textSize="tiny"
            fontFamily="Helvetica"
            pos="relative"



            >
                If you are not authorised to use this system, please do not attempt to login. </Text>
                <Text textAlign='center'
            textWeight="600"
            textSize="tiny"
            fontFamily="Helvetica"
            pos="relative">Password: paradestatepublic</Text>
        </Div>
        

      );
}

export default Loginpage