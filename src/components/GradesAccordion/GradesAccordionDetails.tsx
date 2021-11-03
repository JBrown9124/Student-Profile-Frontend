import { styled } from "@mui/material/styles";

import MuiAccordionDetails from "@mui/material/AccordionDetails";

const GradesAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  backgroundColor: "white",
  padding: theme.spacing(2),
}));

export default GradesAccordionDetails;
