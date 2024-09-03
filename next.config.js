/** @type {import('next').NextConfig} */

const { withContentlayer } = require( 'next-contentlayer' )
const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
}

module.exports = withContentlayer( { ...nextConfig } );