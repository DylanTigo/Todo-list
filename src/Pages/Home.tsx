import Header from "../components/Header";
import TaskItem from "../components/TaskItem";
import Button from "../components/ui/Button";
import { Plus } from "lucide-react"

export default function Home() {
  return (
    <div>
        <Header/>
        <main className="mt-6">
            <div className="flex justify-between items-center">
               <h1 className="text-3xl font-bold">Task List</h1>
               <Button type="button"><Plus className="size-4"/>Add task</Button>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 mt-4">
              <TaskItem/>
              <TaskItem/>
              <TaskItem/>
              <TaskItem/>
            </div>
        </main>
    </div>
  )
}
