const mix = require('laravel-mix');



mix.js('src/js/random.js', 'public')

.sass('src/css/random.scss', 'public');