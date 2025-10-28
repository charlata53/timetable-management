module.exports = async function (context, req) {
    context.res = {
        body: [
            { time: "9am-10am", subject: "Math", room: "101", faculty: "Dr. Smith" },
            { time: "10am-11am", subject: "Physics", room: "102", faculty: "Ms. Jane" },
            { time: "11am-12pm", subject: "English", room: "201", faculty: "Mr. Brown" }
        ]
    };
};
