// ****************************************************************************************************
// Init
// ****************************************************************************************************

// dependencies
const env = require('dotenv')
const KoaRouter = require('koa-router');
const axios = require('axios');
const polyfill = require('../libraries/polyfill.js');

// init instances
const envData = env.config({ path: '../../.env' });
const koaRouter = new KoaRouter();


// ****************************************************************************************************
// Shared Functions
// ****************************************************************************************************



// ****************************************************************************************************
// Shared Async Functions
// ****************************************************************************************************

function getUser(params){
  return axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.mercy-preview+json'
    },
    params: Object.assign({}, params)
  }).then((resp) => {
    return resp.data;
  })
}

function getRepos(params){
  return axios.get(`https://api.github.com/user/repos`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.mercy-preview+json'
    },
    params: Object.assign({
      visibility: 'public',
      affiliation: 'owner'
    }, params)
  }).then((resp) => {
    return resp.data;
  }).then((repos) => {
    return repos.filter((repo) => {
      return repo.topics.includes('portfolio')
    })
  })
}

async function getAllPages(request){
  let page = 0;
  let perPage = 100;
  let count = 0;
  let rslt = []
  do {
    page += 1;
    count = 0;
    let data = await request({
      page,
      per_page: perPage
    })
    count = Array.isArray(data) ? data.length : 1;
    rslt.push(data)
  } while (count === perPage)
  return rslt.flat();
}


// ****************************************************************************************************
// Front End Routes
// ****************************************************************************************************

// app front end
koaRouter.get('/', async (ctx) => {
  await ctx.render('/index');
});


// ****************************************************************************************************
// Api Routes
// ****************************************************************************************************

// app front end
koaRouter.get('/api', async (ctx) => {
  try {
    let user = await getAllPages(getUser)
    let repos = await getAllPages(getRepos, user[0].public_repos)
  } catch (error ){
    console.error(error);
    ctx.body = { error: { name: 'api' } }
  }
  ctx.body = {}
});



// ****************************************************************************************************
// Export
// ****************************************************************************************************

module.exports = koaRouter;
