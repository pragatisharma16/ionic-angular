import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
private recipes:Recipe[]= [
  {
    id:'1',
    title:'Fried Rice',
    imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61tgfXYZj8hI166SXBNCwtb-uCKrv0-j2qsPEHzYGna2-RJY8vw&s',
    ingredients:['Sev','onion'],
  },
    {
      id:'2',
      title:'Momos',
      imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfV4vubEDSuKjUooCwXymZ4Wm8gPPJ3tW5pmkdcLl-ZK3MDmjWBQ&s',
      ingredients:['Chatni','Sauce'],
    },
      {
        id:'3',
        title:'Pizza',
        imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2z3jEFgdMmg8-OxZQgp2OtLWJzf56my3FNnAB1VUGnyQWUFRU&s',
        ingredients:['Olives','Sauce'],
      },
        {
          id:'4',
          title:'Nachos',
          imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9IgnWG9LWpJJSH_BqV0jf6v_hfbJWu4k37hJw1hNUp5ceyiLrA&s',
          ingredients:['Olives','Sauce'],
        }
];
  constructor() { }
  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
    return this.recipes.find(recipe=>{
      return recipe.id === recipeId;
    })
  };
}
