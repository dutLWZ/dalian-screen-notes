export const defaultLocale = 'zh';
export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

const ui: Record<Locale, Record<string, string>> = {
  zh: {
    'site.name': '银幕质检',
    'site.tagline': '影院适配性验证 · DCP 制作 · 大连社区',
    'nav.home': '首页',
    'nav.tests': '验证记录',
    'nav.dcp': 'DCP 制作',
    'nav.subtitles': '字幕工作流',
    'nav.dalianCinemas': '大连影院',
    'nav.dalianCommunity': '大连社区',
    'nav.shares': '个人分享',
    'nav.about': '关于',
    'home.hero.title': '银幕质检 · Screen QA',
    'home.hero.subtitle': '记录影片画面、声音、字幕经过真实影院 DCP 放映链路后的实际效果。',
    'home.hero.cta': '查看验证记录',
    'home.sections.title': '栏目',
    'home.latest.title': '最新验证记录',
    'home.latest.more': '查看全部',
    'section.coming': '内容建设中，敬请期待。',
    'sections.tests.title': '验证记录',
    'sections.tests.desc': '影片画面、声音、字幕在真实影院 DCP 放映后的实际验证结果。',
    'sections.dcp.title': 'DCP 制作',
    'sections.dcp.desc': '如何把素材制作成合规、可播放的 OV/VF DCP。',
    'sections.subtitles.title': '字幕工作流',
    'sections.subtitles.desc': '不同字幕格式（SRT/ASS/PGS 等）的处理与封装工作流。',
    'sections.cinemas.title': '大连影院',
    'sections.cinemas.desc': '大连本地支持 DCP 试映与验证的影院信息（大众点评指路）。',
    'sections.community.title': '大连社区',
    'sections.community.desc': '大连本地的兴趣社区，比如桌游等。',
    'sections.shares.title': '个人分享',
    'sections.shares.desc': '好吃的店点评与其他个人分享。',
    'sections.about.title': '关于',
    'sections.about.desc': '项目说明、验证方法论与投稿指南。',
  },
  en: {
    'site.name': 'Screen QA',
    'site.tagline': 'Cinema DCP verification · DCP authoring · Dalian community',
    'nav.home': 'Home',
    'nav.tests': 'Verification',
    'nav.dcp': 'DCP Authoring',
    'nav.subtitles': 'Subtitles',
    'nav.dalianCinemas': 'Dalian Cinemas',
    'nav.dalianCommunity': 'Dalian Community',
    'nav.shares': 'Shares',
    'nav.about': 'About',
    'home.hero.title': 'Screen QA · 银幕质检',
    'home.hero.subtitle': 'Recording how picture, sound, and subtitles actually behave after going through a real cinema DCP projection chain.',
    'home.hero.cta': 'Browse verification records',
    'home.sections.title': 'Sections',
    'home.latest.title': 'Latest verification records',
    'home.latest.more': 'View all',
    'section.coming': 'Content is under construction.',
    'sections.tests.title': 'Verification',
    'sections.tests.desc': 'Real-world verification of picture, sound, and subtitles after cinema DCP projection.',
    'sections.dcp.title': 'DCP Authoring',
    'sections.dcp.desc': 'How to turn source material into compliant, playable OV/VF DCPs.',
    'sections.subtitles.title': 'Subtitle Workflows',
    'sections.subtitles.desc': 'Workflows for different subtitle formats (SRT/ASS/PGS and more).',
    'sections.cinemas.title': 'Dalian Cinemas',
    'sections.cinemas.desc': 'Dalian cinemas that support DCP test screenings (via Dianping search).',
    'sections.community.title': 'Dalian Community',
    'sections.community.desc': 'Local interest communities in Dalian, such as board games.',
    'sections.shares.title': 'Shares',
    'sections.shares.desc': 'Food reviews and other personal shares.',
    'sections.about.title': 'About',
    'sections.about.desc': 'About this project, verification methodology, and contribution guide.',
  },
};

export function useTranslations(locale: string) {
  const dict = ui[locale as Locale] ?? ui[defaultLocale];
  return (key: string): string => dict[key] ?? ui[defaultLocale][key] ?? key;
}

export function localize(locale: string, path = ''): string {
  let base = import.meta.env.BASE_URL ?? '/';
  if (!base.endsWith('/')) base += '/';
  const prefix = locale === defaultLocale ? '' : `${locale}/`;
  const p = path ? `${path}/` : '';
  let url = `${base}${prefix}${p}`;
  url = url.replace(/\/{2,}/g, '/');
  return url;
}
