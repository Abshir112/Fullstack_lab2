import {Project} from '../model/Project.js';

// get all project
export const getAllProject = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).send(error);
    }

};
// Method to create a new project
export const createProject = async (req, res) => {
    const { project_code, project_name, project_description } = req.body;
    try {
        const project = new Project({
            project_code,
            project_name,
            project_description
        });
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).send(error);
    }
};
