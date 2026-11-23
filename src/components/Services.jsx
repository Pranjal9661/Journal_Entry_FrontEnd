import {Link} from "react-router-dom";
import {
    FaBookOpen,
    FaSmile,
    FaLightbulb,
    FaSearch,
    FaShieldAlt,
    FaShareAlt,
} from "react-icons/fa";

const services = [
{
    icon: <FaBookOpen/>,
    title: "Daily Journaling",
    text: "Write your thoughts in a clean, distraction-free editor, any time of the day.",
},
{
    icon: <FaSmile/>,
    title: "Mood Tracking",
    text: "Tag each entry with how you feel and see how your mood changes over time.",
},
{
    icon: <FaLightbulb />,
    title: "Writing Prompts",
    text: "Not sure what to write? Guided prompts help you start on any day.",
},
{
    icon: <FaSearch/>,
    title: "Search & Tags",
    text: "Find any past entries quickly by keyword, date or tags.",
},
{
    icon: <FaShieldAlt />,
    title: "Search a Tags",
    text: "Find any past entry quickly by keyword, date, or tag.",
},
{
    icon: <FaShareAlt/>,
    title: "Share Your Entries",
    text: "Post selected entries to FaceBook, LinkedIn, or Twitter with one click.",
},
];

export default function Services() {
    return (
        <section id="services" className="scroll-mt-20 px-6 py-20">
            <div className="max-w-6xl mx-auto bg-white/75 backdrop-blur rounded-3xl p-8 md:p-12 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
                    Our <span  className="text-indigo-600">Services</span>
                </h2>
                <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
                    Everything you need to write regularly, reflect honestly, and keep your memories safe.
                </p>
                <div className="mt-12 grid gap-6 sm:grid-cola-2 lg:grid-cola-3">
                    {services.map((s) => (
                        <div key={s.title}
                        className="p-6 rounded-2xl bg-yellow-100/80 hover:bg-yellow-200 hover:-translate-y-1 hover:shadow-md transition">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-yellow-300 text-xl">
                         {s.icon}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-slate-900">
                        {s.title}    
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 loading-relaxed">
                         {s.text}    
                        </p>         
                      </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link to="/register" className="inline-block px-8 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-indigo-600 transition">
                    Get started
                    </Link>
                </div>
            </div>
        </section> 
    );
}