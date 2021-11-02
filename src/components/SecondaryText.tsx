import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Scrollbars } from "react-custom-scrollbars";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

import Container from "react-bootstrap/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Checkbox from "@mui/material/Checkbox";

import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ListTextField from "./ListTextField";



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
  }
  const secondaryText = ({
    company,
    skill,
    grades,
    email,
  }: SecondaryTextProps) => {
    const average = handleAverage(grades);
    return (
      <div>
        <Container style={{ marginLeft: "90px" }}>
          <Typography variant="body1">
            <Row style={{ marginBottom: 4 }}>Email: {email}</Row>
            <Row style={{ marginBottom: 4 }}>Company: {company}</Row>
            <Row style={{ marginBottom: 4 }}>Skill: {skill}</Row>
            <Row>Average: {average}%</Row>
          </Typography>
        </Container>
      </div>
    );
  };

export default secondaryText