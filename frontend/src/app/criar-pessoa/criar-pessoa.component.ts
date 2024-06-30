import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Pessoa from '../models/Pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pessoa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-pessoa.component.html',
  styleUrl: './criar-pessoa.component.scss',
})
export class CriarPessoaComponent {
  pessoaForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.pessoaForm = this.formBuilder.group({
      nome: [''],
      idade: [],
      email: [''],
    });
  }

  onSubmit() {
    const body: Pessoa = this.pessoaForm.value;
    this.httpClient.post(`http://localhost:3333/pessoas`, body).subscribe({
      next: () => {
        alert('Pessoa criada com sucesso!');
        this.router.navigate(['listar-pessoas']);
      },
    });
  }
}
