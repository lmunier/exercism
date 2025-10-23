// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }

  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let sum = 0;
  const DAYS_PER_WEEK = 7;

  if ((week - 1) * DAYS_PER_WEEK >= birdsPerDay.length) {
    throw new Error(`[Error] - week times days per week bigger than birdsPerDay array : ${week * DAYS_PER_WEEK} >= ${birdsPerDay.length}.`);
  }
  
  for (let i = (week - 1) * DAYS_PER_WEEK; i < week * DAYS_PER_WEEK; i++) {
    sum += birdsPerDay[i];
  }

  return sum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1;
    }
  }
}
