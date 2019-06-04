module.exports = {
    assetsDir: '../../../assets/FinCal',
    runtimeCompiler: true,
    productionSourceMap: false,
    filenameHashing: false,

    css: {
        modules: true
    },
    publicPath: '',
    outputDir: 'assets',
    parallel: true,
    //chainWebpack: config => {
    //    config.optimization.delete('splitChunks')
    //}
}