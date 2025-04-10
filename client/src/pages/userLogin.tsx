import { useState } from "react"; 
import type { UserLogin } from "../interfaces/userLogin"; 
import { useNavigate } from 'react-router-dom'; 

const UserLoginPage = () => { 
    const navigate = useNavigate(); // Initialize navigate

    // Initialize state and set it to an empty object of type UserLogin 
    const [formData, setFormData] = useState<UserLogin>({ username: '', password: '' }); 
    // Keeps track of login error messages 
    const [error, setError] = useState<string | null>(null); 

    // Updates correct data and keeps other values unchanged 
    // Triggered when user types into username/password fields 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const { name, value } = e.target; 
        setFormData(prev => ({ ...prev, [name]: value })); 
    }; 

    // Prevent page refresh and resets previous errors 
    const handleSubmit = async (e: React.FormEvent) => { 
        e.preventDefault(); 
        setError(null); 

        // Basic form validation 
        if (!formData.username || !formData.password) { 
            setError("Username and password required."); 
            return; 
        } 

        try { 
            console.log("Logging in with", formData); 
            // Here you would typically call an API to log in
            // If successful, navigate to the profile page
            navigate('/profilePage'); 
        } catch (err) { 
            setError("Login failed, please try again."); 
        }
    }

    // Function to handle the create account button click
    const handleClick = () => {
        navigate('/createAccount');
    };

    // Rendering form
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
                <button type="submit" className="bg-blue-500 text-white p-2 rounded"> 
                    Login 
                </button> 
            </form> 
            <button onClick={handleClick} className="mt-4">Create Account</button>
        </div> 
    ); 
};

export default UserLoginPage;