import { Box, Button, Flex,  Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {BiSearch} from "react-icons/bi"
import PostType from "./PostType";
import ResponsiveNav from "./ResponsiveNav";
import { LOGOUT } from "../../redux/authReducer/actionType";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visible,setVisible] = useState(false)
  const {user} = useSelector((e) => e.authReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box pl={{base: '16px', md:'59px'}} pr={{base: '16px', md:'59px'}} display={'flex'} justifyContent={'space-between'} alignItems={'center'} h={"80px"} bg={'white'} position="sticky" top="0" left="0" width="100%" zIndex="100" shadow={"md"} w={"100%"}>
      <Box display={'flex'} alignItems={'center'} >
        <Box onClick={() => navigate('/')} display={'flex'} fontSize={{base: '40px', md:'59px'}} fontWeight={'bold'} cursor={'pointer'} >
          <Text color={'#38ebf1'} >S</Text>
          <Text>B</Text>
        </Box>
        <Box display={'flex'} >
          <Input ml={{base: '25px', md: '50px'}}  w={{base: '150px', sm: '200px', md: '250px'}} placeholder="search" />
          <Flex p={'10px'} cursor={'pointer'} borderRightRadius={'8px'} bg={'#d8d8d8'} align={'center'}>
              <BiSearch size={'20px'} />
          </Flex>
        </Box>
      </Box>
{
   user ?
      <Box>       
        {visible ?
        <Box visibility={{base: 'hidden',  lg: 'visible'}} display={'flex'} alignItems={'center'} gap={'50px'} >
          <Flex onClick={() => navigate('/profile')} cursor={'pointer'} alignItems={'center'} gap={'10px'} fontSize={'xl'} fontWeight={'500'} >
            <Box backgroundImage={`url(${user.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGYfwgNgkfNypf_EEM6LvkpO6mNwvY81Lzw&usqp=CAU"})`} backgroundPosition="center"  backgroundSize="cover" w={'45px'} h={'45px'} boxShadow={'md'} borderRadius={'50%'} ></Box>
            <Text>{user.name}</Text>
          </Flex>
          <PostType />
          <Button onClick={() => {dispatch({type: LOGOUT}); navigate('/')}} >Logout</Button>
        </Box> : 
        <Box fontSize={'4xl'} >
            <ResponsiveNav />
        </Box>
        }
      </Box>
      :
      <Box>
        <Button onClick={() => navigate('/signup')} >Create a account</Button>
      </Box>
}
    </Box>
  );
};

export default Navbar;
