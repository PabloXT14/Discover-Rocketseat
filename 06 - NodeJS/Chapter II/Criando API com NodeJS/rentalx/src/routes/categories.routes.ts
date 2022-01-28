import { Router } from 'express';

import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const categorie = new Category();

    Object.assign(categorie, {
        name,
        description,
        created_at: new Date(),
    });

    categories.push(categorie);

    // return response.status(201).send('Categorie Created');
    return response.status(201).json(categorie);
});

export { categoriesRoutes };
