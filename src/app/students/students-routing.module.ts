import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'student/home',component: HomeComponent},
  {path : 'student',redirectTo:'student/home',pathMatch:'full'},
  {path : '',redirectTo:'student/home',pathMatch:'full'},
  {path:'student/create',component : CreateComponent},
  {path:'student/edit/:id',component : EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
