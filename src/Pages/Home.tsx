import Header from '../components/Header';
import { useModal } from '../hooks/useModal';
import { TaskProvider } from '../contexts/TaskContext';
import AddTaskButton from '../components/AddTaskBtn';
import TaskModal from '../components/TaskModal';
import TaskList from '../components/TaskList';

const Home = () => {
  const { isOpen, task, openModal, closeModal } = useModal();

  return (
    <TaskProvider>
      <div>
        <Header />
        <main className="mt-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Task List</h1>
            <AddTaskButton openModal={openModal} />
          </div>
          <TaskList openModal={openModal} />
        </main>
        <TaskModal
          task={task}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
    </TaskProvider>
  );
};

export default Home;
