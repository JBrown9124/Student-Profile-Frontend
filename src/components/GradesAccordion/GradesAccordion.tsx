import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

const GradesAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  overflow: "hidden",
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": { backgroundColor: "white", borderBottom: 0 },
  "&:before": { backgroundColor: "white", display: "none" },
}));

export default GradesAccordion;
