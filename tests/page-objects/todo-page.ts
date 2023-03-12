import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';
import { testConfig } from '../test-config';

export class TodoPage extends BasePage {
  readonly toDoInputField: Locator;

  constructor(page: Page) {
    super(page, {
      url: testConfig.appBaseUrl() + '/examples/angular2/',
      title: 'Angular2 • TodoMVC',
    });

    this.toDoInputField = page.getByPlaceholder('What needs to be done?');
  }

  async validateInputField() {
    await expect(this.toDoInputField).toBeVisible();
  }
}
