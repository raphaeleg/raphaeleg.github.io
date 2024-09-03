import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/">
            <p className="text-sm md:text-lg lg:text-lg">
                <b>
                    Raphaele G.
                </b>
            </p>
        </Link>
    )
}

export default Logo