var randomId = require("random-id");

// status: 1 - complete, 2 - uncomplete 
// priority: 1 - thap, 2 - trung binh, 3 - cao

const TaskData = [
    {
        id: randomId(5, "aA0"),
        name: "linh",
        desc: "implement UI",
        priority: 1,
        status: 1,
        labelArr: ["Frontend"],
        memberIdArr: ["user_2"]
    },
    {
        id: randomId(5, "aA0"),
        name: "phuong",
        desc: "implement Test",
        priority: 2,
        status: 2,
        labelArr: ["Frontend","API"],
        memberIdArr: ["user_1", "user_4"]
    },
    {
        id: randomId(5, "aA0"),
        name: "hiep",
        desc: "implement Backend code",
        priority: 3,
        status: 1,
        labelArr: ["Backend","Issue"],
        memberIdArr: ["user_3"]
    }

]
export default TaskData;