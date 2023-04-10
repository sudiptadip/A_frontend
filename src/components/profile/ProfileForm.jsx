import {
  Button,
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
import axios from "axios";

import React, { useEffect, useState } from "react";

function ProfileForm({ user, setLoading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (user) {
      setName(user.name);
      setBio(user.bio);
      setUrl(user.url);
    }
  }, [user]);

  function updateUser() {
    setLoading(true);
    axios
      .patch("https://filthy-calf-jumper.cyclic.app/users/"+ user._id,{name,bio,url})
      .then((response) => {
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }

  return (
    <>
      <Button onClick={onOpen}>Update my Account</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel mt={"30px"}>Full Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />

              <FormLabel mt={"30px"}>Profile picture url</FormLabel>
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
              />

              <FormLabel mt={"20px"}>Bio</FormLabel>
              <Input
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                type="text"
                placeholder="bio"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="twitter" onClick={updateUser}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfileForm;
