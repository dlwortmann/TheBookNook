import { useState } from "react";
import type { UserLogin } from "../interfaces/userLogin";
//import { useRef } from "react";
import { useNavigate } from 'react-router-dom';


const UserLoginPage = () => {
// initialize state and setting it to an empty array of type userLogin
    const [formData, setFormData] = useState<UserLogin>({
        username: '',
        password: '',
    });
const [isRegistering, setIsRegistering] = useState(false); //State to toggle between login and registration
const [error, setError] = useState<string | null>(null); // keeps track of login error messages

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
            if (isRegistering) {
            // handle user registration
            console.log("Registering new user with", formData);
            //Add you login lofic here (e.g., API call to log in)
           
            }
        } catch (err) {
            setError(isRegistering ? "Registration failed, please try again." : "Login failed, please try again.")
            }
        };


// rendering form 
    return (
        <div className="login-container">
            <h1 className="text-xl font-bold mb-4">{isRegistering ? "Register" : "Login"}</h1>
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
                   {isRegistering ? "Register" : "Login"}
                </button>
            </form>
            <p className="mt-4">
                {isRegistering ? "Already have an account?" : "Don't have an account?"}
                <button onClick={() => setIsRegistering(!isRegistering)} className="text-blue-500 ml-1">
                    {isRegistering ? "Login" : "Register"}
                </button>
            </p>
        </div>
    );
};

export default UserLoginPage;
