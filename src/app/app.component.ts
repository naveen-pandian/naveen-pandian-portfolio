import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { dialogComponent } from './Resources/otherComponents/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collection : any[]=[
    { name:"Welcome",icon:"rocket_launch"},
    { name:"Education",icon:"games"},
    { name: "Skills",icon:"code"},
    {name:"Projects",icon:"source"},
    {name : "Contact",icon:"extension"}
        ]  
        
        constructor(public dialog: MatDialog) {}

        openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
          this.dialog.open(dialogComponent, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
          });
        }

        languages : any[]=[
          { name:"C#", link : "Csharp.png"},
          { name:"C++",link : "Cpp.png"},
          { name:"C",link : "C.png"},
          { name:"Java",link : "java.png"},
          { name:"Microsoft SQL Server",link : "sql.png"},
          { name:"My Sql",link : "mysql.png"}, 
          { name:"Python",link : "Python.png"},
        { name:"html",link : "html.png"},
        { name:"Css",link : "Css.png"},
        { name:"Javascript",link : "js.png"},
        { name:"asp.net | MVC |Web API",link : "asp.jpeg"},      
        { name:"Angular",link : "angular.png"},
        { name:"jquery",link : "jquery.png"},    
        { name:".net",link : "dotnet.png"},
      
       ]
  
   
}
