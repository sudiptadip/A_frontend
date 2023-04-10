import {
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { GrFormAdd } from "react-icons/gr";
import TextForm from "../form/TextForm";
import ImageForm from "../form/ImageForm";

const PostType = () => {
  return (
    <Menu>
      <MenuButton>
        <ButtonGroup h={"100%"} size="sm" isAttached variant="outline">
          <IconButton aria-label="Add to friends" icon={<GrFormAdd />} />
          <Button>Create a new Post</Button>
        </ButtonGroup>
      </MenuButton>
      <MenuList onClick={(e) => console.log(e.target.value)} >
        <MenuItem value={'sudipta'} >
          <TextForm />
        </MenuItem>
        <MenuItem>
          <ImageForm />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PostType;
