import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const categorie = {
        id: uuidV4(),
        name,
        description,
        created_at: new Date(),
    };

    categories.push({
        name,
        description,
    });

    // return response.status(201).send('Categorie Created');
    return response.status(201).json(categorie);
});

export { categoriesRoutes };
