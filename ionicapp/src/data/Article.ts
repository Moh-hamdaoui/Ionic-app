export interface Article {
    id : number;
    nom : string;
    description : string;
    prix: number;
    imageUrl : string;
    idCategory :number;
}

const Articles: Article[] = [
    {
        id : 1,
        nom : "Ballon",
        description: "Finale champions league 2007",
        prix: 500,
        imageUrl: "https://i.ebayimg.com/images/g/kQ8AAOSwOGZeFJUm/s-l1200.jpg",
        idCategory : 1
    },
    {
        id : 2,
        nom : "t-shirt",
        description: "Fc barcalone",
        prix: 200,
        imageUrl: "https://m.media-amazon.com/images/I/51zeCFrFJEL._AC_UY1000_.jpg",
        idCategory : 1
    },
    {
        id : 3,
        nom : "tennis",
        description: "Article d'origine",
        prix: 150,
        imageUrl: "https://www.fft.fr/sites/default/files/styles/image_16_9/public/150709mon_0668.jpg?itok=oodb1F6H",
        idCategory : 1
    },
    {
        id : 4,
        nom : "Pc",
        description: "Dell 11 eme generation",
        prix: 750,
        imageUrl: "https://static.fnac-static.com/multimedia/Images/49/E4/39/14/21208649-3-1541-3/tsp20221221182206/Ordinateur-portable-Dell-Latitude-7280-Core-i5-RAM-8Go-D-256Go-Windows-10-Reconditionne.jpg",
        idCategory : 2
    },
    {
        id : 5,
        nom : "Souris",
        description: "Asus windows 7",
        prix: 50,
        imageUrl: "https://www.bfmtv.com/comparateur/wp-content/uploads/2020/09/image_2-2-300x202.jpg",
        idCategory : 2
    },
    {
        id : 6,
        nom : "Clavier",
        description: "Clavier QWERTY",
        prix: 70,
        imageUrl: "https://images.frandroid.com/wp-content/uploads/2022/06/comment-changer-un-clavier-qwerty-en-azerty-02.jpg",
        idCategory : 2
    },
    {
        id : 7,
        nom : "Pontalon",
        description: "Pontalon Adidas",
        prix: 70,
        imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/183d3cbd21e64900bd2baf09010089b9_9366/Pantalon_a_3_bandes_Future_Icons_Noir_IC8254_21_model.jpg",
        idCategory : 3
    },
    {
        id : 8,
        nom : "casquette",
        description: "couleur rouge et de marque NIKE",
        prix: 30,
        imageUrl: "https://media2.chapellerie-traclet.com/50540-thickbox_default/casquette-baseball-strapback-golfer-rouge-nike.jpg",
        idCategory : 3
    },
    {
        id : 9,
        nom : "Robe",
        description: "Une robe rose pour les filles",
        prix: 100,
        imageUrl: "https://m.media-amazon.com/images/I/71muQ1JK+US._AC_UY780_.jpg",
        idCategory : 3
    }


]

export function getArticleByCategorie(idCategory: number) : Article[] {
    return Articles.filter((article) => article.idCategory === idCategory);
}

export function getArticleByName(name: string) : Article | undefined {
    return Articles.find((article) => article.nom === name)
}