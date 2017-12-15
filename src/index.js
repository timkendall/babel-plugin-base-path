import templateLiterals from './visitors/template-literals'

export default function({ types: t }) {
  return {
    visitor: {
      // ImportDeclaration(path, state) {
      //   noParserImportDeclaration(path, state)
      // },
      // CallExpression(path, state) {
      //   noParserRequireCallExpression(path, state)
      // },
      TaggedTemplateExpression(path, state) {
        templateLiterals(path, state)
      },
      // VariableDeclarator(path, state) {
      //   assignStyledRequired(path, state)
      // }
    }
  }
}