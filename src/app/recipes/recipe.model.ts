import { IngredientModel } from '../shared/ingredient.model';

export class Recipe {
    public description: string;

    constructor(public name: string,
                descr: string,
                public imagePath: string,
                public ingredients: IngredientModel[]) {
        this.description = descr;
    }
}

