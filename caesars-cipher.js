function rot13(str) {
  let arr = [];
  for(let i=0; i<str.length; i++)
  {
    let val = str.charCodeAt(i);
    if(val == 32 || val == 46 || val == 63 || val == 33)
    {
      arr.push(str.charAt(i));
      continue;
    }
    arr.push(str.charCodeAt(i));
  }

  arr.forEach((item,index,arr) => 
  {
    if(/\W/.test(item))
    {
      return;
    }
    else if((item - 13) < 65)
    {
      let temp = 12 - (item - 65);
      item = 90 - temp;
      arr[index] = String.fromCharCode(item)
      return;
    }
       arr[index] = String.fromCharCode(item - 13);
  });

  let astr = arr.join("");
  return astr;
}

rot13("SERR CVMMN!");
