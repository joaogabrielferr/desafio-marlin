import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPostComponent } from './Paginas/criar-post/criar-post.component';
import { DetalhesComponent } from './Paginas/detalhes/detalhes.component';
import { HomepageComponent } from './Paginas/homepage/homepage.component';

const routes: Routes = [

  { path: '', component: HomepageComponent},
  { path: 'criarpost', component: CriarPostComponent},
  { path: 'detalhes/:id', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
