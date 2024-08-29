/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, ReactNode } from 'react';
import { TaskType } from '../types/TaskType';
import useTaskManager from '../hooks/useTaskManager';

type TaskContextType = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  updateTask: (task: TaskType) => void;
  deleteTask: (id: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const taskManager = useTaskManager();

  return (
    <TaskContext.Provider value={taskManager}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};