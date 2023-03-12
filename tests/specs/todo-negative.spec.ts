import { test } from '../page-objects/test-runner';

test.describe('negative test cases', async () => {
  test('[@Negative] Add to-do with empty string', async ({ todoPage }) => {
    await todoPage.validateInputField();
    await todoPage.addToDo('');
    await todoPage.validateToDoList(0);
  });

  test('[@Negative] Update to-do with empty string', async ({ todoPage }) => {
    await todoPage.validateInputField();
    await todoPage.addToDo('Todo');
    await todoPage.editTodo('Todo', '');
    await todoPage.validateToDoList(0);
  });
});
