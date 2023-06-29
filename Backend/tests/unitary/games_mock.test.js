const { GamesModel } = require('../../src/infrasctructure/database');
const Games = require('./../../src/port/games_repository');
const Validation = require("./../../src/utils/validation");
const Constants = require("./../../src/utils/constants");

describe('create', () => {

    it('Valid Game', async () => {
        GamesModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                Titulo: "Spider Man",
                Preco: 200.50,
                Categorias: ["Action", "Adventure"],
                Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
                Url: "https://linkqualquer"
            }),
        }));

        expect(await Games.create({
            id: 1,
            Titulo: "Spider Man",
            Preco: 200.50,
            Categorias: ["Action", "Adventure"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Url: "https://linkqualquer"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                Titulo: expect.any(String),
                Preco: expect.any(Number),
                Categorias: expect.any(Array),
                Sobre: expect.any(String),
                Url: expect.any(String),
            })
        )
    });

    it('Invalid all informations', async () => {
        GamesModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 2,
                Titulo: 10.00,
                Preco: "Spider Man",
                Categorias: "Prata",
                Sobre: "",
                Url: 30
            }),
        }));

        expect(await Games.create({
            id: 1,
            Titulo: "Spider Man",
            Preco: 200.50,
            Categorias: ["Action", "Adventure"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Url: "https://linkqualquer"

        })).not.toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                Titulo: expect.any(String),
                Preco: expect.any(Number),
                Categorias: expect.any(Array),
                Sobre: expect.any(String),
                Url: expect.any(String),
            })
        )
    });

    it('All informations empty', async () => {
        GamesModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: "",
                Titulo: "",
                Preco: "",
                Categorias: [],
                Sobre: "",
                Url: ""
            }),
        }));

        expect(await Games.create({
            Titulo: "Spider Man",
            Preco: 200.50,
            Categorias: ["Action", "Adventure"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Url: "https://linkqualquer"
        })).not.toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                Titulo: expect.any(String),
                Preco: expect.any(Number),
                Categorias: expect.any(Array),
                Sobre: expect.any(String),
                Url: expect.any(String),
            })
        )
    });

    it('Empty Category', async () => {
        const result = Validation.create({
            id: 1,
            Titulo: "Spider Man",
            Preco: 200.50,
            Categorias: [],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Url: "https://linkqualquer"
        })

        expect(result.Categorias).toEqual(undefined);
    });

    it('Empty Title', async () => {
        const result = Validation.create({
            id: 1,
            Titulo: "",
            Preco: 200.50,
            Categorias: ["Ação"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Url: "https://linkqualquer"
        })

        expect(result.Titulo).toEqual(undefined);
    });

    it('Empty Price', async () => {
        const result = Validation.create({
            id: 1,
            Titulo: "Spider man",
            Preco: null,
            Categorias: ["Ação"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Url: "https://linkqualquer"
        })

        expect(result.Preco).toEqual(undefined);
    });

    it('String Price', async () => {
        const result = Validation.create({
            id: 1,
            Titulo: "Spider man",
            Preco: "200",
            Categorias: ["Ação"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Url: "https://linkqualquer"
        })

        expect(result.Preco).toEqual(undefined);
    });

    it('String Category', async () => {
        const result = Validation.create({
            id: 1,
            Titulo: "Spider man",
            Preco: 200,
            Categorias: "Ação, Aventura",
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Url: "https://linkqualquer"
        })

        expect(result.Categorias).toEqual(undefined);
    });

    it('Without Image', async () => {
        const result = Validation.create({
            id: 1,
            Titulo: "Spider man",
            Preco: 200,
            Categorias: ["Ação", "Aventura"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
        })

        expect(result).toEqual(Constants.ErrorValidation);
    });

    it('Empty About', async () => {
        const result = Validation.create({
            id: 1,
            Titulo: "Spider man",
            Preco: 200,
            Categorias: ["Ação"],
            Sobre: "",
            Url: "https://linkqualquer"
        })
        expect(result.Sobre).toEqual(undefined);
    });

})