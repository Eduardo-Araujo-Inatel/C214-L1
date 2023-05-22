const { GamesModel } = require('../../src/infrasctructure/database');
const Games = require('./../../src/port/games_repository');

describe('create', () => {

    it('Valid Game', async () => {
        GamesModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                Titulo: "Spider Man",
                Preco: 200.50,
                Categorias: ["Action", "Adventure"],
                Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
                Imagem: "https://linkqualquer"
            }),
        }));

        expect(await Games.create({
            id: 1,
            Titulo: "Spider Man",
            Preco: 200.50,
            Categorias: ["Action", "Adventure"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Imagem: "https://linkqualquer"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                Titulo: expect.any(String),
                Preco: expect.any(Number),
                Categorias: expect.any(Array),
                Sobre: expect.any(String),
                Imagem: expect.any(String),
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
                Imagem: 30
            }),
        }));

        expect(await Games.create({
            id: 1,
            Titulo: "Spider Man",
            Preco: 200.50,
            Categorias: ["Action", "Adventure"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Imagem: "https://linkqualquer"

        })).not.toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                Titulo: expect.any(String),
                Preco: expect.any(Number),
                Categorias: expect.any(Array),
                Sobre: expect.any(String),
                Imagem: expect.any(String),
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
                Imagem: ""
            }),
        }));

        expect(await Games.create({
            Titulo: "Spider Man",
            Preco: 200.50,
            Categorias: ["Action", "Adventure"],
            Sobre: "Jovem peter parker que ganhou poderes e se tornou um herói chamado homem aranha.",
            Imagem: "https://linkqualquer"
        })).not.toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                Titulo: expect.any(String),
                Preco: expect.any(Number),
                Categorias: expect.any(Array),
                Sobre: expect.any(String),
                Imagem: expect.any(String),
            })
        )
    });
})