require('./src/infrasctructure/database');
const app = require('./src/infrasctructure/rest_server');

app.listen(4000, () => {
    console.log('REST server running on port 4000...');
});