import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Store } from './components/store/store';
import { NotFoundPage } from './components/not-found-page/not-found-page';
import { Contact } from './components/contact/contact';
import { Category1 } from './components/Category1/category1';
import { Category2 } from './components/Category2/catogry2';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'store',
    component: Store,
    children: [
      {
        path: 'category-1',
        component: Category1,
        title: 'Category',
      },
      {
        path: 'category-2',
        component: Category2,
        title: 'Category',
      },
    ],
  },
  {
    path: 'contact',
    component: Contact,
  },
  { path: 'not-found', component: NotFoundPage },
  { path: '**', redirectTo: 'not-found' },
];
