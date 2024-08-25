import TaskItem from './TaskItem';
import { useTaskContext } from '../contexts/TaskContext';
import { TaskStatus, TaskType } from '../types/TaskType';
import TaskFilter from './TaskFilter';
import { useMemo, useState } from 'react';

type TaskListProps = {
  openModal: (task?: TaskType) => void;
};

const TaskList = ({ openModal }: TaskListProps) => {
  const { tasks } = useTaskContext();
  const [filter, setFilter] = useState<TaskStatus | 'all'>('all');

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === 'all') return true;
      return task.status === filter;
    });
  }, [tasks, filter]);

  return (
    <>
    <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
    <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 mt-4">
      {filteredTasks.length ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            openModal={openModal}
          />
        ))
      ) : (
        <p className="text-center text-sm text-gray-500 col-span-full h-44 flex items-center justify-center">
          No task yet. Add some task!
        </p>
      )}
    </div>
    </>
  );
};

export default TaskList;