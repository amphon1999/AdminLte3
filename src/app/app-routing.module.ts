import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CustomizeComponent } from './customize/customize.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BoxedComponent } from './pages/layout/boxed/boxed.component';
import { ChartjsComponent } from './pages/charts/chartjs/chartjs.component';
import { FlotComponent } from './pages/charts/flot/flot.component';
import { InlineComponent } from './pages/charts/inline/inline.component';
import { UplotComponent } from './pages/charts/uplot/uplot.component';


const routes: Routes = [
  {path : '',redirectTo : 'home',pathMatch : 'full'},
  {path : 'content', component : ContentComponent},
  {path : 'home', component : HomeComponent},
  {path : 'header', component : HeaderComponent},
  {path : 'menu', component : MenuComponent},
  {path : 'footer', component : FooterComponent},
  {path : 'customize', component : CustomizeComponent},
  {path : 'boxed',component : BoxedComponent},
  {path : 'chartjs',component : ChartjsComponent},
  {path : 'flot',component : FlotComponent},
  {path : 'inline',component : InlineComponent},
  {path : 'uplot',component : UplotComponent}

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
