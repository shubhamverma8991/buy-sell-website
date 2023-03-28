import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './MyComponents/listings-page/listings-page.component';
import { ListingDetailComponent } from './MyComponents/listing-detail/listing-detail.component';
import { ContactPageComponent } from './MyComponents/contact-page/contact-page.component';
import { MyListingsPageComponent } from './MyComponents/my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './MyComponents/new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './MyComponents/edit-listing-page/edit-listing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingDetailComponent,
    ContactPageComponent,
    MyListingsPageComponent,
    NewListingPageComponent,
    EditListingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
