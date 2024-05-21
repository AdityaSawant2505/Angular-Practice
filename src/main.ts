import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { ModuleClass } from './Student/StudentModule';
import { StudentsModuleClas } from './Students/StudentsModule';
platformBrowserDynamic().bootstrapModule(StudentsModuleClas)
  .catch(err => console.error(err));
