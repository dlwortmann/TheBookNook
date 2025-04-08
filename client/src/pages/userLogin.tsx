import { useState } from "react";
import type { UserLogin } from "../interfaces/userLogin";

const UserLoginPage = () => {

// initialize state and setting it to an empty array of type userLogin
    const [formData, setFormData] = useState<UserLogin>({
        username: null,
        password: null,
    });
// keeps track of login error messages
    const [error, setError] = useState<string | null>(null);
// updates correct data and keeps other values unchanged 
// triggered when user types into username/password fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };
// prevent page refresh and resets previous errors
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

//basic form validation
        if (!formData.username || !formData.password) {
            setError("Username and password required.");
            return;
        }
        try {
            console.log("Logging in with", formData);
        } catch (err) {
            setError("Login failed, please try again.");
        }
    };
// rendering form 
    return (
        <div className="login-container">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
                <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username ?? ""}
                onChange={handleChange}
                className="border rounded p-2"
                />
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password ?? ""}
                onChange={handleChange}
                className="border rounded p-2"
                />
                <button type = "submit" className="bg-blue-500 text-white p-2 rounded">
                   Login
                </button>

            </form>
        </div>
    );
};

export default UserLoginPage;