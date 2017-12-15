import test from 'ava'
import path from 'path'
import fs from 'fs'
import { transformFileSync } from 'babel-core'
import plugin from '../src'

const trim = (str) => str.replace(/^\s+|\s+$/, '')

test('plugin transforms urls for all of AST', t => {
  const fixturesDir = path.join(__dirname, 'fixtures')
  
  fs.readdirSync(fixturesDir).sort().map((caseName) => {
    if (caseName === '.DS_Store') return

    const fixtureDir = path.join(fixturesDir, caseName)
    const inputPath = path.join(fixtureDir, 'input.js');
    const result = transformFileSync(inputPath).code

    const expected = fs.readFileSync(
        path.join(fixtureDir, 'expected.js')
    ).toString()

    t.is(result, expected)
  })
})