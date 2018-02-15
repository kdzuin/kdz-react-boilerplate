module.exports = {
    sections: [
        {
            name: 'UI',
            components: 'src/components/base-ui/**/*.jsx',
        },
    ],
    skipComponentsWithoutExample: true,
    webpackConfig: require('./config/webpack.config.dev.js'),
};
