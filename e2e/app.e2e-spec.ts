import { Angular2SimpleBlogPage } from './app.po';

describe('angular2-simple-blog App', () => {
  let page: Angular2SimpleBlogPage;

  beforeEach(() => {
    page = new Angular2SimpleBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
