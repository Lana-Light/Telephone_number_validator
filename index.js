/* version 1 with regexp.test() */
function telephoneCheck(str) {
  var e1 = /^1? ?(\(\d{3}\) ?|\d{3}[- ]?)\d{3}-? ?\d{4}$/;
  return e1.test(str);
}

telephoneCheck("1 555-555-5555");

/* version 2 with string.match() */
function telephoneCheck(str) {
  var e1 = /1? ?(\(\d{3}\) ?|\d{3}[- ]?)\d{3}-? ?\d{4}/;
  return str==str.match(e1);
}

telephoneCheck("(555)-555-5555");

/* version 3 with character class \s, flag g and arrow function */
const telephoneCheck = (str) =>
  str == str.match(/^1?\s?(\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}-?\s?\d{4}$/g);

telephoneCheck("5555555555");
