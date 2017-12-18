import * as t from 'babel-types'
import { getOption, replaceMatchesInString } from '../utils'
import { RELATIVE_URL_REGEX } from '../regex'

export default (path, state) => {
  const urlPrefix = getOption(state, 'base')
  const objectValue = path.node.value

  if (t.isStringLiteral(objectValue)) {
    const { value } = objectValue
    const relativeURLsMatches = value.match(RELATIVE_URL_REGEX) || []
    const stringWithAbsoluteURLs = replaceMatchesInString(value, relativeURLsMatches, (match) => urlPrefix + match)

    path.node.value = t.stringLiteral(stringWithAbsoluteURLs)
  }
}