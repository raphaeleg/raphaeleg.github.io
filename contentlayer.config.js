import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import GithubSlugger from "github-slugger";

const Blog = defineDocumentType( () => ( {
    name: 'Blog',
    filePathPattern: '**/**/*.mdx',
    contentType: "mdx",
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        publishedAt: {
            type: 'date',
            required: true,
        },
        desc: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'image'
        },
        isPublished: {
            type: 'boolean',
            required: true,
        },
        redirect: {
            type: 'string',
            required: true,
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: ( doc ) => `/blogs/${doc._raw.flattenedPath}`,
        },
        toc: {
            type: "json",
            resolve: async ( doc ) => {

                const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
                const slugger = new GithubSlugger();
                const headings = Array.from( doc.body.raw.matchAll( regulrExp ) ).map( ( { groups } ) => {
                    const flag = groups?.flag;
                    const content = groups?.content;

                    return {
                        level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
                        text: content,
                        slug: content ? slugger.slug( content ) : undefined
                    }

                } )
                return headings;
            }
        }
    }
} ) );

const codeOptions = {
    theme: 'rose-pine-moon', //nord, rose-pine-moon, everforest-dark, laserwave
    grid: false,
}

export default makeSource( {
    contentDirPath: 'content',
    documentTypes: [Blog],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'append' }],
            [rehypePrettyCode, codeOptions]
        ]
    },
} );