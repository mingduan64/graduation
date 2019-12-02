import { Component, OnInit, NgZone, Input } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HcarouselService } from "../homepagecarousel/hcarousel.service";
import {Hcarousel} from '../homepagecarousel/hcarousel.model'
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mimeType } from "./mime-type.validator";
import { NgbDatepickerMonthView } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import { HttpEvent, HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-addhca',
  templateUrl: './addhca.component.html',
  styleUrls: ['../admin.component.scss']
})
export class AddhcaComponent implements OnInit {
  submitted = false;
  createHcaForm: FormGroup;
 
  @Input()
  title;
  description;
  responses: Array<any>;
  img;
  id;
  multipleImages = [];
  
  constructor(
    private hcaService : HcarouselService,
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private http: HttpClient
  ) {this.HcaMainForm();
  
  }
  ngOnInit(){
 
  }
  
  
  selectImage(event) {
   if (event.target.files.length > 0) {
     const file = event.target.files[0];
     this.img = file;
   }
 }
 selectMultipleImage(event){
  if (event.target.files.length > 0) {
    this.multipleImages = event.target.files;
  }
}
HcaMainForm(){
  this.createHcaForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    file: [Array]

  })
}


onSubmit(){
  const formData = new FormData();

 //formData.append('id', this.id)
  formData.append('title', this.createHcaForm.get('title').value);
  formData.append('description', this.createHcaForm.get('description').value);
  formData.append('file', this.img);

  this.hcaService.createHca(formData).subscribe(
    (res) => this.ngZone.run(() => this.router.navigateByUrl('/admin/managehomepage/carousel')),
   (err) => console.log(err)
  ); 

}
  




}

