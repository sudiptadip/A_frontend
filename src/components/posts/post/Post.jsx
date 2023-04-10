import { Box, Text} from "@chakra-ui/react";
import React from "react";
import {FiMoreHorizontal} from 'react-icons/fi'
import {BiLike} from 'react-icons/bi'

const Post = ({imgUrl,title,content,likes,name}) => {
  return (
    <Box boxShadow={'md'} display={{sm:'flex'}} gap={'30px'} p={'20px'} borderRadius={'10px'} margin={'auto'} bg={'white'} mb={'50px'}>
       <Box borderRadius={'20px'} backgroundImage={`url(${imgUrl})`} backgroundPosition="center" margin={'auto'} backgroundSize="cover" w={{sm:'40%'}} h={'260px'}></Box>
       <Box margin={'auto'} >
          <Box display={'flex'} mt={'20px'} gap={'20px'} >
            <Box h={'90px'} fontSize={'2xl'} fontWeight={'500'} textAlign={'center'} display={'flex'} justifyContent={'space-evenly'} color={'#2000ad'} alignItems={'center'} borderRadius={'13px'} w={'70px'} bg={'#33e0ec'} >
                May 08  
            </Box>
            <Box w={'200px'} fontSize={'xl'} fontWeight={500} lineHeight={'1.2'} h={'50px'} >
                {title}
            </Box>
            <Box cursor={'pointer'} >
            < FiMoreHorizontal size={'20px'} /> 
            </Box>
          </Box>
          <Box w={'320px'} mt={'10px'} color={'#c9c9c9'} >
          {content}
          </Box>
          <Box mt={'20px'} display={'flex'} alignItems={'center'} >
            <Box w={'40px'} h={'40px'} borderRadius={'50%'} border={'1px solid black'} ></Box>
            <Text marginLeft={'10px'} fontWeight={'500'} >{name}</Text>
            <Box ml={'120px'} cursor={'pointer'} display={'flex'} gap={'10px'} alignItems={'center'} >
                <BiLike size={'25px'} />
                {likes.length}
            </Box>
          </Box>
       </Box>
    </Box>
  );
};

export default Post;
