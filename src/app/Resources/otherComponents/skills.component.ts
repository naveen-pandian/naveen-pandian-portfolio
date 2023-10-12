import { Component } from "@angular/core";

@Component({
    selector:'skills-component',
    templateUrl:'./skills.component.html'
})
export class skillsComponent{
    languages1 : any[]=[
        { name:"C#", link : "Csharp.png"},
        { name:"C++",link : "Cpp.png"},
        { name:"C",link : "C.png"},
        { name:"Java",link : "java.png"},
        { name:"Microsoft SQL Server",link : "sql.png"},
        { name:"My Sql",link : "mysql.png"}, 
    
     ]

    languages2 : any[]=[
        { name:"Python",link : "Python.png"},
        { name:"html",link : "html.png"},
        { name:"Css",link : "Css.png"},
        { name:"Javascript",link : "js.png"},
        { name:"asp.net | MVC |Web API",link : "asp.jpeg"},       
            

    ]
    
    languages3 : any[]=[
        { name:"Angular",link : "angular.png"},
        { name:"jquery",link : "jquery.png"},    
        { name:".net",link : "dotnet.png"},
    ]

}