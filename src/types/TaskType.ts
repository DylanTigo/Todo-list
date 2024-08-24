export type TaskType = {
    id: number
    start: string
    title: string
    description: string
    status: "current" | "done" | "pending"
}
