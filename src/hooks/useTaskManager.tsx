import { useState, useCallback } from 'react';
import { TaskType } from '../types/TaskType';
import moment from 'moment';

const useTaskManager = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      title: "Task 1",
      description: "This is a task description",
      status: "Waiting",
      start: moment().format("YYYY-MM-DD"),
    },
  ]);

  const addTask = useCallback((newTask: TaskType) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: prevTasks.length + 1 }]);
  }, []);

  const updateTask = useCallback((newTask: TaskType) => {
    setTasks((prevTasks) => prevTasks.map((t) => (t.id === newTask.id ? newTask : t)));
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  return { tasks, addTask, updateTask, deleteTask };
};

export default useTaskManager;