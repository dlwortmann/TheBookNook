export interface UserData {
    id: number | null;
    email: string | null;
    username: string | null;
    password?: string | null;
    favoriteMovies?:string[];
    favoriteBooks?:string[];
    reviews?:string[];
}