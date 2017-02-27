import { Angular2SimpleBlogPage } from './app.po';

describe('App', () => {
  let page: Angular2SimpleBlogPage;

  beforeEach(() => {
    page = new Angular2SimpleBlogPage();
  });

  it('should display message saying "Angular2 Simple Blog"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular2 Simple Blog');
  });

  it('should display posts container', () => {
    page.navigateTo();
    expect(page.getPostsContainer().isDisplayed()).toBeTruthy();
  });
});
