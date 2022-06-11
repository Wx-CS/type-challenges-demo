function transKebabCase (s) {
  let newStr = ''
  for (let i = 0; i < s.length; i++) {
    let str = s.charAt(i);
    if (str !== str.toLocaleLowerCase() && i !== 0) {
      newStr += `-${str.toLocaleLowerCase()}`;
    } else if(str === str.toLocaleUpperCase() && i === 0) {
      newStr += `${str.toLocaleLowerCase()}`;
    } else {
      newStr += str;
    }
  }
  return newStr;
}