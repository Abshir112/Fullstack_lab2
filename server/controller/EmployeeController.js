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

// Method to create a new employee
export const createEmployee = async (employee_id, full_name, email, hashed_password) => {
    const employee = new Employee({
        employee_id,
        full_name,
        email,
        hashed_password
    });
    return await employee.save();
};
