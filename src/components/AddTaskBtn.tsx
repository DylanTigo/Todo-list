import React from 'react';
import Button from './ui/Button';
import { Plus } from 'lucide-react';

type AddTaskButtonProps = {
  openModal: () => void;
};

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ openModal }) => (
  <Button type="button" onClick={openModal}>
    <Plus className="size-4" />
    Add task
  </Button>
);

export default AddTaskButton;