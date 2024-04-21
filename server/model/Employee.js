import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employee_id: {
        type: String,
        unique: true,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        
    }
});

export const Employee = mongoose.model('Employee', employeeSchema);




