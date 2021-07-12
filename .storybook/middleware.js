const express = require('express');
const path = require('path');

const FOLDER_NAME = 'resume-template-files';
const ROOT_SERVE_FOLDER = express.static(path.join(process.env.STORYBOOK_RESUME_JSON_LOCATION ?? __dirname, FOLDER_NAME));

const expressMiddleware = router => {
    router.use(`/${FOLDER_NAME}`, ROOT_SERVE_FOLDER);
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
