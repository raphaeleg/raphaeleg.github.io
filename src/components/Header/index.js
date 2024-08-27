import { LinkedinIcon, GithubIcon, ItchIcon } from '../Icons'
import Logo from './Logo'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="w-full p-4 px-10 flex items-center justify-between bg-light/80 backdrop-blur-sm">
            <Logo />
            <nav className="w-max py-3 px-8 font-medium capitalize flex items-end">
                <Link href="/" className="mx-4">Projects</Link>
                <Link href="/" className="mx-4">Blog</Link>
                <Link href="/" className="mx-4">Contact</Link>
                <Link href="/" className="mx-4">Resume</Link>
            </nav>
        </header>
    )
}

export default Header