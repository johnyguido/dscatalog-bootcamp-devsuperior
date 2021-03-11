export type ProductsResponse = {
    content: Product[];
    totalPages: number;
}

export type Product = {

    id: number,
    name: string;
    price: number;
    imgUrl: string;
    date: string;
    description: string;
    categories: Category[];

}

export type Category = {

    id: number;
    name: string;

}