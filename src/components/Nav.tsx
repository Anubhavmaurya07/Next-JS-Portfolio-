'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
    {
        name : "home",
        path : "/",
    },
    {
        name : "services",
        path : "/services",
    },
    {
        name : "resume",
        path : "/resume",
    },
    // {
    //     name : "projects",
    //     path : "/projects",
    // },
    {
        name : "contact",
        path : "/contact",
    },
]

const Nav = () => {
    const pathName = usePathname();
  return (
    <nav className="flex justify-center gap-8">
        {links.map((link, index) => (
            <Link href={link.path} key={index} 
            className={`${link.path === pathName && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}>
                {link.name}
            </Link>
        ))}
    </nav>
  )
}

export default Nav