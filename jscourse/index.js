let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;
function increment() {
  console.log("the button was clicked");
  count += 1;
  countEl.textContent = count;
}
let saveEl = document.getElementById("save-el");
console.log(saveEl);
function save() {
  let countstr = count + " - ";
  saveEl.textContent += countstr;
  countEl.textContent = 0
  count=0

}
