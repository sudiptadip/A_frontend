import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React, { useRef } from 'react'
import PostType from "./PostType"
import {AiOutlineMenu} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux"
import { LOGOUT } from "../../redux/authReducer/actionType"

function ResponsiveNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {user} = useSelector((e)=>e.authReducer)
    const btnRef = useRef()
    const dispatch = useDispatch()
    return (
      <>
        <AiOutlineMenu ref={btnRef}  onClick={onOpen} style={{cursor: 'pointer'}} />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
               <Box mt={'50px'} cursor={'pointer'}  gap={'10px'} fontSize={'xl'} fontWeight={'500'} >
                 <Box margin={'auto'} w={'80px'} h={'80px'} border={'1px solid black'} borderRadius={'50%'} ></Box>
               </Box>
                 <Text textAlign={'center'} mt={'10px'} >{user.name}</Text>
            </DrawerHeader>
            <DrawerBody margin={'auto'} >
              <PostType />
              <Box>
              <Button onClick={() => dispatch({type: LOGOUT})} >Logout</Button>
              </Box>
            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default ResponsiveNav