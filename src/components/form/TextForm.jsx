import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  Tabs,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RxText } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addPost, postUpdate } from "../../redux/appReducer/action";

const TextForm = ({ type = "addpost", props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState(type === "editPost" ? props.title : "");
  const [content, setContent] = useState(type === "editPost" ? props.content : "");
  const [background,setBackground] = useState(type === "editPost" ? props.template : 'one')
  const dispatch = useDispatch()
  const {user} = useSelector((e) => e.authReducer)
  const toast = useToast()

  function AddPost(){
    if(title && content && background){
      dispatch(addPost({
        title: title,
        content: content,
        user_id: user._id,  
        name: user.name,
        imgUrl: '',
        avtarUrl: user.url,
        type: 'text',
        template: background,
        likes: [],
      },toast))
      onClose();
      setTitle('')
      setContent('')
      onClose()
    }else{
      alert('Fill out all input')
    }
  }

  function UpdatePost(){
    if (title && content) {
      dispatch(
        postUpdate(
          {
            title: title,
            content: content,
            template: background,
          },props.id
        )
      );
      onClose();
      setTitle('')
      setContent('')
    } else {
      alert("Fill out all input");
    }
  }

  return (
    <>
      <Flex onClick={onOpen} gap={"10px"} alignItems={"center"}>
        {type === "editPost" ? "Edit post" : <><RxText />What's on your mind</>}
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{type === "editPost" ? "Edit post" : "What's on your mind"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="1 - 50 characters" />

              <FormLabel mt={"20px"}>Content</FormLabel>
              <Input value={content} onChange={(e) => setContent(e.target.value)} placeholder="1 - 300 characters" height={"100px"} type="text" />

{ type !== "editPost" ?
           <>
             <FormLabel mt={"20px"}>Select Template</FormLabel>
              <Grid templateColumns='repeat(1, 1fr)' gap={6} w='100%' h={'150px'} >
                <Tabs variant="soft-rounded" colorScheme="green">
                  <TabList onClick={(e) => setBackground(e.target.value)} >
                    <Tab value={'one'} ml={'10px'}>One</Tab>
                    <Tab value={'two'} ml={'20px'} >Two</Tab>
                    <Tab value={'three'} ml={'18px'}>Three</Tab>
                    <Tab value={'four'} ml={'17px'}>Four</Tab>
                  </TabList>
                </Tabs>
                <Flex gap={'5px'} >
                    <Box borderRadius={'10px'} w={'80px'} h={'80px'} border={'1px solid black'} backgroundImage="url('https://static.vecteezy.com/system/resources/thumbnails/006/852/804/small/abstract-blue-background-simple-design-for-your-website-free-vector.jpg')" backgroundSize="cover" ></Box>
                    <Box borderRadius={'10px'} w={'80px'} h={'80px'} border={'1px solid black'} backgroundImage="url('https://img.freepik.com/free-vector/geometric-background_91008-301.jpg')" backgroundSize="cover" ></Box>
                    <Box borderRadius={'10px'} w={'80px'} h={'80px'} border={'1px solid black'} backgroundImage="url('https://static.vecteezy.com/system/resources/previews/006/040/755/original/post-social-media-background-simple-purple-colour-free-vector.jpg')" backgroundSize="cover" ></Box>
                    <Box borderRadius={'10px'} w={'80px'} h={'80px'} border={'1px solid black'} backgroundImage="url('https://png.pngtree.com/thumb_back/fh260/background/20211112/pngtree-aesthetic-background-instagram-feed-post-image_915816.png')" backgroundSize="cover" ></Box>
                </Flex>
              </Grid>
              </>
              : <></>
              }
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={type === "editPost" ? UpdatePost : AddPost} colorScheme="twitter">{type === "editPost" ? "Update Post" : "Add Posst"}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TextForm;
