import {Component, Input, OnInit} from '@angular/core';
import {RecipesModel} from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipesModel;
  constructor() { }

  ngOnInit(): void {
  }

}
