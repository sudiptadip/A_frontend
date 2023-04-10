import { Box, Button, CircularProgress, Flex, FormControl, FormLabel, Input, Spinner, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../../redux/authReducer/action";

const Signup = () => {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [bio,setBio] = useState('')
  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()

  const {isLoading, isUser} = useSelector((e) => e.authReducer)

  const handelSubmit = () => {
    if(email && name){
      dispatch(createAccount({email,name,bio}))
    }else{
      toast({
        position: 'top',
        description: "Fill out the form",
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    if(isUser){
      toast({
        position: 'top',
        description: "Successfully account Created",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      navigate('/')
    }
  },[isUser,toast,navigate])

  if(isLoading){
    return <Flex mt={'50px'} justifyContent={'center'}>
              <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
            </Flex>
  }
  return (
    <>
      <FormControl boxShadow={'xl'} borderRadius={'10px'} margin={'auto'} mt={'40px'} w={{sm:'450px'}} p={'40px'} border={{sm:'1px solid black'}}  >
        <Text fontSize={'35px'} textAlign={'center'} fontWeight={'500'} >Create a new account</Text>
        <FormLabel mt={'30px'} >Full Name</FormLabel>
        <Input onChange={(e) => setName(e.target.value)} type="text" />

        <FormLabel  mt={'20px'} >Email address</FormLabel>
        <Input onChange={(e) => setEmail(e.target.value)} type="email" />

        <FormLabel mt={'20px'}>Bio</FormLabel>
        <Input onChange={(e) => setBio(e.target.value)} type="text" placeholder="bio" />

        <Button onClick={handelSubmit} mt={'20px'} w={'100%'} colorScheme='twitter' >Submit</Button>
        <Link style={{backgroundColor: 'white'}} to={'/signin'} >Already have an acount</Link>
      </FormControl>
    </>
  );
};

export default Signup;
