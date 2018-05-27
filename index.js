function theBeatlesPlay(musicians, instruments) {
  var arr =[];
  let c;
  for(c = 0 ; c < musicians.length; c++) {
    let str = `${musicians[c]} plays ${instruments[c]}`;
    arr.push(str);
  }
  return arr;
}