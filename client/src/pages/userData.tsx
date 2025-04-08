import { useState } from "react";
import type { UserData } from "../interfaces/userData";

const UserDataPage = () => {
    const [formData, setFormData] = useState<UserData>({
        id: null,
        email: null,
        username: null,
        password: null,
        favoriteMovies: [],
        favoriteBooks: [],
        reviews: [],
    });

    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'favoriteMovies' | 'favoriteBooks' | 'reviews') => {
        const { value } = e.target;
        setFormData(prev => ({
            ...prev,
            [type]: value.split(",").map(item => item.trim()),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!formData.email || !formData.username || !formData.password) {
            setMessage("All fields are required.");
            return;
        }
        console.log("Submitting user data:", formData);
        setMessage("User data submitted.");
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">User Form</h1>

            {message && <p className="text-blue-600 mb-2">{message}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email ?? ""}
                onChange={handleChange}
                />
                   <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username ?? ""}
                onChange={handleChange}
                />
                   <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password ?? ""}
                onChange={handleChange}
                />
                    <input
                type="text"
                name="favoriteMovies"
                placeholder="Favorite Movies"
                value={formData.favoriteMovies?.join(",") ?? ""}
                onChange={(e) => handleArrayChange(e, 'favoriteMovies')}
                />
                <input
                type="text"
                name="favoriteBooks"
                placeholder="Favorite Books"
                value={formData.favoriteBooks?.join(",") ?? ""}
                onChange={(e) => handleArrayChange(e, 'favoriteBooks')}
                />
                <input
                type="text"
                name="reviews"
                placeholder="Reviews"
                value={formData.reviews?.join(",") ?? ""}
                onChange={(e) => handleArrayChange(e, 'reviews')}
                />

                <button 
                type="submit"
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                > Submit </button>
            </form>

        </div>
    );
};

export default UserDataPage;