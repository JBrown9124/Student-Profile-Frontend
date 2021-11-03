import "./App.css";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import "./components/GradesAccordion/Grades.css";
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
          response.data.students.map((v: any) => ({ ...v, tags: [] }))
        )
      );
  };
  if (studentData.length === 0) {
    handleStudentsData();
  }
  useEffect(() => {
    setStudentData(studentData);
  }, [studentData.length, studentData]);

  return (
    <div className="appContainer">
      <ThemeProvider theme={theme}>
        <StudentList studentData={studentData} />
      </ThemeProvider>
    </div>
  );
}

export default App;
