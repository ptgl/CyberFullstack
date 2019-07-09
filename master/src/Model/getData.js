import ListOfTasks from "./ListOfTasks";
import TaskData from "./TaskData";
import Task from "./Task";

let listOfTasks = new ListOfTasks();

for (let task of TaskData) {
  listOfTasks.addNewTask(
    new Task(
      task.id,
      task.name,
      task.desc,
      task.priority,
      task.status,
      task.labelArr,
      task.memberIdArr
    )
  );
}

export default listOfTasks;
