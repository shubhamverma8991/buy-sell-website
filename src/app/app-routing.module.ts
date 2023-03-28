import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsPageComponent } from './MyComponents/listings-page/listings-page.component';
import { ListingDetailComponent } from './MyComponents/listing-detail/listing-detail.component';
import { ContactPageComponent } from './MyComponents/contact-page/contact-page.component';
import { EditListingPageComponent } from './MyComponents/edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './MyComponents/my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './MyComponents/new-listing-page/new-listing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: ListingDetailComponent },
  { path: 'contact/:id', component: ContactPageComponent },
  { path: 'edit-listing/:id', component: EditListingPageComponent },
  { path: 'my-listings', component: MyListingsPageComponent },
  { path: 'new-listing', component: NewListingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
