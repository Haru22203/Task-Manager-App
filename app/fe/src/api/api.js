import axios from 'axios'

const api =axios.create({
    baseURL:' https://task-manager-app-id80.onrender.com/api/tasks',
    headers:{'Content-Type': 'application/json'},
});

//GET ALL TASK
export const getTasks = async (search = "", status = "all") => {
    const response = await api.get("/", {
        params: { search, status },
    });

    return response.data;
};

// CREATE TAKS
export const createTask = async (task) => {
    const response = await api.post("/", task);
    return response.data;
};

// UPDATE TASK
export const updateTask = async (id, task) => {
    const response = await api.put(`/${id}`, task);
    return response.data;
};

// TOGGLE COMPLTED
export const toggleTask = async (id) => {
    const response = await api.patch(`/${id}/toggle`);
    return response.data;
};

// TOGGLE ACTIVE
export const toggleActive = async (id) => {
    const response = await api.patch(`/${id}/active`);
    return response.data;
};

// DELETE TASK
export const deleteTask = async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
};

export default api;