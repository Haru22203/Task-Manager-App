export default function SearchBar({
    search,
    setSearch,
}) {
    return (
        <input
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            flex-1
            rounded-full
            border
            border-white/30
            bg-white/40
            p-3
            shadow-lg
            backdrop-blur-xl
            "
        />
    );
}