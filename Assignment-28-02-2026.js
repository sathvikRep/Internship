// Array to store students
let students = [
    {
        name: "Sathvik",
        marks: [85, 78, 92]
    },
    {
        name: "Sathvik1",
        marks: [70, 88, 90]
    },
    {
        name: "Sathvik2",
        marks: [95, 91, 89]
    }
];

// Function to calculate average
function calculateAverage(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return (total / marks.length).toFixed(2);
}

// Display student details with average
for (let i = 0; i < students.length; i++) {
    let avg = calculateAverage(students[i].marks);
    console.log("Name:", students[i].name);
    console.log("Marks:", students[i].marks.join(", "));
    console.log("Average:", avg);
    console.log("-----------------------");
}