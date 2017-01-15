// runs directly in the browser, change for mobile
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

if (process.env.ENV === 'production') {
  // Disable Angular's development mode, which turns off assertions and other checks within the framework.
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
