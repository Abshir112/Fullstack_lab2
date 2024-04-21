import { Employee } from "../model/Employee.js";

// get all employee
export const getAllEmployee = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Method to create a new employee from req body
export const createEmployee = async (req, res) => {
    const { employee_id, full_name, email, hashed_password } = req.body;
    try {
        const employee = new Employee({
            employee_id,
            full_name,
            email,
            hashed_password
        });
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).send(error);
    }
}