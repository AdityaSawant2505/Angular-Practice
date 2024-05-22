import { moduleclass } from './DInjection/MainModule';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { ModuleClass } from './Student/StudentModule';
platformBrowserDynamic().bootstrapModule(moduleclass)
  .catch(err => console.error(err));
