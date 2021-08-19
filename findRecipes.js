const chooseRecipe = function(bakeryA, bakeryB, recipes) {

    let bakeryAObj = ingredientCheck(bakeryA, recipes);
    let bakeryBObj = ingredientCheck(bakeryB, recipes);

    if(bakeryAObj.length >= bakeryBObj.length) {
      for (let el of bakeryAObj) {
        for (let el2 of bakeryBObj) {
          if( el.name === el2.name) {
            return el.name;
          }
        }
      }
    }
    else {
      for (let el of bakeryBObj) {
        for (let el2 of bakeryAObj) {
          if( el.name === el2.name) {
            return el.name;
          }
        }
      }
    }

};

const ingredientCheck = function(bakery, recipes) {
  let objs = [];  
  for (let el of bakery ) {
      for ( var x =0; x < recipes.length; x++) {
        for (var y = 0; y < recipes[x].ingredients.length; y++ ) {
          if ( el === recipes[x].ingredients[y]) {
            objs.push(recipes[x]);
            break;
          }
        }
      }
    }
    return objs;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));