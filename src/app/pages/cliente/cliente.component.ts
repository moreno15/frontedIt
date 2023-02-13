import {
  AfterViewInit,
  OnInit,
  OnDestroy,
  Component,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  apellido_materno: string;
  fecha_nacimiento: string;
  direccion: string;
  correo: string;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit, OnDestroy {
  usuarioSubscription!: Subscription;
  listaUsers!: Array<any>;

  displayedColumns: string[] = [
    'nombre',
    'apellido_paterno',
    'apellido_materno',
    'fecha_nacimiento',
    'direccion',
    'correo',
  ];
  dataSource!: MatTableDataSource<ClienteData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  id_usuario: any;

  nombre!: any;
  apellido_paterno!: any;
  apellido_materno!: any;
  fecha_nacimiento!: any;
  direccion!: any;
  correo;
  constructor(
    private servicesService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

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

  Cliente!: any;
  id_cliente!: number;
  getUseriD(id: number) {
    console.log(id);
    this.usuarioSubscription = this.servicesService.getCliente(id).subscribe({
      next: (v) => {
        console.log(v);
        (this.id_cliente = v?.id), (this.nombre = v?.nombre);
        this.apellido_paterno = v?.apellido_paterno;
        this.apellido_materno = v?.apellido_materno;
        this.direccion = v?.direccion;
        this.fecha_nacimiento = v?.fecha_nacimiento;
        this.correo = v?.correo;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  guardar(form: NgForm) {
    if (form.valid) {
      if (this.id_cliente > 0) {
        this.Cliente = {
          id: this.id_cliente,
          nombre: this.nombre,
          apellido_paterno: this.apellido_paterno,
          apellido_materno: this.apellido_materno,
          direccion: this.direccion,
          fecha_nacimiento: this.fecha_nacimiento,
          correo: this.correo,
          sexo: '',
        };
        this.usuarioSubscription = this.servicesService
          .updateCliente(this.Cliente, this.id_cliente)
          .subscribe({
            next: (v) => {
              this.getAllCliente();
              this.id_cliente = 0;
              swal.fire(
                'Exito!',
                'los datos se actualizaron correctamente',
                'success'
              );
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
          });
      } else {
        this.Cliente = {
          nombre: this.nombre,
          apellido_paterno: this.apellido_paterno,
          apellido_materno: this.apellido_materno,
          direccion: this.direccion,
          fecha_nacimiento: this.fecha_nacimiento,
          correo: this.correo,
          sexo: '',
        };
        this.usuarioSubscription = this.servicesService
          .guardarCliente(this.Cliente)
          .subscribe({
            next: (v) => {
              this.getAllCliente();
              this.id_cliente = 0;
              swal.fire(
                'Exito!',
                'los datos se guardaron correctamente',
                'success'
              );
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
          });
      }
    }
  }

  eleiminar() {
    if (this.id_cliente > 0) {
    swal
      .fire({
        title: 'Esta seguro de eliminar el cliente?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.usuarioSubscription = this.servicesService
            .eliminarCliente(this.id_cliente)
            .subscribe({
              next: (v) => {
                this.getAllCliente();
                this.id_cliente = 0;
                swal.fire(
                  'Exito!',
                  'Se borró los datos con exito',
                  'success'
                );
              },
              error: (e) => console.error(e),
              complete: () => console.info('complete'),
            });
        }
      });
       }else{
        swal.fire(
          'Error!',
          'Seleccione un cliente',
          'error'
        );
       }
  }

  ///listar
  getAllCliente(): void {
    this.usuarioSubscription = this.servicesService.listarclientes().subscribe({
      next: (v) => {
        console.log(v);

        this.listaUsers = v;
        const users = this.listaUsers;
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}
