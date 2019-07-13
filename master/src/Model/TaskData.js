var randomId = require("random-id");

const TaskData = [
    {
        id: randomId(5, "0"),
        name: "Design UI/UX",
        desc: "Design UI/UX",
        priority: 'low',
        status: 1,
        labelArr: ["Frontend"],
        memberIdArr: ["user_2"]
    },
    {
        id: randomId(5, "0"),
        name: "Code Backend",
        desc: "Code Backend",
        priority: 'high',
        status: 2,
        labelArr: ["Backend","API"],
        memberIdArr: ["user_1", "user_4"]
    },
    {
        id: randomId(5, "0"),
        name: "Fix bug Login",
        desc: "Fix bug Login",
        priority: 'average',
        status: 1,
        labelArr: ["Backend","Issue"],
        memberIdArr: ["user_3"]
    }

]
export default TaskData;