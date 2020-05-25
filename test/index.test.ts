import {expect, test} from '@oclif/test'

import cmd = require('../src')

describe('test', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('Jim')
  })
})
