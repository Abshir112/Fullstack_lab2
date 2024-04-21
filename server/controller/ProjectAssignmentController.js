import {ProjectAssignment} from '../model/ProjectAssignment.js';

// get all project assignment
export const getAllProjectAssignment = async (req, res) => {
    try {
        const projectAssignments = await ProjectAssignment.find();
        res.status(200).json(projectAssignments);
    } catch (error) {
        res.status(500).send(error);
    }

};

// Method to create a new project assignment
export const createProjectAssignment = async (req, res) => {
  const { employee_id, project_code, start_date } = req.body;
    try {
        const projectAssignment = new ProjectAssignment({
        employee_id,
        project_code,
        start_date
        });
        await projectAssignment.save();
        res.status(201).json(projectAssignment);
    } catch (error) {
        res.status(500).send(error);
    }
};