context('Assertions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  

describe('First test driven dev test', () => {
    it('should have a header', () => {
        cy.get('.App-header')
    })
    })
    it('should have a container for the days blurbs', () => {
        cy.get('.main-blurb-container')
    })
    it('has a button that opens a hidden form', () => {
        cy.get('.btn-show-form')
        .click()
    })
})