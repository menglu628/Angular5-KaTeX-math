import { Routes } from "@angular/router";
import { IndexComponent } from "./index/components/index.component";

export const ROUTES: Routes = [
    {
        path: '', component: IndexComponent, loadChildren: './index/index.module#IndexModule'
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
// make sure you match the component type string to the require in asyncRoutes
// async components with children routes must use WebpackAsyncRoute
//{path: '**', component: NoContentComponent},
];
