import { useState} from 'react'

import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Container from "react-bootstrap/Container"
const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
  backgroundColor: "white",
  fontFamily: "Railway, sans-serif",
  fontWeight: 400,
  
  color:'black'
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black", backgroundColor: "white"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red", backgroundColor: "white"
    },
    "&:hover fieldset": {
      borderColor: "yellow", backgroundColor: "white"
    },
    "&.Mui-focused fieldset": {
      borderColor: "black", backgroundColor: "white"
    },
  },
});
interface Props {
  
  addTag:(tag: string) => void;
}
export default function AddTagTextField({addTag}:Props) {
    const [newTag,setNewTag] = useState("")
    const _handleButtonClick = (event:any) => {
        event.stopPropagation();
    
      }
    const handleSubmit = (event:any) => {
        event.preventDefault();
        addTag(event)

    }
  return (
  <Container>
      <CustomTextField
      onClick={_handleButtonClick}
       placeholder="Add a tag"
       id="add-tag-text"
        value={newTag}
        onChange={(e)=>setNewTag(e.target.value)}
        variant="standard"
        sx={{ width: "20%", pointerEvents: 'auto', textAlign: "center", marginTop: 1 }}
        onKeyPress={(ev) => {
            console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key === "Enter") {
                addTag(newTag);
                setNewTag("")
              ev.preventDefault();
            }
          }}
      />
 </Container>
  );
}
