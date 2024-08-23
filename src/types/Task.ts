export type Task = {
    id: number
    start: Date
    task: string
    state: "current" | "done" | "pending"
}
