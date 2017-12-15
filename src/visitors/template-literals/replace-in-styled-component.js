import * as t from 'babel-types'
import { getOption } from '../../utils'
import { RELATIVE_URL_REGEX } from '../../regex'

export const prefixRelativeURLs = (prefix) => (element) => {
  const { type, value } = element
  const relativeURLs = value.match(RELATIVE_URL_REGEX) || []

  let transformedValue = value
  for (let i = 0; i < relativeURLs.length; ++i) {
    const relativeURL = relativeURLs[i]
    const absoluteURL = prefix + relativeURL

    // Note: Swap in the prefixed URL
    transformedValue = transformedValue
      .replace(relativeURL, absoluteURL)
  }
 
  return { type, value: transformedValue }
}

export default (path, state) => {
  const urlPrefix = getOption(state, 'base')
  
  const { tag: callee, quasi: { quasis, expressions }} = path.node
  const values = t.arrayExpression(quasis.map(quasi => t.stringLiteral(quasi.value.cooked)))
  const prefixURLs = prefixRelativeURLs(urlPrefix)
  const transformedElements = values.elements.map(prefixURLs)

  values.elements = transformedElements

  path.replaceWith(t.callExpression(callee, [ values, ...expressions ]))
}