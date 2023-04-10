import { Box, Text} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {FiMoreHorizontal} from 'react-icons/fi'
import {AiTwotoneLike} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../../redux/appReducer/action";
import PostEditDelete from "./PostEditDelete";

const Post = ({imgUrl,title,content,likes,name,avtarUrl,_id,user_id,type}) => {
  const dispatch = useDispatch()
  const [like,setLike] = useState(false)
  const {data} = useSelector((e) => e.appReducer)
  
  useEffect(() => {
     let check = likes.filter((e) => e === user_id)
     if(check.length !== 0){
      setLike(true)
     }else{
      setLike(false)
     }
  },[likes,user_id,data])
  
  function LikePosts(){
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      dispatch(likePost(_id))
    }else{
      alert("create your account")
    }
  }
  return (
    <Box boxShadow={'md'} display={{sm:'flex'}} gap={'30px'} p={'20px'} borderRadius={'10px'} margin={'auto'} bg={'white'} mb={'50px'}>
       <Box borderRadius={'20px'} backgroundImage={`url(${imgUrl})`} backgroundPosition="center" margin={'auto'} backgroundSize="cover" w={{sm:'40%'}} h={'260px'}></Box>
       <Box margin={'auto'} >
          <Box display={'flex'} mt={'20px'} gap={'20px'} >
            <Box h={'90px'} fontSize={'xl'} fontWeight={'500'} textAlign={'center'} display={'flex'} justifyContent={'space-evenly'} color={'#2000ad'} alignItems={'center'} borderRadius={'13px'} w={'70px'} bg={'#33e0ec'} >
                April 2023
            </Box>
            <Box w={'200px'} fontSize={'xl'} fontWeight={500} lineHeight={'1.2'} h={'50px'} >
                {title}
            </Box>
            <Box cursor={'pointer'} >
            <PostEditDelete type={type} imgUrl={imgUrl} title={title} content={content} id={_id} />
            </Box>
          </Box>
          <Box w={'320px'} mt={'10px'} color={'#c9c9c9'} >
          {content}
          </Box>
          <Box mt={'20px'} display={'flex'} alignItems={'center'} >
            <Box boxShadow={'md'} w={'40px'} h={'40px'} borderRadius={'50%'} backgroundImage={`url(${avtarUrl || "https://i.pinimg.com/originals/99/a8/3e/99a83e22b4c160d36e1697b4139c803f.jpg"})`} backgroundPosition="center" backgroundSize="cover"  ></Box>
            <Text marginLeft={'10px'} fontWeight={'500'} >{name}</Text>
            <Box onClick={LikePosts} ml={'120px'} cursor={'pointer'} display={'flex'} gap={'10px'} alignItems={'center'} >
            <AiTwotoneLike color={like ? "blue":"black"} size={'25px'} />
                {likes.length}
            </Box>
          </Box>
       </Box>
    </Box>
  );
};

export default Post;
