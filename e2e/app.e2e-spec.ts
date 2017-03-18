import { AngularReduxQuickstartPage } from './app.po';

describe('angular-redux-quickstart App', () => {
  let page: AngularReduxQuickstartPage;

  beforeEach(() => {
    page = new AngularReduxQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
