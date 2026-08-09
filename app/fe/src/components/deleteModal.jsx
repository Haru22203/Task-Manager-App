export default function DeleteModal({
    task,
    onConfirm,
    onCancel,
}) {
    if (!task) return null;

    return (
        <div className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/20
            backdrop-blur-sm
        ">

            <div className="
                w-[90%]
                max-w-md
                rounded-3xl
                border
                border-white/30
                bg-white/60
                p-6
                shadow-2xl
                backdrop-blur-2xl
            ">

                <h2 className="
                    text-2xl
                    font-semibold
                    text-slate-800
                ">
                    Delete task?
                </h2>

                <p className="
                    mt-3
                    text-slate-600
                ">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold text-slate-800">
                        "{task.title}"
                    </span>
                    ?
                </p>

                <p className="
                    mt-2
                    text-sm
                    text-slate-500
                ">
                    This action cannot be undone.
                </p>

                <div className="
                    mt-6
                    flex
                    justify-end
                    gap-3
                ">

                    <button
                        onClick={onCancel}
                        className="
                            rounded-full
                            bg-white/50
                            px-5
                            py-2.5
                            font-medium
                            text-slate-700
                            transition
                            hover:bg-white/80
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="
                            rounded-full
                            bg-red-500
                            px-5
                            py-2.5
                            font-medium
                            text-white
                            transition
                            hover:bg-red-600
                            hover:scale-105
                        "
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}