import { Component, ViewEncapsulation } from "@angular/core";
import { environment } from 'environments/environment';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    template: `
        <main style="height: 100%;">
            <router-outlet></router-outlet>
        </main>


    `
})
export class AppComponent  {
    name = 'angular5 katex math';
    url = 'https://github.com/menglu628/Angular5-KaTeX-math';
    showDevModule: boolean = environment.showDevModule;
    constructor() {
    }
}