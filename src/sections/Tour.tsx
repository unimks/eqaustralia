import { useEffect, useMemo, useRef, type CSSProperties } from 'react';
import { Lines, Sents } from '../components/Lines';
import { keep } from '../data/content';
import { tours, tourUi, type Tour } from '../data/tours';
import { useC } from '../lib/i18n';
import { useScrub } from '../lib/scrub';
import { reduced } from '../lib/gsap';
import './tour.css';

const v = (o: Record<string, number | string>) => o as CSSProperties;
type Slug = Tour['slug'];
const useTour = (slug: Slug) => {
  const { lang } = useC();
  return { t: tours[lang][slug], ui: tourUi[lang] };
};
const toContact = () => {
  const el = document.getElementById('contact');
  if (!el) return;
  const l = (window as unknown as { __lenis?: { scrollTo: (e: Element) => void } }).__lenis;
  if (l) l.scrollTo(el); else el.scrollIntoView({ behavior: 'smooth' });
};

/* 프로그램 머리 — 대상·기간·지역, 안내서 받기·문의 버튼 */
export function TourHead({ slug }: { slug: Slug }) {
  const { t, ui } = useTour(slug);
  return (
    <section className="sec thead" data-bg={`${slug}-head`} data-fx="제목흐림해제,정보차례등장,사진느린줌">
      <div className="wrap thead__in">
        <p className="thead__tag" data-io>{keep(t.tag)}</p>
        <h1 data-io className="fade-lines"><Lines l={t.h} /></h1>
        <p className="lead thead__sub" data-io><Sents s={t.sub} /></p>
        <dl className="thead__meta" data-io>
          {t.meta.map(([k, d]) => <div key={k}><dt>{k}</dt><dd>{keep(d)}</dd></div>)}
        </dl>
        <p className="thead__cta" data-io>
          {t.pdf && <a className="btn" href={t.pdf} download>{ui.pdf}</a>}
          <button className={t.pdf ? 'btn btn--line' : 'btn'} type="button" onClick={toContact}>{ui.ask}</button>
        </p>
      </div>
    </section>
  );
}

