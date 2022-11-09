import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';


@Component({
  selector: 'app-sbr',
  templateUrl: './sbr.component.html',
  styleUrls: ['./sbr.component.css']
})
export class SbrComponent implements OnInit {

  showForm = false;
  constructor() { }

  ngOnInit(): void {
    Swal.fire({
      title: 'A continuación se le presentará una breve encuesta',
      confirmButtonText: 'Continuar',
      backdrop: false
    }).then((result) => {
        this.showForm = true;
    })
  }

}
