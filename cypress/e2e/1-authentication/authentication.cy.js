describe('Authenticate', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('authenticate successfully', () => {
    cy.intercept(
        'POST',
        '/api/authentication', {
        token: 'validToken',
        user: {
          '@id': '/api/users/1',
        },
        refresh_token: 'refresh_token',
      }
    ).as('authenticate');

    cy.intercept(
      'GET',
      '/api/users/1',
      {
        "@context": "/api/contexts/User",
        "@id": "/api/users/1",
        "@type": "User",
        "email": "j.doe@gift.wip",
        "createdAt": "2022-04-26T09:20:22+02:00",
        "updatedAt": "2022-04-29T09:35:46+02:00"
      }
    ).as('getUser');

    cy.get('input[data-test=email').type('j.doe@gift.wip');
    cy.get('input[data-test=password').type('azerty');
    cy.get('button').click();
    cy.get('header').should('contain', 'j.doe@gift.wip');
  });

  it('authenticate with wrong password', () => {
    cy.intercept(
      'POST',
      '/api/authentication',
      {
        statusCode: 401,
        body: {
          code: 401,
          message: 'Invalid credentials',
        },
      },
    ).as('authenticate');

    cy.get('input[data-test=email').type('j.doe@gift.wip');
    cy.get('input[data-test=password').type('azerty');
    cy.get('button').click();
    cy.get('[data-test=error-message]').should('contain', 'Invalid credentials');
  });
})
