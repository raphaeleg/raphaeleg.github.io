import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import { slug } from "github-slugger";
import BlogImage from './BlogImage';

const BlogLayoutOne = ( { blog } ) => {
    return (
        <Link href={blog.url} className="group inline-block overflow-hidden rounded-xl w-full h-full">
            <div
                className="absolute top-0 left-0 bottom-0 right-0 h-full
                bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10"
            />
            <BlogImage blog={blog} classes="rounded-xl" sizes={"(max-width:1024px) 60vw, 100vw"} />

            <div className="w-full h-full sm:h-auto absolute bottom-0 p-4 xs:p-6 sm:p-10 z-10">
                <Tag isSolid={true} link={`/categories/${slug( blog.tags[0] )}`} name={blog.tags[0]}
                    className="px-6 text-xs  sm:text-sm py-1 sm:py-2 !border "
                />
                <Link href={blog.url} className="mt-6">
                    <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
                        <span
                            className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
                            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                        >
                            {blog.title}
                        </span>
                    </h2>
                </Link>
                <p className="text-sm xs:text-base sm:text-l md:text-xl text-light/80 mt-6 sm:mt-4">
                    {blog.desc}
                </p>
            </div>
        </Link>
    );
};
export default BlogLayoutOne