<?php

return [
    'baseTitle' => 'كومتشو هاب',

    // 'baseUrl' => 'http://localhost:8000/',
    'baseUrl' => 'https://komichohub.github.io/',
    'production' => false,
    'collections' => [

        'posts' => [
            'path' => '{-category}/{-subcategory}/{filename}',
        ],

        'category' => [
            'path' => '{-slug}',
        ],

        'subcategory' => [
            'path' => '{-category}/{-slug}',
        ],

    ],
];
