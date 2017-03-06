import { Component } from '@angular/core';
import { postsService } from '../services/posts.service';

@Component({
    moduleId : module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [postsService]
})
export class UserComponent  { 
    name : string;
    email : string;
    address : address;
    hobbies : string[];
    showHobbies : boolean;
    posts : Post[];

  constructor(private postsService: postsService ){
  this. name = 'Meena';
  this.email = 'meena@gmail.com';
  this.address = {
    st : 'No.12 Valluvar south street',
    city :  'Madurai',
    state : 'TamilNadu',
         }
  this.hobbies = ['music','singing'];
  this.showHobbies = false;

  this.postsService.getPosts().subscribe(posts =>{
     this.posts = posts;
     console.log(posts);
  });
     }
  show(){
      if(this.showHobbies == true){
          this.showHobbies = false;
      }
      else{
          this.showHobbies = true;
      }

  }
  
  addHobby(hobby){
      this.hobbies.push(hobby); 
      //this.hobbies.insert(hobby); 
  }

  delete(i){
      this.hobbies.splice(i,1);
    //  this.hobbies.pop(i);
  }
 
}
 interface address{
     st : string;
     city : string;
     state : string;
 }

 interface Post{
     id : number;
     title : string;
     body : string;
 }