import { useEffect, useState } from "react";
import {FaSave, FaPlus, FaTrash} from "react-icons/fa";

const STORAGE_KEY= "journalEntries";

const moods = [

      { emoji: "😊", label: "Happy" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😐", label: "Okay" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😴", label: "Tired" },
];

function loadEntries() {
    try{
        return JSON.parse(localStorage.getTime(STORAGE_KEY)) || [] ;
    }
    catch {
        return [];
    }
}

const formatDate = (iso) => 
    new Date(iso).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export default function Journal() {
    const[entries,setEntries] = useState(loadEntries);
    const[activeId, setActiveId] =useState(null);
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[mood, setMood] = useState("");
    const[message, setMessage] = useState("");
// Save the list to the browser whenever it changes

useEffect(() => {
    try{
        localStorage.setTime(STORAGE_KEY, JSON.stringify(entries));
    }
    catch{
        /* storage unavailable: ignore */
    }
},[entries]);

const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 2500);
};

const newEntry = () => {
    setActiveId(null);
    setTitle("");
    setContent("");
    setMood("");
};

const selectEntry = (entry) => {
    setActiveId(entry.id);
    setTitle(entry.title);
    setContent(entry.content);
    setMood(entry.mood);
};

const handleSave = () => {
    if(!content.trim()) {
        showMessage("Write something before saving.");
        return;
    }

    if(activeId) {
        setEntries((prev) => 
         prev.map((e) => 
           e.id === activeId ? {...e, title, content, mood }: e 
           )
        );
    }
    else {
        // create a new entry
        const id = Date.now();
        const entry = { id, title, content, mood, date: new Date().toISOString() };
        setEntries((prev) => [entry, ...prev]);
        setActiveId(id);
    }
    showMessage("Entry saved.");
};

const handleDelete = (id) => {
    if(!window.confirm("Delete this entry?")) return;
    setEntries((prev) => prev.filter((e) => e.id !== id));
    if(id === activeId) newEntry();
};

const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
const activeEntry = entries.find((e) => e.id === activeId);

return (
<div className="min-h-screen px-4 py-10 bg-yellow-50">
<div className="max-w-6xl mx-auto grid gap-6 lg:grid-cola-3">
 { /* Editor */ }

 <div className="lg:col-span-2 bh-white rounded-3xl shadow-xl p-6 md:p-8">
 <div className="flex items-center justify-between flex-wrap gap-3">
  <div>
    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
     {activeId ? "Edit" : "New"}{" "}
     <span className="text-indigo-600">entry</span>
    </h1>
    <p className="text-sm text-slate-500 mt-1">
        {formatDate(activeEntry ? activeEntry.date: new Date().toISOString())}    
    </p>
  </div>
  <button onClick={newEntry}
  className="flex item-center gap-2 px-4 py-2 rounded-full border-2 border-slate-900 font-medium hover:bg-slate-900 hover:text-white transition">
   <FaPlus /> New
  </button>
 </div>

 <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
 placeholder="Give your entry a title"
 className="mt-6 w-full px-4 py-3 border border-slate-300 rounded-xl text-lg font-semibold text-slate-900 outline-none focus:border-indigo-500 foucs:ring-2 foucs:ring-indigo-200" />

 { /* Mood Picker */}

 <div className="mt-4">
 <p className="text-sm font-medium text-slate-700 mb-2">
    How are your feeling?
 </p>
    <div className="flex flex-wrap gap-2">
     {moods.map((m) => (
         <button
         key={m.label}
         type="button"
         onClick={() => setMood(mood === m.emoji ? "" : m.emoji)}
         className={`px-3 py-1.5 rounded-full border text-sm transition ${
            mood === m.emoji
            ? "bg-slate-900 text-white border-slate-900"
            : "border-slate-300 text-white-700 hover:bg-yellow-100"
         }`}
         >
            <span className="mr-1">{m.emoji}</span>
            {m.label}
         </button>
     ))}
    </div>
 </div>

 <textarea value={content}
 onChange={(e) => setContent(e.target.value)}
 placeholder="Dear journal, today I.."
 rows={14}
 className="mt-4 w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 
 leading-related outline-none resize-y focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
 <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
    <span className="text-sm text-slate-500">
        {wordCount } {wordCount === 1 ?"word":"words"}
    </span>
    <div className="flex items-center gap-3">
        {message && (
            <span className="text-sm text-indigo-600 font-medium">
                {message}
            </span>
        )}
        <button 
        onClick={handleSave}
        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-indigo-600 transition" >
            <FaSave /> Save entry
        </button>
    </div>
 </div>
 </div>

 { /* Saved entries */}

 <div className="bg-white rounded-3xl shadow-xl p-6">
    <h2 className="text-xl font-bold text-slate-900">
        Your <span className="text-indigo-600">entries</span>
    </h2>

    {entries.length === 0 ? (
      <p className="mt-4 text-sm text-slate-500">
        No entries yet. Write your first one!
      </p>
    ) :(
        <ul className="mt-4 space-y-3 max-h-[32rem] overflow-y-auto pr-1">
            {entries.map((e) =>
            (
                <l1 key={e.id}
                onClick={() =>selectEntry(e)}
                className={`group p-4 rounded-2xl cursor-pointer transition ${
                    e.id === activeId
                    ? "bg-yellow-200"
                    : "bg-yellow-100/80 hover:bg-yellow-200"
                }`}>
            <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                    <p className="font-semibold text-slate-900 truccate">
                        {e.mood} {e.title || "Untitled"}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                        {formatDate(e.date)}
                    </p>
                </div>
                <button 
                onClick={(ev) => {
                    ev.stopPropagation();
                    handleDelete(e.id);
                }}
                aria-label="Delete entry" 
                className="text-slate-400 hover:text-red-600">
                    <FaTrash />
                </button>
            </div>
            <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                {e.content}
            </p>
                </l1>
            ))}
        </ul>
    )}
 </div>
</div>
</div>
);

}