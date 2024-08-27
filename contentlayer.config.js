import { makeSource, defineDocumentType } from '@contentlayer/source-files'


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

export default makeSource( {
    contentDirPath: 'content',
    documentTypes: [Blog],
} );