import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {BiLike} from 'react-icons/bi'

const TextPost = ({background = 'pink.200'}) => {
  return (
    <Box p={'30px'} backgroundImage="url('https://png.pngtree.com/thumb_back/fh260/background/20211112/pngtree-aesthetic-background-instagram-feed-post-image_915816.png')" backgroundSize="cover" boxShadow={'md'} w={'70%'} margin={'auto'} borderRadius={'10px'}>
        <Text color={'#060047'} fontSize={'3xl'} fontWeight={'600'} >
            The quick brown fox jump over the lazy dog
        </Text>
        <Text fontWeight={'500'} color={'#D14D72'} mt={'40px'} fontSize={'xl'}  >
            The quick brown fox jump over the lazy dog The quick brown fox jump over the lazy dog The quick brown fox jump over the lazy dog The quick brown fox jump over the lazy dog
        </Text>
        <Box pl={{sm:'20px'}} pr={{sm:'20px'}} mt={'20px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
            <Flex alignItems={'center'} >
            <Box w={'40px'} h={'40px'} borderRadius={'50%'} border={'1px solid black'} ></Box>
            <Text marginLeft={'10px'} fontWeight={'500'} >Sudipta</Text>
            </Flex>
            <Box cursor={'pointer'} display={'flex'} gap={'10px'} alignItems={'center'} >
                <BiLike size={'25px'}  />
                <Text >0</Text>
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