import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
new Recipe('test','this is a test recipe', 'http://images.media-allrecipes.com/userphotos/250x250/1330843.jpg'),
new Recipe('test','this is a test recipe', 'http://images.media-allrecipes.com/userphotos/250x250/1330843.jpg')


  ];


  constructor() { }

  ngOnInit() {
  }

}
