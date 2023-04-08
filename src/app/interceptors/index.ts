import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './error.interceptor';
import { LoaderInterceptor } from './loader.interceptor';
import { AuthInterceptor } from './auth.interceptor';
/* import { NotifyInterceptor } from './notify.interptor';
import { HttpsInterceptor } from './https.interceptor';
import { ProfilerInterceptor } from './profiler.interceptor';
import { CacheInterceptor } from './cache.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { FakeInterceptor } from './fake.interceptor';
import { ConvertInterceptor } from './convert.interceptor'; */

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  /* { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ConvertInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: FakeInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ProfilerInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true } */
];