// NOT CURRENTLY USED
// https://github.com/tommy-lettieri/resume-template/issues/1#issue-941136596

import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import packageJSON from './package.json';
import json from '@rollup/plugin-json';

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
            resolve({ preferBuiltins: true, browser: true }),
            // fixes axios importing package.json
            json(),
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
            // minify output
            terser(),
            external(),
        ]
    }
]
