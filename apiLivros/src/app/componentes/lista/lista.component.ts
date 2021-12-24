import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/servicos/livro.service';
import { Livro } from 'src/app/Livro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  isModal: boolean = false // false=não está mostrando o modal na tela



  idLivroParaExcluir!: any

  Livros: Livro[]

  constructor(private service: LivroService, private router: Router) {
    this.Livros = []
  }

  ngOnInit(): void {
    this.listarLivros()

  }

  listarLivros(){
    this.service.listar().subscribe({
      next: (resultado) => {console.log(resultado)
                            this.Livros = <any>resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info('Lista completada')
    })
  }



  //função editar, ao clicar no botão editar, ele abre a rota edit/:id, que tem o html modificar.html, ou seja, ao clicar em editar abre o form editar
  editar(id:any){
    this.router.navigate(['/editar/' + id])
  }

  confirmarAcao(){
    this.service.excluirLivro(this.idLivroParaExcluir).subscribe({
      next: (resultado) => {console.log("Livro excluído")
                            this.listarLivros(),
                            this.isModal = false},
      error: (erro) => console.error(erro),
      complete: () => console.info("Processo de exclusão completado")
    })

  }

  cancelarAcao(){
    this.isModal = false
  }

  mostrarModal(id:any){
    this.isModal = true //mostrar modal
    this.idLivroParaExcluir = id
  }



}
