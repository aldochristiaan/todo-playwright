import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';
import { testConfig } from '../test-config';

export class TodoPage extends BasePage {
  readonly toDoInputField: Locator;
  readonly toDoCount: Locator;

  constructor(page: Page) {
    super(page, {
      url: testConfig.appBaseUrl() + '/examples/angular2/',
      title: 'Angular2 • TodoMVC',
    });

    this.toDoInputField = page.getByPlaceholder('What needs to be done?');
    this.toDoCount = page.locator('.todo-count > strong');
  }

  async validateInputField() {
    await expect(this.toDoInputField).toBeVisible();
  }

  async addToDo(text: string) {
    await this.toDoInputField.fill(text);
    await expect(this.toDoInputField).toHaveValue(text);
    await this.page.keyboard.press('Enter');
  }

  async validateTodoCount(text: string) {
    await expect(this.toDoCount).toHaveText(text);
  }
}
