import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../Livro';


@Injectable({
  providedIn: 'root'
})

export class LivroService {
  private readonly API = "http://localhost:3000/Livros"

  constructor(private http:HttpClient) { }

  listar():Observable<any>{
    return this.http.get<any>(this.API)
  }

  //encontrar um livro
  getUmLivro(id:any){
    return this.http.get<any>(this.API + '/' + id)

  }

  //adicionar livro
  addLivro(livro:Livro){
    return this.http.post(this.API, livro)
  }

  //deletar uma livro através do id
  excluirLivro(id:any){
    return this.http.delete(this.API + '/' + id)
  }

  //editar um livro
  editarLivro(id:any, livro:Livro){
    return this.http.put(this.API + '/' + id, livro)
  }

}


