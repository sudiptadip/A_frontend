import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TotalUser from "./TotalUser";
import MostActiveUser from "./MostActiveUser";

const Admin = () => {
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
        minHeight={"100vh"}
        boxShadow={"2xl"}
        p={{ sm: "25px", md: "60px" }}
      >
        <Text fontSize={'3xl'} fontWeight={'600'} mt={'20px'} mb='20px' textAlign={'center'} >Analytics</Text>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Total No Of User
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <TotalUser />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Most Active User
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MostActiveUser />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Admin;
