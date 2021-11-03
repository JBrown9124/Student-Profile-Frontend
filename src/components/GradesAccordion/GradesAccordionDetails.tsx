import { styled } from "@mui/material/styles";

import MuiAccordionDetails from "@mui/material/AccordionDetails";

const GradesAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  overflow: "hidden",
  backgroundColor: "white",
}));

export default GradesAccordionDetails;
