list=[];
function addTweet() {
  // FILL ME IN
  var input=document.getElementById("input").value;
  list.push({text:input,isLike:false});
  input.innerHTML=""
  updateTweet();
}
function updateTweet() {
  var html="";
  for(var i in list){
       html += generateTweetHtml(list[i].text,i);
  }
  output.innerHTML = html;
}

function turns(el) {
  // FILL ME IN
  var max_len =140;
if(el.value.length >max_len) {
el.value =el.value.substr(0,max_len);
}
document.getElementById('char_cnt').innerHTML = el.value.length;
document.getElementById('chars_left').innerHTML = max_len - el.value.length;
return false;
}
function reTweet(input) {
  list.splice(input,0,list[input]);
  list[input+1].isLike = false;
  var ul = document.getElementById(`addTweet-${input}`);
  ul.insertAdjacentHTML('afterend',generateTweetHtml(list[input].text,input));
}
function toggleLike(input) {
  list[input].isLike = !list[input].isLike;
  updateTweet();
}
function generateTweetHtml(input,i) {
  return `
    <li id='addTweet-${i}'>
      <div>
        ${input}
        </br>
        <a href='#' onclick='reTweet(${i})'>Retweet</a>
        <a href='#' onclick='toggleLike(${i})'>${list[i].isLike ? "Dislike" : "Like"}</a>
      </div>
    </li>`
}