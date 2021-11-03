import "./App.css";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import "./components/GradesAccordion/Grades.css";
import Container from "react-bootstrap/Container";
import StudentList from "./components/StudentList";
import theme from "./themes/theme1";
import { ThemeProvider } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";

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
  tags: Array<string>;
}
function App() {
  const [studentData, setStudentData] = useState<Student[]>([]);

  const handleStudentsData = (): void => {
    axios
      .get<Student[]>("https://api.hatchways.io/assessment/students")
      .then((response: AxiosResponse) =>
        setStudentData(
          response.data.students.map((v: Student) => ({ ...v, tags: [] }))
        )
      );
  };
  useEffect(() => {
    handleStudentsData();
  }, []);

  return (
    <>
      <Container className="appContainer" fluid>
        <ThemeProvider theme={theme}>
          <StudentList studentData={studentData} />
        </ThemeProvider>
      </Container>
    </>
  );
}

export default App;
