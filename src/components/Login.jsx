import {useState} from "react";
import {FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [showPassword, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop the page from reloading
        if(!userName,trim() || !userPassword){
            setError("Please enter both username and password");
            return;
        }
        if(userPassword.length<6){
            setError("Password must be at least 6 characters.");
            return;
        }
        setError("");
        // TODP: sen {userName,userPassword } to your backend here
        // eg. fetch("/api/login", {mehtod: "POST", body: JSON.Stringify(({....}))})
        alert('Welcome back, ${uerName}!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-yellow-50">
        <div className="w-full max-w-md bh-white rounded-3xl shadow-xl p-8">
        <div className="test-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
            Welcome <span className="text-indigo-600">back</span>        
        </h1>
        <p className="mt-2 text-slate-500">
        Log in to continue your Journal Entry.
        </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
        { /* Usernmae */ }
        <div>
           <label htmlFor="userName" className="block mb-1 text-sm font-medium text-slate-700">
                Username           
           </label>
           <div className="flex items-center gap-3 px-4 py-3 border border-slate-300 rounded-xl
           focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200">
           <FaUser className="text-slate-400"/>
           <input id="userName" type="text" value={userName} 
           onChange={(e) => setUserName(e.target.value)}
           placeholder="Enter your username"
           autoComplete="username"
           className="w-full outline-none bg-transperent text-slate-900"/>

           </div>
        </div>
         { /* Password */ }
        <div>
            <label htmlFor="userPassword" className="block mb-1 text-sm font-medium text-slate-700">
                Password
            </label>
            <div className="flex items-center gap-3 px-4 py-3 border border-slate-300 rounded-xl
           focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200">
            <FaLock className="text-slate-400"/>
            <input 
            id="userPassword"
            type={showPassword ? "text" : "password"}
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.vallue)}
            placeholder="Enter your password"
            autoComplete="current-password"
            className="w-full outline-none bh-transparent text-slate-900"/>
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              className="text-slate-400 hover:text-indigo-400">
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
              </button>
            </div>
            </div>
            {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                    {error}                
                </p>
            )}

            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="accent-indigo-600"/>
                    Remember me
                </label>
                <a href="#" className="text-indigo-600 hover:uderline">
                    Forget password
                </a>
            </div>
            <button
            type="submit"
            className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-indigo-600 transition">
                Login
            </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
           <Link to="/register" className="text-indigo-600 font-medium hover:underline">
            Register
           </Link>
        </p>

        </div>
        </div>
    );
}