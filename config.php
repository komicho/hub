<?php

return [
    'baseTitle' => 'كومتشو هاب',

    // 'baseUrl' => 'http://localhost:8000/',
    'baseUrl' => 'http://hub.komicho.com/',
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
