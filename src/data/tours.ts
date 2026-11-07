// 대표 프로그램 두 개 — 대표 제공 제안서(학생: EQA 제안서 Final 2026-11-02, 교사: EQA 교사 10일 프로그램 2026-09-20)에서 옮김.
// 학교 이름은 쓰지 않는다(대표 지시 2026-11-07). 대학·기관 방문은 "협의를 통해 진행"으로만(확정 파트너 단정 금지).
// 영어·한국어 모양이 같아야 한다(tours.test.ts).
import type { L } from './content';

export type Day = { k: string; t: string; d: string; list: string[]; point: string; img: string };
export type Tour = {
  slug: 'students' | 'teachers';
  tag: string;
  len: string;
  h: L;
  sub: string;
  card: string;
  meta: [string, string][];
  values: { h: L; lead: string; list: { k: string; t: string; d: string }[] };
  days: { h: L; list: Day[] };
  extra: { h: L; lead: string; list: { k: string; d: string }[] };
  support: { h: L; list: { k: string; items: string[] }[] };
  note: string;
  pdf: string;
};

const I = (k: string) => `/img/${k}-1600.webp`;

const en: Record<'students' | 'teachers', Tour> = {
  students: {
    slug: 'students',
    tag: 'Primary students · 8 days',
    len: '8 days',
    h: [['Learning beyond', 'the classroom'], ['in Western Australia']],
    sub: 'An eight-day exchange for primary students from Korea: lessons at a Perth school, an Australian school camp, Rottnest Island, wildlife, science and the sea.',
    card: 'Classes with Australian buddies, a school camp, Rottnest Island, Scitech and the night sky — every visit tied to something the students learn.',
    meta: [['Who', 'Primary students from Korea'], ['Length', '8 days'], ['Where', 'Perth, Western Australia']],
    values: {
      h: [['What students', 'take home']],
      lead: 'Not a sightseeing trip. Students learn with Australian classmates and meet the nature, science, history and culture of Western Australia first-hand.',
      list: [
        { k: '01', t: 'Communicate', d: 'From studying English to using it — in real lessons and school life, with the confidence to speak up.' },
        { k: '02', t: 'Global citizenship', d: 'Living a different school day and daily life, and learning to respect difference.' },
        { k: '03', t: 'Explore and discover', d: 'Island ecology, wildlife, museums, science centres and the night sky — asking “why?” on the spot.' },
        { k: '04', t: 'Challenge and collaborate', d: 'Camp and team missions with Australian friends build responsibility and confidence.' },
      ],
    },
    days: {
      h: [['Eight days,', 'day by day']],
      list: [
        { k: 'Day 1', t: 'Welcome to Western Australia', d: 'A gentle first day to settle in, meeting Australian animals and the outdoor way of life.', list: ['Met at Perth Airport by the local coordinator', 'Wildlife and farm animals at Caversham Wildlife Park', 'Australian BBQ and the train ride at Whiteman Park', 'A local supermarket visit, check-in and rest'], point: 'Wildlife · farm culture · BBQ culture', img: I('t_kangaroo') },
        { k: 'Day 2', t: 'Rottnest Island Eco Discovery', d: 'The whole island is the classroom: quokkas, coastline and how people and wildlife share one place.', list: ['Ferry from Fremantle to Rottnest Island', 'Quokka watching and how to treat wildlife', 'Island Explorer bus and beach time', 'Picnic lunch of local fruit, sandwiches and chicken'], point: 'EQA Eco Mission — observe and record three things', img: I('t_rottnest') },
        { k: 'Day 3', t: 'Discover Perth Together', d: 'Kings Park and the city, then WA Museum Boola Bardip with students and teachers from a local school.', list: ['Breakfast and a walk in Kings Park', 'Perth city walk', 'Meet local students and teachers', 'Museum missions in small groups with Australian buddies'], point: 'Nature and culture of WA · English in use', img: I('t_treetop') },
        { k: 'Day 4', t: 'A Day at an Australian School', d: 'Regular lessons, recess and lunch with buddies, then science and movement in the afternoon.', list: ['Join regular classes with Australian students', 'School life and lunchtime with buddies', 'Hands-on science at Scitech', 'Teamwork and challenge at Bounce'], point: 'School culture · science inquiry', img: I('p_class') },
        { k: 'Day 5', t: 'Ocean, History & Fremantle', d: 'Morning at school, afternoon in Fremantle exploring how the sea shaped life in Western Australia.', list: ['Morning lessons at the local school', 'Fish and chips lunch in Fremantle', 'WA Maritime Museum', 'Fremantle Markets (Friday to Sunday)'], point: 'Ocean, maritime history and local life', img: I('t_food') },
        { k: 'Day 6', t: 'Science & Nature Discovery', d: 'From space to the Perth Hills: astronomy at Perth Observatory and the forests around Mundaring.', list: ['Morning lessons at the local school', 'Astronomy at Perth Observatory', 'Mundaring and the Perth Hills', 'Forest and bush walk'], point: 'Astronomy · observing nature', img: I('t_milkyway') },
        { k: 'Day 7', t: 'Australian School Camp', d: 'An outdoor camp with local students — team missions where language matters less than working together.', list: ['Travel to the camp after breakfast', 'Camp programme with local students', 'Outdoor activities and team missions', 'Camp dinner'], point: 'Teamwork · responsibility · confidence', img: I('t_bikes') },
        { k: 'Day 8', t: 'Share, Reflect & Grow', d: 'A last day at school, a short project presentation in English, and goodbyes to buddies.', list: ['Last lessons with Australian students', 'Final project: My Australian Discovery', 'Sharing the week with buddies', 'Thank-yous and departure'], point: 'Presenting · reflecting · thanks', img: I('t_city') },
      ],
    },
    extra: {
      h: [['How we run it']],
      lead: 'Lessons from running the July 2026 student programme, built into every itinerary.',
      list: [
        { k: 'Time for each place', d: 'Fewer stops, more time to look, learn and take part at each one.' },
        { k: 'Meals planned ahead', d: 'Korean and local food balanced, with BBQ, fish and chips and picnic lunches — no repeated menus.' },
        { k: 'Every visit is a lesson', d: 'Students know what to look for, why they are there and what they can learn before they go in.' },
        { k: 'Rest after long days', d: 'Flight, school and outdoor days are balanced with rest, especially on arrival.' },
        { k: 'Real travel times', d: 'Boarding, toilet stops and head counts are in the plan, so activities are never rushed.' },
        { k: 'Booked and confirmed', d: 'Schools, museums, camps and restaurants booked in advance, with wet-weather options.' },
        { k: 'Depth over distance', d: 'Measured by what students learn and remember, not how many places they see.' },
        { k: 'Student workbook', d: 'See, hear, feel, think, record — an EQA workbook to capture each day in words, drawings and new English.' },
      ],
    },
    support: {
      h: [['What we look after', 'in Perth']],
      list: [
        { k: 'School links', items: ['A local school matched to your goals and ages', 'Lessons, buddies and exchange activities arranged'] },
        { k: 'Programme design', items: ['Learning themes for each visit', 'School, nature, science and culture connected'] },
        { k: 'Transport', items: ['Airport arrival and departure', 'Every transfer in a vehicle sized for the group'] },
        { k: 'Meals and stay', items: ['Restaurants booked, picnic lunches and snacks', 'Accommodation chosen for location and safety'] },
        { k: 'On the ground', items: ['One coordinator for the whole programme', 'Weather and plan changes handled locally'] },
      ],
    },
    note: 'School lessons, camps and visits are arranged with each school and venue in consultation, and the day order may change with their timetables.',
    pdf: '',
  },
  teachers: {
    slug: 'teachers',
    tag: 'Teachers · 10 days',
    len: '10 days',
    h: [['See Australian education,', 'rethink your own']],
    sub: 'Australian Education Insight Program — ten days for Korean teachers in Western Australian schools, universities and education organisations, and out in its nature and culture.',
    card: 'Classroom observation, a Korea–Australia matched lesson, conversations with teachers and university students, and the Pinnacles under the stars.',
    meta: [['Who', 'Teachers from Korea'], ['Length', '10 days'], ['Where', 'Perth, Western Australia']],
    values: {
      h: [['Four parts', 'of the programme']],
      lead: 'Not copying Australian education — seeing another system so you can look at your own with new eyes.',
      list: [
        { k: 'CONNECT', t: 'School exchange', d: 'Primary school visits and lesson observation, professional talks with local teachers, and university visits.' },
        { k: 'EXPLORE', t: 'Nature and science', d: 'Kings Park, WA Museum Boola Bardip, Rottnest Island, the Pinnacles and stargazing, whale watching.' },
        { k: 'EXPERIENCE', t: 'Culture and history', d: 'Aboriginal culture, Fremantle’s port history, migration and multicultural society, the Korean War memorial in Kings Park.' },
        { k: 'REFLECT & APPLY', t: 'Back to your classroom', d: 'Compare, reflect and turn what you saw into a concrete plan for your own classes and school.' },
      ],
    },
    days: {
      h: [['Ten days,', 'day by day']],
      list: [
        { k: 'Day 1', t: 'Arrival, Kings Park and orientation', d: 'First look at Western Australia: its geography, plants and the link between Korea and Australia.', list: ['Programme goals and the EQA teacher workbook', 'Perth and the Swan River from Kings Park', 'Native plants at the Botanic Garden', 'Korean War memorial and Korea–Australia ties'], point: 'Geography · Aboriginal connection to land', img: I('t_treetop') },
        { k: 'Day 2', t: 'Primary school visit and matched lesson', d: 'How does an Australian classroom learn? Participation, questions, autonomy and teacher–student relationships.', list: ['Classroom and facility tour', 'Lesson observation', 'A 1–2 hour matched lesson taught by Korean teachers', 'Talk with Australian teachers about curriculum and wellbeing'], point: 'Seeing students and classrooms', img: I('p_class') },
        { k: 'Day 3', t: 'University and WA Museum', d: 'Small-group conversations with Australian university students studying Korean — then the museum.', list: ['University campus tour', 'Meet Korean studies staff and students', 'Talk topics: happiness, success, AI, climate, work–life balance', 'WA Museum: natural history and Aboriginal culture'], point: 'What should school prepare students for?', img: I('p_uwa') },
        { k: 'Day 4', t: 'Rottnest Island', d: 'Island ecology and sustainability, and how a busy natural place is protected.', list: ['Quokkas and their habitat', 'Marsupials and evolution', 'Marine ecosystems and conservation', 'The island’s Aboriginal history'], point: 'Teacher’s lens: what would you teach here?', img: I('t_rottnest') },
        { k: 'Day 5', t: 'Pinnacles and the night sky', d: 'From the earth’s deep time to the southern sky.', list: ['Limestone pillars and how they formed', 'Erosion, deposition and dry-climate plants', 'Sunset and the earth’s rotation', 'The Milky Way and the Southern Cross'], point: 'Deep time · southern-hemisphere sky', img: I('t_milkyway') },
        { k: 'Day 6', t: 'School visit and teacher exchange', d: 'How do Australian teachers teach and grow? A 60–90 minute round table between teachers.', list: ['Lesson observation and a joint lesson', 'Behaviour support and student wellbeing', 'Parent communication, AI in class, inclusive education', 'Teacher professional development compared'], point: 'Round table: good education, from both sides', img: I('p_lecture') },
        { k: 'Day 7', t: 'Teacher education, Fremantle, Maritime Museum', d: 'How Australia trains its primary teachers, then the port city that grew from the sea.', list: ['Initial teacher education and placements', 'Talk with pre-service teachers: good teaching in the AI era', 'Fremantle streets and markets', 'WA Maritime Museum'], point: 'Teacher of the Future', img: I('t_food') },
        { k: 'Day 8', t: 'Education organisations and Scitech', d: 'How organisations outside school support schools and teachers.', list: ['Public, Catholic and independent school sectors', 'Professional learning and school leadership', 'Hands-on, inquiry-based science at Scitech', 'Science communication that sparks curiosity'], point: 'Schools and the organisations around them', img: I('p_curtin') },
        { k: 'Day 9', t: 'Wildlife park and Australian life', d: 'Australia’s animals and everyday outdoor culture, seen through a teacher’s eyes.', list: ['Kangaroos, koalas and wombats up close', 'Why Australia has so many unique animals', 'An Australian BBQ and outdoor leisure', 'Whale watching cruise (in season)'], point: 'Linking ecology to science lessons', img: I('t_kangaroo') },
        { k: 'Day 10', t: 'Wrap-up, action plan, departure', d: 'Bringing what you learned back to a Korean classroom.', list: ['Most memorable moments shared', 'One thing to bring to my school', 'Personal or group action plan', 'Departure from Perth'], point: 'What, why, how, and when to start', img: I('t_city') },
      ],
    },
    extra: {
      h: [['After the programme,', 'teachers will']],
      lead: 'Each day is recorded in the EQA teacher workbook — observation points, questions and reflections that become an action plan.',
      list: [
        { k: '01', d: 'Understand Australian schooling and classroom culture and compare it with Korean education.' },
        { k: '02', d: 'Understand different views of education through talks with teachers, students, university students and education staff.' },
        { k: '03', d: 'Explore how to use nature, science and cultural resources for learning outside school.' },
        { k: '04', d: 'Draw up a concrete plan to apply what they found in their own lessons and school.' },
      ],
    },
    support: {
      h: [['What we look after', 'in Perth']],
      list: [
        { k: 'Professional exchange', items: ['School, university and organisation visits arranged', 'Talks with local teachers, academics and education staff'] },
        { k: 'Programme design', items: ['Built around the group’s interests and goals', 'Observe → compare → reflect → apply'] },
        { k: 'Interpreting', items: ['Interpreting for professional conversations', 'Context on education systems and culture'] },
        { k: 'Teacher workbook', items: ['Key observation points and questions', 'Daily reflection and an action plan'] },
        { k: 'Logistics and safety', items: ['Vehicles, stay, meals, bookings and schedule', 'Emergency contacts and local response'] },
      ],
    },
    note: 'University and organisation visits (such as UWA, Notre Dame and AISWA) are arranged in consultation with each institution and may change.',
    pdf: '/docs/eqa-teacher-program.pdf',
  },
};

