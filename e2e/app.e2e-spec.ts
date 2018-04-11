import { PLANTILLAPage } from './app.po';

describe('plantilla App', () => {
  let page: PLANTILLAPage;

  beforeEach(() => {
    page = new PLANTILLAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
