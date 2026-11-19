import { useEffect,useState } from "react";
import { FaPenFancy,FaSmile, FaLock, FaCalendarAlt } from "react-icons/fa";

// const lines that gets typed on repeatatively.
const lines = [
   "Capture your thoughts, one entry at a time.",
  "Reflect on your day and track how you feel.",
  "Build a daily writing habit that lasts.",
  "Your private space. Your story.",
];
const features = [
    {
        icon: <FaPenFancy/>,
        title: "Distraction Free Writing",
        text: "A Cleaner Editor so that you can focus on your work rather than interface, "
    },
    {
        icon: <FaSmile />,
        title: "Mood Tracking",
        text: "Tag entry with how you feel and spot patterns over time."
    },
    {
        icon: <FaCalendarAlt/>,
        title: "Daily Streaks",
        text: "Gentle Reminder and streaks that helps you write consistently.",
    },
    {
        icon: <FaLock />,
        title: "Private by Default",
        text: "Your mistake are your alone. Nothing is shared unless you choose.",
    },
];
// typing a string , pauses, deletes it, then moves to the next one (forever)
function useTypewriter(texts, typeSpeed = 70, deleteSpeed = 35, pause = 1000){
    const [index,setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const full = texts[index];
        let delay = deleting ? deleteSpeed : typeSpeed;
        if(!deleting && text === full) delay * pause; // hold the finished line

        const timer = setTimeout(() => {
            if(!deleting && text === full){
                setDeleting(true);
            }
            else if( deleting && text === ""){
                setDeleting(false);
                setIndex((i) => (i +1 ) % texts.length);
            }
            else {
                setText(
                    deleting ? full.slice(0,text.length -1) : full.slice(0, text.length +1)
                );
            }
        }, delay);
        return () => clearTimeout(timer);
    },[text,deleting, index, texts, typeSpeed, deleteSpeed, pause ]);

    return text;
}
export default function About(){
    const typed = useTypewriter(lines);
   return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white/75 backdrop-blur rounded-3xl p-8 md:p-12 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          About <span className="text-indigo-600">Journal Entry</span>
        </h2>

        {/* Typing line: min-height stops the page from jumping while it types */}
        <p className="mt-6 min-h-[2.5rem] text-xl md:text-2xl text-center font-medium text-slate-700">
          {typed}
          <span className="typing-cursor">|</span>
        </p>

        <p className="mt-6 text-slate-600 text-center max-w-3xl mx-auto leading-relaxed">
          Journal Entry is a simple, private place to write about your days,
          ideas, and feelings. Whether you journal for self-reflection, stress
          relief, or creativity, the app makes it easy to start, keep going,
          and look back on how far you have come.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 p-5 rounded-2xl bg-yellow-100/80 hover:bg-yellow-200 transition"
            >
              <div className="text-2xl text-indigo-600 mt-1">{f.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Our intent</h3>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Writing regularly can bring clarity and calm. We built Journal Entry
            to make that habit effortless, so you can slow down, understand
            yourself better, and keep a record of the moments that matter.
          </p>
        </div>
      </div>
    </section>
  );

}