const ko: typeof en = {
  students: {
    slug: 'students',
    tag: '초등학생 · 8일',
    len: '8일',
    h: [['교실을 넘어,', '호주를 통해'], ['배우다']],
    sub: '한국 초등학생을 위한 8일 서호주 국제교육교류 프로그램입니다. 퍼스 현지 학교 수업과 학교 캠프, 로트네스트섬, 야생동물, 과학과 바다를 함께 경험합니다.',
    card: '호주 버디와 함께하는 학교 수업과 캠프, 로트네스트섬, 사이테크, 밤하늘까지. 모든 방문을 배움과 연결합니다.',
    meta: [['대상', '한국 초등학생'], ['기간', '8일'], ['지역', '서호주 퍼스']],
    values: {
      h: [['학생들이', '배우는 것']],
      lead: '단순히 호주를 방문하는 체험이 아닙니다. 호주 학교에서 현지 학생들과 함께 배우고, 서호주의 자연·과학·역사·문화를 직접 경험합니다.',
      list: [
        { k: '01', t: '의사소통', d: '영어를 공부하는 것에서 영어로 소통하는 경험으로. 실제 수업과 학교생활에서 말할 자신감을 기릅니다.' },
        { k: '02', t: '세계시민의식', d: '호주 친구들의 학교생활과 일상을 경험하며 차이를 존중하는 태도를 배웁니다.' },
        { k: '03', t: '탐구와 발견', d: '섬의 생태계, 야생동물, 박물관, 과학관, 밤하늘을 보고 "왜 그럴까?"를 현장에서 묻습니다.' },
        { k: '04', t: '도전과 협력', d: '호주 친구들과 캠프와 팀 미션에 도전하며 책임감과 자신감을 키웁니다.' },
      ],
    },
    days: {
      h: [['8일 일정,', '하루씩']],
      list: [
        { k: 'Day 1', t: '호주와의 첫 만남', d: '새로운 환경에 천천히 적응하며 호주의 동물과 야외 생활문화를 처음 만나는 날입니다.', list: ['퍼스공항 도착, 현지 안내자 미팅', 'Caversham Wildlife Park 야생동물·농장동물 체험', 'Whiteman Park 호주식 BBQ와 기차 타기', '로컬 슈퍼마켓 방문, 숙소 체크인과 휴식'], point: '호주 야생동물 · 농장문화 · BBQ 문화', img: I('t_kangaroo') },
        { k: 'Day 2', t: '로트네스트섬 생태 탐험', d: '섬 전체가 자연 교실입니다. 쿼카와 해안을 관찰하며 사람과 야생동물이 함께 사는 법을 배웁니다.', list: ['프리맨틀에서 페리로 로트네스트섬 이동', '쿼카 관찰과 야생동물 보호 방법', 'Island Explorer 버스 섬 탐방과 해변 체험', '현지 과일·샌드위치·치킨 피크닉 런치'], point: 'EQA 에코 미션 — 동물·식물·자연 3가지 관찰 기록', img: I('t_rottnest') },
        { k: 'Day 3', t: '호주 친구들과 만나는 퍼스', d: '킹스파크와 퍼스 시티를 둘러본 뒤, 현지 학교 학생·교사들과 서호주 박물관을 함께 탐방합니다.', list: ['킹스파크 아침식사와 산책', '퍼스 시티 탐방', '현지 학교 학생·교사와의 만남', '호주 버디와 소그룹으로 WA Museum Boola Bardip 미션'], point: '서호주의 자연과 문화 · 영어 의사소통', img: I('t_treetop') },
        { k: 'Day 4', t: '호주 학교에서 하루 살아보기', d: '호주 학생들과 정규수업, 쉬는 시간, 점심시간을 함께하고 오후에는 과학과 신체활동에 도전합니다.', list: ['호주 학생들과 정규수업 참여', '버디와 함께하는 학교생활·점심시간', 'Scitech 과학 체험', 'Bounce 신체활동으로 도전과 협력'], point: '호주 학교문화 · 과학적 탐구', img: I('p_class') },
        { k: 'Day 5', t: '바다로 만나는 서호주', d: '오전엔 학교 수업, 오후엔 프리맨틀에서 바다가 서호주의 역사와 생활에 준 영향을 탐구합니다.', list: ['현지 학교 정규수업 참여', '프리맨틀에서 Fish & Chips 점심', 'WA Maritime Museum 해양·역사 탐방', 'Fremantle Markets (금·토·일 운영 시)'], point: '해양환경 · 해양 역사와 문화', img: I('t_food') },
        { k: 'Day 6', t: '우주에서 퍼스의 자연까지', d: 'Perth Observatory에서 우주를, Perth Hills의 숲에서 자연 속 과학을 만납니다.', list: ['현지 학교 정규수업 참여', 'Perth Observatory 천문·과학 체험', 'Mundaring & Perth Hills 자연 탐방', '서호주의 숲과 자연환경 체험'], point: '천문과학 · 자연관찰', img: I('t_milkyway') },
        { k: 'Day 7', t: '호주 친구들과 함께하는 캠프', d: '현지 학생들과 야외 캠프에 참여해, 언어가 달라도 함께 과제를 해결하며 소통합니다.', list: ['조식 후 캠프장 이동', '현지 학생들과 캠프 프로그램 참여', '야외 액티비티와 팀 미션', '캠프 저녁식사'], point: '팀워크 · 책임감 · 자신감', img: I('t_bikes') },
        { k: 'Day 8', t: '배움을 나누고 성장하는 날', d: '마지막 수업 후 8일간의 배움을 영어로 발표하고 버디들과 작별 인사를 나눕니다.', list: ['호주 학생들과 마지막 수업', '최종 프로젝트 "My Australian Discovery" 발표', '버디들과 경험 나누기', '감사 인사와 출국'], point: '발표와 표현 · 성찰 · 감사', img: I('t_city') },
      ],
    },
    extra: {
      h: [['이렇게 운영합니다']],
      lead: '2026년 7월 학생 프로그램을 직접 운영하며 얻은 경험을 모든 일정에 반영합니다.',
      list: [
        { k: '장소마다 충분한 시간', d: '많은 곳을 도는 대신 한 곳에서 충분히 보고 배우고 경험하게 합니다.' },
        { k: '미리 짠 다양한 식사', d: '한식과 현지식을 고루, BBQ·Fish & Chips·피크닉 런치까지. 같은 메뉴를 반복하지 않습니다.' },
        { k: '방문이 곧 수업', d: '무엇을 보는지, 왜 가는지, 무엇을 배우는지 알고 들어가도록 학생 눈높이로 설명합니다.' },
        { k: '컨디션에 맞춘 일정', d: '장거리 비행과 활동량을 고려해 특히 첫날과 바쁜 날엔 쉬는 시간을 넉넉히 둡니다.' },
        { k: '실제 이동시간 반영', d: '승하차·화장실·인원 확인까지 계산해 활동을 서둘러 끝내지 않습니다.' },
        { k: '사전예약과 대체 일정', d: '학교·박물관·캠프·식당을 미리 예약하고, 날씨에 대비한 대체 프로그램을 준비합니다.' },
        { k: '많이 보기보다 깊이 배우기', d: '방문지 수가 아니라 학생들이 무엇을 배우고 기억하는가를 기준으로 삼습니다.' },
        { k: 'EQA 학생 워크북', d: '보고, 듣고, 느끼고, 생각하고, 기록하기. 짧은 글·그림·새 영어 표현으로 경험을 배움으로 남깁니다.' },
      ],
    },
    support: {
      h: [['퍼스 현지에서', '챙기는 것']],
      list: [
        { k: '현지 학교 연결', items: ['교육목표와 학생 연령에 맞는 현지 학교 연결', '정규수업·버디·학생교류 활동 조율'] },
        { k: '맞춤형 프로그램 기획', items: ['방문지별 학습주제와 교육 포인트', '학교·자연·과학·문화 체험의 교육적 연계'] },
        { k: '차량 및 이동', items: ['공항 픽업·샌딩', '단체에 맞는 차량으로 전 일정 이동'] },
        { k: '식사와 숙박', items: ['식당 사전예약, 피크닉 런치·간식 준비', '위치와 안전을 고려한 숙소 선정'] },
        { k: '현지 운영과 비상 대응', items: ['전 일정 한 명의 코디네이터', '날씨·일정 변화에 현지에서 바로 대응'] },
      ],
    },
    note: '학교 수업·캠프·방문 일정은 각 학교와 기관과의 협의를 통해 진행하며, 학교 시간표에 따라 요일 순서가 바뀔 수 있습니다.',
    pdf: '',
  },
  teachers: {
    slug: 'teachers',
    tag: '교사 연수 · 10일',
    len: '10일',
    h: [['호주를 경험하고', '교육을'], ['다시 생각하다']],
    sub: 'Australian Education Insight Program — 한국 교사들이 서호주의 학교·대학·교육기관과 자연·과학·문화 현장을 직접 경험하는 10일 교사 전문학습 프로그램입니다.',
    card: '호주 초등학교 수업 관찰과 한-호 매칭 수업, 현지 교사·대학생과의 대화, 피너클스의 밤하늘까지.',
    meta: [['대상', '한국 교사'], ['기간', '10일'], ['지역', '서호주 퍼스']],
    values: {
      h: [['프로그램의', '네 가지 축']],
      lead: '호주의 교육을 모방하는 것이 아니라, 다른 교육과 사회를 경험하며 자신의 교육을 새로운 시각으로 바라보는 것을 목표로 합니다.',
      list: [
        { k: 'CONNECT', t: '학교 교류', d: '초등학교 방문과 수업 관찰·매칭 수업, 현지 교사와의 전문교류, 대학 방문.' },
        { k: 'EXPLORE', t: '자연·과학 학습', d: '킹스파크, 서호주 박물관, 로트네스트섬, 피너클스와 별 관찰, 고래 워칭.' },
        { k: 'EXPERIENCE', t: '문화 체험', d: '원주민 문화, 프리맨틀 항구의 역사, 이민과 다문화사회, 킹스파크 한국전쟁 참전기념비.' },
        { k: 'REFLECT & APPLY', t: '배움을 나의 교실로', d: '비교하고 돌아보며, 수업과 학교에 적용할 구체적인 실천계획으로 발전시킵니다.' },
      ],
    },
    days: {
      h: [['10일 일정,', '하루씩']],
      list: [
        { k: 'Day 1', t: '퍼스 도착 · 킹스파크 · 오리엔테이션', d: '서호주와의 첫 만남. 지리와 식물, 그리고 한국과 호주의 연결을 이해합니다.', list: ['연수 목표 소개와 EQA 교사 워크북 제공', '킹스파크에서 스완강과 도심 조망', '서호주 식물원 자생식물 관찰', '한국전쟁 참전기념비와 한-호 우호관계'], point: '퍼스의 지리 · 원주민과 땅의 관계', img: I('t_treetop') },
        { k: 'Day 2', t: '호주 초등학교 방문 · 한-호 매칭 수업', d: '호주의 교실은 어떻게 배우는가? 참여·질문·자율성·협력학습과 교사-학생 관계를 봅니다.', list: ['교실과 교육시설 탐방', '실제 수업 참관', '한국 교사가 1~2시간 매칭 수업 진행', '호주 교사들과 교육과정·학생 wellbeing 대화'], point: '학생과 교실을 보다', img: I('p_class') },
        { k: 'Day 3', t: '서호주 대학교 · 서호주 박물관', d: '한국어를 공부하는 호주 대학생들과 소그룹 대화를 나누고 박물관을 탐방합니다.', list: ['대학 캠퍼스와 교육환경 탐방', '한국어·한국학 교수진·학생과의 만남', '대화 주제: 행복, 성공, AI, 기후변화, 일과 삶의 균형', '박물관: 자연사와 원주민 역사'], point: '10년 후, 학교는 무엇을 준비해 주어야 할까?', img: I('p_uwa') },
        { k: 'Day 4', t: '로트네스트섬', d: '섬의 생태와 지속가능성, 많은 방문객 속에서 자연을 지키는 방법을 봅니다.', list: ['쿼카의 특징과 서식환경', '호주 유대류와 진화', '해양생태계와 환경보전', '섬의 원주민 역사'], point: '교사의 눈으로: 여기서 무엇을 가르칠까?', img: I('t_rottnest') },
        { k: 'Day 5', t: '피너클스 사막 · 별과 은하수', d: '지구의 시간에서 우주의 시간까지.', list: ['석회암 기둥과 형성 과정', '침식·퇴적과 건조기후 식생', '일몰로 보는 지구의 자전', '은하수와 남십자성 관찰'], point: '깊은 시간 · 남반구의 밤하늘', img: I('t_milkyway') },
        { k: 'Day 6', t: '호주 초등학교 · 교사 간 전문교류', d: '호주의 교사는 어떻게 가르치고 성장하는가? 60~90분 공식 교사 원탁대화를 합니다.', list: ['수업 관찰과 공동수업', '생활지도와 학생 정서·사회적 건강', '학부모 소통, AI 활용, 포용교육', '교사 전문성 개발과 연수제도 비교'], point: '원탁대화: 한국과 호주 교사가 말하는 좋은 교육', img: I('p_lecture') },
        { k: 'Day 7', t: '교원양성 대학 · 프리맨틀 · 해양박물관', d: '호주의 초등교사 양성 과정을 보고, 바다에서 자라난 항구도시를 걷습니다.', list: ['교원양성제도와 현장실습 이해', '예비교사와의 대화: AI 시대 교사의 역할', '프리맨틀 옛 거리와 마켓', '서호주 해양박물관'], point: 'Teacher of the Future — 미래의 교사를 만나다', img: I('t_food') },
        { k: 'Day 8', t: '교육 지원기관 · 사이테크', d: '학교 밖 기관들은 좋은 교육을 위해 학교와 어떻게 협력할까?', list: ['공립·가톨릭·독립학교 체계', '교사 전문연수와 학교 리더십', 'Scitech 체험 중심 과학교육', '호기심을 여는 과학소통 방법'], point: '학교와 학교 밖 기관의 협력', img: I('p_curtin') },
        { k: 'Day 9', t: '야생동물공원 · 호주 생활문화', d: '호주의 생태환경과 생활문화를 교육의 관점에서 바라봅니다.', list: ['캥거루·코알라·웜뱃 등 고유동물 관찰', '호주에 독특한 동물이 많은 이유', '호주식 바비큐와 야외 여가문화', '고래 워칭 크루즈(시즌 중)'], point: '생태를 과학·환경교육과 잇기', img: I('t_kangaroo') },
        { k: 'Day 10', t: '연수 정리 · 현장 적용 · 퍼스 출발', d: '서호주에서의 배움을 한국의 교실로.', list: ['가장 인상 깊었던 교육 경험 공유', '"우리 학교에 적용하고 싶은 한 가지" 선정', '개인·그룹별 현장 적용계획 작성', '퍼스 출발'], point: '무엇을, 왜, 어떻게, 언제 시작할 것인가', img: I('t_city') },
      ],
    },
    extra: {
      h: [['연수 후', '참가 교사는']],
      lead: '매일의 관찰 포인트와 질문, 성찰을 EQA 교사 워크북에 기록하고, 마지막 날 실천계획으로 정리합니다.',
      list: [
        { k: '01', d: '호주의 학교교육과 교실문화를 이해하고 한국 교육과 비교합니다.' },
        { k: '02', d: '호주 교사·학생·대학생·교육 관계자와의 대화로 다양한 교육관과 가치관을 이해합니다.' },
        { k: '03', d: '서호주의 자연·과학·문화 자원을 학교 밖 교육에 활용하는 방법을 탐구합니다.' },
        { k: '04', d: '연수에서 발견한 내용을 자신의 수업과 학교에 적용할 구체적인 실천계획을 세웁니다.' },
      ],
    },
    support: {
      h: [['퍼스 현지에서', '챙기는 것']],
      list: [
        { k: '전문교류 지원', items: ['학교·대학·교육기관 방문과 미팅 조율', '현지 교사·교수·교육 관계자와의 대화 세션'] },
        { k: '교사 전문학습 기획', items: ['참가 교사의 관심 분야를 반영한 구성', '관찰 → 비교 → 성찰 → 적용'] },
        { k: '교육 통역과 진행', items: ['전문적인 교육 대화가 가능한 통역', '교육제도와 문화 차이에 대한 현지 설명'] },
        { k: '교사 연수 워크북', items: ['방문지별 핵심 관찰 포인트와 질문', '매일의 성찰과 실천계획 작성'] },
        { k: '운영과 안전 관리', items: ['차량·숙박·식사·예약·일정 관리', '비상연락체계와 현지 대응'] },
      ],
    },
    note: '대학·교육기관 방문(UWA, 노틀담대학교, AISWA 등)은 각 기관과의 협의를 통해 진행하며 바뀔 수 있습니다.',
    pdf: '/docs/eqa-teacher-program.pdf',
  },
};

export const tours = { en, ko };

export const tourUi = {
  en: { more: 'See the programme', pdf: 'Download the programme (PDF)', ask: 'Ask about this programme', plan: 'Plan', point: 'Focus', other: 'Other programme', swipe: 'Swipe to see each day', flagship: 'Flagship programmes' },
  ko: { more: '프로그램 자세히 보기', pdf: '프로그램 안내서 받기 (PDF)', ask: '이 프로그램 문의하기', plan: '주요 일정', point: '학습 포인트', other: '다른 프로그램', swipe: '옆으로 넘겨 하루씩 보기', flagship: '대표 프로그램' },
};
