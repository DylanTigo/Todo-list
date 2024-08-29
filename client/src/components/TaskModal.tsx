import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { TaskType } from '../types/TaskType';
import IconButton from './ui/IconButton';
import Button from './ui/Button';
import moment from 'moment';
import { useTaskContext } from '../contexts/TaskContext';

type ModalProps = {
  task?: TaskType;
  isOpen: boolean;
  closeModal: () => void;
};

const initialTask: TaskType = {
  id: 0,
  title: '',
  description: '',
  status: 'Waiting',
  start: moment().format('YYYY-MM-DD'),
};

const TaskModal= ({ task, isOpen, closeModal} : ModalProps) => {
  const { addTask, updateTask, tasks } = useTaskContext();
  const [newTask, setNewTask] = useState<TaskType>(initialTask);  

  useEffect(() => {    
    if (isOpen) {
      if (task?.id) {
        setNewTask({ ...task });
      } else {
        setNewTask({
          ...initialTask,
          id: tasks.length + 1,
        });
      }
    }
  }, [isOpen, task, tasks.length]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newTask);
    
    if (task?.title) {
      updateTask(newTask);
    } else {
      addTask(newTask);
    }
    setNewTask(initialTask);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="absolute top-0 left-0 w-lvw h-lvh bg-black/50 z-10"
        onClick={closeModal}
      ></div>
      <div className="px-5 py-8 max-w-md w-11/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white z-50">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold leading-none">
              {!task ? "Add a new task" : "Update task"}
            </h2>
            <p className="text-sm text-gray-500">All fields are required</p>
          </div>
          <IconButton className="hover:bg-gray-100 p-2" onClick={closeModal}>
            <X className="size-4" />
          </IconButton>
        </div>
        <form action="" className="mt-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div className="space-y-1">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-800"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                onChange={onChange}
                value={newTask.title}
                placeholder="Enter a title"
                required
                className="p-2 w-full rounded-md border-gray-200 border"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-800"
              >
                Description
              </label>
              <textarea
                name="description"
                onChange={onChange}
                value={newTask.description}
                placeholder="Enter a description"
                rows={3}
                className="p-2 w-full rounded-md border-gray-200 border"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="start"
                className="text-sm font-medium text-gray-800"
              >
                Start Date
              </label>
              <input
                type="date"
                name="start"
                onChange={onChange}
                value={newTask.start}
                className="p-2 w-full rounded-md border-gray-200 border"
              />
            </div>
          </div>
          <Button type="submit" className="w-full mt-5">
            Save
          </Button>
        </form>
      </div>
    </>
  );
};

export default TaskModal;