import { useState } from "react";
import DeleteModal from "./deleteModal.jsx";

import {
    FaCheck,
    FaTrash,
    FaEdit,
    FaCircle,
} from "react-icons/fa";

import {
    deleteTask,
    toggleTask,
    toggleActive,
    updateTask,
} from "../api/api.js";

export default function TaskCard({ task, reload }) {

    const [editing, setEditing] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleDelete = async () => {
        try{
            await deleteTask(task.id);
            setShowDeleteModal(false);
            reload();
        }
        catch(error){
            console.error("Failed to delete task:", error);
        }
    };

    const handleToggle = async () => {
        await toggleTask(task.id);
        reload();
    };

    const handleActive = async () => {
        await toggleActive(task.id);
        reload();
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setTitle(task.title);
        setDescription(task.description);
        setEditing(false);
    };

    const handleSave = async () => {

        if (!title.trim()) {
            return;
        }

        try {

            await updateTask(task.id, {
                title: title.trim(),
                description: description.trim(),
            });

            setEditing(false);

            reload();

        } catch (error) {
            console.error("Failed to update task:", error);
        }
    };

    return (
        <div className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/30
            bg-white/40
            backdrop-blur-xl
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
        ">

            <div className="relative p-6">

                {editing ? (


                    <div className="space-y-4">

                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-white/40
                                bg-white/50
                                px-4
                                py-3
                                text-xl
                                font-semibold
                                text-slate-800
                                outline-none
                                backdrop-blur-md
                                focus:ring-2
                                focus:ring-blue-400/50
                            "
                            placeholder="Task title"
                        />

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="
                                min-h-28
                                w-full
                                resize-none
                                rounded-2xl
                                border
                                border-white/40
                                bg-white/50
                                px-4
                                py-3
                                text-slate-700
                                outline-none
                                backdrop-blur-md
                                focus:ring-2
                                focus:ring-blue-400/50
                            "
                            placeholder="Description"
                        />

                        <div className="flex gap-3">

                            <button
                                onClick={handleSave}
                                className="
                                    rounded-full
                                    bg-blue-500
                                    px-6
                                    py-2
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-blue-600
                                "
                            >
                                Save
                            </button>

                            <button
                                onClick={handleCancel}
                                className="
                                    rounded-full
                                    bg-slate-200/70
                                    px-6
                                    py-2
                                    font-semibold
                                    text-slate-700
                                    transition
                                    hover:bg-slate-300
                                "
                            >
                                Cancel
                            </button>

                        </div>

                    </div>

                ) : (


                    <>
                        <h2 className="
                            text-2xl
                            font-semibold
                            text-slate-800
                        ">
                            {task.title}
                        </h2>

                        <p className="
                            mt-2
                            text-slate-600
                        ">
                            {task.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">

                            <span className={`
                                rounded-full
                                px-4
                                py-1
                                text-sm
                                font-medium

                                ${
                                    task.active
                                        ? "bg-green-400/20 text-green-700"
                                        : "bg-red-400/20 text-red-700"
                                }
                            `}>
                                {task.active ? "Active" : "Inactive"}
                            </span>

                            <span className={`
                                rounded-full
                                px-4
                                py-1
                                text-sm
                                font-medium

                                ${
                                    task.completed
                                        ? "bg-blue-400/20 text-blue-700"
                                        : "bg-gray-300/30 text-gray-600"
                                }
                            `}>
                                {task.completed
                                    ? "Completed"
                                    : "Pending"}
                            </span>

                        </div>

                        <div className="mt-6 flex items-center gap-3">

                            <button
                                onClick={handleToggle}
                                className="
                                    flex
                                    items-center
                                    rounded-full
                                    bg-green-400/20
                                    p-3
                                    transition
                                    hover:scale-110
                                "
                            >
                                <FaCheck /> Check
                            </button>

                            <button
                                onClick={handleActive}
                                className="
                                    flex
                                    items-center
                                    rounded-full
                                    bg-blue-400/20
                                    p-3
                                    transition
                                    hover:scale-110
                                "
                            >
                                <FaCircle /> Activity
                            </button>

                            <button
                                onClick={handleEdit}
                                className="
                                    flex
                                    items-center
                                    rounded-full
                                    bg-yellow-400/20
                                    p-3
                                    transition
                                    hover:scale-110
                                "
                            >
                                <FaEdit /> Edit
                            </button>

                            <button
                                onClick={() => setShowDeleteModal(true)}
                                className="
                                    flex
                                    items-center
                                    rounded-full
                                    bg-red-400/20
                                    p-3
                                    transition
                                    hover:scale-110
                                "
                            >
                                <FaTrash /> Delete
                            </button>

                        </div>

                    </>

                )}

            </div>
                {showDeleteModal && (
                    <DeleteModal
                        task={task}
                        onConfirm={handleDelete}
                        onCancel={() => setShowDeleteModal(false)}
                    />
                )}
        </div>
    );
}