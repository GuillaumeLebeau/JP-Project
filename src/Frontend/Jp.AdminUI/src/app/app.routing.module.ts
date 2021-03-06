import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./shared/layout/layout.component";
import { MenuService } from "./core/menu/menu.service";
import { TranslatorService } from "./core/translator/translator.service";
import { menu } from "./core/menu/menu";
import { PagesModule } from "./pages/pages.module";

export const routes = [

    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "",
        component: LayoutComponent,
        loadChildren: "app/panel/panel.module#PanelModule"
    },

    // 404 Not found
    { path: "**", redirectTo: "not-found" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesModule,
    ],
    declarations: [
    ],
    exports: [
        RouterModule
    ]
})
export class RoutesModule {
    constructor(public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }
}
