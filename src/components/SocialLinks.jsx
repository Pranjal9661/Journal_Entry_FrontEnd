import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function SocialLinks({
url = window.location.href, 
text = "I just wrote a new entry on Journal Entry!",
})
{
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(text);

    const links = [
        {
            name: "Instagram",
            icon: <FaInstagram />,
            href: "https://www.instagram.com/your_handle",
            hover: "hover:text-pink-500",
        },
        {
            name: "Facebook",
            icon: <FaFacebookF />,
            href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
            hover: "hover: text-blue-600",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn />,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
            hover: "hover:text-sky-700",
        },
        {
            name: "Twitter",
            icon: <FaTwitter/>,
            href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
            hover: "hover:text-sky-500",
        },
    ];
    return (
        <div className="flex items-center justify-center gap-5">
        {links.map((l) => (
            <a 
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={'Share on ${l.name}'}
            className={'text-2xl text-slate-700 transition hover:scale-110 ${1.hover}'} 
            >
                {l.icon}
            </a>
        ))}
        </div>
    );
}