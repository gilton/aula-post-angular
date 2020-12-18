import { Response } from './models/response.models';
import { ClienteService } from './services/cliente.service';
import { Cliente } from './models/cliente.models';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-post';
  cliente: Cliente = {};
  showMessage: boolean = false;
  message: string = "";

  constructor(private service: ClienteService) {  }

  onSubmit(){ 
    this.service.postCliente(this.cliente)
    .subscribe((response:any) =>{
      let result: Response = response;
      console.log('result ', result);

      if( result.statusCode == 201 ) {
        this.showMessage = true;
        this.message = result.message;
      }


    });
   }
}
