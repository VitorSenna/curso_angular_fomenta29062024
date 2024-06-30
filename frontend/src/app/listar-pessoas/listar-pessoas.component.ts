import { Component, OnInit } from '@angular/core';
import Pessoa from '../models/Pessoa';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-pessoas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-pessoas.component.html',
  styleUrl: './listar-pessoas.component.scss',
})
export class ListarPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(public httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get(`http://localhost:3333/pessoas`).subscribe({
      next: (response) => {
        this.pessoas = response as Pessoa[];
        console.log(this.pessoas);
      },
    });
  }
}
