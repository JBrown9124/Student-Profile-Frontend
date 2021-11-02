import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Scrollbars } from "react-custom-scrollbars";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import NameSearch from "../hooks/NameSearch";
import Container from "react-bootstrap/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Checkbox from "@mui/material/Checkbox";
import secondaryText from "./SecondaryText";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ListTextField from "./ListTextField";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


// const Accordion = styled((props: AccordionProps) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));



interface StudentData {
  studentData: Array<{
    city: string;
    company: string;
    email: string;
    firstName: string;
    grades: Array<number>;
    id: string;
    lastName: string;
    pic: string;
    skill: string;
  }>;
}

export default function StudentList({ studentData }: StudentData) {
  const [searchItem, setSearchItem] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Student[]>([]);
  interface Student {
    city: string;
    company: string;
    email: string;
    firstName: string;
    grades: Array<number>;
    id: string;
    lastName: string;
    pic: string;
    skill: string;
  }
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  useEffect(() => {
    const results: Student[] = studentData.filter(
      (student: any) =>
        student.firstName.toLowerCase().includes(searchItem.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchItem.toLowerCase()) ||
        `${student.firstName}${" "}${student.lastName}`
          .toLowerCase()
          .includes(searchItem.toLowerCase())
    );
    setSearchResults(results);
  }, [searchItem, studentData, studentData.length]);

  return (
    <>
      <List
        disablePadding
        sx={{
          borderRadius: "15px",
          borderWidth: "thin",
          borderColor: "rgb(204, 204, 204)",
          borderStyle: "solid",
          justifyContent: "center",

          width: "100%",
          maxWidth: 1000,
          bgcolor: "background.paper",
          height: "100%",
          overflow: "auto",
          maxHeight: 625,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",

          "& ul": { padding: 0 },
        }}
      >
        <Scrollbars autoHeight={true} autoHeightMax={625} autoHide={true}>
        
          <ListTextField
            searchItem={searchItem}
            handleSearchItem={(props) => setSearchItem(props)}
          />

          {searchResults.map(
            ({
              city,
              company,
              email,
              firstName,
              grades,
              id,
              lastName,
              pic,
              skill,
            }: Student) => (
              <li key={parseInt(id)}>
                <ul>
                <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary           expandIcon={expanded === id?<RemoveIcon />:<AddIcon />}
aria-controls="panel1d-content" id="panel1d-header">
                  <ListItem divider key={id}>
                    <ListItemAvatar sx={{ marginLeft: 1 }}>
                      <Avatar
                        sx={{
                          height: "225%",
                          width: "225%",

                          imageRendering: "pixelated",

                          borderWidth: "thin",
                          borderColor: "rgb(204, 204, 204)",
                          borderStyle: "solid",
                        }}
                        alt={pic}
                        src={pic}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ marginLeft: "55px" }}
                      primary={
                        <Typography
                          style={{ marginBottom: "10px", marginLeft: "60px" }}
                          variant="h1"
                        >
                          {firstName.toUpperCase()} {lastName.toUpperCase()}
                        </Typography>
                      }
                      secondary={secondaryText({
                        skill,
                        company,
                        grades,
                        email,
                      })}
                    />
                  </ListItem>
                  </AccordionSummary>
                  <AccordionDetails>
                      {grades.map((grade)=>(
                          <div>{grade}</div>
                      ))}
                      </AccordionDetails>
              </Accordion>
                </ul>
              </li>
            )
          )}
             
        </Scrollbars>
      </List>
    </>
  );
}
