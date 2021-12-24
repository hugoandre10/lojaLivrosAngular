import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { LivroFormComponent } from './componentes/livro-form/livro-form.component';
import { LivroService } from 'src/app/servicos/livro.service';

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    LivroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
