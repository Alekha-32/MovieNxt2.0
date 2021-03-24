
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './list/list.component';
import { MoviesComponentComponent } from './movies-component/movies-component.component';
import { ShowDelMoviesComponent } from './MoviesComponent/show-del-movies/show-del-movies.component';
import{AddEditMoviesComponent} from './MoviesComponent/add-edit-movies/add-edit-movies.component';
import {SharedService} from './shared.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UpdateComponent } from './update/update.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserManagementComponent } from './user-management/user-management.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ListComponent,
    MoviesComponentComponent,
    ShowDelMoviesComponent,
    AddEditMoviesComponent,
    UpdateComponent,
    SidebarComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,RouterModule
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
