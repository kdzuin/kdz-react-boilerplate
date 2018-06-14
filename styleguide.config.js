module.exports = {
    sections: [
        {
            name: 'UI',
            components: 'src/components/base-ui/**/*.js',
        },
    ],
    skipComponentsWithoutExample: true,
    webpackConfig: require('./config/webpack.config.dev.js'),
    styles: {
        Table: {
            cell: {
                lineHeight: 1.5,
            }
        }
    }
};
