import config from '../playwright.config';

export class TestConfig {
  baseUrl: string = config.use?.baseURL || '';

  appBaseUrl() {
    return this.baseUrl;
  }

  init(options?: Partial<{ url: string }>) {
    if (options?.url) {
      this.baseUrl = options.url;
    }
  }
}

export const testConfig = new TestConfig();
