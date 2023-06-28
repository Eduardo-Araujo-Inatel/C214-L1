const mongoose = require('mongoose');

//alterar aqui
const uri = 'mongodb+srv://123456abc:456123@cluster0.fqmg0ps.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const GamesSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    Titulo: String,
    Preco: Number,
    Categorias: Array,
    Sobre: String,
    Image: String
});

const GamesModel = mongoose.model('Games', GamesSchema);

module.exports = {
    GamesModel,
};
