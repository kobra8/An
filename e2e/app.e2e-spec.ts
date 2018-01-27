import { PhonebookPage } from './app.po';

describe('phonebook App', () => {
  let page: PhonebookPage;

  beforeEach(() => {
    page = new PhonebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
