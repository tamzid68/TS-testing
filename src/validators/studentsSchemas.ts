import {z} from 'zod';

export const studentSchema = z.object({
    id: z.number(),
    name: z.string(),
    age: z.number(),
    grade: z.string(),
    subjects: z.array(z.string()),
    isActive: z.boolean(),
});

export type student  = z.infer<typeof studentSchema>;