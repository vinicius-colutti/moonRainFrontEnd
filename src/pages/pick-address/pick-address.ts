import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDto } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDto[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua quinze de Novembro",
        numero: "300",
        complemento: "Apto 200",
        bairro: "Santa Monica",
        cep: "067320000",
        cidade:{
          id: "1",
          nome: "Uberlandia",
          estado:{
            id: "1",
            nome: "Minas Gerais"
          }
        }
      },
      {
        id: "1",
        logradouro: "Rua quinze de Novembro",
        numero: "300",
        complemento: "Apto 200",
        bairro: "Santa Monica",
        cep: "067320000",
        cidade:{
          id: "1",
          nome: "Uberlandia",
          estado:{
            id: "1",
            nome: "Minas Gerais"
          }
        }
      }
    ]
  }

}
