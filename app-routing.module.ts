import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component'



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },

  {
    path: 'login',
    component: SignUpComponent,
  },
  {
    path: 'image-gallery',
    component: ImageGalleryComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
