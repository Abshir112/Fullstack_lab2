import express from 'express';
import dotenv from 'dotenv';
import router from './router/router.js';

dotenv.config();

const app = express();

// Serve static files
app.use(express.static('dist'));

// json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use('/api', router);

// // get all employee
app.get('', async (req, res) => {
    try {
        const employee = await getAllEmployee();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).send(error);
    }
});

// // Create a new employee
// app.post('', async (req, res) => {
//     const { employee_id, full_name, email, hashed_password } = req.body;
//     try {
//         const employee = await createEmployee(employee_id, full_name, email, hashed_password);
//         res.status(201).json(employee);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // get all project
// app.get('', async (req, res) => {
//     try {
//         const project = await getAllProject();
//         res.status(200).json(project);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // Create a new project
// app.post('', async (req, res) => {
//     const { project_code, project_name, project_description } = req.body;
//     try {
//         const project = await createProject(project_code, project_name, project_description);
//         res.status(201).json(project);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });
   
// // get all project assignment
// app.get('', async (req, res) => {
//     try {
//         const projectAssignment = await getAllProjectAssignment();
//         res.status(200).json(projectAssignment);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // Create a new project assignment
// app.post('', async (req, res) => {
//     const { employee_id, project_code, start_date } = req.body;
//     try {
//         const projectAssignment = await createProjectAssignment(employee_id, project_code, start_date);
//         res.status(201).json(projectAssignment);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

export default app
