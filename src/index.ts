import express, { Request, Response } from 'express';
import { student } from './types/student';
import { studentSchema } from './validators/studentsSchemas';

const app = express();
const port = 3000;

app.use(express.json());

const student_data: student = {
    id: 1,
    name: 'ASM Tamzid',
    age: 20,
    grade: 'A',
    subjects: ['Math', 'Science', 'DSA'],
    isActive: true,
};

app.get('/', (req: Request, res: Response) => {
    res.json(student_data);
});

app.post('/student', (req: Request, res: Response) => {
    const parseResult = studentSchema.safeParse(req.body);

    if (!parseResult.success) {
        return res.status(400).json({
            message: 'Invalid student data',
            errors: parseResult.error.errors,
        });
    }

    const newStudent = parseResult.data;

    res.status(201).json({
        message: 'Student data received successfully',
        student: newStudent,
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});