import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import packageJSON from './package.json';

// export default [
//     {
//         input: './src/index.ts',
//         output: [
//             {
//                 file: packageJSON.main,
//                 format: 'cjs',
//                 exports: 'named',
//                 sourcemap: true,
//             },
//             // {
//             //     file: packageJSON.module,
//             //     format: 'esm',
//             //     exports: 'named',
//             //     sourcemap: true,
//             // },
//             // {
//             //     file: 'dist/index.esm.js',
//             //     format: 'esm',
//             //     exports: 'named',
//             //     sourcemap: true,
//             // },
//         ],
//         plugins: [
//             // This solves esinterop issues (as of right now lodash and moment were giving issues with default import)
//             commonjs(),
//             typescript(),
//             babel({
//                 exclude: 'node_modules/**',
//                 presets: ['@babel/preset-react']
//             }),
//             external(),
//             resolve(),
//             // minify output
//             terser(),
//         ]
//     }
// ]
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
            // {
            //     file: 'dist/index.esm.js',
            //     format: 'esm',
            //     exports: 'named',
            //     sourcemap: true,
            // },
        ],
        plugins: [
            external(),
            resolve(),
            // This solves esinterop issues (as of right now lodash and moment were giving issues with default import)
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            // minify output
            // terser(),
        ]
    }
]