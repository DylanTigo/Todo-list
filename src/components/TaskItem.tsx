import React from 'react';
import { TaskType } from "../types/TaskType";
import IconButton from "./ui/IconButton";
import { Pen, Trash2 } from "lucide-react";
import { useTaskContext } from '../contexts/TaskContext';
import moment from 'moment';

type TaskItemProps = {
  task: TaskType
  openModal: (task?: TaskType) => void;
}

export default function TaskItem({ task, openModal }: TaskItemProps) {
  const { updateTask, deleteTask } = useTaskContext();

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const currentDate = moment();
    const startDate = moment(task.start);

    let newStatus: TaskType['status'];
    if (isChecked) {
      newStatus = 'Done';
    } else if (currentDate.isBefore(startDate)) {
      newStatus = 'Waiting';
    } else {
      newStatus = 'Ongoing';
    }

    updateTask({ ...task, status: newStatus });
  };

  const getStatusColor = (status: TaskType['status']) => {
    switch (status) {
      case 'Done':
        return 'bg-green-500';
      case 'Waiting':
        return 'bg-yellow-500';
      case 'Ongoing':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-4 text-sm rounded-xl flex flex-col justify-between gap-1.5 min-h-44 bg-white">
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-lg font-semibold leading-5">{task.title}</h2>
          <div className="flex gap-1 items-center text-[10px] text-gray-600">
            <span>Debut:</span>
            <span>{task.start}</span>
          </div>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={task.status === 'Done'}
            onChange={handleStatusChange}
            className="form-checkbox size-4 text-blue-600"
          />
        </div>
      </div>
      <p className="grow text-xs">{task.description}</p>
      <div className="flex gap-3 justify-between items-end mt-2">
        <span className="flex justify-center text-[10px] items-center gap-2 px-2 py-0.5 bg-gray-100 rounded-full">
          <span className={`${getStatusColor(task.status)} size-2 rounded-full`}></span>
          {task.status}
        </span>
        <div className="flex gap-2">
          <IconButton className="bg-red-100" onClick={() => deleteTask(task.id)}>
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