import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComparerComponent } from './image-comparer/image-comparer.component';

const routes: Routes = [
  { path: 'edit/:id', component: ImageComparerComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
