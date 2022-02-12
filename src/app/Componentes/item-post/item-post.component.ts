import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../../Interfaces/Post';

@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.css']
})
export class ItemPostComponent implements OnInit {


  @Input() post!:Post;


  constructor() { }

  ngOnInit(): void {
  }

}
