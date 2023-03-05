import React, { useEffect, useState } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"
import { useRecoilState, useSetRecoilState } from 'recoil';
import { dataState } from '../../atoms/dataAtom';


const Search = ({ text, allowMaxWidth }) => {

  const [img, setImg] = useState("");

  const setDataState = useSetRecoilState(dataState);


  const searchImages = (e) => {
    setImg(e.target.value);
  }

  useEffect(() => {
    if (img != "")
      fetchSearchData();
  }, [img])


  const fetchSearchData = async () => {
    const API_URL = `https://api.unsplash.com/search/photos?query=${img}&per_page=20&client_id=${import.meta.env.VITE_ACCESS_KEY}`;
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    setDataState((prev) => ({
      ...prev,
      images: data.results,
    }));
  }

  return (
    <div className={` flex-grow mx-2 ${allowMaxWidth ? ' hidden md:flex md:max-w-[350px]' : ''} `}>
      <InputGroup className='w-full'>
        <InputLeftElement
          pointerEvents="none"
          children={
            <SearchIcon color="100" className=' text-secondary' />
          }
        />
        <Input
          placeholder={`${text}...`}
          fontSize="11pt"
          background="white"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            border: "1px solid",
            borderColor: 'cyan.400'
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "cyan.400"
          }}
          className=' font-dynapuff'
          onChange={(e) => searchImages(e)}
        />
      </InputGroup>
    </div>
  )
}

export default Search