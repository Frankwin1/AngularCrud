import { Component } from '@angular/core';
import { Cliente } from './models/cliente';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clienteArray: Cliente[]=[
  {id: 1, nombres: "Jose", apellidos: "Islas"},
  {id: 2, nombres: "Jorge", apellidos: "Arguedas"},
  {id: 3, nombres: "Luis", apellidos: "Ortiz"}
  ];
  selectedCliente: Cliente = new Cliente();
  openForEdit(cliente : Cliente){
   this.selectedCliente = cliente;
  }
  addOrEdit() {
  if(this.selectedCliente.id === 0){
     this.selectedCliente.id = this.clienteArray.length + 1;
   	 this.clienteArray.push(this.selectedCliente);
  }
    this.selectedCliente = new Cliente();
  }
  delete(){
     if(confirm('Esta seguro de eliminarlo ?')){
      this.clienteArray = this.clienteArray.filter(x => x !=this.selectedCliente);
      this.selectedCliente = new Cliente(); 
      }
  }
}
