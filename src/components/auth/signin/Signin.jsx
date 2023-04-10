import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Password from "../Password";

const Signin = () => {
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const handelSubmit = () => {
    console.log(password,email)
  }
  return (
    <>
      <FormControl boxShadow={{sm:'xl'}} borderRadius={'10px'} margin={'auto'} mt={'40px'} w={{sm:'450px'}} p={'40px'} border={{sm:'1px solid black'}}  >
        <Text fontSize={'35px'} textAlign={'center'} fontWeight={'500'} >Signin</Text>

        <FormLabel mt={'20px'} >Email address</FormLabel>
        <Input placeholder="email" onClick={(e) => setEmail(e.target.value)} type="email" />

        <FormLabel mt={'20px'}>Password</FormLabel>
        <Password placeholderText={"password"} setPassword={setPassword}  />

        <Button onClick={handelSubmit} mt={'20px'} w={'100%'} colorScheme='twitter' >Submit</Button>
        <Link to={'/signup'} >Create a new account</Link>
        <Text mb={'40px'}></Text>
      </FormControl>
    </>
  );
};

export default Signin;
