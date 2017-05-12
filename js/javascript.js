var slideIndex = 1;
var timer;
function plusSlides(n) {
  showSlides(slideIndex += n); // 슬라이드를 한개씩 넘기는 방식
}
function currentSlide(n) {
  showSlides(slideIndex = n); // 지정된 화면을 띄우기
}
function carousel(btnYN){
	var i;
	var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("dot");

	for(i=0; i<x.length;i++){
		x[i].style.display = "none"; // 나머지 화면을 none으로
    y[i].className = y[i].className.replace(" active", "");
	}
	if(btnYN != "Y")
		slideIndex++;
	if(slideIndex > x.length)
		slideIndex = 1;
	x[slideIndex-1].style.display = "block";
  y[slideIndex-1].className += " active"
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
	setTimer();
	carousel("Y");
	}
	function setTimer(){
		clearInterval(timer); // 타이머를 한개씩만 돌리기 위해
		timer = null; // 타이머를 초기화
		timer =  setInterval("carousel()", 5000); // 5초가 지나면 화면이 넘어가도록 timer를 지정
	}
function openModal() {
  document.getElementById('myModal').style.display = "block";
}
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}
var index = 1;
function plus(n) {
  show(index += n);
}
function current(n) {
  show(index = n);
}
function show(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index-1].style.display = "block";
}

function galleryover(elem){
  elem.style.opacity = "0.3";
  var hero = document.getElementsByClassName("hero");
  var backgroundDeck = document.getElementsByClassName("backgroundDeck");
  var gallerydeckname = document.getElementsByClassName("deckname");
  for (var i = 0; i < shadow.length; i++) {
    if (elem==shadow[i]) {
      gallerydeckname[i].style = "z-index: 1"
      backgroundDeck[i].style = "z-index: 1;"
      hero[i].style = "z-index: 0;"
    }
  }
}
function galleryout(elements){
  elements.style.opacity = "1";
  // var gallerydeckname = document.getElementsByClassName("deckname");
  // for (var i = 0; i < gallerydeckname.length; i++) {
  //   gallerydeckname[i].style = "z-index: 1;"
  // }
}

function deleteGallery(id) {
  var index = id.split("n");
  var gallery = document.getElementById("gallery" + index[1]).remove();
  slides[index[1]].remove();
}

function dropdown() {
    var text = document.getElementById("menu_button").innerHTML;

    if (text == "MENU") {
      var div = document.getElementById("menu_div");
      var pos = div.offsetHeight;
      var animation = setInterval(frame, 1);
      function frame() {
        if (pos == 280) {
          clearInterval(animation);
        } else {
          pos++;
          div.style.height = pos + "px";
        }
      }
      document.getElementById("menu_button").innerHTML = "CLOSE";
      document.getElementById("myDropdown").classList.toggle("show");
    } else {
      document.getElementById("menu_div").style.height = "50px";
      document.getElementById("menu_button").innerHTML = "MENU";
      document.getElementById("myDropdown").classList.toggle("show");
    }
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function post() {
	var name = document.getElementById("input_name").value;
	var text = document.getElementById("input_text").value;

	var div = document.getElementById("comment_div");

	var table = document.createElement("table");
	var tr1 = document.createElement("tr");
	var tr2 = document.createElement("tr");

	var td_name = document.createElement("td");
	td_name.innerHTML = "작성자 : " + name;

	var td_text = document.createElement("td");
	td_text.innerHTML = text;

	var td_button = document.createElement("td");
	td_button.setAttribute("id", "comment_td");

	var comment_button = document.createElement("button");
	comment_button.setAttribute("onclick", "comment_post()");
	comment_button.innerHTML = "댓글 등록하기";
	td_button.appendChild(comment_button);

	tr1.appendChild(td_name);
	tr1.appendChild(td_text);
	tr2.appendChild(td_button);

	table.appendChild(tr1);
	table.appendChild(tr2);

	div.appendChild(table);
}

function comment_post() {
	var text = prompt("댓글을 등록해 주세요");

	if (text != null) {
		document.getElementById("comment_td").innerHTML = text;
	}
}
var guest_index = 0;
function add_guestbook(){
    var i = guest_index;
    var writer = document.getElementById("writer").value;
    var content = document.getElementById("content").value;
    document.getElementById("writer").value = null;
    document.getElementById("content").value = null;
    var adder = document.getElementById("added_div");
    adder.style = "display:inline";
    var tr = document.createElement("tr");
    tr.className = "tr";
    var td1 = document.createElement("td");
    td1.className = "guestwriter";
    var td2 = document.createElement("td");
    td2.className = "guestcomment";
    var td3 = document.createElement("td");
    td3.className = "guestrecoment";
    var comment = document.createElement("button");
    comment.className = "comment";
    comment.innerHTML = "답글달기";
    document.getElementById("added").appendChild(tr);
    document.getElementsByClassName("tr")[guest_index].appendChild(td1);
    document.getElementsByClassName("tr")[guest_index].appendChild(td2);
    document.getElementsByClassName("tr")[guest_index].appendChild(td3);
    document.getElementsByClassName("guestwriter")[guest_index].innerHTML = writer;
    document.getElementsByClassName("guestcomment")[guest_index].innerHTML = content;
    document.getElementsByClassName("guestrecoment")[guest_index++].appendChild(comment);
    comment.onclick = function add_comment(){
      var comment_value = prompt("답글을 입력하세요");
      document.getElementsByClassName("guestrecoment")[i].innerHTML = comment_value;
    };
  }
