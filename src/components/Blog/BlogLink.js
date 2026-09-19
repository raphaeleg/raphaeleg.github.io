import React from 'react'

const BlogLink = ( { href, redirect, className, children } ) => {
    return (
        <>
            {( redirect.includes( "https://" ) )
                ? < a href={redirect} className={className} >
                    {children}
                </a >
                : <a href={href} className={className}>
                    {children}
                </a>
            }
        </>
    );
}

export default BlogLink