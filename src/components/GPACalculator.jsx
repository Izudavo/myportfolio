import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const GPACalculator = () => {
  const [matricNo, setMatricNo] = useState("");
  const [semester, setSemester] = useState("");
  const [level, setLevel] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [score, setScore] = useState("");
  const [grade, setGrade] = useState("");
  const [gpa, setGpa] = useState(null);
  const [message, setMessage] = useState("");

  const calculateGPA = () => {
    const numericScore = parseFloat(score);
    const matricPattern = /^[a-z]{3}-\d{2}-\d{4}$/i;       // e.g. mst-22-9999
    const courseCodePattern = /^[a-z]{3}\s\d{3}$/i;        // e.g. mst 303
    const allowedSemesters = ["1st", "2nd"];
    const allowedLevels = ["100", "200", "300", "400", "500"];

    if (!matricPattern.test(matricNo)) {
      setMatricNo("");
      setMessage("Matric No format invalid! Use e.g. mst-22-9999.");
      return;
    }
    if (!allowedSemesters.includes(semester.toLowerCase())) {
      setSemester("");
      setMessage("Semester must be '1st' or '2nd'.");
      return;
    }
    if (!allowedLevels.includes(level)) {
      setLevel("");
      setMessage("Level must be 100, 200, 300, 400, or 500.");
      return;
    }
    if (!courseCodePattern.test(courseCode)) {
      setCourseCode("");
      setMessage("Course code format invalid! Use e.g. mst 303.");
      return;
    }
    if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      setScore("");
      setMessage("Enter a valid score between 0 and 100.");
      return;
    }

    let letterGrade = "";
    if (numericScore >= 70) letterGrade = "A";
    else if (numericScore >= 60) letterGrade = "B";
    else if (numericScore >= 50) letterGrade = "C";
    else if (numericScore >= 45) letterGrade = "D";
    else if (numericScore >= 40) letterGrade = "E";
    else letterGrade = "F";

    const gradePoints = {
      A: 5.0,
      B: 4.0,
      C: 3.0,
      D: 2.0,
      E: 1.0,
      F: 0.0,
    };

    const points = gradePoints[letterGrade];
    setGrade(letterGrade);
    setGpa(points);
    setMessage(
      `Hello ${matricNo}! For ${courseCode} in ${semester} semester (${level} Level): Score = ${numericScore}, Grade = ${letterGrade}, GPA Points = ${points}.`
    );
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Student's GPA Calculator
      </Typography>

      <Box sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
        <TextField
          label="Matric No"
          placeholder="e.g. mst-22-9999"
          variant="outlined"
          value={matricNo}
          onChange={(e) => setMatricNo(e.target.value)}
        />
        <TextField
          label="Semester"
          placeholder="1st or 2nd"
          variant="outlined"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        />
        <TextField
          label="Level"
          placeholder="e.g. 100"
          variant="outlined"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <TextField
          label="Course Code"
          placeholder="e.g. mst 303"
          variant="outlined"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        />
        <TextField
          label="Score"
          placeholder="0–100"
          variant="outlined"
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </Box>

      <Button variant="contained" onClick={calculateGPA} sx={{ mt: 2 }}>
        Calculate Your GPA
      </Button>

      {gpa !== null && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Letter Grade: {grade}</Typography>
          <Typography variant="h6">GPA Points: {gpa}</Typography>
          <Typography variant="body1"><strong>{message}</strong></Typography>
        </Box>
      )}
      {gpa === null && message && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" color="error">{message}</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default GPACalculator;
