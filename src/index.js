import templateLiterals from './visitors/template-literals'
//import stringLiteral from './visitors/string-literal'
import objectMember from './visitors/object-member'

export default function({ types: t }) {
  return {
    visitor: {
      StringLiteral(path, state) {
        // TODO
      },

      TaggedTemplateExpression(path, state) {
        templateLiterals(path, state)
      },

      ObjectMember(path, state) {
        objectMember(path, state)
      },
    }
  }
}