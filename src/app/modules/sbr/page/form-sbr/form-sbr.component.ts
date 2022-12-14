import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-form-sbr',
  templateUrl: './form-sbr.component.html',
  styleUrls: ['./form-sbr.component.css'],
  animations: [
    trigger('openClose', [
      state('void', style({
        opacity: 0.1,
       transform: "translateX(20%)"
      })),
      transition(':enter', [
        animate('0.5s', style({
          opacity: 5,
          transform: "translateX(1%)"
        }))
      ]),
    ]),
    trigger('openCloseX', [
      state('void', style({
        opacity: 0.1,
        transform: "translateX(-20%)"
      })),
      transition(':enter', [
        animate('0.5s', style({
          opacity: 5,
          transform: "translateX(-1%)"
        }))
      ]),
    ]),


  ]
})
export class FormSbrComponent implements OnInit {

   form: FormGroup = this.formBuilder.group({
    first: ['', Validators.required],
    second: ['', Validators.required],
    third: ['', Validators.required],
    fourth: ['0', Validators.required],
    fifth: ['', Validators.required],
  });
   questionIndex = 0;
   range = '0 dias';
  isOpen = false;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    setInterval(() => this.isOpen = !this.isOpen, 2000)
  }

  async onSubmit(){
    this.spinner.show()
    this.apiService.sendSurvey(this.form.value)
    .subscribe(data => {
      this.spinner.hide()
      Swal.fire({
        title: 'Resultado del diagnostico',
        text: data.join(),
        confirmButtonText: 'Intentar nuevamente',
        backdrop: false
      }).then((result) => {
        this.form.reset()
        this.questionIndex = 0
      })
    })
  }

  nextQuestion(){
    this.questionIndex++;
  }

  previousQuestion(){
    this.questionIndex--;
  }

  getControlByIndex(){
    switch (this.questionIndex) {
      case 0:
        return 'first';
      case 1:
        return 'second';
      case 2:
        return 'third';
      case 3:
        return 'fourth';
      case 4:
        return 'fifth';
      default:
        return  "";
    }
  }

  setRange(){
    this.range = `${this.form.controls['fourth'].value} dias`
  }

}
