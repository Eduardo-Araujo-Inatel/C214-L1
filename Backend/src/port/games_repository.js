const { GamesModel } = require('../infrasctructure/database');

const GamesRepository = {
    async create(data) {
        try {
            const model = new GamesModel(data);
            const response = await model.save();
            return response.toObject();

        } catch (error) {
            return error;
        }
    },

    async listAll() {
        try {
            const result = await GamesModel.find().exec();
            return result;

        } catch (error) {
            return error;
        }
    }
};

module.exports = GamesRepository;
