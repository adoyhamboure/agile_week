import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { GeneratedCvComponent } from './generated-cv/generated-cv.component';
import { EditOneComponentComponent } from './edit-one-component/edit-one-component.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'generated',
    component: GeneratedCvComponent
  },
  {
    path: 'editor/:id',
    component: EditOneComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
