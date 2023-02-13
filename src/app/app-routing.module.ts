import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes:Routes=[

  {path:'', redirectTo:'/cliente', pathMatch:'full'},

  {path:'**', component:NopageFoundComponent}

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{
      useHash: false,
    }),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
