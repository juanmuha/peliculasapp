import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PeliculaComponent } from "./pages/pelicula/pelicula.component";





const route:Routes = [
    { path:"home", component:HomeComponent },
    { path:"pelicula", component: PeliculaComponent },
    { path:"**", pathMatch:"full", component:HomeComponent }
];

@NgModule({
    imports:[ 
        RouterModule.forRoot(route)],
    exports: [RouterModule]

})
export class _RouterModule {}