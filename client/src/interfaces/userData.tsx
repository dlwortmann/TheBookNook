export interface UserData {
    id: number | null;
    email: string | null;
    username: string | null;
    password?: string | null;
    favoriteMovies?: Array<{ id: number; title: string }>;
    favoriteBooks?: Array<{ id: number; title: string }>;
    reviews?: Array<{ id: number; content: string }>;
}