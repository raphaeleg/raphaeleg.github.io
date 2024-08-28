import { allBlogs } from "@/.contentlayer/generated"
import BlogHeader from "@/src/components/Blog/BlogHeader";
import RenderMdx from "@/src/components/Blog/RenderMdx";

export default function BlogPage( { params } ) {

    const blog = allBlogs.find( ( blog ) => blog._raw.flattenedPath === params.slug );

    return (
        <article>
            <BlogHeader blog={blog} />
            <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
                <RenderMdx blog={blog} />
            </div>

        </article >
    );
}