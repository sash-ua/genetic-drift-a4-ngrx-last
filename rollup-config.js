import rollup      from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';
//paths are relative to the execution path
export default {
    entry: 'aot/main.js',
    dest: 'aot/dist/build.js', // output a single application bundle
    sourceMap: false,
    // sourceMapFile: 'aot/dist/build.js.map',  // uncomment if sourceMap: true
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true, main: true}),
        commonjs({
            include: [
                'node_modules/rxjs/**',
                'node_modules/ngrx-store-freeze/**',
                'node_modules/deep-freeze-strict/**'
            ]
        }),
        uglify()
    ]
}