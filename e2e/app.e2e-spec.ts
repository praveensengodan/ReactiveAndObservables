import { ReactiveAndObservablesPage } from './app.po';

describe('reactive-and-observables App', () => {
  let page: ReactiveAndObservablesPage;

  beforeEach(() => {
    page = new ReactiveAndObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
