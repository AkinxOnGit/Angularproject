import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Lasagne", "This is a Lasagne recipe", "https://static.sscontent.com/thumb/500/500/products/124/v998629_prozis_tuna-lasagna_6.jpg"),
    new Recipe("Lasagne", "This is a Lasagne recipe", "https://static.sscontent.com/thumb/500/500/products/124/v998629_prozis_tuna-lasagna_6.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
