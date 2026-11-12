// The preview compiles its template in the browser (JIT); pulsoicon-angular comes from its ng-packagr build.
import "@angular/compiler";

import { bootstrapApplication } from "@angular/platform-browser";

import { App } from "./app";

import "../shared/app.css";

bootstrapApplication(App).catch((error: unknown) => console.error(error));
