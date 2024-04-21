import Router from 'express';
import { getAllEmployee, createEmployee } from '../controller/EmployeeController.js';
import { getAllProject, createProject } from '../controller/ProjectController.js';
import { getAllProjectAssignment, createProjectAssignment } from '../controller/ProjectAssignmentController.js';

const router = Router();

router.get('/employees', getAllEmployee);
router.post('/employees', createEmployee);

router.get('/projects', getAllProject);
router.post('/projects', createProject);

router.get('/project-assignments', getAllProjectAssignment);
router.post('/project-assignments', createProjectAssignment);

export default router;