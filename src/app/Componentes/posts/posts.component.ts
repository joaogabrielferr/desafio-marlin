import { Component, OnInit } from '@angular/core';
import {Post} from '../../Interfaces/Post';
import { PostService } from 'src/app/servicos/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts:Post[] = [];
  carregado:boolean = false;


  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.postService.pegaPosts().subscribe((posts) => 
    {
    this.carregado = true;
    this.posts = posts.reverse();    
    }
    )

  }

}
