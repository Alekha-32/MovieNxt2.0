import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{MoviesComponentComponent} from "./movies-component/movies-component.component";
import { AddEditMoviesComponent } from './MoviesComponent/add-edit-movies/add-edit-movies.component';
import { ShowDelMoviesComponent } from './MoviesComponent/show-del-movies/show-del-movies.component';
import { UpdateComponent } from './update/update.component';
import { UserManagementComponent } from './user-management/user-management.component';


const routes: Routes = [
  {path:'movies',component:MoviesComponentComponent},
  {path:'app-user-management',component:UserManagementComponent},
  {path:'add-edit',component:AddEditMoviesComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'show-delete',component:ShowDelMoviesComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
