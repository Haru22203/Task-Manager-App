import * as taskRepo from '../repo/repo.js'

//GET
export const getTask = async (search, status) => {
    return await taskRepo.getAllTasks(search, status);
}

//CREATE
export const newTask = async (task) => {
    

    if(!task.title?.trim()){
        throw new Error('TITLE is Required')
    }

    return await taskRepo.createTask(task);
}

//UPDATE

export const updTask = async (id, task) => {
    if(!task.title?.trim()){
        throw new Error('Title is Required')
    }

    return await taskRepo.updTask(id, task);
}


//patch
export const toggleTasks = async (id) => {
    const {data, error} = await taskRepo.getTaskById(id);

    if (error){  return {data: null, error}}

    return await taskRepo.toggleTask(id, !data.completed);
}

export const toggleActivity = async (id) => {
    const { data, error } = await taskRepo.getTaskById(id);

    if (error) {
        return { data: null, error };
    }

    return await taskRepo.toggleActive(id, !data.active);
};
//gets the task, reads current 'completed', 'active' value then saves the opposite


//DEL
export const deleteTasks =async (id) => {
     return await taskRepo.delTask(id);
}