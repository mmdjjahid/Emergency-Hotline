function getElement (name){
   return document.getElementsByClassName(name)
}

heart = getElement('heart')[0].innerText
copy = getElement('copy')[0].innerText
gold = getElement('gold')[0].innerText
console.log(heart, copy, gold)