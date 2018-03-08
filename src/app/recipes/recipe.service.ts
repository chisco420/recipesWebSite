import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';


export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Raven Tengu',
      'This is a test',
      'http://okikiko.com/wp-content/uploads/2017/06/Japanese-mythical-creature.jpg',
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

  getRecipes() {
    // copy of
    return this.recipes.slice();
  }

}
