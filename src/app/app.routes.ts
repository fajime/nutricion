import { HttpXsrfTokenExtractor } from '@angular/common/http';
import { Routes } from '@angular/router';



export const routes: Routes = [
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
    loadComponent() {
      return import('./components/home/home.component').then((m) => m.HomeComponent);
    },
  },
];
