import { NavBarMenu } from "../MockData/Data";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const linkStyle ="px-5 py-2 rounded-full font-medium text-slate-900 transition hover:bg-indigo-600 hover:text-white"

export default function NavBar(){
    return (
    <nav className="flex justify-between items-center px-8 py-4 bg-yellow-100 border-b border-slate-200">
  <div className="text-xl font-semibold text-slate-900 hover:text-indigo-500">
    <a href="#">
    <img src={logo} alt="Journal Entry" className="h-12" />
    </a>
  </div>
  <ul className="flex gap-2">
    <li><Link to="/"  className={linkStyle}>Home</Link></li>
    <li><Link to="/#services" className={linkStyle}>Services</Link></li>
    <li><Link to="/#about"  className={linkStyle}>About</Link></li>
    <li><Link href="/#pricing"  className={linkStyle}>Pricing</Link></li>
    <li><Link href="/#contact"  className={linkStyle}>Contact</Link></li>
  </ul>
  <div className="flex items-center gap-2 px-2 py-1 border-2 border-slate-900 rounded-full">
     <Link to="/login" className="px-4 py-1.5 font-medium text-slate-900 hover:text-indigo-600">Login</Link>
     <Link to="/register" className="px-4 py-1.5 font-medium rounded-full bg-slate-900 text-white hover:bg-indigo-600">Register</Link>
  </div>
</nav>
);
}