import { Category} from './category';

export class Book {
    author: string;
    category: Category;
    description: string;
    img: string;
    isbn?: number;
    price: number;
    title: string;
}