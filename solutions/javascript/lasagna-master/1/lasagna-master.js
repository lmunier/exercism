/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime <= 0) {
    return 'Lasagna is done.';
  } else if (remainingTime > 0) {
    return 'Not done, please wait.';
  }

  return 'You forgot to set the timer.';
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  const NOODLES_PER_LAYER = 50;
  const SAUCE_PER_LAYER = 0.2;

  const nbNoodlesLayers = layers.filter(x => x === 'noodles').length;
  const nbSauceLayers = layers.filter(x => x === 'sauce').length;
  
  return {noodles: nbNoodlesLayers * NOODLES_PER_LAYER, sauce: nbSauceLayers * SAUCE_PER_LAYER};
}

export function addSecretIngredient(friendsList, myList) {
  if (!friendsList.at(-1)) {
    return;
  }
  
  myList.push(friendsList.at(-1));
}

export function scaleRecipe(recipe, scaling) {
  const ORIGINAL_SCALE = 2;
  const scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * scaling / ORIGINAL_SCALE;
  }

  return scaledRecipe;
}
