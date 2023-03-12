import { test } from '../page-objects/test-runner';

test.describe('cRUD Flow', async () => {
  test('[@Smoke] Create to-do', async ({ todoPage }) => {
    await todoPage.validateInputField();
    await todoPage.addToDo('Hehe');
    await todoPage.validateTodoCount('1');
  });
});
