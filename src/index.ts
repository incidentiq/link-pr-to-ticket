const name = 'test';
export function test(word: string = name): string {
  return `This is a ${word}.`;
}