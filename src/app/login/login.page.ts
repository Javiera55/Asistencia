import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

usuario:string = ""
clave:string = ""



  constructor(
    private alert: AlertController,
    private router:Router
  ) { }

login(){
 if(this.usuario == "juanito" && this.clave=="123456"){
  this.alerta("Bienvenido Juanito", ()=>{
   let extras: NavigationExtras ={state:{usuario: this.usuario}}
    
    
    this.router.navigate(['/home'], extras)
  })

 }else{
  this.alerta("Por favor complete todos los campos", ()=>{})

 }
}

async alerta(texto:string, accion:()=>void){

  let alerta = await this.alert.create({
    header: "Información",
    message:texto,
    buttons:[
      {text:"aceptar", handler:accion}
    ]
  })
  
  alerta.present()

}

  ngOnInit() {
  }

}

