import { Component, OnInit, NgZone, Input } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HcarouselService } from "../homepagecarousel/hcarousel.service";
import {Hcarousel} from '../homepagecarousel/hcarousel.model'
import { ActivatedRoute, ParamMap } from "@angular/router";

import { NgbDatepickerMonthView } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import { HttpEvent, HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-updatehca',
  templateUrl: './updatehca.component.html',
  styleUrls: ['../admin.component.scss']
})
export class UpdatehcaComponent implements OnInit {
  submitted = false;
  editHcaForm: FormGroup;
  
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
    private actRoute: ActivatedRoute,
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
  HcaMainForm(){
    this.editHcaForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: [Array]
  
    })
  }
  
  getHca(id) {
    this.hcaService. getHCabyid(id).subscribe(data => {
      this.editHcaForm.setValue({
        title: data['title'],
        description: data['description'],
        file: data['img']
      });
    });
  }
  updateCat() {
    this.editHcaForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: [Array]
     
    })
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editHcaForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.hcaService.updateHCa(id, this.editHcaForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}


