import { it, expect } from 'vitest';
import { tours, tourUi } from './tours';

const shape = (o: unknown): unknown =>
  Array.isArray(o) ? (o.some((x) => typeof x === 'object' && x !== null && !Array.isArray(x)) ? o.map(shape) : 'list') : typeof o === 'object' && o !== null ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, shape(v)])) : typeof o;

it('대표 프로그램: 영어·한국어 모양이 같음', () => {
  expect(shape(tours.ko)).toEqual(shape(tours.en));
  expect(Object.keys(tourUi.ko)).toEqual(Object.keys(tourUi.en));
});
it('일수: 학생 8일, 교사 10일', () => {
  for (const l of ['en', 'ko'] as const) {
    expect(tours[l].students.days.list).toHaveLength(8);
    expect(tours[l].teachers.days.list).toHaveLength(10);
  }
});
it('학교 이름·파트너 단정 없음', () => {
  const all = JSON.stringify(tours);
  for (const bad of ['공주', 'Gongju', '공식 파트너', 'official partner', '협약']) expect(all).not.toContain(bad);
});
