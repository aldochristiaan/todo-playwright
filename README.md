# EVBox Assignment : Todo UI Test

This repository is used for completing assignment from EVBox using Playwright Typescript Framework. I'm using Page Object Model approach to design the test automation.

## Prerequisites
- Node **LTS** [18.14.0](https://nodejs.org/en/download/) - includes Npm (9.3.1)
  ```sh
  # Check node and npm version from terminal

  $ node -v
  > v18.14.0

  $ npm -v
  > 9.3.1
  ```
- [**Allure**](https://github.com/allure-framework) report using [brew](https://brew.sh/) package manager
  ```sh
  # Install allure from terminal
  
  $ brew install allure

  # Check allure version 

  $ allure --version
  > 2.21.0
  ```
- **Browsers**
  - [Chrome](https://www.google.com/chrome/)
  - [Firefox](https://www.mozilla.org/en-US/firefox/new/)
  - [Microsoft Edge](https://www.microsoft.com/en-us/edge)
- **IDE**
  - [Visual Studio Code](https://code.visualstudio.com/) - (Recommended)
  - [Playwright Plugin](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## Install
Install project dependencies
```sh
$ npm install
```
> After it finished, it will automatically trigger `postinstall` script that ensure browsers necessary for this version of Playwright are installed. You can trigger it manually too by running this command
```sh
$ npx playwright install
```

Install [Husky](https://github.com/typicode/husky) - Modern native git hook
```sh
$ npm run prepare
```
> By using git hook (pre-commit), it will help us to validate our codes. 
> 
> This command will be executed automatically
> 
>  `npm run validate`
>
> It will `Lint & Prettify` our code based on the rules that has been set.

## Run
You can run the test from terminal and also from VSC Test Explorer.
```sh
$ npm run test
```
By default test will run all tests in **headless** mode, **fully parallel**, and **only** on Chromium.

To change the to run on headed mode, you can pass `--headed` argument.
```sh
$ npm run test -- --headed
```

or by changing the headless property to `false` in `.env`

```sh
BASE_URL=https://todomvc.com
TIMEOUT=30
EXPECT_TIMEOUT=5
SCREEN_WIDTH=1280
SCREEN_HEIGHT=720
RETRIES=2
WORKERS=3
FULLY_PARALLEL=true
# Change HEADLESS from true to false
HEADLESS=true
OUTPUT_DIR=test-results/
```

> You also can change other properties depends on your need.

### Run test on multiple browser
----------
You can add more browser to run the automation by modifying `playwright.config.ts`
```javascript
projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { channel: 'chrome' },
    // },
  ],
```

or by passing `--browser` argument, but you have to remove `projects` properties in `playwright.config.ts`
```sh
# Browser to use for tests, one of "all", "chromium", "firefox" or "webkit" (default: "chromium")
$ npm run test -- --browser all
```

### Run test using tag
----------
```sh
$ npm run test -- --grep @Smoke
```

There are 2 tags that you can choose:
- `@Smoke`
- `@Negative`

> For more information about how to run test by tag, you can open [this](https://playwright.dev/docs/test-annotations#tag-tests).

## Report
After running the test, you can see the report by choosing between Default HTML and Allure Report.
- HTML (Default)
  - ```sh
    $ npx playwright show-report
    ```
- Allure Report
  - ```sh
    $ npm run report
    ```
- Line
  - You can see it when running the test from terminal

## Test Scope
The test will be focusing on cRUD functionality for to-do list.

## Notes
Things that can be improved:
- Usage of global setup and teardown
- Usage of fixtures for the test
- ESLint & Playwright rules
- CI Integration

> Running automation by using parallel can reduce execution time. But we also need to think about other aspects such as internet connection, machine's memory, flakky tests, etc. Because it will affect the result too.
