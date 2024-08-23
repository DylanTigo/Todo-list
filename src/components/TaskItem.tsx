import { useState } from "react";
import Button from "./ui/Button";
import { Task } from "../types/Task";
import IconButton from "./ui/IconButton";
import { Pen, Trash2 } from "lucide-react";

export default function TaskItem() {
  const [task, setTask] = useState<Task>();
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <EditTaskForm task={task} setTask={setTask} setIsEditing={setIsEditing} />
    );
  }

  return (
    <div className="p-4 text-sm rounded-xl flex flex-col justify-between gap-1.5 min-h-44 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center text-[10px] text-gray-600">
          <span>Debut:</span>
          <span>29/08/2024</span>
        </div>
        <div className=""></div>
      </div>
      <div className="grow">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
          dolorem.
        </p>
      </div>
      <div className="flex gap-3 justify-between items-end mt-2">
        <span className="flex justify-center text-[10px] items-center gap-2 px-2 py-0.5 bg-gray-100 rounded-full">
          <span className="bg-blue-500 size-2 rounded-full"></span>
          En cours
        </span>
        <div className="flex gap-2">
          <IconButton className="bg-red-100">
            <Trash2 className="size-3" />
          </IconButton>
          <IconButton
            onClick={() => setIsEditing(true)}
            className="bg-blue-100"
          >
            <Pen className="size-3" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

type EditTaskFormProps = {
  task: Task | undefined;
  setTask: React.Dispatch<React.SetStateAction<Task | undefined>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditTaskForm = ({ task, setTask, setIsEditing }: EditTaskFormProps) => {
  const [currentTask, setCurrentTask] = useState({
    id: task?.id || 0,
    start: task?.start || new Date(),
    task: task?.task || "",
    state: task?.state || "pending",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      currentTask.start &&
      currentTask.task
    ) {
      setTask({
        ...currentTask,
        start: currentTask.start,
        task: currentTask.task,
      });
      setIsEditing(false);
    } else {
      alert("All fields are required");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 text-sm rounded-xl flex flex-col justify-between gap-1.5 min-h-44 bg-white"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center text-[10px] text-gray-600">
          <label htmlFor="start">Debut:</label>
          <input
            type="date"
            name="start"
            id="start"
            value={currentTask.start ? currentTask.start.toISOString().split('T')[0] : ''}
            onChange={(e) =>
              setCurrentTask({
                ...currentTask,
                start: new Date(e.target.value),
              })
            }
          />
        </div>
        <div className=""></div>
      </div>
      <div className="grow">
        <textarea
          name="task"
          placeholder="Enter your task here..."
          className="w-full h-full p-2"
          value={currentTask.task}
          onChange={(e) =>
            setCurrentTask({ ...currentTask, task: e.target.value })
          }
        >{currentTask.task}</textarea>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <Button
          onClick={() => setIsEditing(false)}
          type="button"
          className="bg-white text-black hover:bg-gray-100"
          small
        >
          Cancel
        </Button>
        <Button type="submit" small>
          Save
        </Button>
      </div>
    </form>
  );
};
