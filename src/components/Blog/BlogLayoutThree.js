import Link from "next/link";
import React from "react";
import BlogImage from './BlogImage';
import BlogLink from "./BlogLink";

const BlogLayoutThree = ( { blog } ) => {
    return (
        <div className="group flex flex-col items-center text-dark">
            <BlogLink href={blog.url} redirect={blog.redirect} className="h-full rounded-xl overflow-hidden">
                <BlogImage blog={blog} classes="aspect-[4/3]" />
            </BlogLink>

            <div className="flex flex-col w-full mt-4">
                <span className="uppercase text-accent font-semibold text-xs sm:text-sm">
                    {blog.tags[0]}
                </span>
                <BlogLink href={blog.url} redirect={blog.redirect} className="inline-block my-1">
                    <h2 className="font-semibold capitalize  text-base sm:text-lg">
                        <span
                            className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
                            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
                        >
                            {blog.title}
                        </span>
                    </h2>
                </BlogLink>

                <span className="text-black/80 text-sm sm:text-base">
                    {blog.desc}
                </span>
            </div>
        </div>
    );
};

export default BlogLayoutThree;