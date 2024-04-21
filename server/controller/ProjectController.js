import {Project} from '../model/Project.js';

// get all project
export const getAllProject = async function () {
    try {
        const projects = await Project.find();
        return projects;
    } catch (error) {
        console.log('Failed to fetch projects', error);
    }

};

// Method to create a new project
export const createProject = async function (project_code, project_name, project_description) {
    const project = new Project({
        project_code,
        project_name,
        project_description
    });
    return await project.save();
};
