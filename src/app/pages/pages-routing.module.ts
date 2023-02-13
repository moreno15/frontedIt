import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import {ClienteComponent  } from './cliente/cliente.component';




const routes:Routes=[


{path:'', component:PagesComponent,
  children:[
    {path:'cliente', component:ClienteComponent}
  ]
},

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
