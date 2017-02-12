import { GeoBiPage } from './app.po';

describe('geo-bi App', function() {
  let page: GeoBiPage;

  beforeEach(() => {
    page = new GeoBiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
