import { Article } from "./Article";

export interface Categorie {
    id : number;
    nom : string;
}

const Categories: Categorie[] = [
    {
        id: 1,
        nom: "sport",
    },
    {
        id: 2,
        nom: "informatique",
        
    },
    {
        id: 3,
        nom: "vetements",
    },
]


export function getCategorieById(id: number) : Categorie {
        return Categories.find((categorie) => categorie.id === id)!;
}

export function getAllCategories() : Categorie[] {
    return Categories;

}