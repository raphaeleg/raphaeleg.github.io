import { sortBlogs } from '@/src/utils'
import React from 'react'
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import Link from "next/link";

const MainProjects = ( { blogs } ) => {
    const sortedBlogs = sortBlogs( blogs.filter( blog => {
        return blog.tags.includes( "game" );
    } ) );
    return (
        <section id="home-game-projects" className="w-full py-8 sm:py-12 md:py-16 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
            <div className="w-full flex justify-between">
                <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
                    Game Projects
                </h2>
                <Link
                    href="/categories/game"
                    className="inline-block font-medium text-accent underline underline-offset-2 text-base md:text-lg"
                >
                    View More
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-16 py-16">
                {/* {sortedBlogs.slice( 0, 4 ).map( ( blog, index ) => {
                    return (
                        <article className="col-span-1  row-span-1 relative grid-cols-1 lg:grid-cols-2">
                            <BlogLayoutOne blog={blog} />
                        </article>
                    );
                } )} */}
                <article className="col-span-1  row-span-1 relative grid-cols-1 lg:grid-cols-2">
                    <BlogLayoutOne blog={sortedBlogs[4]} />
                </article>
                <article className="col-span-1  row-span-1 relative grid-cols-1 lg:grid-cols-2">
                    <BlogLayoutOne blog={sortedBlogs[1]} />
                </article>
                <article className="col-span-1  row-span-1 relative grid-cols-1 lg:grid-cols-2">
                    <BlogLayoutOne blog={sortedBlogs[2]} />
                </article>
                <article className="col-span-1  row-span-1 relative grid-cols-1 lg:grid-cols-2">
                    <BlogLayoutOne blog={sortedBlogs[0]} />
                </article>
            </div>
        </section>
    )
}

export default MainProjects