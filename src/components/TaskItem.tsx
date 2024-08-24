import { TaskType } from "../types/TaskType";
import IconButton from "./ui/IconButton";
import { Pen, Trash2 } from "lucide-react";

type TaskItemProps = {
  task: TaskType
  openModal: (task?: TaskType) => void;
  onDelete: (id: number) => void; 
}

export default function TaskItem( {task, onDelete, openModal}: TaskItemProps) {

  return (
    <div className="p-4 text-sm rounded-xl flex flex-col justify-between gap-1.5 min-h-44 bg-white">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="text-lg font-semibold leading-5">{task.title}</h2>
          <div className="flex gap-1 items-center text-[10px] text-gray-600">
            <span>Debut:</span>
            <span>{task.start}</span>
          </div>
        </div>
        <div className=""></div>
      </div>
        <p className="grow text-xs">{task.description}</p>
      <div className="flex gap-3 justify-between items-end mt-2">
        <span className="flex justify-center text-[10px] items-center gap-2 px-2 py-0.5 bg-gray-100 rounded-full">
          <span className="bg-blue-500 size-2 rounded-full"></span>
          {task.status}
        </span>
        <div className="flex gap-2">
          <IconButton className="bg-red-100" onClick={() => onDelete(task.id)}>
            <Trash2 className="size-3" />
          </IconButton>
          <IconButton className="bg-blue-100" onClick={() => openModal(task)}>
            <Pen className="size-3" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
