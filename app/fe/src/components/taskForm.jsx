import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { createTask } from "../api/api.js";

export default function TaskForm({ onSuccess }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        try {
            await createTask({
                title,
                description,
            });

            setTitle("");
            setDescription("");

            onSuccess();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/30 bg-white/40 p-6 shadow-xl backdrop-blur-xl"
        >
            <div className="space-y-4">

                <input
                    type="text"
                    placeholder="Task title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-2xl border border-white/40 bg-white/50 p-3 outline-none"
                />

                <textarea
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded-2xl border border-white/40 bg-white/50 p-3 outline-none"
                />

                <button
                    className="flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-white transition hover:scale-105"
                >
                    <FaPlus />
                    Add Task
                </button>

            </div>
        </form>
    );
}