import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "./ProfileForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LOGOUT } from "../../redux/authReducer/actionType";

const Profile = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || false)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")) || false)
  },[loading])
  
const navigate = useNavigate();
  if (!user) {
    return (
      <Flex justifyContent={"center"} mt={"50px"}>
        <Button onClick={() => navigate("/signup")}>Create your account</Button>
      </Flex>
    );
  }

  if (loading) {
    return (
      <Flex mt={"50px"} justifyContent={"center"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <Box
      backgroundImage="url('https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg')"
      backgroundSize="cover"
      minHeight="100vh"
    >
      <Box
        bg={"#f3f7f6"}
        margin={"auto"}
        w={{ md: "750px" }}
        boxShadow={"2xl"}
        p={{ sm: "25px", md: "60px" }}
        minHeight={"100vh"}
      >
        <Flex justifyContent={"center"} mt={"50px"}>
          <Box
            backgroundImage={`url(${
              user.url ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGYfwgNgkfNypf_EEM6LvkpO6mNwvY81Lzw&usqp=CAU"
            })`}
            backgroundPosition="center"
            backgroundSize="cover"
            w={"100px"}
            h={"100px"}
            boxShadow={"md"}
            borderRadius={"50%"}
          ></Box>
        </Flex>
        <Flex justifyContent={"center"} mt={"10px"}>
          <Text fontSize={"3xl"} fontWeight={"500"}>
            Name :- {user.name}
          </Text>
        </Flex>
        <Flex justifyContent={"center"} mt={"10px"}>
          <Text fontSize={"md"} fontWeight={"500"}>
            Bio - {user.bio}
          </Text>
        </Flex>
        <Flex justifyContent={"center"} mt={"10px"}>
          <Text fontSize={"md"} fontWeight={"500"}>
            Created at - {user.created_at}
          </Text>
        </Flex>
        <Flex justifyContent={"center"} gap={"15px"} mt={"50px"}>
          <ProfileForm setLoading={setLoading} user={user} />
          <Button onClick={() => {
                setLoading(true);
                axios
                  .delete("https://filthy-calf-jumper.cyclic.app/users/"+ user._id,)
                  .then((response) => {
                    setLoading(false);
                    dispatch({type: LOGOUT})
                    navigate('/')
                  })
                  .catch((e) => {
                    setLoading(false);
                    console.log(e);
                  });
          }} >
        Delete my Account</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Profile;
