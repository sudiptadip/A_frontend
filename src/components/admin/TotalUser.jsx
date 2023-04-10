import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TotalUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://courageous-kerchief-pig.cyclic.app/analytics/users")
      .then((e) => setUsers(e.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box  mt={"30px"} margin={"auto"}>
      <Text textAlign={"center"} mb={'40px'} fontWeight={500} fontSize={"2xl"}>
        {" "}
        Total no of user preasent {users.length}{" "}
      </Text>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>name</Th>
              <Th>email</Th>
              <Th>created_at</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
                users.map((e) => (
                <Tr>
                    <Td>{e.name}</Td>
                    <Td>{e.email}</Td>
                    <Td>{e.created_at.split('T')[0]}</Td>
                </Tr>
                ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TotalUser;
