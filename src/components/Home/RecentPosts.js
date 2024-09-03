import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ( { blogs } ) => {
    const sortedBlogs = sortBlogs( blogs.filter( blog => {
        return !blog.tags.includes( "game" );
    } ) );
    return (
        <section className="w-full py-8 sm:py-12 md:py-16 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center bg-accentLight">
            <div className="w-full flex justify-between">
                <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
                    Recent Posts
                </h2>
                <Link
                    href="/categories/all"
                    className="inline-block font-medium text-accent underline underline-offset-2 text-base md:text-lg"
                >
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-16 py-16">
                {sortedBlogs.slice( 0, 6 ).map( ( blog, index ) => {
                    return (
                        <article key={index} className="col-span-1 row-span-1 relative">
                            <BlogLayoutThree blog={blog} />
                        </article>
                    );
                } )}
            </div>
        </section>
    );
};

export default RecentPosts;