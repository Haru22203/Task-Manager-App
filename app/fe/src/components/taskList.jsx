import TaskCard from "./taskCard";

export default function TaskList({ tasks, reload }) {
    if (tasks.length === 0) {
        return (
            <div className="mt-10 rounded-3xl border border-white/30 bg-white/40 p-10 text-center shadow-xl backdrop-blur-xl">
                <h2 className="text-xl font-semibold text-slate-700">
                    No tasks found
                </h2>
                <p className="mt-2 text-slate-500">
                    Try changing your search or filter.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    reload={reload}
                />
            ))}
        </div>
    );
}