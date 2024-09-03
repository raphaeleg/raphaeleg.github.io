import Link from 'next/link'
import React from 'react'

const BlogLink = ( { href, redirect, className, children } ) => {
    return (
        <>
            {( redirect.includes( "https://" ) )
                ? < a href={redirect} className={className} >
                    {children}
                </a >
                : <Link href={href} className={className}>
                    {children}
                </Link>
            }
        </>
    );
}

export default BlogLink