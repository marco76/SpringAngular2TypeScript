// runs directly in the browser, change for mobile
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';


const platform = platformBrowserDynamic();

// bootstrap the AppModule
platform.bootstrapModule(AppModule); 
