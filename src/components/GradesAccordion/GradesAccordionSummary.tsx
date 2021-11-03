import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

const GradesAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  pointerEvents: "none",
  backgroundColor: "white",
  overflow: "hidden",
  "&.MuiAccordionSummary-focused": {
    backgroundColor: "white!important",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
    backgroundColor: "white",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    backgroundColor: "white",
  },
}));
export default GradesAccordionSummary;
