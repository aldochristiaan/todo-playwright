import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base-page';
import { testConfig } from '../test-config';

export class TodoPage extends BasePage {
    constructor(page: Page) {
      super(page, {
        url: testConfig.appBaseUrl() + '/examples/angular2/',
        title: 'Angular2 • TodoMVC',
      });
     
    }
  }