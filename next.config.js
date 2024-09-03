/** @type {import('next').NextConfig} */

const { withContentlayer } = require( 'next-contentlayer' )
const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    output: 'export',
}

module.exports = withContentlayer( { ...nextConfig } );