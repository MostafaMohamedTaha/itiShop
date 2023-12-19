//#region default 

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//#endregion
//#region shared

import { HeaderComponent } from './components/shared/header/header.component';

import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/component/home/home.component';
import { ProductComponent } from './components/component/product/product.component';
//#endregion

@NgModule({
  declarations: [
    //#region default 

    AppComponent,
    HeaderComponent,
    
    FooterComponent,
         SidebarComponent,
         HomeComponent,
         ProductComponent
    //#endregion
  ],
  imports: [
    //#region default

    BrowserModule,
    AppRoutingModule
    //#endregion
  ],
  providers: [
    //#region default

    provideClientHydration()
    //#endregion
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
