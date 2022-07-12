import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  descricao = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], {queryParams: { descricao: this.descricao }});
      return;
    }

    this.router.navigate(["produtos"]);
  }
}
