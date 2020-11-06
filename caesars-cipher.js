function rot13(str) {
  var arr = str.split("");

  for(var i=0; i<arr.length; i++)
  {
    if(/\W+/.test(arr[i]))
    {
      continue;
    } 
    if(arr[i].charCodeAt() <= 77)
    {
      arr[i] = String.fromCharCode((arr[i].charCodeAt(0)) + 13)
    }
    else
    {
      arr[i] = String.fromCharCode((arr[i].charCodeAt(0)) - 13)
    }
  }
  console.log(arr.join(""))
  return arr.join("");
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
