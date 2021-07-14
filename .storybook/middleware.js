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
