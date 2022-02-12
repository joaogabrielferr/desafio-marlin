import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/servicos/post.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {


  post!:Post;
  id!:number;
  carregado:boolean = false;

  constructor(private route: ActivatedRoute,private postService:PostService) { }

  ngOnInit(): void {

     this.id = this.route.snapshot.params['id'];
     
     this.postService.pegaPostUnico(this.id).subscribe(
       (post) => { 
        this.carregado = true;
        this.post = post;
        console.log(this.post);
        }
      );


  }

}
