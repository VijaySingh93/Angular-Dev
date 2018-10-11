import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test recipe', 'https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg')
    // tslint:disable-next-line:max-line-length
    , new Recipe('Test', 'This is a test recipe', 'https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
