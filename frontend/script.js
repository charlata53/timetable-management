let timetableData = [
    ["Time", "Class"]
];

// Handle form submission to add new timetable entries
document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const time = document.getElementById('time').value;
    const subject = document.getElementById('subject').value;
    timetableData.push([time, subject]);
    loadTimetable();
    event.target.reset();
});

// Show the timetable when View Timetable button is clicked
document.getElementById('viewBtn').addEventListener('click', loadTimetable);

function loadTimetable() {
    let html = "<table><tr><th>Time</th><th>Class</th></tr>";
    for (let i = 1; i < timetableData.length; i++) {
        html += "<tr><td>" + timetableData[i][0] + "</td><td>" + timetableData[i][1] + "</td></tr>";
    }
    html += "</table>";
    document.getElementById("timetable").innerHTML = html;
}
