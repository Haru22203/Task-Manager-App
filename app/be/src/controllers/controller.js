import * as taskService from '../services/services.js'

//GET
export const getTasks = async (req, res) => {
    try {

        const { search, status } = req.query;

        const { data, error } = await taskService.getTask(
            search,
            status
        );

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//CREATE
 export const newTask = async (req, res) => {

    try{
        const {data, error} = await taskService.newTask(req.body);

        if (error) {  return res.status(500).json({ error: error.message });  }

        res.status(201).json(data); 
    }
    
    catch (err) {   res.status(400).json({ error: err.message });   }
    
 }     


 //UPD
 export const updateTask = async (req, res) => {
    try {
        const { data, error } = await taskService.updTask(
            req.params.id,
            req.body
        );

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


//patch
export const toggleTask = async (req, res) => {
    try {
        const { data, error } = await taskService.toggleTasks(req.params.id);

        if (error) {
            return res.status(404).json({ error: error.message });
        }

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const toggleActive = async (req, res) => {
    try {
        const { data, error } =
            await taskService.toggleActivity(req.params.id);

        if (error) {
            return res.status(404).json({
                error: error.message,
            });
        }

        res.json(data);

    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};


//DEL
export const delTask = async (req, res) => {
    try {
        const { error } = await taskService.deleteTasks(req.params.id);

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.status(200).json({ message: "Task deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};