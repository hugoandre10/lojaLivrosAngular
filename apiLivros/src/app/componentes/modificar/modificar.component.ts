import { Livro } from './../../Livro';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from 'src/app/servicos/livro.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  livro: Livro = {
    id: 0 ,
    nome: '' ,
    autor: '',
    foto: ''

  }

  constructor(private livroService: LivroService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.activateRoute.snapshot.params['id']
    console.log("id de entrada:" + id_entrada)
    this.livroService.listarUmLivro(id_entrada).subscribe({
      next: (resultado) => {
        console.log(resultado)
        this.livro = resultado
      },
      error: (erro) => console.error(erro),
      complete: () => console.info("Livro encontrado!")


    })
  }

  modificar(){
    this.livroService.editLivro(this.livro.id, this.livro).subscribe({
      next: (resultado) => console.log("Livro editado com sucesso"),
      error: (erro) => console.error(erro),
      complete: () => console.info("Edição completada com êxito")


    })
    // Voltamos para a rota do nosso componente inicio
    this.router.navigate(['/lista'])

  }

}
