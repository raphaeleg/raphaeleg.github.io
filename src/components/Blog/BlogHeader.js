import React from 'react'
import Tag from "@/src/components/Elements/Tag";
import BlogImage from './BlogImage';

const BlogHeader = ( { blog } ) => {
    return (
        <div className="mb-8 text-center relative w-full h-[50vh] bg-dark">
            <div className="w-5/6 z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span>
                    {blog.tags.map( ( t, index ) => {
                        return (
                            <Tag
                                name={`#${( t )}`}
                                link={`/categories/${( t )}`}
                                className="px-6 mx-2 text-sm py-2"
                                isSolid={true}
                            />
                        );
                    } )}
                </span>

                <h1
                    className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative"
                >
                    {blog.title}
                </h1>

                {blog.isProject && (
                    <p className="inline-block mt-6 text-light text-l md:text-xl lg:text-2xl !leading-normal relative">
                        {blog.company} | {blog.lang} | {blog.period}
                    </p>
                )}
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
            <BlogImage blog={blog} staticAnim={true} />
        </div>
    )
}

export default BlogHeader