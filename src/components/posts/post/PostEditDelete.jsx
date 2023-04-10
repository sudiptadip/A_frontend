import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import ImageForm from "../../form/ImageForm";
import TextForm from "../../form/TextForm";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/appReducer/action";

const PostEditDelete = (props) => {
  const dispatch = useDispatch()
  
  function DeletePost(e){
    if(e.target.value === "delete post"){
      dispatch(deletePost(props.id))
    }
  }
  return (
    <Menu>
      <MenuButton>
      < FiMoreHorizontal size={'20px'} /> 
      </MenuButton>
      <MenuList onClick={DeletePost} >
        <MenuItem value={'edit post'} >
            {props.type === "text" ? <TextForm type={'editPost'} props={props} />  : <ImageForm type={'editPost'} props={props} />}
        </MenuItem>
        <MenuItem value={'delete post'} >Delete post</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PostEditDelete;
