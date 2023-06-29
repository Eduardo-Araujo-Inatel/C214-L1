/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Run Application', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.wait(5000)
    cy.visit('http://localhost:3000/')
  })

  it('Check game Red Dead Redemption 2 and see about', () => {
    cy.contains('Red Dead Redemption 2')
    cy.get(':nth-child(1) > .sc-jeCNp > :nth-child(1)').click()
    cy.wait(1000)
    cy.contains('Red Dead Redemption 2 é um jogo de ação e aventura em mundo aberto, ambientado no Velho Oeste. Assuma o papel de Arthur Morgan, um fora da lei em uma jornada épica através de terras selvagens e perigosas.')
  })

  it('Buy game Red Dead Redemption 2 and check value', () => {
    cy.contains('R$ 0.00')
    cy.get(':nth-child(1) > .sc-jeCNp > :nth-child(2)').click()
    cy.contains('R$ 59.99')
  })

  it('Buy 2 games and check values', () => {
    cy.contains('R$ 0.00')
    cy.get(':nth-child(1) > .sc-jeCNp > :nth-child(2)').click()
    cy.contains('R$ 59.99')
    cy.get(':nth-child(11) > .sc-jeCNp > :nth-child(2)').click()
    cy.contains('R$ 74.98')
  })

  it('Select indie games', () => {
    cy.get('.css-11rtgmx-container').type("Indie{enter}")
    cy.contains('Stardew Valley')
  })

  it('Open modal New game', () => {
    cy.get('.sc-iVCKna > div > .sc-gxYJeL').click()
    cy.contains('Adicionar jogo para a loja')
  })
})