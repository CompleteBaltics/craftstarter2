<?php

return [
    // Global settings
    '*' => [
        // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
        'useDevServer' => false, // we set it to true here or else server array is used. We set useDevServer false in live and staging
        // The JavaScript entry from the manifest.json to inject on Twig error pages
        'errorEntry' => '',
        'useAbsoluteUrl' => true,
        // Manifest file names
        'manifest' => [
            // 'legacy' => 'manifest-legacy.json',
            'legacy' => 'manifest.json', // we are only using one manifest/build
            'modern' => 'manifest.json',
        ],
        // Public server config
        'server' => [
            'manifestPath' => '@webroot/dist/',
            'publicPath' => '/',
        ],
        // webpack-dev-server config
        'devServer' => [
            'manifestPath' => getenv('DEFAULT_MANIFEST_URL'),
            'publicPath' => getenv('DEFAULT_MANIFEST_URL'),
        ],
        // Local files config
        'localFiles' => [
            'basePath' => '@webroot/',
            'criticalPrefix' => 'dist/criticalcss/',
            'criticalSuffix' => '_critical.min.css',
        ],
    ],
    // Live (production) environment
    'production' => [
        
    ],
    // Staging (pre-production) environment
    'staging' => [
        
    ],
    // Local (development) environment
    'dev' => [
        // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
        'useDevServer' => true
    ],
];
