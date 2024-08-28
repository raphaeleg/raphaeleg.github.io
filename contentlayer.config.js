import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

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
        tags: {
            type: 'list',
            of: { type: 'string' },
        }
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: ( doc ) => `/blogs/${doc._raw.flattenedPath}`,
        }
    }
} ) );

const codeOptions = {
    theme: 'nord', //nord, rose-pine-moon, everforest-dark, laserwave
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