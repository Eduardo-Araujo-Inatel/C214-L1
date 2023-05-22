const create = {
    Titulo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Preco: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    Categorias: {
        presence: {
            allowEmpty: false,
        },
        type: 'array',
    },
    Sobre: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Imagem: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    }
};

module.exports = {
    create
};