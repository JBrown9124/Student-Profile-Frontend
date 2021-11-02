import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha, styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  });
interface Props{
searchItem: string;
handleSearchItem:(searchItem:string) => void;
}
export default function ListTextField({searchItem, handleSearchItem}:Props) {
  return (
   
      
    <div style={{textAlign: "center", marginTop:7}}>
    <CustomTextField value={searchItem} onChange={(e)=>handleSearchItem(e.target.value)}id="standard-basic" color="warning" variant="standard" sx={{width:"98%"}} placeholder="Search by name"/></div>
   
  );
}