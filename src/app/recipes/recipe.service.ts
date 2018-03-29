import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shadow of the Colossus',
      'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpcwEFtI_DMbjSIH1RCbbeevffKIK6ry8C53jKIvqScoFO0uF',
      [
        new Ingredient('Tomatoes', 2),
        new Ingredient('Cheese', 1)
      ]
    ),
    new Recipe(
      'Yokai',
      'Another test',
      'https://sites.google.com/site/niohgaming/_/rsrc/1493778470396/enemies/namahage.png?height=310&width=320',
      [
        new Ingredient('ex1', 2),
        new Ingredient('ex2', 1)
      ]),
    new Recipe(
      'Horizon Zero Dawn',
      'PlayStation Only',
      'https://media.game.es/COVERV2/3D_L/130/130451.png',
      [
        new Ingredient('lista1', 2),
        new Ingredient('lista2', 1)
      ]),
    new Recipe(
      'Nioh',
      'PS4',
      'https://i.ebayimg.com/images/g/LXsAAOSw8b1aIRui/s-l300.jpg',
      [
        new Ingredient('try2', 2),
        new Ingredient('try3', 1)
      ])

  ];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // copy of
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[])  {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe)  {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
