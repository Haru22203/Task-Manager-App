export default function FilterBar({
    status,
    setStatus,
}) {
    return (
        <select
            value={status}
            onChange={(e) =>
                setStatus(e.target.value)
            }
            className="
            rounded-full
            border
            border-white/30
            bg-white/40
            px-5
            shadow-lg
            backdrop-blur-xl
            "
        >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="completed">Completed</option>
        </select>
    );
}                   