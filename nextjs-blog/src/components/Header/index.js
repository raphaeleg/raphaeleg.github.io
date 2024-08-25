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
            <div>
                <a className="inline-block w-6 h-6 mr-4" href="https://www.linkedin.com/in/raphaele-michelle-guillemot-6a34271a8/"><LinkedinIcon
                    className="hover:scale-125 transition-all ease duration-200" /></a>
                <a className="inline-block w-6 h-6 mr-4" href="https://github.com/raphaeleg"><GithubIcon
                    className="hover:scale-125 transition-all ease duration-200" /></a>
                <a className="inline-block w-6 h-6 mr-4" href="https://raphaeleg.itch.io/"><ItchIcon
                    className="hover:scale-125 transition-all ease duration-200" /></a>
            </div>
        </header>
    )
}

export default Header