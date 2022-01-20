import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

/* Rota de criação de curso */
export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Dani Leão"
    });

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Diego"
    });

    return response.status(201).json({ message: "Course created with success" });
}