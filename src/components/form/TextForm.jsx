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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RxText } from "react-icons/rx";

const TextForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [background,setBackground] = useState('')

  function AddPost(){
    console.log({title,content,background})
  }

  return (
    <>
      <Flex onClick={onOpen} gap={"10px"} alignItems={"center"}>
        <RxText />
        What's on your mind
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What's on your mind</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="1 - 50 characters" />

              <FormLabel mt={"20px"}>Content</FormLabel>
              <Input onChange={(e) => setContent(e.target.value)} placeholder="1 - 300 characters" height={"100px"} type="text" />

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

export default TextForm;
