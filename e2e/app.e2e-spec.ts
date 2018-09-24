import { Esp4aPage } from './app.po';

describe('esp4a App', function() {
  let page: Esp4aPage;

  beforeEach(() => {
    page = new Esp4aPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
