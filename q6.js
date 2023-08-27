// Find the grade for input marks
// To find the grade of the student based on the input marks.
// 1. Print “S grade” if marks is between 90 and 100.
// 2. Print “A grade” if marks is between 80 and 90.
// 3. Print “B grade” if marks is between 70 and 80.
// 4. Print “C grade” if marks is between 60 and 70.
// 5. Print “D grade” if marks is between 50 and 60.
// 6. Print “E grade” if marks is between 40 and 50.
// 7. Print “Student has failed” if marks is between 0 and 40.
// 8. Else print “Invalid marks”.



function gradeCheck(marks){
if (marks >= 90 && marks <= 100) {
    console.log("S grade");
  } else if (marks >= 80 && marks < 90) {
    console.log("A grade");
  } else if (marks >= 70 && marks < 80) {
    console.log("B grade");
  } else if (marks >= 60 && marks < 70) {
    console.log("C grade");
  } else if (marks >= 50 && marks < 60) {
    console.log("D grade");
  } else if (marks >= 40 && marks < 50) {
    console.log("E grade");
  } else if (marks >= 0 && marks < 40) {
    console.log("Student has failed");
  } else {
    console.log("Invalid marks");
  }
}
gradeCheck(60);