import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servicos/post.service';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.component.html',
  styleUrls: ['./criar-post.component.css']
})
export class CriarPostComponent implements OnInit {


  title:string = "";
  image:string = "";
  text:string = "";

  textoBotao:String = "Criar Post";

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

   criarPost = async () =>{
    
    const message:HTMLElement | null = document.getElementById("form-message");
    if(!message)return;
    message.innerText = "";
    if(this.title === "")
    {
      message.innerText = "Escreva um título para o post.";
      return;
    }
    if(this.image === "")
    {
        message.innerText = "Coloque um link para uma imagem.";
        return;
    }
    if(this.text === "")
    {
        message.innerText = "Escreva um texto para o post.";
        return;
    }

    this.textoBotao = "Criando post";
    const botao:any = document.getElementById("form-button");
    if(botao !== null)
    {
      botao.disabled = true;
    }

    const newPost = {
      title: this.title,
      image: this.image,
      body: this.text
    }



    this.postService.criaPost(newPost).subscribe(
      ()=>{

        this.textoBotao = "Criar Post";
        if(botao !== null)
        {
          botao.disabled = false;
        }
        message.innerText = "Post criado.";
      }
    );


  }

}
