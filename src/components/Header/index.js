"use client";
import Logo from './Logo'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
    const [click, setClick] = useState( false );
    const toggle = () => setClick( !click );
    return (
        <header className="sticky z-20 w-full top-0 left-0 p-4 px-10 flex items-center bg-light-50 sm:bg-light/100 justify-between backdrop-blur-sm"
            style={{
                height: click ? "100vh" : "auto",
                width: click ? "100vw" : "100%",
                position: click ? "absolute" : "flex"
            }}
        >
            {!click && <Logo />}

            <button className="inline-block sm:hidden z-50 absolute top-6 right-10" onClick={toggle} aria-label="Hamburger Menu">
                <div className="w-6 cursor-pointer transition-all ease duration-300">
                    <div className="relative">
                        <span className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200"
                            style={{
                                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
                            }}
                        >&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200"
                            style={{
                                opacity: click ? 0 : 1
                            }}
                        >&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200"
                            style={{
                                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
                            }}
                        >&nbsp;</span>
                    </div>
                </div>
            </button>

            <nav className="text-center justify-center z-20 flex flex-col absolute sm:hidden w-full h-full font-medium capitalize items-end transition-all ease duration-300"
                style={{
                    right: click ? "0rem" : "-50rem"
                }}
            >
                <Link href="/" className="w-full py-5" onClick={toggle}>Home</Link>
                <Link href="/#home-game-projects" className="w-full py-5" onClick={toggle}>Projects</Link>
                <Link href="/categories/all" className="w-full py-5" onClick={toggle}>Blog</Link>
                <div href="" className="w-full py-5" onClick={() => {
                    window.scrollTo( 0, document.body.scrollHeight );
                    toggle();
                }}>Contact</div>
                <Link href="/Raphaele-Michelle-Guillemot-Resume.pdf" className="w-full py-5" target="_blank" onClick={toggle}>Resume</Link>
            </nav>

            <nav className="hidden sm:flex w-max py-3 px-8 font-medium capitalize items-end">
                <Link href="/#home-game-projects" className="mx-4">Projects</Link>
                <Link href="/categories/all" className="mx-4">Blog</Link>
                <div href="" className="mx-4 cursor-pointer" onClick={() => {
                    window.scrollTo( 0, document.body.scrollHeight );
                }}>Contact</div>
                <Link href="/Raphaele-Michelle-Guillemot-Resume.pdf" target="_blank" className="mx-4">Resume</Link>
            </nav>
        </header>
    )
}

export default Header