describe('Componente de navegação', () => {
    it('Redireciona corretamente ao clicar nos links', () => {
      // Visita a página onde o componente está renderizado
      cy.visit('/pagina-de-navegacao')

      // Simula o clique no link "Feed"
      cy.get('[href="/feed"]').click()

      // Verifica se ocorreu o redirecionamento para a página correta
      cy.url().should('include', '/feed')

      // Simula o clique no link "Wiki"
      cy.get('[href="/wiki"]').click()

      // Verifica se ocorreu o redirecionamento para a página correta
      cy.url().should('include', '/wiki')

      // Simula o clique no logotipo
      cy.get('.bg-gray-400').click()

      // Verifica se ocorreu o redirecionamento para a página correta
      cy.url().should('include', '/')

      // Simula o clique no link "Teste relâmpago"
      cy.get('[href="/"]').click()

      // Verifica se ocorreu o redirecionamento para a página correta
      cy.url().should('include', '/')

      // Simula o clique no link "Cursos"
      cy.get('[href="/courses"]').click()

      // Verifica se ocorreu o redirecionamento para a página correta
      cy.url().should('include', '/courses')
    })
  })
