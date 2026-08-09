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
} from "../api/api.js";

export default function TaskCard({ task, reload }) {

    const handleDelete = async () => {
        await deleteTask(task.id);
        reload();
    };

    const handleToggle = async () => {
        await toggleTask(task.id);
        reload();
    };

    const handleActive = async () => {
        await toggleActive(task.id);
        reload();
    };

    return (
        <div
            className="
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
            "
        >

            {/* Animated Glow */}

            <div
                className="
                absolute
                -top-20
                -right-20

                h-48
                w-48

                rounded-full

                bg-blue-300/20
                blur-3xl

                opacity-0

                transition

                group-hover:opacity-100
                "
            />

            <div className="relative p-6">

                {/* Title */}

                <h2 className="text-2xl font-semibold text-slate-800">
                    {task.title}
                </h2>

                {/* Description */}

                <p className="mt-2 text-slate-600">
                    {task.description}
                </p>

                {/* Status */}

                <div className="mt-5 flex flex-wrap gap-3">

                    <span
                        className={`
                        rounded-full
                        px-4
                        py-1

                        text-sm
                        font-medium

                        backdrop-blur-md

                        ${
                            task.active
                                ? "bg-green-400/20 text-green-700"
                                : "bg-red-400/20 text-red-700"
                        }
                        `}
                    >
                        {task.active ? "Active" : "Inactive"}
                    </span>

                    <span
                        className={`
                        rounded-full
                        px-4
                        py-1

                        text-sm
                        font-medium

                        backdrop-blur-md

                        ${
                            task.completed
                                ? "bg-blue-400/20 text-blue-700"
                                : "bg-gray-300/30 text-gray-600"
                        }
                        `}
                    >
                        {task.completed
                            ? "Completed"
                            : "Pending"}
                    </span>

                </div>

                {/* Actions */}

                <div className="mt-6 flex items-center gap-3">

                    <button
                        onClick={handleToggle}
                        className="
                        rounded-full
                        bg-green-400/20
                        p-3

                        transition

                        hover:scale-110
                        "
                    >
                        <FaCheck />
                    </button>

                    <button
                        onClick={handleActive}
                        className="
                        rounded-full
                        bg-blue-400/20
                        p-3

                        transition

                        hover:scale-110
                        "
                    >
                        <FaCircle />
                    </button>

                    <button
                        className="
                        rounded-full
                        bg-yellow-400/20
                        p-3

                        transition

                        hover:scale-110
                        "
                    >
                        <FaEdit />
                    </button>

                    <button
                        onClick={handleDelete}
                        className="
                        rounded-full
                        bg-red-400/20
                        p-3

                        transition

                        hover:scale-110
                        "
                    >
                        <FaTrash />
                    </button>

                </div>

            </div>

        </div>
    );
}