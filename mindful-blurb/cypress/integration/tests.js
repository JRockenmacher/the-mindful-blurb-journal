context('Assertions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  

describe('First test driven dev test', () => {
    it('should have a header', () => {
        cy.get('.App-header')
    })
    })
})