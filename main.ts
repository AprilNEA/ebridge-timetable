import { DOMParser } from './mod.ts';
import { parseTimetable } from './parser.ts';

const document = new DOMParser().parseFromString(
  Deno.readTextFileSync('XJTLU e-Bridge.html').toString(),
  'text/html'
)!;

const lessons = parseTimetable(document);

console.table(lessons);
