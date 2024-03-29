import { Category } from '../model/Category';

// DTO (Data transfer object) - conceito de criar um objeto que será responsável pela trasferência de dados de uma camada/classe para outra da aplicação.
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
        console.log(this.categories);
    }
}

export { CategoriesRepository };
