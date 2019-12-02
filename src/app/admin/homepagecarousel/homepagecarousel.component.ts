import { Component, OnInit, OnDestroy } from '@angular/core';
import { HcarouselService} from './hcarousel.service'
import { FormGroup} from '@angular/forms'
import { ActivatedRoute, ParamMap } from "@angular/router";
import {Subscription} from 'rxjs'
import { Hcarousel } from './hcarousel.model';

@Component({
  selector: 'app-homepagecarousel',
  templateUrl: './homepagecarousel.component.html',
  styleUrls: ['../admin.component.scss']
})
export class HomepagecarouselComponent implements OnInit, OnDestroy{
  hca:any = [];
  hcas: Hcarousel[] = [];
  isLoading = false;
  private hcaSub: Subscription;

  constructor(public hcaService: HcarouselService) { }


  ngOnInit() {
    this.isLoading = true;
    this.hcaService.getHcalist();
    this.hcaSub = this.hcaService.getHcaUpdateListener()
      .subscribe((hcas: Hcarousel[]) => {
        this.isLoading = false;
        this.hcas = hcas;
      }); 
  }
 



  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
 
 /* readHCatlist(){
    this.hcaService.getHcalist().subscribe((data) => {
     this.hca = data;
    })    
  }
  removeCat(hca, index) {
    if(window.confirm('Are you sure?')) {
        this.hcaService.deleteHca(hca._id).subscribe((data) => {
          this.hca.splice(index, 1);
        }
      )    
    }
  } */


  onDelete(hcaId: string) {
    this.hcaService.deleteHca(hcaId);
  }

  ngOnDestroy() {
    this.hcaSub.unsubscribe();
  }  
}


