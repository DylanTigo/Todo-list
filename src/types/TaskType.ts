export type TaskStatus = "Ongoing" | "Done" | "Waiting";

export type TaskType = {
    id: number
    start: string
    title: string
    description: string
    status: TaskStatus
}
