import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
    backgroundColor: "white",
    fontFamily: "Railway, sans-serif",
    fontWeight: 400,
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
interface Props {
  searchItem: string;
  handleSearchItem: (searchItem: string) => void;
  placeholder: string;
}
export default function SearchNameTextField({
  searchItem,
  handleSearchItem,
  placeholder,
}: Props) {
  return (
    <div style={{ textAlign: "center", marginTop: 15 }}>
      <CustomTextField
        value={searchItem}
        onChange={(e) => handleSearchItem(e.target.value)}
        id="name-search"
        variant="standard"
        sx={{ width: "98%" }}
        placeholder={placeholder}
      />
    </div>
  );
}
