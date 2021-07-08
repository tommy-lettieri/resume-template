const express = require('express');
const path = require('path');

const FOLDER_NAME = 'resume-template-files';

const expressMiddleware = router => {
    router.use(`/${FOLDER_NAME}`, express.static(path.join(__dirname, FOLDER_NAME)));
};

module.exports = expressMiddleware;
if (require.main === module) {
    console.log('Starting server since this script is being run directly')
    const app = express();
    // app.use(expressMiddleware);
    expressMiddleware(app);
    const port = 3001;
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    });
}
