
import {AfterViewInit,OnInit,OnDestroy, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort,SortDirection} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgForm } from '@angular/forms';


import { Subscription } from 'rxjs';
import { GeneralService } from '../services/general.service';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

import CryptoJS from 'crypto-js';
import ubigeo from 'src/assets/json/ubigeo.json';
import rol from 'src/assets/json/rol.json';

export interface ClienteData {
  nombre: string;
  apellido_paterno: string;
  apellido_materno:string;
  fecha_nacimiento:string;
  direccion:string;
  correo:string;
}


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent  implements  OnInit,OnDestroy {

  usuarioSubscription!: Subscription;
  listaUsers!: Array<any>;

  displayedColumns: string[] = [ 'nombre', 'apellido_paterno', 'apellido_materno','fecha_nacimiento','direccion','correo'];
  dataSource!: MatTableDataSource<ClienteData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  id_usuario: any;


  nombre!:any; apellido_paterno!:any; apellido_materno!:any;fecha_nacimiento!:any;direccion!:any;correo
  constructor(private servicesService:GeneralService,    private activatedRoute: ActivatedRoute, private router: Router) {

  }


  ngOnInit(): void {
    // this.pasos = this.activatedRoute.snapshot.paramMap.get('pasos');
    this.getAllCliente();
   }

   ngOnDestroy(): void {
     this.usuarioSubscription.unsubscribe();
   }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  Cliente!:any;
  getUseriD(id:number){

    this.usuarioSubscription = this.servicesService
      .getCliente(id)
      .subscribe({
        next: (v) => {
          console.log(v[0]);
          this.Cliente = v[0];
          this.nombre=v[0]?.nombre;
          this.apellido_paterno=v[0]?.apellido_paterno;
          this.apellido_materno=v[0]?.apellido_materno;
          this.direccion=v[0]?.direccion;
          this.fecha_nacimiento=v[0]?.fecha_nacimiento;
          this.correo=v[0]?.correo;

        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }

  ///listar
  getAllCliente(): void {
    this.usuarioSubscription = this.servicesService
      .listarclientes()
      .subscribe({
        next: (v) => {
          console.log(v);

          this.listaUsers = v;
        const users =  this.listaUsers ;
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }




}


