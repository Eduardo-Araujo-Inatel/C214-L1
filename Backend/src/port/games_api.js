const Games = require('../application/games_service');
const Utils = require('../utils/utils');

const route = '/games';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Games.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.get(`${route}/listAll`, async (req, res) => {
        const response = await Games.listAll();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};
