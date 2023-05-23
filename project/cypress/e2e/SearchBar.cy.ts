describe('Componente de entrada de texto', () => {
    it('Permite digitar texto no campo de entrada', () => {
      // Visita a página onde o componente está renderizado
      cy.visit('/')

      // Digita texto no campo de entrada
      const texto = 'Olá, Beebot!'
      cy.get('input')
        .type(texto)
        .should('have.value', texto)
    })
  })