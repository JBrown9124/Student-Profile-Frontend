import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import StudentList from './components/StudentList'
import theme from "./themes/theme1";
import Search from './hooks/NameSearch'
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ListTextField from "./components/ListTextField"

import { FixedSizeList, ListChildComponentProps } from "react-window";
// interface SecondaryTextProps {
//   company: string;
//   skill: string;
//   grades: Array<number>;
//   email: string;
// }
// const handleAverage = (grades: Array<any>): number => {
//   const average =
//     grades.reduce(
//       (a: string, b: string): number => parseInt(a) + parseInt(b),
//       0
//     ) / grades.length;
//   return average;
// };
// const secondaryText = ({
//   company,
//   skill,
//   grades,
//   email,
// }: SecondaryTextProps) => {
//   const average = handleAverage(grades);
//   return (
//     <div>
//       <Container style={{ marginLeft: "90px" }}>
//         <Typography variant="body1">
//           <Row style={{ marginBottom: 4 }}>Email: {email}</Row>
//           <Row style={{ marginBottom: 4 }}>Company: {company}</Row>
//           <Row style={{ marginBottom: 4 }}>Skill: {skill}</Row>
//           <Row>Average: {average}%</Row>
//         </Typography>
//       </Container>
//     </div>
//   );
// };

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
function App() {
  const [studentData, setStudentData] = useState<Student[]>([]);
  
  const handleStudentsData = (): void => {
    axios
      .get<Student[]>("https://api.hatchways.io/assessment/students")
      .then((response: AxiosResponse) =>
        setStudentData(response.data.students)
      );
  };
  if (studentData.length === 0) {
    handleStudentsData();
  }

  return (
    <div className="appContainer">
      <ThemeProvider theme={theme}>
      <StudentList studentData={studentData}/>
        
      </ThemeProvider>
    </div> );
}
        














{/* <List
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

            overflow: "auto",
            maxHeight: 625,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",

            "& ul": { padding: 0 },
          }}
        >

          
           <Scrollbars autoHeight={true}
        autoHeightMax={625}  autoHide={true}>
          <ListTextField />
         
          {studentData.map(
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
                  <ListItem divider key={id}>
                    <ListItemAvatar sx={{marginLeft:1}}>
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
                        <Typography style={{ marginBottom: "10px", marginLeft:"60px" }} variant="h1">
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
                </ul>
              </li>
            )
          )}
          </Scrollbars>
        </List> */}
       
 

export default App;


