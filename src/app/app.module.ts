import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CustomizeComponent } from './customize/customize.component';
import { BoxedComponent } from './pages/layout/boxed/boxed.component';
import { ChartjsComponent } from './pages/charts/chartjs/chartjs.component';
import { FlotComponent } from './pages/charts/flot/flot.component';
import { InlineComponent } from './pages/charts/inline/inline.component';
import { UplotComponent } from './pages/charts/uplot/uplot.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    CustomizeComponent,
    HomeComponent,
    BoxedComponent,
    ChartjsComponent,
    FlotComponent,
    InlineComponent,
    UplotComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
