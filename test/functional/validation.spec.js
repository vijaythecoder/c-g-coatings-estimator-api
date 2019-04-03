'use strict'
const { test, trait } = use('Test/Suite')('Example functional test')
trait('Test/Browser')

test('validate user details', async ({ browser }) => {
  const page = await browser.visit('/')

  await page
    .type('email', 'wrong email')
    .submitForm('form')
    .waitForNavigation()

  page.session.assertError('email', 'Invalid user email address')
})