import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {AiTwotoneLike} from 'react-icons/ai'
import { GetTextTemplate } from './GetTextTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { likePost } from '../../../redux/appReducer/action'
import PostEditDelete from './PostEditDelete'

const TextPost = ({title,content,name,avtarUrl,template,likes,_id,user_id,type}) => {
    const [background,setBackground] = useState({tc: "", cc: "", url: "",})

    const [like,setLike] = useState(false)
    const {data} = useSelector((e) => e.appReducer)

    const dispatch = useDispatch()
    useEffect(() => {
       let check = likes.filter((e) => e === user_id)
       if(check.length !== 0){
        setLike(true)
       }else{
        setLike(false)
       }
    },[likes,user_id,data])

    useState(() => {
      console.log(template)
      GetTextTemplate(template, setBackground)
    },[data])

    function LikePosts(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
          dispatch(likePost(_id))
        }else{
          alert("create your account")
        }
      }

  return (
    <Box p={'30px'} backgroundImage={`url(${background.url})`} backgroundSize="cover" boxShadow={'md'} w={'70%'} margin={'auto'} borderRadius={'10px'} mb={'50px'} >
        <Flex justifyContent={'space-between'} >
          <Text col or={background.tc} fontSize={'3xl'} fontWeight={'600'} >
            {title}
          </Text>
          <PostEditDelete type={type} template={template} title={title} content={content} id={_id} />
        </Flex>
        <Text fontWeight={'500'} color={background.cc} mt={'40px'} fontSize={'xl'}  >
            {content}
        </Text>
        <Box pl={{sm:'20px'}} pr={{sm:'20px'}} mt={'20px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
            <Flex alignItems={'center'} >
            <Box boxShadow={'md'} w={'40px'} h={'40px'} borderRadius={'50%'} backgroundImage={`url(${avtarUrl || "https://i.pinimg.com/originals/99/a8/3e/99a83e22b4c160d36e1697b4139c803f.jpg"})`} backgroundPosition="center" backgroundSize="cover"  ></Box>
            <Text marginLeft={'10px'} fontWeight={'500'} >{name}</Text>
            </Flex>
            <Box onClick={LikePosts} cursor={'pointer'} display={'flex'} gap={'10px'} alignItems={'center'} >
            <AiTwotoneLike color={like ? "blue":"black"} size={'25px'} />
                <Text >{likes.length}</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default TextPost

// https://static.vecteezy.com/system/resources/thumbnails/006/852/804/small/abstract-blue-background-simple-design-for-your-website-free-vector.jpg
// #B2A4FF white

// https://img.freepik.com/free-vector/geometric-background_91008-301.jpg
// #2D2727 #00235B

// https://static.vecteezy.com/system/resources/previews/006/040/755/original/post-social-media-background-simple-purple-colour-free-vector.jpg
// black #C9EEFF

// https://png.pngtree.com/thumb_back/fh260/background/20211112/pngtree-aesthetic-background-instagram-feed-post-image_915816.png
// #060047 #D14D72