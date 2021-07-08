import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import packageJSON from './package.json';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: packageJSON.main,
                format: 'cjs',
                exports: 'named',
                sourcemap: true,
            },
            // {
            //     file: packageJSON.module,
            //     format: 'esm',
            //     exports: 'named',
            //     sourcemap: true,
            // },
        ],
        plugins: [
            // This solves esinterop issues (as of right now lodash and moment were giving issues with default import)
            commonjs(),
            typescript({
                // This should be default, however this fixed an issue in which declaration files were not generated (as well as source maps)
                // https://github.com/rollup/plugins/issues/61#issuecomment-845838534
                tsconfig: './tsconfig.json',
                // If not defined it duplicates the output dir, in this case defs would be in dist/dist
                declarationDir: '.',
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            // minify output
            terser(),
        ]
    }
]
