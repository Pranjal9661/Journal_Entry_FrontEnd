import { NavBarMenu } from "../MockData/Data";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../assets/logo.svg";


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
    <li><a href="#" className="font-medium text-slate-700 hover:text-indigo-500">About</a></li>
    <li><a href="#" className="font-medium text-slate-700 hover:text-indigo-500">Pricing</a></li>
    <li><a href="#" className="font-medium text-slate-700 hover:text-indigo-500">Contact</a></li>
  </ul>
  <div className="flex items-center gap-4">
    <a href="#" className="font-medium text-slate-700 hover:text-indigo-500">Login</a>
    <a href="#" className="font-medium text-slate-700 hover:text-indigo-500">Register</a>
  </div>
</nav>
);
}