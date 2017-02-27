import { browser, element, by } from 'protractor';

export class Angular2SimpleBlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-toolbar')).getText();
  }

  getPostsContainer() {
    return element(by.css('app-root post-list'));
  }
}
