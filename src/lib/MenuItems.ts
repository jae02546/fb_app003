import iconHome from "./icons/home.svg";
import iconAbout from "./icons/about.svg";

import iconStaSearch from "./icons/sta_search.svg";
import iconLineSearch from "./icons/line_search.svg";
import iconLineList from "./icons/line_list.svg";
import iconLinebot from "./icons/linebot.svg";
import iconEki2 from "./icons/eki2.svg";
import iconEkiword from "./icons/ekiword.svg";
import iconWeirdScrollCalendar from "./icons/WeirdScrollCalendar_icon.png";

import imageStaSearch from "./images/sta_search.png";
import imageLineSearch from "./images/sta_search.png";
import imageLineList from "./images/sta_search.png";
import imageLinebot from "./images/linebot.png";
import imageEki2 from "./images/eki2.png";
import imageEkiword from "./images/ekiword.png";
import imageWeirdScrollCalendar from "./images/WeirdScrollCalendar.png";

export const menuItems = [
  { id: "home", icon: iconHome, title: "Home" },
  { id: "staSearch", icon: iconStaSearch, title: "駅名検索" },
  { id: "lineSearch", icon: iconLineSearch, title: "路線名検索" },
  { id: "lineList", icon: iconLineList, title: "路線,駅一覧" },
  { id: "linebot", icon: iconLinebot, title: "鉄道路線bot" },
  { id: "eki2", icon: iconEki2, title: "駅並べ2.0" },
  { id: "ekiword", icon: iconEkiword, title: "駅word" },
  {
    id: "weirdScrollCalendar",
    icon: iconWeirdScrollCalendar,
    title: "変なスクロールカレンダ",
  },
  { id: "about", icon: iconAbout, title: "About" },
];

export const homeItems = [
  {
    id: "staSearch",
    iconSrc: iconStaSearch,
    title: "駅名検索",
    description: "全国の駅名を検索できます。",
    imgSrc: imageStaSearch,
    imgAlt: "駅名検索の画像",
  },
  {
    id: "lineSearch",
    iconSrc: iconLineSearch,
    title: "路線名検索",
    description: "全国の路線名を検索できます。",
    imgSrc: imageLineSearch,
    imgAlt: "路線名検索の画像",
  },
  {
    id: "lineList",
    iconSrc: iconLineList,
    title: "路線,駅一覧",
    description: "全国の鉄道路線と駅の一覧です。",
    imgSrc: imageLineList,
    imgAlt: "路線,駅一覧の画像",
  },
  {
    id: "linebot",
    iconSrc: iconLinebot,
    title: "鉄道路線bot",
    description: "全国の鉄道路線を1時間毎にツイートする、Twitterのbotです。",
    imgSrc: imageLinebot,
    imgAlt: "鉄道路線botの画像",
  },
  {
    id: "eki2",
    iconSrc: iconEki2,
    title: "駅並べ2.0",
    description:
      "全国9000以上の駅を、路線毎に並べるゲームです。Google Playよりダウンロード出来ます。",
    imgSrc: imageEki2,
    imgAlt: "駅並べ2.0の画像",
  },
  {
    id: "ekiword",
    iconSrc: iconEkiword,
    title: "駅word",
    description:
      "シャッフルされた駅名の文字を組み合わせ、元の駅名に戻すゲームです。Google Playよりダウンロード出来ます。",
    imgSrc: imageEkiword,
    imgAlt: "駅wordの画像",
  },
  {
    id: "weirdScrollCalendar",
    iconSrc: iconWeirdScrollCalendar,
    title: "変なスクロールカレンダー",
    description:
      "縦横斜めにスクロールするカレンダーです。Google Playよりダウンロード出来ます。",
    imgSrc: imageWeirdScrollCalendar,
    imgAlt: "変なスクロールカレンダーの画像",
  },
];
