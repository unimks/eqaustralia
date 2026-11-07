import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Header } from './components/Header';
import { Sents } from './components/Lines';
import { BgStage, type Scene } from './fx/BgStage';
import { useLenis } from './lib/useLenis';
import { useInView } from './lib/fx';
import { LangCtx, initialLang, saveLang, useC } from './lib/i18n';
import { content, credits, type Lang, type L } from './data/content';
import { facts } from './data/facts';
import { Intro } from './sections/Intro';
import { Hero, PageHead, What, Who, Flow, Programs, Services, Safety, Group, Perth, Faq, Contact } from './sections/Sections';
import { TourHead, TourValues, TourDays, TourExtra, TourSupport } from './sections/Tour';
import './sections/site.css';

// 배경 장면 = 스터디투어 하루 순서: 공항 도착 → 도시 → 캠퍼스 → 강 → 교실 → 대학 → 학교 → 차량 → 피너클스 → 킹스파크 → 퍼스 야경.
// 이웃 섹션은 다른 장면. grade = 브랜드 인디고로 물들인 영상(2곳).
const S = (k: string) => `/img/${k}-1600.webp`;
const SCENES: Record<string, Scene> = {
  hero: { key: 'hero', img: S('p_airport') },
  what: { key: 'what', img: S('p_quay') },
  who: { key: 'who', video: '/video/v_campus.mp4', img: '/video/v_campus.jpg', grade: true },
  flow: { key: 'flow', img: S('p_swan') },
  programs: { key: 'programs', video: '/video/v_class.mp4', img: '/video/v_class.jpg', grade: true },
  services: { key: 'services', img: S('p_curtin') },
  safety: { key: 'safety', img: S('p_class'), tone: 'day' },
  group: { key: 'group', img: S('p_uwa') },
  perth: { key: 'perth', img: S('p_pinnacles') },
  faq: { key: 'faq', img: S('p_kingspark'), tone: 'day' },
  contact: { key: 'contact', img: S('p_jetty') },
  phead: { key: 'phead', img: S('p_quay') },
  // 대표 프로그램 — 대표 제공 사진(제안서 Links)
  'students-head': { key: 'students-head', img: S('t_kangaroo') },
  'students-values': { key: 'students-values', img: S('t_rottnest') },
  'students-days': { key: 'students-days', img: S('p_swan') },
  'students-extra': { key: 'students-extra', img: S('t_train') },
  'students-support': { key: 'students-support', img: S('p_coaster') },
  'teachers-head': { key: 'teachers-head', img: S('t_pinnacles') },
  'teachers-values': { key: 'teachers-values', img: S('t_boab') },
  'teachers-days': { key: 'teachers-days', img: S('p_swan') },
  'teachers-extra': { key: 'teachers-extra', img: S('t_bridge') },
  'teachers-support': { key: 'teachers-support', img: S('p_coaster') },
};

// 메뉴 5개(대표 지정) — 홈은 11섹션 전부, 나머지는 해당 섹션만
type Route = '#/' | '#/about' | '#/study-tours' | '#/study-tours/students' | '#/study-tours/teachers' | '#/services' | '#/contact';
const ROUTES: Record<Route, string[]> = {
  '#/': ['hero', 'what', 'who', 'flow', 'programs', 'services', 'safety', 'group', 'perth', 'faq', 'contact'],
  '#/about': ['phead', 'what', 'group', 'perth', 'contact'],
  '#/study-tours': ['phead', 'flow', 'programs', 'safety', 'contact'],
  '#/services': ['phead', 'services', 'who', 'faq', 'contact'],
  '#/contact': ['phead', 'contact', 'faq'],
  '#/study-tours/students': ['students-head', 'students-values', 'students-days', 'students-extra', 'students-support', 'contact'],
  '#/study-tours/teachers': ['teachers-head', 'teachers-values', 'teachers-days', 'teachers-extra', 'teachers-support', 'contact'],
};
const readRoute = (): Route => (location.hash in ROUTES ? (location.hash as Route) : '#/');

function Page({ route }: { route: Route }) {
  useLenis();
  useInView();
  const { c } = useC();
  const title = ({ '#/about': c.pages.about, '#/study-tours': c.pages.tours, '#/services': c.pages.services, '#/contact': c.pages.contact } as Record<string, L | undefined>)[route];
  const keys = ROUTES[route];
  const parts: Record<string, ReactNode> = {
    hero: <Hero />, phead: title ? <PageHead l={title} bg="phead" /> : null, what: <What />, who: <Who />, flow: <Flow />, programs: <Programs />,
    services: <Services />, safety: <Safety />, group: <Group />, perth: <Perth />, faq: <Faq />, contact: <Contact />,
  };
  for (const t of ['students', 'teachers'] as const) {
    parts[`${t}-head`] = <TourHead slug={t} />;
    parts[`${t}-values`] = <TourValues slug={t} />;
    parts[`${t}-days`] = <TourDays slug={t} />;
    parts[`${t}-extra`] = <TourExtra slug={t} />;
    parts[`${t}-support`] = <TourSupport slug={t} />;
  }
  return (
    <>
      <BgStage scenes={keys.map((k) => SCENES[k])} />
      <main id="top">{keys.map((k) => <div key={k} className="part">{parts[k]}</div>)}</main>
    </>
  );
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [route, setRoute] = useState<Route>(readRoute);
  useEffect(() => { saveLang(lang); }, [lang]);
  useEffect(() => {
    const on = () => { setRoute(readRoute()); scrollTo(0, 0); };
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  const ctx = useMemo(() => ({ lang, c: content[lang], setLang: setLangState }), [lang]);
  const c = content[lang];
  if (document.documentElement.lang !== lang) document.documentElement.lang = lang;
  return (
    <LangCtx.Provider value={ctx}>
      {route === '#/' && <Intro video="/video/v_plane.mp4" poster="/video/v_plane.jpg" lines={c.intro} />}
      <Header route={route} />
      <Page key={`${route}-${lang}`} route={route} />
      <footer className="ft">
        <div className="wrap ft__in">
          <p className="ft__mark">EQ Australia</p>
          <nav className="ft__links" aria-label="Footer">
            {c.nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
            <a href={`tel:${facts.phone.value.replace(/\s/g, '')}`}>{facts.phone.value}</a>
          </nav>
          <p className="ft__note">
            <span className="sent">{facts.entity.value} · ABN {facts.abn.value} · ACN {facts.acn.value} · Perth, Western Australia.</span>
            <Sents s={c.footer.draft} />
            <Sents s={c.footer.sources} />
          </p>
          <p className="ft__credit">
            <Sents s={c.footer.photos} />
            </p>
          <p className="ft__credit ft__cr">{credits.map((x) => <span key={x}>{x}</span>)}
          </p>
        </div>
      </footer>
    </LangCtx.Provider>
  );
}
