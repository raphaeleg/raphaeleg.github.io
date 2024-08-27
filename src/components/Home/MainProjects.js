import { sortBlogs } from '@/src/utils'
import React from 'react'
import BlogLayoutOne from "../Blog/BlogLayoutOne";

const MainProjects = ( { blogs } ) => {
    const sortedBlogs = sortBlogs( blogs );
    return (
        <section className="w-full py-8 sm:py-12 md:py-16 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
            <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark">Game Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-16 py-16">
                {sortedBlogs.slice( 1, 5 ).map( ( blog, index ) => {
                    return (
                        <article className=" col-span-1 row-span-1 relative">
                            <BlogLayoutOne blog={blog} />
                        </article>
                    );
                } )}
            </div>
        </section>
    )
}

export default MainProjects