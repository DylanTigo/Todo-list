import { useState, useCallback } from 'react';
import { TaskType } from '../types/TaskType';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<TaskType | undefined>();

  const openModal = useCallback((task?: TaskType) => {
    setIsOpen(true);
    setTask(task);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setTask(undefined); 
  }, []);

  return {
    isOpen,
    task,
    openModal,
    closeModal,
  };
};
