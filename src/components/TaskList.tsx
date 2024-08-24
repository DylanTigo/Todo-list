import TaskItem from './TaskItem';
import { useTaskContext } from '../contexts/TaskContext';
import { TaskType } from '../types/TaskType';

type TaskListProps = {
  openModal: (task?: TaskType) => void;
};

const TaskList = ({ openModal }: TaskListProps) => {
  const { tasks, deleteTask } = useTaskContext();

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 mt-4">
      {tasks.length ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            openModal={openModal}
          />
        ))
      ) : (
        <p className="text-center text-lg text-gray-500 col-span-full h-[40vh] flex items-center justify-center">
          No task yet
        </p>
      )}
    </div>
  );
};

export default TaskList;