/* 배우는 것 / 네 가지 축 — 네 칸이 차례로 */
export function TourValues({ slug }: { slug: Slug }) {
  const { t } = useTour(slug);
  return (
    <section className="sec tval" data-bg={`${slug}-values`} data-fx="네칸차례등장,구분선그려짐,제목흐림해제">
      <div className="wrap">
        <div className="head">
          <h2 data-io className="fade-lines"><Lines l={t.values.h} /></h2>
          <p className="lead" data-io><Sents s={t.values.lead} /></p>
        </div>
        <ul className="tval__list">
          {t.values.list.map((x, i) => (
            <li key={x.k} data-io style={v({ '--i': i })}>
              <p className="tval__k">{x.k}</p>
              <h3>{keep(x.t)}</h3>
              <p><Sents s={x.d} /></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 하루씩 일정(고정) — 비행기가 항로를 따라 날고, 날마다 사진·일정이 가로로 넘어감. 폰·움직임 줄이기는 손가락으로 넘김. */
export function TourDays({ slug }: { slug: Slug }) {
  const { t, ui } = useTour(slug);
  const ref = useRef<HTMLElement>(null);
  const view = useRef<HTMLDivElement>(null);
  const days = t.days.list;
  const n = days.length;
  const list = useMemo(() => reduced() || !matchMedia('(min-width: 861px) and (min-height: 700px)').matches, []);
  const paint = (el: HTMLElement, x: number) => {
    el.style.setProperty('--fp', (x / (n - 1)).toFixed(4));
    el.style.setProperty('--x', x.toFixed(3));
    el.querySelectorAll<HTMLElement>('.tday').forEach((s, i) => s.style.setProperty('--on', Math.max(0, 1 - Math.abs(x - i)).toFixed(3)));
    el.querySelectorAll<HTMLElement>('.tdays__dot').forEach((d, i) => d.style.setProperty('--on', Math.min(1, Math.max(0, x - i + 1)).toFixed(3)));
  };
  useScrub(ref, (p, el) => { if (!list) paint(el, Math.min(1, Math.max(0, p)) * (n - 1)); }, list ? { start: 'top bottom', end: 'top top' } : { pin: true, end: `+=${n * 60}%`, still: 0 });
  useEffect(() => {
    const el = ref.current, vw = view.current;
    if (!list || !el || !vw) return;
    const on = () => {
      const card = vw.querySelector<HTMLElement>('.tday');
      const step = card ? card.offsetWidth + parseFloat(getComputedStyle(vw.firstElementChild!).columnGap || '0') : vw.clientWidth;
      paint(el, Math.min(n - 1, Math.max(0, vw.scrollLeft / step)));
    };
    on();
    vw.addEventListener('scroll', on, { passive: true });
    return () => vw.removeEventListener('scroll', on);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, n]);
  return (
    <section className={`sec tdays${list ? ' tdays--list' : ''}`} data-bg={`${slug}-days`} ref={ref} style={v({ '--n': n })} data-fx="가로비행전환,항로진행선,비행기이동,날짜점켜짐,사진흐림해제">
      <div className="wrap tdays__in">
        <div className="tdays__top">
          <h2><Lines l={t.days.h} /></h2>
          {list && <p className="cap tdays__swipe">{ui.swipe} →</p>}
        </div>
        <div className="tdays__route" aria-hidden>
          <i className="tdays__bar"><b /></i>
          {days.map((d, i) => <span key={d.k} className="tdays__dot" style={v({ '--i': i })}><u>{d.k.replace('Day ', 'D')}</u></span>)}
          <svg className="tdays__plane" viewBox="0 0 64 64" width="40" height="40" focusable="false">
            <path d="M62 32 40 24 26 4h-6l6 20-14 3-6-7H2l3 12-3 12h4l6-7 14 3-6 20h6l14-20 22-8z" fill="currentColor" />
          </svg>
        </div>
        <div className="tdays__view" ref={view}>
          <ol className="tdays__track">
            {days.map((d) => (
              <li key={d.k} className="tday">
                <figure className="tday__ph">
                  <img src={d.img.replace('-1600', '-800')} srcSet={`${d.img.replace('-1600', '-800')} 800w, ${d.img} 1600w`} sizes="(max-width: 860px) 86vw, 44vw" alt="" loading="lazy" decoding="async" />
                </figure>
                <div className="tday__tx">
                  <p className="tday__k">{d.k}</p>
                  <h3>{keep(d.t)}</h3>
                  <p className="tday__d"><Sents s={d.d} /></p>
                  <p className="tday__h">{ui.plan}</p>
                  <ul>{d.list.map((x) => <li key={x}>{keep(x)}</li>)}</ul>
                  <p className="tday__pt"><b>{ui.point}</b> {keep(d.point)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* 운영 원칙 / 연수 후 교사는 — 번호 행이 차례로 */
export function TourExtra({ slug }: { slug: Slug }) {
  const { t } = useTour(slug);
  return (
    <section className="sec tx" data-bg={`${slug}-extra`} data-fx="행차례등장,구분선그려짐,제목흐림해제">
      <div className="wrap">
        <div className="head">
          <h2 data-io className="fade-lines"><Lines l={t.extra.h} /></h2>
          <p className="lead" data-io><Sents s={t.extra.lead} /></p>
        </div>
        <ol className={`tx__list${t.extra.list.length > 4 ? ' tx__list--many' : ''}`}>
          {t.extra.list.map((x, i) => (
            <li key={x.k} data-io style={v({ '--i': i % 4 })}>
              <span className="tx__n">{String(i + 1).padStart(2, '0')}</span>
              {/^\d+$/.test(x.k) ? null : <h3>{keep(x.k)}</h3>}
              <p><Sents s={x.d} /></p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 현지 지원 + 협의 안내 + 다른 프로그램 */
export function TourSupport({ slug }: { slug: Slug }) {
  const { t, ui } = useTour(slug);
  const other: Slug = slug === 'students' ? 'teachers' : 'students';
  const { lang } = useC();
  const o = tours[lang][other];
  return (
    <section className="sec tsup" data-bg={`${slug}-support`} data-fx="항목차례등장,구분선그려짐,링크밑줄그려짐">
      <div className="wrap">
        <div className="head"><h2 data-io className="fade-lines"><Lines l={t.support.h} /></h2></div>
        <ul className="tsup__list">
          {t.support.list.map((x, i) => (
            <li key={x.k} data-io style={v({ '--i': i })}>
              <h3>{keep(x.k)}</h3>
              <ul>{x.items.map((y) => <li key={y}>{keep(y)}</li>)}</ul>
            </li>
          ))}
        </ul>
        <p className="cap tsup__note" data-io><Sents s={t.note} /></p>
        <p className="tsup__other" data-io>
          <span className="cap">{ui.other}</span>
          <a className="ul ul--big" href={`#/study-tours/${other}`}>{keep(o.tag)} — {o.h.map((l) => l.join(' ')).join(' ')} →</a>
        </p>
      </div>
    </section>
  );
}

/* 스터디투어 목록의 대표 프로그램 카드 두 장 */
export function TourCards() {
  const { lang } = useC();
  const ui = tourUi[lang];
  const img: Record<Slug, string> = { students: 't_kangaroo', teachers: 't_milkyway' };
  return (
    <ul className="pcards">
      {(['students', 'teachers'] as const).map((s, i) => {
        const t = tours[lang][s];
        return (
          <li key={s} data-io style={v({ '--i': i })}>
            <a className="pcard" href={`#/study-tours/${s}`}>
              <figure className="pcard__ph">
                <img src={`/img/${img[s]}-800.webp`} srcSet={`/img/${img[s]}-800.webp 800w, /img/${img[s]}-1600.webp 1600w`} sizes="(max-width: 860px) 92vw, 46vw" alt="" loading="lazy" decoding="async" />
              </figure>
              <p className="pcard__tag">{keep(t.tag)}</p>
              <h3 className="pcard__h"><Lines l={t.h} /></h3>
              <p className="pcard__d"><Sents s={t.card} /></p>
              <span className="pcard__more">{ui.more} →</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
