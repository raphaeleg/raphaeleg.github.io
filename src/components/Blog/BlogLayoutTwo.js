import Link from "next/link";
import React from "react";
import BlogImage from "./BlogImage";

const BlogLayoutTwo = ( { blog } ) => {
    return (
        <div className="group grid grid-cols-12 gap-4 items-center text-dark">
            <Link
                href={blog.url}
                className=" col-span-12  lg:col-span-4 h-full rounded-xl overflow-hidden"
            >
                <BlogImage blog={blog} classes="aspect-square" />
            </Link>

            <div className="col-span-12  lg:col-span-8 w-full">
                <span className="inline-block w-full uppercase text-accent font-semibold text-xs sm:text-sm">
                    {blog.tags[0]}
                </span>
                <Link href={blog.url} className="inline-block my-1">
                    <h2 className="font-semibold capitalize text-base sm:text-lg">
                        <span
                            className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                        >
                            {blog.title}
                        </span>
                    </h2>
                </Link>

                <span className="inline-block w-full text-dark/80 text-xs sm:text-base">
                    {blog.desc}
                </span>
            </div>
        </div>
    );
};

export default BlogLayoutTwo