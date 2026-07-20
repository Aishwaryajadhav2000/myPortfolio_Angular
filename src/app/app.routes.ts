import { Routes } from '@angular/router';
import { MyProjects } from './my-projects/my-projects';
import { Home } from './home/home';


export const routes: Routes = [
    {path:'', component:Home},
    {path : "myprojects" , component:MyProjects}
];
