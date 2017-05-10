import { Eightpoint2Page } from './app.po';

describe('eightpoint2 App', function() {
  let page: Eightpoint2Page;

  beforeEach(() => {
    page = new Eightpoint2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
