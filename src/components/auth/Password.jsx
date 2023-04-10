import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { BiHide, BiShowAlt } from 'react-icons/bi';

function Password({placeholderText,setPassword}) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
      <InputGroup  size='md'>
        <Input
          type={show ? 'text' : 'password'}
          placeholder={placeholderText}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement  width='4.5rem'>
          <Box  cursor={'pointer'} onClick={handleClick}>
            {show ? <BiHide size={'20px'} /> : <BiShowAlt size={'20px'} />}
          </Box>
        </InputRightElement>
      </InputGroup>
    )
  }

export default Password