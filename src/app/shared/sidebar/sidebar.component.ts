import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  urlcurso!:any;
  existe!: boolean;
  ngOnInit(): void {
    this.existe = false;



  }

}
