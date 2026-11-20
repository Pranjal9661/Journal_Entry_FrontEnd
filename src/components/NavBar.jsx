import { NavBarMenu } from "../MockData/Data";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";



export default function NavBar(){
    return (
    <nav className="flex justify-between items-center px-8 py-4 bg-yellow-100 border-b border-slate-200">
  <div className="text-xl font-semibold text-slate-900 hover:text-indigo-500">
    <a href="#">
    <img src={logo} alt="Journal Entry" className="h-12" />
    </a>
  </div>
  <ul className="flex gap-10">
    <li><a href="#" className="font-medium text-slate-700 hover:text-indigo-500">Home</a></li>
    <li><a href="#" className="font-medium text-slate-700 hover:text-indigo-500">Services</a></li>
    <li><a href="#about" className="font-medium text-slate-700 hover:text-indigo-500">About</a></li>
    <li><a href="#" className="font-medium text-slate-700 hover:text-indigo-500">Pricing</a></li>
    <li><a href="#" className="font-medium text-slate-700 hover:text-indigo-500">Contact</a></li>
  </ul>
  <div className="flex items-center gap-2 px-2 py-1 border-2 border-slate-900 rounded-full">
     <Link to="/login" className="px-4 py-1.5 font-medium text-slate-900 hover:text-indigo-600">Login</Link>
     <a href="#" className="px-4 py-1.5 font-medium rounded-full bg-slate-900 text-white hover:bg-indigo-600">
       Register
     </a>
  </div>
</nav>
);
}