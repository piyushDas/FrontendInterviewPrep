// let API call be exported from some index.js

// index.js
const axios = require('axios');

async function getFirstAlbumTitle() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
  return response.data[0].title;
}

module.exports = getFirstAlbumTitle;


// WITHOUT MOCKING

// index.test.js
/*
    The test above does its job,
    but the test actually makes a network request to an API when it runs.
    This opens the test up to all sorts of false negatives
    if the API isn't working exactly as expected
    (e.g. the list order changes, API is down, dev machine loses network connection, etc.).
    Not to mention, making these requests in a large number of tests can bring your test runs to a slow crawl.
*/

const getFirstAlbumTitle = require('./index');

it('returns the title of the first album', async () => {
  const title = await getFirstAlbumTitle();
  expect(title).toEqual('quidem molestiae enim');
});





// index.test.js

/*
    When you import a module into a test file,
    then call it in jest.mock(<module-name>),
    you have complete control over all functions from that module,
    even if they're called inside another imported function.
    Immediately after calling jest.mock('axios'),
    Jest replaces every function in the axios module with empty "mock" functions
    that essentially do nothing and return undefined

    jest.mock(<module-name>)
    <mockedModule>.get.mockResolvedValue(mockedData)

*/
const getFirstAlbumTitle = require('./index');
const axios = require('axios');

jest.mock('axios');

it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      }
    ]
  });

  const title = await getFirstAlbumTitle();
  expect(title).toEqual('My First Album');
});


