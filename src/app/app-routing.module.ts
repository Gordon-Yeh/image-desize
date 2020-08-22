import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComparerComponent } from './image-comparer/image-comparer.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'edit', component: ImageComparerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
