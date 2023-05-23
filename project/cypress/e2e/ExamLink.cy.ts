describe('Componente de exame', () => {
    it('Redireciona para a página de exame ao clicar', () => {
      // Visita a página onde o componente está renderizado
      cy.visit('/')

      // Renderiza o componente com o objeto de exame como prop
      cy.get('div.rounded-lg')
        .should('have.class', 'shadow-[0_0_10px_rgba(0,0,0,0.3)]')
        .should('contain.text', 'Lorem IpsumDolor Sit AmetConsectetur Adipiscing')

      // Simula o clique no componente
      cy.get(':nth-child(1) > .rounded-lg').click()

      // Verifica se ocorreu o redirecionamento para a página correta
      cy.url().should('include', '/exam/' + 54789)
    })
  })
