import { allBlogs } from "@/.contentlayer/generated"
import BlogHeader from "@/src/components/Blog/BlogHeader";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import TableOfContents from "@/src/components/Blog/TableOfContents";
import siteMetadata from "@/src/utils/siteMetaData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return allBlogs.map( ( blog ) => ( { slug: blog._raw.flattenedPath } ) );
}

export async function generateMetadata( { params } ) {
    const blog = allBlogs.find( ( blog ) => blog._raw.flattenedPath === params.slug );
    if ( !blog ) {
        return;
    }
    const publishedAt = new Date( blog.publishedAt ).toISOString();

    let imageList = [siteMetadata.socialBanner];
    if ( blog.image ) {
        imageList =
            typeof blog.image.filePath === "string"
                ? [siteMetadata.siteUrl + blog.image.filePath.replace( "../public", "" )]
                : blog.image;
    }
    const ogImages = imageList.map( ( img ) => {
        return { url: img.includes( "http" ) ? img : siteMetadata.siteUrl + img };
    } );
    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: siteMetadata.siteUrl + blog.url,
            siteName: siteMetadata.title,
            locale: siteMetadata.language,
            type: "article",
            publishedTime: publishedAt,
            modifiedTime: publishedAt,
            images: ogImages,
            authors: siteMetadata.title,
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description,
            images: ogImages,
        },
    };

}


export default function BlogPage( { params } ) {
    const blog = allBlogs.find( ( blog ) => blog._raw.flattenedPath === params.slug );
    if ( !blog ) { notFound() }

    let imageList = [siteMetadata.socialBanner];
    if ( blog.image ) {
        imageList =
            typeof blog.image.filePath === "string"
                ? [siteMetadata.siteUrl + blog.image.filePath.replace( "../public", "" )]
                : blog.image;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": blog.title,
        "description": blog.description,
        "image": imageList,
        "datePublished": new Date( blog.publishedAt ).toISOString(),
        "dateModified": new Date( blog.publishedAt ).toISOString(),
        "author": [{
            "@type": "Person",
            "name": siteMetadata.title,
            "url": siteMetadata.linkedin,
        }]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify( jsonLd ) }}
            />
            <article>
                <BlogHeader blog={blog} />
                <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
                    {blog.toc.length > 0 && <TableOfContents blog={blog} />}
                    <RenderMdx blog={blog} />
                </div>

            </article >
        </>
    );
}