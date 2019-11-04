import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { FormularioUnoComponent } from './components/formulario-uno/formulario-uno.component';
import { FormularioDosComponent } from './components/formulario-dos/formulario-dos.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { TabComponent } from './components/tab/tab.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'combobox',
    component: ComboboxComponent,
    canActivate:[AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'formulario-uno',
    component: FormularioUnoComponent,
    canActivate:[AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'formulario-dos',
    component: FormularioDosComponent,
    canActivate:[AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'tabla',
    component: TablaComponent,
    canActivate:[AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'tab',
    component: TabComponent,
    canActivate:[AuthGuard],
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],// para los F5
  exports: [RouterModule]
})
export class AppRoutingModule { }
