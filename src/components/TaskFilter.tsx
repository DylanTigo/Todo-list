// src/components/TaskFilter.tsx
import React from 'react';
import { TaskStatus } from '../types/TaskType';

type TaskFilterProps = {
  currentFilter: TaskStatus | 'all';
  onFilterChange: (filter: TaskStatus | 'all') => void;
};

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex space-x-2 mt-4 mb-3">
      <button
        className={`px-3 py-2 rounded-full ${currentFilter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={`px-3 py-2 rounded-full ${currentFilter === 'Waiting' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
        onClick={() => onFilterChange('Waiting')}
      >
        Pending
      </button>
      <button
        className={`px-3 py-2 rounded-full ${currentFilter === 'Ongoing' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
        onClick={() => onFilterChange('Ongoing')} 
      >
        Current
      </button>
      <button
        className={`px-3 py-2 rounded-full ${currentFilter === 'Done' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
        onClick={() => onFilterChange('Done')}
      >
        Done
      </button>
    </div>
  );
};

export default TaskFilter;