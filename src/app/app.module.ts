import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './rotas.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './Paginas/homepage/homepage.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { PostsComponent } from './Componentes/posts/posts.component';
import { SidebarComponent } from './Componentes/sidebar/sidebar.component';
import { ItemPostComponent } from './Componentes/item-post/item-post.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { CriarPostComponent } from './Paginas/criar-post/criar-post.component';
import { DetalhesComponent } from './Paginas/detalhes/detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    PostsComponent,
    SidebarComponent,
    ItemPostComponent,
    NavBarComponent,
    CriarPostComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
