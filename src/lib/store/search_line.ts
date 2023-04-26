import { LineValue, LineShowValue } from "./class";

//駅を検索します
export function searchLine(
  lineMap: Map<number, LineValue>,
  searchText: string,
  matchType: number,
  itemType: number
) {
  console.log("searchSta Parameter:", searchText, matchType, itemType);
  //searchTextが空文字列なら抜ける
  if (searchText == "") return;
  //路線mapを検索し条件に合うlineValue配列を作成
  let foo = makeSearchLineValue(lineMap, searchText, matchType, itemType);
  //lineShowValue配列を作成
  let bar: Map<number, LineShowValue> = makeLineShowValue(foo);
  return bar;
}

//路線mapを検索し条件に一致するLineValue配列を作成
function makeSearchLineValue(
  staMap: Map<number, LineValue>,
  searchText: string,
  matchType: number,
  itemType: number
) {
  let foo: LineValue[] = [];

  staMap.forEach((element) => {
    let staName = element.name;
    if (itemType == 2) {
      staName = element.kana;
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

//検索条件に一致した路線No6がkeyとなる表示用配列を作成
function makeLineShowValue(sArray: LineValue[]) {
  let showMap = new Map<number, LineShowValue>();
  sArray.forEach((element) => {
    let sv = new LineShowValue(
      element.lineNo6,
      element.close,
      element.name,
      element.kana,
      element.urls
    );
    showMap.set(element.lineNo6, sv);
  });

  //路線No6でsort
  const sortedMap = new Map([...showMap.entries()].sort((a, b) => a[0] - b[0]));
  // const sortedMap = new Map([...showMap.entries()].sort());
  return sortedMap;
}
