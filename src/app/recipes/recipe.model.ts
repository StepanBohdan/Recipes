export class Recipe {
    public description: string;

    constructor(public name: string, descr: string, public imagePath: string) {
        this.description = descr;
    }
}

