import { GSDPage } from './app.po';

describe('gsd App', function() {
  let page: GSDPage;

  beforeEach(() => {
    page = new GSDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
