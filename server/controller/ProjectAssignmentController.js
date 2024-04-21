import {ProjectAssignment} from '../model/ProjectAssignment.js';

// get all project assignment
export const getAllProjectAssignment = async function () {
    try {
        const projectAssignments = await ProjectAssignment.find();
        return projectAssignments;
    } catch (error) {
        console.log('Failed to fetch project assignments', error);
    }

};

// Method to create a new project assignment
export const createProjectAssignment = async function (employee_id, project_code, start_date) {
    const projectAssignment = new ProjectAssignment({
        employee_id,
        project_code,
        start_date
    });
    return await projectAssignment.save();
};
