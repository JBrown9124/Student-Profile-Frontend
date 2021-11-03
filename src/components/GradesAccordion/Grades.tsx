import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
interface Props {
  grades: Array<number>;
  id: string;
}

export default function Grades({ grades, id }: Props) {
  return (
    <>
    <Container style={{marginLeft:5}}>
      {grades.map((grade, idx) => (
        <li
          style={{ listStyleType: "none" }}
          key={(grade * parseInt(id)) / idx}
          className="gradesContainer"
        >
          <Typography component="span" variant="body1">
            Test {idx + 1}:{" "}
          </Typography>
          <Typography
            component="span"
            variant="body1"
            style={{ marginLeft: 30 }}
          >
            {grade}%{" "}
          </Typography>
        </li>
      ))}
      </Container>
    </>
  );
}
