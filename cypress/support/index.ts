// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import addContext = require('mochawesome/addContext');

// Import commands.ts using ES2015 syntax:
import './commands';

import '@cypress/code-coverage/support';
import { Suite, Test } from 'mocha';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// https://medium.com/egnyte-engineering/3-steps-to-awesome-test-reports-with-cypress-f4fe915bc246
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let item: Test | Suite = runnable;
    const nameParts = [runnable.title];

    // Iterate through all parents and grab the titles
    while (item.parent) {
      nameParts.unshift(item.parent.title);
      item = item.parent;
    }

    const fullTestName = nameParts.filter(Boolean).join(' -- '); // this is how cypress joins the test title fragments

    const imageUrl = `screenshots/${Cypress.spec.name}/${fullTestName} (failed).png`;

    addContext({ test }, imageUrl);
  }
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Cypress.LocalStorage.clear = function () {
  return;
};
