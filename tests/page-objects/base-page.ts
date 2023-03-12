import { expect, Page } from '@playwright/test';

export abstract class BasePage {
  protected url: string;
  protected title: string;

  constructor(
    protected page: Page,
    options?: Partial<{ url: string; title: string }>
  ) {
    this.url = options?.url || '';
    this.title = options?.title || '';
  }

  async open() {
    await this.page.goto(this.url);
  }

  async toBeOpened() {
    if (this.url) {
      await expect(this.page).toHaveURL(this.url);
    }
    if (this.title) {
      await expect(this.page).toHaveTitle(this.title);
    }
  }
}
