import { Routes } from '@angular/router';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listar-pessoas', pathMatch: 'full' },
  { path: 'listar-pessoas', component: ListarPessoasComponent },
  { path: 'criar-pessoa', component: CriarPessoaComponent },
];
