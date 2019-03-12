const {resolve, join} = require('path');
const {ghu, jszip, mapfn, read, remove, run, uglify, webpack, wrap, write} = require('ghu');

const NAME = 'pagemap';

const ROOT = resolve(__dirname);
const SRC = join(ROOT, 'src');
const DEMO = join(SRC, 'demo');
const BUILD = join(ROOT, 'build');
const DIST = join(ROOT, 'dist');

ghu.defaults('release');

ghu.before(runtime => {
    runtime.pkg = Object.assign({}, require('./package.json'));
    runtime.comment = `${NAME} v${runtime.pkg.version} - ${runtime.pkg.homepage}`;
    runtime.commentJs = `/*! ${runtime.comment} */\n`;
    console.log(runtime.comment);
});

ghu.task('clean', () => {
    return remove(`${BUILD}, ${DIST}`);
});

ghu.task('lint', () => {
    return run('eslint .', {stdio: 'inherit'});
});

ghu.task('build:script', runtime => {
    const webpackConfig = {
        output: {
            library: NAME,
            libraryTarget: 'umd'
        },
        module: {
            loaders: [
                {
                    include: [SRC],
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                        presets: ['env']
                    }
                }
            ]
        }
    };

    return read(`${SRC}/${NAME}.js`)
        .then(webpack(webpackConfig, {showStats: false}))
        .then(uglify({compressor: {warnings: false}}))
        .then(wrap(runtime.commentJs))
        .then(write(`${DIST}/${NAME}.min.js`, {overwrite: true}))
        .then(write(`${BUILD}/${NAME}-${runtime.pkg.version}.min.js`, {overwrite: true}));
});

ghu.task('build:copy', () => {
    return read(`${ROOT}/*.md`)
        .then(write(mapfn.p(ROOT, BUILD), {overwrite: true}));
});

ghu.task('build:demo', ['build:script'], () => {
    return Promise.all([
        read(`${DEMO}: *`)
            .then(write(mapfn.p(SRC, BUILD), {overwrite: true})),

        read(`${BUILD}: ${NAME}-*.min.js`)
            .then(write(`${BUILD}/demo/${NAME}.min.js`, {overwrite: true}))
    ]);
});

ghu.task('build', ['build:script', 'build:copy', 'build:demo']);

ghu.task('zip', ['build'], runtime => {
    return read(`${BUILD}/**`)
        .then(jszip({dir: BUILD, level: 9}))
        .then(write(`${BUILD}/${NAME}-${runtime.pkg.version}.zip`, {overwrite: true}));
});

ghu.task('release', ['clean', 'zip']);
