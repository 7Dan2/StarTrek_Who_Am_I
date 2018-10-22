import { ApodData } from './../../apod-data';
import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name:string ="../../../assets/apod.jpg";
  setMyStyles() {
    let styles = {
      'background': 'url(' + this.name + ') no-repeat center center fixed',
      'background-size': 'cover',
      'height': '100%',
      'overflow': 'hidden',
      'font-family': 'Kodchasan , sans-serif', 
    };
    return styles;
  }

 
  private service:ApodService;
  public apod:ApodData[];
  constructor(param_service:ApodService) {
    this.service = param_service;  

   }
  
   
  
  ngOnInit() {
   
    console.log(this.apod) //1

    this.service.getAll()
    .subscribe(
      (apodDatas:ApodData[]) =>  { //3
        this.apod = apodDatas;
      }
    );
   
  setTimeout(() => {
    console.log(this.apod) //4
  }, 10000);

   console.log(this.apod)//2
}

 
}
