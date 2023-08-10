/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare namespace Cypress {
  interface Chainable<Subject> {
    slideByMouse(...cords: { x: number; y: number }[]): void;
  }
}

const GALLERY_MARGIN = 50;

Cypress.Commands.add('slideByMouse', (...cords) => {
  if (cords.length < 2) {
    throw new Error('Too few slide coordinates');
  }

  const initialCord = cords[0];

  const viewer = cy.get('viewer');
  const body = cy.get('html');

  viewer.trigger('mousedown', initialCord.x, initialCord.y);

  let prevCord = initialCord;
  for (const cord of cords.slice(1)) {
    const x = cord.x + GALLERY_MARGIN;
    const y = cord.y + GALLERY_MARGIN;

    body.trigger('mousemove', x, y, {
      movementX: x - prevCord.x,
    });
    prevCord = { x, y };
  }

  body.trigger('mouseup', prevCord.x, prevCord.y);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
