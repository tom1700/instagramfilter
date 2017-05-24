module.exports = {
    files: {
        javascripts: {
            joinTo: 'app.js'
        },
        templates: {
            joinTo: 'app.js'
        }
    },
    npm: {enabled: true},
    plugins: {
        babel: {
            presets: ['es2015']
        }
    }
};