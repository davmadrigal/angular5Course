import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is the description 1',
    'http://assets.eatingwell.com/sites/default/files/imagecache/standard/recipes/MP7591.jpg'),
    new Recipe('A Test Recipe 2', 'This is the description 2 ',
    'http://assets.eatingwell.com/sites/default/files/imagecache/standard/recipes/MP7591.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }
  

}
