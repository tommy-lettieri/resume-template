/**
 * Could also use -s option or --static-dir (https://storybook.js.org/docs/react/api/cli-options)
 * However that can't be set as an environment variable nor can you make a fallback
 * Lastly this is more realistic to match consumers allowing them to use sub routes as their public url
 */
const express = require('express');
const path = require('path');

const PUBLIC_FILE_LOCATION = process.env.PUBLIC_FILE_LOCATION ?? path.join(__dirname, 'test-public');

const expressMiddleware = router => {
    router.use('/resume', express.static(PUBLIC_FILE_LOCATION));
};

module.exports = expressMiddleware;
if (require.main === module) {
    console.log('Starting server since this script is being run directly')
    const app = express();
    expressMiddleware(app);
    const port = 3001;
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    });
}
