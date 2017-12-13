import { IndexComponent } from "./components/index.component";

export const routes = [
    {
        path: 'kateX', component: IndexComponent
    },
    { path: '**', redirectTo: 'kateX', pathMatch: 'full' }
];