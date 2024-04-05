'use strict';

const path                  = require( 'path' );
const fs                    = require( 'fs' );
const getPublicUrlOrPath    = require( 'react-dev-utils/getPublicUrlOrPath' );

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
/**
 * absolute path to the app ( the project root )
 */
const appDirectory          = fs.realpathSync( process.cwd() );
/**
 * get an absolute path
 * @param {string} relativePath 
 * @returns 
 */
const resolveApp            = relativePath => path.resolve( appDirectory, relativePath );

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
    process.env.NODE_ENV === 'development',
    require( resolveApp( 'package.json' ) ).homepage,
    process.env.PUBLIC_URL
);

/**
 * path to the build folder. 'build' by default
 */
const buildPath = process.env.BUILD_PATH || 'build';

const moduleFileExtensions = [
    'web.mjs',
    'mjs',
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
];

// Resolve file paths in the same order as webpack
/**
 * Resolve file paths in the same order as webpack
 * @param {Function} resolveFn 
 * @param {string} filePath 
 * @returns 
 */
const resolveModule = ( resolveFn, filePath ) => {

    const extension = moduleFileExtensions.find( extension =>
        fs.existsSync( resolveFn( `${filePath}.${extension}` ) )
    );

    if ( extension ) {
        return resolveFn( `${filePath}.${extension}` );
    }

    return resolveFn( `${filePath}.js` );
};

// config after eject: we're in ./config/
module.exports = {
    /**
     * '.env' by default
     */
    dotenv: resolveApp( '.env' ),
    /**
     * '.' by default
     */
    appPath: resolveApp( '.' ),
    /**
     * 'build' by default
     */
    appBuild: resolveApp( buildPath ),
    appPublic: resolveApp( 'public' ),
    /**
     * 'public/index.html' by default
     */
    appHtml: resolveApp( 'public/index.html' ),
    /**
     * 'src/index' by default
     */
    appIndexJs: resolveModule( resolveApp, 'src/index' ),
    appPackageJson: resolveApp( 'package.json' ),
    /**
     * 'src' by default
     */
    appSrc: resolveApp( 'src' ),
    appTsConfig: resolveApp( 'tsconfig.json' ),
    appJsConfig: resolveApp( 'jsconfig.json' ),
    yarnLockFile: resolveApp( 'yarn.lock' ),
    testsSetup: resolveModule( resolveApp, 'src/setupTests' ),
    proxySetup: resolveApp( 'src/setupProxy.js' ),
    /**
     * 'node_modules' by default
     */
    appNodeModules: resolveApp( 'node_modules' ),
    /**
     * 'node_modules/.cache' by default
     */
    appWebpackCache: resolveApp( 'node_modules/.cache' ),
    appTsBuildInfoFile: resolveApp( 'node_modules/.cache/tsconfig.tsbuildinfo' ),
    swSrc: resolveModule( resolveApp, 'src/service-worker' ),
    publicUrlOrPath,
};


/**
 * supported extensions. ex) js, jsx, ts, tsx
 */
module.exports.moduleFileExtensions = moduleFileExtensions;
