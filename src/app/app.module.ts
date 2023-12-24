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
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapCart4, bootstrapInfoCircleFill, bootstrapTrash3 } from '@ng-icons/bootstrap-icons';
import { ProductlistComponent } from './components/component/order/productlist/productlist.component';
//#endregion

//#region icons

//#endregion
@NgModule({
  declarations: [
    //#region default 

    AppComponent,
    HeaderComponent,
    
    FooterComponent,
         SidebarComponent,
         HomeComponent,
         ProductComponent,
         ProductlistComponent
    //#endregion
  ],
  imports: [
    //#region default

    BrowserModule,
    AppRoutingModule
    //#endregion
    //#region icons
    ,
    NgIconsModule.withIcons({ bootstrapCart4, bootstrapTrash3,bootstrapInfoCircleFill }),
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
