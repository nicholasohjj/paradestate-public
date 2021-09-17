// Show Hide Password
import React, {useState} from "react";
import { Text, Div, Input, Button, Icon, Image } from "atomize";
import Logo from './Parade State-logos_black.png'



const Loginpage = ({access,setnewaccess}) => {
    const [showPassword, setshowPassword] = useState(false)
    const [pass, setnewpass] = useState('')

    const Handleshowpassword = () => {
        setshowPassword(!showPassword)
    }

    const Handlelogin = (event) => {
        setnewpass(event.target.value)
    }

    if (pass==='sigparadestate7') {
        setnewaccess(!access)
    } 
    return (
        <Div align="center" p={{ x: { xs: '1rem', md: '4rem' }, y: { xs: '2rem', md: '0rem' }}}
        
>
            <Text p={{ xs: '1rem', md: '4rem' }}
            textAlign='center'
            textWeight="600"
            textSize="display1"
            fontFamily="Helvetica"
            pos="relative"
            >
              Login
            </Text>
            <Image src={Logo}
             bgSize="cover"
             bgPos="center"
             h="20rem"
             w="20rem" />

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
                If you are not authorised to use this system, please do not attempt to login.</Text>
        </Div>

      );
}

export default Loginpage