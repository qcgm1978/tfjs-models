import { bindPage } from '../coco.js'

it(`The async function declaration defines an asynchronous function, which returns an AsyncFunction object.`, (done) => {
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    var result = await resolveAfter2Seconds();
    return (result);
  }

  asyncCall().then(data => {
    expect(data).toBe('resolved')
    done()
  });
});
it(``, () => {

  // bindPage().then(data => {
  //   expect(data).toEqual()
  // })
});
