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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addPost, postUpdate } from "../../redux/appReducer/action";

const ImageForm = ({ type = "addpost", props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState(type === "editPost" ? props.title : "");
  const [content, setContent] = useState(type === "editPost" ? props.content : "");
  const [url, setUrl] = useState(type === "editPost" ? props.imgUrl : "");

  const dispatch = useDispatch();
  const { user } = useSelector((e) => e.authReducer);
  const toast = useToast();

  function AddPost() {
    if (title && content && url) {
      dispatch(
        addPost(
          {
            title: title,
            content,
            user_id: user._id,
            name: user.name,
            imgUrl: url,
            avtarUrl: user.url,
            type: "image",
            template: "none",
            likes: [],
          },
          toast
        )
      );
      onClose();
      setTitle('')
      setContent('')
      setUrl('')
    } else {
      alert("Fill out all input");
    }
  }

  function UpdatePost(){
    if (title && content && url) {
      dispatch(
        postUpdate(
          {
            title: title,
            content: content,
            imgUrl: url,
          },props.id
        )
      );
      onClose();
    } else {
      alert("Fill out all input");
    }
  }

  return (
    <>
      {type === "editPost" ? (
        <Flex onClick={onOpen} gap={"10px"} alignItems={"center"}>
            Edit post
        </Flex>
      ) : (
        <Flex onClick={onOpen} gap={"10px"} alignItems={"center"}>
          <MdOutlineAddPhotoAlternate />
          Upload photo with story
        </Flex>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {type === "editPost" ? "Edit your Post" : "Upload photo with story"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Add image url</FormLabel>
              <Input
                onChange={(e) => setUrl(e.target.value)}
                type="url"
                placeholder="url"
                value={url}
              />

              <FormLabel>Title</FormLabel>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="1 - 50 characters"
                value={title}
              />

              <FormLabel mt={"20px"}>Content</FormLabel>
              <Input
                onChange={(e) => setContent(e.target.value)}
                placeholder="1 - 300 characters"
                height={"100px"}
                type="text"
                value={content}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={type === "editPost" ? UpdatePost : AddPost} colorScheme="twitter">
              {type === "editPost" ?"Update Post"  : "Add Posst"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageForm;
