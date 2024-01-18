import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  //String Interpolation
  sex="Male"
  age=22
  year="3rd Year"
  course="Bachelor's of Science in Information Technology Major in Web Development"
  email="jtgarcia2@student.hau.edu.ph"
  website="www.example.com"
  phone='09123456789'
  
  //Image Interpolation
  imageUrl:string="assets/profilePic-1.jpg";
  imageW: number = 300;
  imageH: number = 300;
}
