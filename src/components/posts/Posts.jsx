import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Post from "./post/Post";
import TextPost from "./post/TextPost";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/appReducer/action";

const Posts = () => {
  const {data} = useSelector((e) => e.appReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])

  if(data.length === 0){
    return <Flex mt={'50px'} justifyContent={'center'}>
              <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
            </Flex>
  }
  return (
    <Box backgroundImage="url('https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg')" backgroundSize="cover" minHeight="100vh">
        <Box bg={'#f3f7f6'} margin={'auto'} w={{md: "750px"}}  boxShadow={'2xl'} p={{sm:'25px', md: "60px"}}>
            {
                data.map((e) => (
                  e.type === "text"? <TextPost {...e} /> : <Post {...e} />
                ))
            } 
        </Box>
    </Box>
  );
};

export default Posts;
