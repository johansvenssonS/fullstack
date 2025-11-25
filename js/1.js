/**
 *@template T
 * @param {T[]} arr
 * @returns {T || undefined}
 */
function getLastItem(arr) {
  return arr[arr.length - 1];
}

let x = getLastItem([1, 2, 3, 4, 5]);

console.log(x);
