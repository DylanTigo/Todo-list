import { useState, useCallback } from 'react';
import { TaskType } from '../types/TaskType';
import moment from 'moment';

const useTaskManager = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      title: "Task 1",
      description: "This is a task description",
      status: "current",
      start: moment().format("YYYY-MM-DD"),
    },
  ]);

  const addTask = useCallback((task: TaskType) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: prevTasks.length + 1 }]);
  }, []);

  const updateTask = useCallback((task: TaskType) => {
    setTasks((prevTasks) => prevTasks.map((t) => (t.id === task.id ? task : t)));
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  return { tasks, addTask, updateTask, deleteTask };
};

export default useTaskManager;