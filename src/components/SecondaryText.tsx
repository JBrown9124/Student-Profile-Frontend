import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import Box from "@mui/material/Box";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddTagTextField from "./AddTagTextField";

const handleAverage = (grades: Array<any>): number => {
  const average =
    grades.reduce(
      (a: string, b: string): number => parseInt(a) + parseInt(b),
      0
    ) / grades.length;
  return average;
};
interface SecondaryTextProps {
  company: string;
  skill: string;
  grades: Array<number>;
  email: string;
  tags: Array<string>;
  id: string;
  addTag: (tag: string) => void;
}
const secondaryText = ({
  company,
  skill,
  grades,
  email,
  tags,
  id,
  addTag,
}: SecondaryTextProps) => {
  const average = handleAverage(grades);
  return (
    <>
      <Container style={{ marginLeft: "10%" }} fluid>
        <Row>
          <Typography component="span" variant="body1">
            Email: {email}
          </Typography>
        </Row>
        <Row>
          <Typography component="span" variant="body1">
            Company: {company}
          </Typography>
        </Row>
        <Row>
          <Typography component="span" variant="body1">
            Skill: {skill}
          </Typography>
        </Row>
        <Row>
          <Typography component="span" variant="body1">
            Average: {average}%
          </Typography>
        </Row>
        <Container>
          <Row>
            {tags.map((tag, idx) => (
              <Col
                className="p-1"
                key={idx * parseInt(id)}
                xxl={"auto"}
                xl={"auto"}
                xs={"auto"}
                md={"auto"}
                lg={"auto"}
                sm={"auto"}
              >
                <Box
                  sx={{
                    marginTop: 1,
                    paddingTop: 0.5,
                    paddingBottom: 0.5,
                    paddingLeft: 1,
                    paddingRight: 1,
                    border: "thin",
                    backgroundColor: "rgb(218, 216, 216)",
                    borderRadius: "3px",
                    borderWidth: "thin",
                    borderColor: "rgb(204, 204, 204)",
                    borderStyle: "solid",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      display: "flex",
                      alignItems: "center!important",
                      justifyContent: "center!important",
                    }}
                  >
                    {tag}
                  </Typography>
                </Box>
              </Col>
            ))}
          </Row>
        </Container>

        <Row>
          <AddTagTextField addTag={(props) => addTag(props)} />
        </Row>
      </Container>
    </>
  );
};

export default secondaryText;
