import { Injectable } from '@angular/core';
import { Livro } from './Livro';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
  {
    codEditora: 1,
    codigo: 1,
    titulo: "O Senhor dos Anéis",
    resumo: "Uma grande aventura na Terra Média",
    autores: ["J.R.R. Tolkien"],
  },
  {
    codEditora: 2,
    codigo: 2,
    titulo: "Dom Quixote",
    resumo: "As aventuras do Cavaleiro da Triste Figura",
    autores: ["Miguel de Cervantes"],
  },
  {
    codEditora: 3,
    codigo: 3,
    titulo: "Harry Potter e a Pedra Filosofal",
    resumo: "A história do jovem bruxo Harry Potter",
    autores: ["J.K. Rowling"],
  },
  ]
  constructor() { }

  obterLivros(): Observable<Livro[]> {
    return of(this.livros);
  }

  incluirLivro(livro: Livro): Observable<Livro> {
    const proxCodigo = Math.max(
      ...this.livros.map((livro) => livro.codigo),
      0
    );
    livro.codigo = proxCodigo + 1;
    this.livros.push(livro);
    return of(livro);
    
  }

  excluirLivro(codigo: number): Observable<void> {
    const index = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    );
    if (index !== -1) {
      this.livros.splice(index, 1);
    } 
    return of(undefined);
  }
}
