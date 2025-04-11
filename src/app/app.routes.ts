import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent() {
      return import('./components/home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'servicios',
    loadComponent() {
      return import('./components/servicios/servicios.component').then((m) => m.ServiciosComponent);
    },
  },
  {
    path: 'contacto',
    loadComponent() {
      return import('./components/contacto/contacto.component').then((m) => m.ContactoComponent);
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
