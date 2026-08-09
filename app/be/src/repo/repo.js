import {supabase} from '../config/supabase.js'


//GET
export const getAllTasks = async (search, status) => {

    let query = supabase
        .from("tasks")
        .select("*");

    // Search
    if (search) {
        query = query.ilike("title", `%${search}%`);
    }

    // Filter
    switch (status) {

        case "active":
            query = query.eq("active", true);
            break;

        case "inactive":
            query = query.eq("active", false);
            break;

        case "completed":
            query = query.eq("completed", true);
            break;

        case "all":
        default:
            break;
    }

    return await query.order("created_at", { ascending: false, });
};

//CREATE
export const createTask = async (task) => {
    return await supabase
    .from('tasks')
    .insert({
        title:task.title,
        description: task.description,
        completed: false,
        active: true
    })
    .select()
    .single()
}

//Update

export const updTask = async (id, task) => {
    
    return await supabase
    .from('tasks')
    .update({
        title: task.title,
        description: task.description
    })
    .eq('id',id)
    .select()
    .single()
}

//PATCH
//get taks by id
export const getTaskById = async (id) => {
    return await supabase
    .from('tasks')
    .select('*')
    .eq('id',id)
    .single();
}

//toggle task
export const toggleTask = async (id, completed) => {
    return await supabase
    .from('tasks')
    .update({
        completed,
        active: !completed
    })
    .eq('id', id)
    .select()
    .single()
}

//toggle activity
export const toggleActive = async(id, active) => {
    return await supabase
    .from('tasks')
    .update({active})
    .eq('id',id)
    .select()
    .single()
}


//DEL
export const delTask = async (id) => {
    return await supabase
    .from('tasks')
    .delete()
    .eq('id',id);
}