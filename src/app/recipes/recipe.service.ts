import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipe: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('Test',
        'This is a test recipe',
        'https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Bread', 2)
        ])
        // tslint:disable-next-line:max-line-length
        , new Recipe('Test',
        'This is a test recipe',
        'https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Bread', 2)
        ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipe.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }


}
