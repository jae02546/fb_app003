import { StaValue, LineValue, ShowValue } from "./class";

//駅を検索します
export function searchSta(
  lineMap: Map<number, LineValue>,
  staMap: Map<number, StaValue>,
  searchText: string,
  matchType: number,
  itemType: number,
  lenType: number
) {
  console.log("searchSta Parameter:", searchText, matchType, itemType, lenType);
  //searchTextが空文字列でlenType0なら抜ける
  if (searchText == "" && lenType == 0) return;
  //駅mapを検索し条件に合うstaValue配列を作成
  let foo = makeSearchStaValue(
    staMap,
    searchText,
    matchType,
    itemType,
    lenType
  );
  //同じ駅を名寄せして路線情報を付加しshowValue配列を作成
  let bar: Map<number, ShowValue> = makeShowValue(foo, lineMap);
  return bar;
}

//駅mapを検索し条件に一致するStaValue配列を作成
function makeSearchStaValue(
  staMap: Map<number, StaValue>,
  searchText: string,
  matchType: number,
  itemType: number,
  lenType: number
) {
  let foo: StaValue[] = [];

  staMap.forEach((element) => {
    let staName = element.name;
    if (itemType == 2) {
      staName = element.kana;
    }

    switch (true) {
      case lenType == 0: //指定なし
        break;
      case lenType == 1: //1-9文字
      case lenType == 2:
      case lenType == 3:
      case lenType == 4:
      case lenType == 5:
      case lenType == 6:
      case lenType == 7:
      case lenType == 8:
      case lenType == 9:
        if (staName.length != lenType) return foo;
        break;
      default: //10文字以上
        if (staName.length < lenType) return foo;
        break;
    }

    switch (true) {
      case matchType == 2: //前方一致
        let pattern1 = new RegExp("^" + searchText);
        if (pattern1.test(staName)) {
          foo.push(element);
        }
        break;
      case matchType == 3: //後方一致
        let pattern2 = new RegExp(searchText + "$");
        if (pattern2.test(staName)) {
          foo.push(element);
        }
        break;
      case matchType == 4: //完全一致
        let pattern3 = new RegExp("^" + searchText + "$");
        if (pattern3.test(staName)) {
          foo.push(element);
        }
        break;
      default: //部分一致
        let pattern4 = new RegExp(searchText);
        if (pattern4.test(staName)) {
          foo.push(element);
        }
        break;
    }
  });

  return foo;
}

//同じ駅を名寄せして、路線情報を付加する
//検索条件に一致した同駅Noがkeyとなる表示用配列を作成
function makeShowValue(sArray: StaValue[], lMap: Map<number, LineValue>) {
  let showMap = new Map<number, ShowValue>();
  sArray.forEach((element) => {
    //同駅Noが0の場合は駅No9が同駅Noとなる
    let sameStaNo = element.staNo9;
    if (element.sameStaNo9 != 0) {
      sameStaNo = element.sameStaNo9;
    }
    //lMapからlvArr作成
    let lvArr: LineValue[] = [];
    if (lMap.has(element.lineNo6)) {
      let foo = lMap.get(element.lineNo6);
      if (foo !== undefined) {
        lvArr.push(foo);
      }
    }
    //同駅NoをkeyとしてshowMap作成
    if (showMap.has(sameStaNo)) {
      //同駅Noがある
      //lineMapに路線No6がある場合はlvArrに追加
      lvArr.forEach((element) => {
        showMap.get(sameStaNo)?.lvArr.push(element);
      });
    } else {
      //同駅Noがない
      //同駅Noが複数ある場合は最初の同駅Noの項目が表示される
      let sv = new ShowValue(
        element.staNo9,
        sameStaNo,
        element.close,
        element.name,
        element.kana,
        element.prefectures,
        element.url,
        lvArr
      );
      showMap.set(sameStaNo, sv);
    }
  });

  //同駅No9でsort
  const sortedMap = new Map([...showMap.entries()].sort((a, b) => a[0] - b[0]));
  // const sortedMap = new Map([...showMap.entries()].sort());
  return sortedMap;
}

