import React, { useEffect } from "react";
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
interface Data {
  studentData: Student[];
  searchItem: string;
  handleSearchResults: (results:Student[]) => void;
}
export default function NameSearch({ studentData, searchItem, handleSearchResults}: Data) {
  useEffect(() => {
    const results:Student[] = studentData.filter((student: any) =>
      student.firstName.toLowerCase().includes(searchItem.toLowerCase())
    );
    return handleSearchResults(results);
  }, [searchItem]);
}
