import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is the description',
    'http://assets.eatingwell.com/sites/default/files/imagecache/standard/recipes/MP7591.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
