import hyphenateWords from './hyphenateWords'
import { projects } from "/Users/mrmeanor/code/sei/labs/marcush-porfolio-react/src/data/projects.js"

function findProject (str) {
  const title = str.replace('/projects/', '')

  const foundProject = projects.find(project => {
    const thisTitle = hyphenateWords(project.title)
    return thisTitle === title
  })

  return foundProject
}

export default findProject