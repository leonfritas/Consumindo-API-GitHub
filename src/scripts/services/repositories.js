import { baseUrl, quantity} from '../variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${quantity}`);
    return await response.json();
  }

export {getRepositories}