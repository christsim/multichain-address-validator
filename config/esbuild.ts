import * as esbuild from 'esbuild';

const buildResult = esbuild.buildSync({
    entryPoints: ['src/multichain-address-validator.ts'],
    outfile: 'dist/multichain-address-validator.bundle.min.js',
    bundle: true,
    minify: true,
    inject: ['./config/esbuild.inject.js'],
    globalName: 'MCAV',
    metafile: true,
})

const metafileInfo = esbuild.analyzeMetafileSync(buildResult.metafile)
console.log(metafileInfo)
