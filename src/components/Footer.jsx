import SocialLinks from "./SocialLinks";

export default function Footer(){
    return (
        <footer className="py-8 bg-yellow-400 text-slate-700">
            <SocialLinks/>
            <p className="mt-4 text-center text-sm">© 2026 Journal Entry</p>
        </footer>
    );
}