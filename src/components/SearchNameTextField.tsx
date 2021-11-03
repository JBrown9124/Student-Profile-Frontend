import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
    backgroundColor: "white",
    fontSize: "1.4em!important",
    
  },
  "& input::placeholder": {
    fontSize: "1.4em!important",
    color: "black!important",
    fontFamily:"Raleway, sans-serif"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiInput-underline:before": {
    
    borderBottomColor: " rgba(191, 189, 206, 0.986)",
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
interface Props {
  handleSearchItem: (searchItem: string) => void;
  
}
export default function SearchNameTextField({ handleSearchItem }: Props) {
  const [newSearchItem, setNewSearchItem] = useState("");
 
  useEffect(() =>{
    const change = setTimeout(() => handleSearchItem(newSearchItem),100)
   return ()=> clearTimeout(change)
  },[newSearchItem])
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <CustomTextField
        value={newSearchItem}
        onChange={(e) => setNewSearchItem(e.target.value)}
        id="name-search"
        variant="standard"
        
        sx={{ width: "98%" }}
        placeholder="Search by name"
      />
    </div>
  );
}
