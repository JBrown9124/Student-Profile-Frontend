import { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Container from "react-bootstrap/Container";
const CustomTextField = styled(TextField)({
  "& .MuiInput-underline:before": {
    borderBottomColor: " rgba(191, 189, 206, 0.986)",
  },
  "& :focus": {
    backgroundColor: "white",
  },
  "&$focused": {
    backgroundColor: "white",
  },
  "& label.Mui-focused": {
    backgroundColor: "white",

    "& :focus": {
      backgroundColor: "white",
    },
    "&$focused": {
      backgroundColor: "white",
    },
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
    backgroundColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
      backgroundColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
      backgroundColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      backgroundColor: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: " rgba(191, 189, 206, 0.986)",
    },
  },
});
interface Props {
  addTag: (tag: string) => void;
}
export default function AddTagTextField({ addTag }: Props) {
  const [newTag, setNewTag] = useState("");
  const _handleButtonClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <Container>
      <CustomTextField
        onClick={_handleButtonClick}
        placeholder="Add a tag"
        id="add-tag-text"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        variant="standard"
        sx={{
          width: "10vw",
          pointerEvents: "auto",
          textAlign: "center",
          marginTop: 1,
        }}
        onKeyPress={(ev) => {
          console.log(`Pressed keyCode ${ev.key}`);
          if (ev.key === "Enter") {
            addTag(newTag);
            setNewTag("");
            ev.preventDefault();
          }
        }}
      />
    </Container>
  );
}
