import { test as base } from '@playwright/test';
import { TodoPage } from './todo-page';

type MyFixtures = {
  todoPage: TodoPage;
};

export const test = base.extend<MyFixtures>({
  todoPage: async ({ page }, use) => {
    await use(new TodoPage(page));
  }
});

export { expect } from '@playwright/test';
