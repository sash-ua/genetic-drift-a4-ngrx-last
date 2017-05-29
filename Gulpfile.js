'use strict';

var gulp = require('gulp'),
    //gulpif = require('gulp-if'),
    fs = require('fs'),
    watch = require('gulp-watch'),
    gzip = require('gulp-gzip'),
    autoprefixer = require('gulp-autoprefixer'),
    // uglify = require('gulp-uglify'),
    // sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-clean-css'),
    // uncss = require('gulp-uncss'),
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    //ignore = require('gulp-ignore'),
    //rimraf = require('rimraf'),
    gulpRimraf = require('gulp-rimraf'),
    // gSvg2png = require('gulp-svg2png' ),
    svgSprite = require('gulp-svg-sprite'),
    sass = require('gulp-sass'),
    remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul'),
    //concat = require('gulp-concat' ),
    browserSync = require('browser-sync'),
    // lightServ = require('light-server'),
    reload = browserSync.reload;

var path = {
    // Origin folder with img-s for svg sprite
    sprites: {
        spritesOrigin: 'sprites/**/*.svg'
    },
    aot: {
        style: 'aot/style/',
        dist: 'aot/dist/*.js',
        build: 'aot/dist'
    },
    // Builds
    compiled: {
        style: 'style/',
        fonts: 'aot/'
    },
    // Sources
    src: {
        sass: 'sass/main.scss',
        fonts: 'fonts/'
    },
    // Watch for...
    watch: {
        sass: 'sass/**/*.scss',
        fonts: 'fonts/**/*.*',
        build: 'aot/dist/**/*.js',
        
    },
    // Remove folder
    clean: {
        app:'aot/app/**/*.*',
        dist:'aot/dist/**/*.*'
    }
};
var copyDistFiles = function(){
    var resources = [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.min.js',
        'template/index.html'
    ];
    resources.map(function(f) {
        var path = f.split('/');
        var t = 'aot/' + path[path.length-1];
        fs.createReadStream(f).pipe(fs.createWriteStream(t));
    });
};
    gulp.task('copyDist:aot', copyDistFiles);

    gulp.task('remap-istanbul', function () {
        return gulp.src('coverage-final.json')
            .pipe(remapIstanbul())
            .pipe(gulp.dest('coverage-remapped.json'));
    });

    gulp.task('css', function () {
    return gulp.src(path.src.sass)
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer({
        //    browsers: ['> 2%'],
        //    cascade: false
        //}))
        .pipe(gulp.dest(path.compiled.style))
        .pipe(gulp.dest(path.aot.style))
        .pipe(reload({stream: true}));
});

gulp.task('css:aot', function () {
    return gulp.src(path.src.sass)
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer({
        //    browsers: ['> 1%'],
        //    cascade: false
        //}))
        .pipe(gulp.dest(path.compiled.style))
        // .pipe(uncss({
        //     html: ['index.html'],
        //     ignore       : ['#added_at_runtime', /test\-[0-9]+/],
        //     timeout      : 1000,
        // }))
		.pipe(cssmin())
		.pipe(gulp.dest(path.aot.style))
        .pipe(reload({stream: true}));
});

// Copy fonts to build
gulp.task('fonts', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.compiled.fonts))
});

gulp.task('gzip', function(){
    return gulp.src(path.aot.dist)
        .pipe(gzip({ append: true }))
        .pipe(gulp.dest(path.aot.build))
});

//Watcher's preset for 'dev'.
gulp.task('watch', function(){
    watch([path.watch.sass], function() {
        gulp.start('css');
    });
    watch([path.watch.fonts], function() {
        gulp.start('fonts');
    });
});

gulp.task('watch:aot', function(){
    watch([path.watch.sass], function() {
        gulp.start('css:aot');
    });
    watch([path.watch.build], function() {
        gulp.start('gzip');
    });
    watch([path.watch.fonts], function() {
        gulp.start('fonts');
    });
});

// Browser synchronization
var config = {
    "server": {
        "baseDir": "./",
        "host": "localhost"
    },
    // Tunnel freq. sourse of errors, use for presentation only
    tunnel: false,
    "files": ["**/*.{html,htm,css,js}"],
    port: 3000,
    logPrefix: "Frontend_Devil",
    "ui": {
        "port": 3001
    }
};
gulp.task('webserver', function () {
    browserSync(config);
});

var configAOT = {
    "port": 8000,
    "files": ["./aot/**/*.{html,htm,css,js}"],
    "server": {
        "baseDir": "./aot",
        "host": "localhost"
    },
    "ui": {
        "port": 8001
    }
};
gulp.task('webserver:aot', function () {
    browserSync(configAOT);
});
var configReports = {
    "port": 8002,
    "files": ["./reports/**/*.{html,htm,css,js}"],
    "server": {
        "baseDir": "./reports",
        "host": "localhost"
    },
    "ui": {
        "port": 8003
    }
};

var configCoverage = {
    "port": 8004,
    "files": ["./reports/coverage/**/*.{html,htm,css,js}"],
    "server": {
        "baseDir": "./reports/coverage",
        "host": "localhost"
    },
    "ui": {
        "port": 8005
    }
};

gulp.task('webserver:test', function () {
    browserSync.create('proxy1').init(configReports);
    browserSync.create('proxy2').init(configCoverage);
});

gulp.task('clean:aot', function (cb) {
	return gulp.src([path.clean.app, path.clean.dist, '!' + path.clean.build + '/.git/**'], { read: false }) // Setting option read to false
                                                                                  // prevents gulp to read the contents
                                                                                  // of the files and makes this task
                                                                                  // much faster.
   .pipe(gulpRimraf());
});

gulp.task('dev', [
    'css',
    'fonts'
]);

gulp.task('aot', [
    'copyDist:aot',
    'css:aot',
    'gzip',
    'fonts'
]);

// Default task
gulp.task('default', [
    'dev',
    'webserver',
    'watch'
]);

 // Production task
gulp.task('prod', ['aot'], function () {
    gulp.start('webserver:aot');
    gulp.start('watch:aot');
});
