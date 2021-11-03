import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Scrollbars } from "react-custom-scrollbars";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import secondaryText from "./SecondaryText";
import Avatar from "@mui/material/Avatar";
import SearchNameTextField from "./SearchNameTextField";
import SearchTagTextField from "./SearchTagTextField";
import GradesAccordion from "./GradesAccordion/GradesAccordion";
import GradesAccordionDetails from "./GradesAccordion/GradesAccordionDetails";
import GradesAccordionSummary from "./GradesAccordion/GradesAccordionSummary";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Grades from "./GradesAccordion/Grades";




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
    tags: Array<string>;
  }>;
  // addTag:(tag:string)=>void
}

export default function StudentList({ studentData }: StudentData) {
  const [tagSearchItem, setTagSearchItem] = useState("");
  const [nameSearchItem, setNameSearchItem] = useState("");
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
    tags: Array<string>;
  }
  const [expanded, setExpanded] = React.useState<any>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded({ ...expanded, [panel]: newExpanded ? true : false });
    };

  useEffect(() => {
    const results: Student[] = studentData.filter(
      (student) =>
        (student.firstName
          .toLowerCase()
          .includes(nameSearchItem.toLowerCase()) ||
          student.lastName
            .toLowerCase()
            .includes(nameSearchItem.toLowerCase()) ||
          `${student.firstName}${" "}${student.lastName}`
            .toLowerCase()
            .includes(nameSearchItem.toLowerCase())) &&
        (tagSearchItem.length !== 0
          ? student.tags.some((tag) =>
              tag.toLowerCase().includes(tagSearchItem.toLowerCase())
            )
          : studentData.length > 0)
    );
    setSearchResults(results);
  }, [nameSearchItem, studentData, studentData.length]);
  useEffect(() => {
    const results: Student[] = studentData.filter((student) =>
      student.tags.some((tag) =>
        tag.toLowerCase().includes(tagSearchItem.toLowerCase())
      )
    );
    console.log(results);
    if (results.length === 0 || tagSearchItem.length === 0) {
      setSearchResults(studentData);
    } else {
      setSearchResults(results);
    }
  }, [tagSearchItem]);
  return (
    <>
      <Container>
        <List
          disablePadding
          sx={{
            borderRadius: "15px",
            borderWidth: "thin",
            borderColor: "rgb(204, 204, 204)",
            borderStyle: "solid",

            width: "100%",
            maxWidth: 1000,
            bgcolor: "background.paper",
            height: "100%",
            overflow: "hidden",
            maxHeight: 625,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",

            "& ul": { padding: 0 },
          }}
        >
          <SearchNameTextField
            placeholder={"Search by name"}
            searchItem={nameSearchItem}
            handleSearchItem={(props) => setNameSearchItem(props)}
          />
          <SearchTagTextField
            placeholder={"Search by tag"}
            searchItem={tagSearchItem}
            handleSearchItem={(props) => setTagSearchItem(props)}
          />
          <Scrollbars
            autoHide
            renderTrackHorizontal={(props) => (
              <div
                {...props}
                style={{ display: "none" }}
                className="track-horizontal"
              />
            )}
            style={{ height: "85%", width: "100%" }}
          >
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
                tags,
              }: Student) => (
                <li key={id}>
                  <ul>
                    <GradesAccordion
                      expanded={expanded[id] === true}
                      onChange={handleChange(id)} disableGutters
                    >
                      <GradesAccordionSummary
                        expandIcon={
                          expanded[id] === true ? (
                            <RemoveIcon
                              sx={{
                                fontSize: 60,
                                marginBottom: 20,
                                pointerEvents: "auto",
                              }}
                            />
                          ) : (
                            <AddIcon
                              sx={{
                                fontSize: 60,
                                marginBottom: 20,
                                pointerEvents: "auto",
                              }}
                            />
                          )
                        }
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <ListItem>
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
                                style={{
                                  marginBottom: "10px",
                                  marginLeft: "60px",
                                }}
                                variant="h1"
                              >
                                {firstName.toUpperCase()}{" "}
                                {lastName.toUpperCase()}
                              </Typography>
                            }
                            secondary={secondaryText({
                              skill,
                              company,
                              grades,
                              email,
                              tags,
                              id,
                              addTag(props) {
                                tags.push(props);
                                setSearchResults([...studentData]);
                              },
                            })}
                          />
                        </ListItem>
                      </GradesAccordionSummary>
                      <GradesAccordionDetails>
                        <Grades grades={grades} id={id} />
                      </GradesAccordionDetails>
                    </GradesAccordion>
                  </ul>
                </li>
              )
            )}
          </Scrollbars>
        </List>
      </Container>
    </>
  );
}
