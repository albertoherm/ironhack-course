export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function sumArray(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

export function findMax(arr: number[]): number {
  return Math.max(...arr);
}
