import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://okikiko.com/wp-content/uploads/2017/06/Japanese-mythical-creature.jpg'),
    new Recipe('B Test Recipe', 'This is a test', 'http://3.bp.blogspot.com/_zuKg9DRLTjI/TUNUjAOtTYI/AAAAAAAACNA/C5tD-09p2Lw/s1600/yanagi-baba.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
