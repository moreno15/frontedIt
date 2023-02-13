import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PagesComponent } from './pages.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import localePR from'@angular/common/locales/es-PR';
import { safeUrlPipe } from './safeurl.pipe';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { ClienteComponent } from './cliente/cliente.component';

registerLocaleData(localePR,'es');
@NgModule({
  declarations: [
    PagesComponent,
    safeUrlPipe,
    ClienteComponent

  ],
  providers: [
    {provide:LOCALE_ID,useValue:'es'},

    ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    CKEditorModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
MatInputModule ,
MatProgressSpinnerModule

  ],
  exports: [
    ClienteComponent
  ]
})
export class PagesModule {

 }
