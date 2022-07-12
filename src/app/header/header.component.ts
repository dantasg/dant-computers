import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  descricao = "";

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  carregaProduto() {
    this.router.navigate(["produtos"]);
  }
  
  carregaCarrinho() {
    this.router.navigate(["carrinho"]);
  }

  carregaContato() {
    this.router.navigate(["contato"]);
  }

}
