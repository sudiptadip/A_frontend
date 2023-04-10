import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/appReducer/action";

  
  const ImageForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [url,setUrl] = useState('')
    const dispatch = useDispatch()
    const {user} = useSelector((e) => e.authReducer)

    function AddPost(){
     if(title && content && url){
        dispatch(addPost({
          title: title,
          content,
          user_id: user._id,  
          name: user.name,
          imgUrl: url,
          avtarUrl: user.url,
          type: 'image',
          template: 'none',
          likes: [],
        }))
     }else{
      alert('no')
     }
    }

    return (
      <>
        <Flex onClick={onOpen} gap={"10px"} alignItems={"center"}>
          <MdOutlineAddPhotoAlternate />
          Upload photo with story
        </Flex>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload photo with story</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl>
            <FormLabel>Add image url</FormLabel>
              <Input onChange={(e) => setUrl(e.target.value)} type="url" placeholder="url" />

              <FormLabel>Title</FormLabel>
              <Input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="1 - 50 characters" />

              <FormLabel mt={"20px"}>Content</FormLabel>
              <Input onChange={(e) => setContent(e.target.value)} placeholder="1 - 300 characters" height={"100px"} type="text" />

            </FormControl>
            </ModalBody>
            <ModalFooter>
            <Button variant="ghost" colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={AddPost} colorScheme="twitter">Add Posst</Button>
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ImageForm;
  