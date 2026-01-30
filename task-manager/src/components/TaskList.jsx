import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.title} />
      ))}
    </ul>
  );
}
