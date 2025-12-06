import { Child } from './components/child/child';
import { Routes } from '@angular/router';
import { Parent } from './components/parent/parent';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
{
  path:'',
  redirectTo:'parent',
  pathMatch:'full'
},

  {
    path:'child',
    component:Child,
   title:'Child Component'
  },
  {
    path:'parent',
    component:Parent,
    title:'Parent Component'
  },
  {
    path:'not-found',
    component:NotFound,
    title:'Not Found'
  },
  {
    path:'**',
    redirectTo:'not-found'
  }

];
