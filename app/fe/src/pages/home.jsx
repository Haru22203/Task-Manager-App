
import { getTasks } from "../api/api.js";
import { useEffect, useState, useCallback } from "react";

import TaskForm from "../components/taskForm.jsx";
import SearchBar from "../components/searchBar.jsx";
import FilterBar from "../components/filterBar.jsx";
import TaskList from "../components/taskList.jsx";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");



    const loadTasks = useCallback(async () => {
        try {
            const data = await getTasks(search, status);
            setTasks(data);
        } catch (err) {
            console.error(err);
        }
    }, [search, status]);

    useEffect(() => {
        loadTasks();
    }, [loadTasks]);

    return (
    <div className="relative min-h-screen overflow-hidden bg-linnear-to-br from-slate-100 via-white to-blue-100">

        {/*Background*/}

        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />

        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-3xl" />

        {/*Actual Content*/}

        <div className="relative z-10 mx-auto max-w-6xl p-8">

            <h1 className="mb-8 text-center text-5xl font-bold text-slate-800">
                Task Manager
            </h1>

            <TaskForm onSuccess={loadTasks} />

            <div className="my-6 flex gap-4">
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <FilterBar
                    status={status}
                    setStatus={setStatus}
                />
            </div>

            <TaskList
                tasks={tasks}
                reload={loadTasks}
            />

        </div>

    </div>
);
}