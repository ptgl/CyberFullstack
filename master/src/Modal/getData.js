import ListOfTasks from "./ListOfTasks";
import TaskData from "./TaskData";
import Task from "./Task";

let listOfTasks = new ListOfTasks();

for (let task of listOfTasks) {
  listOfTasks.addNewTask(
    new Task(
      task.id,
      task.name,
      task.labelArr,
      task.status,
      task.desc,
      task.priority,
      task.memberIdArr
    )
  );
}

export default listOfTasks;
