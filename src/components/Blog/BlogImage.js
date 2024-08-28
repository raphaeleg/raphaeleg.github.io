import React from 'react'
import Image from 'next/image'
import { cx } from '@/src/utils'

const BlogImage = ( { blog, staticAnim, classes } ) => {
    return (
        <Image
            src={blog.image.filePath.replace( "../public", "" )}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className={cx( "w-full h-full object-cover object-center",
                `${!staticAnim && "group-hover:scale-105 transition-all ease duration-300"}`,
                { classes }
            )}
            priority
            sizes="100vw"
        />
    )
}

export default BlogImage