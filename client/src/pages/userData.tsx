import { useState } from "react";
import type { UserData } from "../interfaces/userData";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
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
        setTimeout(() => {
            navigate('/profilePage');
        }
        , 1000); // Simulate a delay before navigating

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
                className="border p-2 rounded"
                />
                   <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username ?? ""}
                onChange={handleChange}
                className="border p-2 rounded"
                />
                   <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password ?? ""}
                onChange={handleChange}
                className="border p-2 rounded"
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
//make this page the create account page
//have it switch to the login page after pressing submit 