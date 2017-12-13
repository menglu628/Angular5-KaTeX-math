import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
// App is our top level component
import { AppComponent } from "./app.component";
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { AppState } from "./app.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IndexModule } from "./index/index.module";
// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular5's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        IndexModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        APP_PROVIDERS,
    ]
})

export class AppModule {}