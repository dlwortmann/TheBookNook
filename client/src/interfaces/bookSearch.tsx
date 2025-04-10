import { Key } from "react";

export interface Book {
    id: Key | null | undefined;
    volumeInfo: any;
    isbn: string;
    title: string;
    releaseYear: number;
    author: string;
    genre: string;
}