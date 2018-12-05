<?php

return [
    'baseUrl' => 'http://localhost:8000/',
    'production' => false,
    'collections' => [

        'posts' => [
            'path' => '{-category}/{filename}',
        ],

        'category' => [
            'path' => '{-slug}',
        ]

    ],
];
