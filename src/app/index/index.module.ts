import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./components/index.component";
import { routes } from "./index.routes";
import { KMathComponent } from "./components/kmath/kmath.component";

@NgModule({
    imports: [RouterModule, CommonModule, RouterModule.forChild(routes)],
    declarations: [IndexComponent, KMathComponent],
    exports: [IndexComponent]
})
export class IndexModule {
}