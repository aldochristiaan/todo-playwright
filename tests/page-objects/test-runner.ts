import { test as base } from '@playwright/test';
import { TodoPage } from './todo-page';

type MyFixtures = {
  todoPage: TodoPage;
};

export const test = base.extend<MyFixtures>({
  todoPage: async ({ page }, use) => {
    const toDoPage = new TodoPage(page);
    await toDoPage.open();
    await toDoPage.toBeOpened();
    await use(toDoPage);
  },
});

export { expect } from '@playwright/test';
