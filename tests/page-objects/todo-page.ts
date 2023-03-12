import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';
import { testConfig } from '../test-config';

export class TodoPage extends BasePage {
  readonly toDoInputField: Locator;
  readonly toDoEditField: Locator;
  readonly toDoDeleteButton: Locator;
  readonly toDoToggle: Locator;
  readonly toDoCount: Locator;
  readonly toDoList: Locator;
  readonly clearCompletedButton: Locator;

  constructor(page: Page) {
    super(page, {
      url: testConfig.appBaseUrl() + '/examples/angular2/',
      title: 'Angular2 • TodoMVC',
    });

    this.toDoInputField = page.getByPlaceholder('What needs to be done?');
    this.toDoEditField = page.locator('.edit');
    this.toDoCount = page.locator('.todo-count > strong');
    this.toDoList = page.locator('.view > label');
    this.toDoDeleteButton = page.locator('.destroy');
    this.toDoToggle = page.locator('.toggle');
    this.clearCompletedButton = page.locator('.clear-completed');
  }

  async validateInputField() {
    await expect(this.toDoInputField).toBeVisible();
  }

  async addToDo(text: string) {
    await this.toDoInputField.fill(text);
    await expect(this.toDoInputField).toHaveValue(text);
    await this.page.keyboard.press('Enter');
  }

  async editTodo(from: string, to: string) {
    await this.page.dblclick('label:has-text("' + from + '")');
    await expect(this.toDoEditField).toHaveValue(from);
    await this.toDoEditField.clear();
    await this.toDoEditField.fill(to);
    await this.page.keyboard.press('Enter');
  }

  async markToDoAsComplete() {
    await this.toDoToggle.click();
    await expect(this.clearCompletedButton).toBeVisible();
    await this.clearCompletedButton.click();
  }

  async deleteToDo() {
    await this.page.hover('.view > label');
    await this.toDoDeleteButton.click();
  }

  async checkTodo(text: string) {
    await this.page.hover('.view > label');
    await this.toDoDeleteButton.click();
  }

  async validateToDoList(count: number) {
    await expect(this.toDoList).toHaveCount(count);
  }

  async validateTodoCount(text: string) {
    await expect(this.toDoCount).toHaveText(text);
  }
}
