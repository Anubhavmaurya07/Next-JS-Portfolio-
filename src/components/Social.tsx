import Link from "next/link"
import {FaGithub, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa';

const socials = [
    {icon : <FaGithub />, path: ""},
    {icon : <FaLinkedin />, path: ""},
    {icon : <FaFacebook />, path: ""},
    {icon : <FaInstagram />, path: ""},
]

const Social = ({containerSyles, iconStyles}) => {
  return (
    <div className={containerSyles}>
        {socials.map((item, index) => (
            <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        ))}
    </div>
  )
}

export default Social