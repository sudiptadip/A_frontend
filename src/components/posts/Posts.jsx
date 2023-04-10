import { Box } from "@chakra-ui/react";
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
console.log(data)
  return (
    <Box backgroundImage="url('https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg')" backgroundSize="cover" minHeight="100vh">
        <Box bg={'#f3f7f6'} margin={'auto'} w={{md: "750px"}}  boxShadow={'2xl'} p={{sm:'25px', md: "60px"}}>
            {/* <Post img={'https://img.freepik.com/premium-photo/little-girl-party-hat-blowing-heart-shape-glitter-enjoying-birthday-celebrating-event_416530-32627.jpg'} />
            
            <Post img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZP2bG_bdvBRxWM2wBl-AweRT8JUcbGQFGtvL10Zvwh-cqdmNBpNeUCTV4KfXbGBWLyqI&usqp=CAU'} />

            <TextPost /> */}

            {
                data.map((e) => (
                  e.type && <Post {...e} />
                ))
            }  
        </Box>
    </Box>
  );
};

export default Posts;
