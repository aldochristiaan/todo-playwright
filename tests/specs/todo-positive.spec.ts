import { test } from '../page-objects/test-runner';

test.describe('cRUD Flow', async () => {
  test('[@Smoke] Create to-do', async ({ todoPage }) => {
    await todoPage.validateInputField();
    await todoPage.addToDo('Hehe');
    await todoPage.validateToDoList(1);
    await todoPage.validateTodoCount('1');
  });

  test('[@Smoke] Update to-do', async ({ todoPage }) => {
    await todoPage.validateInputField();
    await todoPage.addToDo('Todo');
    await todoPage.editTodo('Todo', 'Other Todo');
    await todoPage.validateToDoList(1);
    await todoPage.validateTodoCount('1');
  });

  test('[@Smoke] Delete to-do', async ({ todoPage }) => {
    await todoPage.validateInputField();
    await todoPage.addToDo('Todo');
    await todoPage.deleteToDo();
    await todoPage.validateToDoList(0);
  });

  test('[@Smoke] Clear completed to-do', async ({ todoPage }) => {
    await todoPage.validateInputField();
    await todoPage.addToDo('Todo');
    await todoPage.markToDoAsComplete();
    await todoPage.validateToDoList(0);
  });
});
