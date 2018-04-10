# Theweatheris.fun readme

## Get started (notes for Erixxx)

1. `cd` into the folder
1. run `sudo npm install --global gulp`
1. run `npm install`
1. hit that `gulp serve` in terminal.
1. Edit the code in the `src` folder.
1. go to `localhost:3000` in your browser. As you edit shit in the code, the broswer will live update

Note:

The `src` folder is big and unwieldy.

## Technologies used

JavaScript
- [Browserify](http://browserify.org/)
- [Node](https://nodejs.org/)

Styles
- [Stylus](https://learnboost.github.io/stylus/)

Markup
- [Jade](http://jade-lang.com/)

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Linting
- [ESlint](http://eslint.org/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


## Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.
The tasks are as follows:

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***
