import { isStyledComponent } from '../../utils'
import replaceInStyledComponent from './replace-in-styled-component'

export default (path, state) => {
  if (isStyledComponent(path.node.tag, state)) {
    replaceInStyledComponent(path, state)
  }
  // TODO - non-styled-component template literals
}