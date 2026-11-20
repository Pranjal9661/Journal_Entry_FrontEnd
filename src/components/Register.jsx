import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { FaUser,FaEnvelope , FaLock, FaEye , FaEyeSlash, FaClock } from "react-icons/fa";

export default function Register() {

const navigate = useNavigate();
const [userName, setUserName ] = useState("");
const [userEmail, setUserEmail ] = useState("");
const [ userPassword, setUserPassword ] = useState("");
const [ confirmPassword, setConfirmPassword ] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [ error, setError] =  useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!userName.trim() || !userEmail.trim() || !userPassword || !confirmPassword){
        setError("Please fill in all the fields.");
        return;
    }

    if(!/^\S+@\S+\.\S+$/.test(userEmail)){
        setError("Please enter a valid email address. ");
        return;
    }
    if(userPassword.length < 6){
        setError("Password must be at least 6 characters. ");
        return;
    }
    if(userPassword!=confirmPassword){
        setError("Passwords do not match.");
        return;
    }

    setError("");
    // TODO: send {userName, userEmail, userPassword } to your backend here
     alert(`Account created for ${userName}!`);
     navigate("/login");
};

const fieldBox = 
"flex items-center gap--3 px-4 py-3 border -border-slate-300 rounded-xl focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200";
return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-yellow-50" >
    <div className="w-full max-w-md bh-white rounded-3xl shadow-xl p-8">
    <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-slate-900">
    Create Your <span className="text-indigo-600">account</span>
    </h1>
    <p className="mt-2 text-slate-500">
        Start your Journal Entry today.
    </p>
    </div>

    <form onSubmit={handleSubmit} className="spacey-y-5">
    {/* Username */}
     <div>
        <label htmlFor="userName" className="block mb-1 text-sm font-medium text-slate-700">
            Username        
        </label>
     <div className="{fieldBox}">
      <FaUser className="text-slate-400" />
      <input 
      id="userName"
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Choose a username"
      autoComplete="username"
      className="w-full outline-none bg-transparent text-slate-900" />
     </div>
     </div>

     {/* Email */}
      <div> 
       <label htmlFor="userEmail" className="block mb-1 text-sm font-medium text-slate-700">
       Email
       </label>
       <div className="{fieldBox}">
        <FaEnvelope className="text-slate-400" />
        <input 
        id="userEmail"
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="you@example.com"
        autoComplete="email"
        className="w-full outline-none bg-transparent text-slate-900"/>
       </div>
      
      </div>
      {/* Password */}

      <div>
        <label htmlFor="userPassword" className="block mb-1 text-sm font-medium text-slate-700">
        Password
        </label>
        <div className="{fieldBox}">
        <FaLock className="text-slate-400" />
        <input 
        id="userPassword"
        type={showPassword ? "text" : "password"}
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        placeholder="At least 6 characters"
        autoComplete="new-password"
        className="w-full outline-none bg-transparent text-slate-900" />
        <button
         type="button"
         onClick={() => setShowPassword ((s) =>!s)}
         aria-label={showPassword ? "Hide password" : "Show Password"}
         className="text-slate-400 hover:text-indigo-600" >
            {showPassword ? <FaEyeSlash/> : <FaEye />}         
         </button>
        </div>    
      </div>

      {/* Confirm Password*/}

      <div>
      <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-slate-700">
       Confirm password
      </label>
      <div className="{fieldBox}" >
      <FaLock className="text-slate-400" />
      <input 
       id="confirmPassword"
       type={showPassword ? "text" : "password"}
       value={confirmPassword}
       onChange={(e) => setConfirmPassword(e.target.value)}
       placeholder="Re-enter your password"
       autoComplete="new-password"
       className="w-full outline-none bh-transparent text-slate-900" />
       </div>
       </div>
       

       {error && (

        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
            {error}
        </p>
       )}

       <button
       type="submit"
       className="w-full py-3 rounded-xl bh-slate-900 text-white font-semibold hover:bg-indigo-600 transition">
        Register
       </button>
    </form>

    <p className="mt-6 text-center text-sm text-slate-500">
     Already have an account?{" "}
       <Link to="/login" className="text-indigo-600 font-medim hover:underline">
       Login
       </Link>
    </p>
    </div>
    </div>
    );
}