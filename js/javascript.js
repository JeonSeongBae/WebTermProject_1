var slideIndex = 1;
var timer;

/* ImageSlide */
// 슬라이드를 움직이는 메소드
function moveSlide(input) {
  showSlides(slideIndex += input); // slideIndex를 변경하여 이미지를 넘겨줌
}
// 입력된 값의 slide를 띄워줌
function currentSlide(input) {
  showSlides(slideIndex = input); // 입력된 값으로 slideIndex를 바꿔줌
}
// 입력된 값의 index 이미지를 창에 띄우고 나머지는 none으로 가려줌
// dots는 className을 변경하여 css를 이용 변화를 줌
function showSlides(input) {
  var i;
  var imgSlides = document.getElementsByClassName("mySlides"); // slide 이미지들을 imgSlides 배열에 저장
  var imgDots = document.getElementsByClassName("dot"); // dot 이미지들을 imgDots 배열에 저장
  if (input > imgSlides.length && input > imgDots.length) {slideIndex = 1} // input 값이 imgSlides와 imgDots의 길이를 넘어가면 slideIndex를 다시 1로 돌려줌
  if (input < 1) {slideIndex = imgSlides.length}
  for (i = 0; i < imgSlides.length; i++) {
    imgSlides[i].style.display = "none"; // 나머지 화면을 none으로 저장
    imgDots[i].className = imgDots[i].className.replace(" active", ""); // active라는 string을 다시 제거
  }
  imgSlides[slideIndex-1].style.display = "block"; // block으로 화면에 표시
  imgDots[slideIndex-1].className += " active"; // active라는 string을 className 뒤에 붙여줌
  setTimer(); // timer를 설정
}
// timer로 넘어가 실행될 Method
function carousel(btnYN){
  var i;
  var timerimgSlides = document.getElementsByClassName("mySlides"); // slide 이미지들을 imgSlides 배열에 저장
  var timerimgDots = document.getElementsByClassName("dot"); // dot 이미지들을 imgDots 배열에 저장
  if(slideIndex > timerimgSlides.length && slideIndex > timerimgDots.length) slideIndex = 1; // slideIndex가 Slides와 Dots의 개수보다 커지면 다시 1로 돌려줌
  for(i=0; i<timerimgSlides.length; i++){
    timerimgSlides[i].style.display = "none"; // 나머지 화면을 none으로 저장
    timerimgDots[i].className = timerimgDots[i].className.replace(" active", ""); // active라는 string을 다시 제거
  }
  slideIndex++; // slideIndex를 1증가시켜 다음 화면으로 자동으로 넘겨줌
  timerimgSlides[slideIndex-1].style.display = "block"; // block으로 화면에 표시
  timerimgDots[slideIndex-1].className += " active" // active라는 string을 className 뒤에 붙여줌
}
// timer의 기능
function setTimer(){
  clearInterval(timer); // 타이머를 한개씩만 돌리기 위해
  timer = null; // 동시에 여러 timer가 실행되지 않도록 타이머를 초기화
  timer =  setInterval("carousel()", 5000); // 5초가 지나면 화면이 넘어가도록 timer를 지정
}
/* chart */
var ctx = document.getElementById("chart");
var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Warrior", "Paladin", "Hunter", "Rogue", "Mage", "Priest", "Druid", "Shaman", "Warlock"], // chart의 label 이름 저장
    datasets: [
      {
        label: '(단위: %)',
        data: [18.2, 17, 13.5, 13.3, 11.8, 9.7, 9.5, 5.4, 1.1], // chart의 value값 저장
        backgroundColor: [ // chart의 색상을 각각 저장
          'rgba(255, 125, 0, 0.8)',
          'rgba(0, 255, 125, 0.8)',
          'rgba(125, 0, 255, 0.8)',
          'rgba(255, 40, 40, 0.8)',
          'rgba(40, 255, 40, 0.8)',
          'rgba(40, 40, 255, 0.8)',
          'rgba(255, 0, 125, 0.8)',
          'rgba(125, 255, 0, 0.8)',
          'rgba(0, 125, 255, 0.8)'
        ],
      }
    ] // Enddatasets
  }, // Enddata
  options: {
    responsive: true,
    responsiveAnimationDuration: 1,
    title: {
      display: true,
      text: '영웅 별 Deck 편성률'
    }
  }
});
function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.getElementsByClassName('mprev')[0].style = "z-index:0; position:absolute";
  document.getElementsByClassName('mnext')[0].style = "z-index:0; position:absolute";
}
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}
var index = 1;
function plus() {
  show(++index, 1);
}
function minus(){
  show(--index, 2);
}
function current(n) {
  show(index = n, 0);
}

function show(n, pm) {
  var i;
  var slides = document.getElementsByClassName("modalSlides");
  if(localStorage.getItem("xbutton"+n) !== null){// modalSlide가 제거되어 localStorage에 있나 확인한다
      if(pm === 1){
        plus();
      }// localStorage에 존재하고 plus로 입력된 값이라면 reculsive를 사용하여 다음 화면을 띄움
      else{
        minus();
      } // localStorage에 존재하고 minus로 입력된 값이라면 reculsive를 사용하여 이전 화면을 띄움
  }
  else{ // modalSlide가 제거되지 않았다면 해당 modalIndex의 화면을 띄워준다.
    if (n > slides.length) {index = 1;} // input값이 증가되어 modalSlides배열의 길이보다 커지면 다시 1로 돌려줌
    if (n < 1) {index = slides.length;} // input값이 감소되어 modalSlides배열의 길이보다 커지면 다시 배열 길이로 돌려줌
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // 다른 modalSlides를 none으로 바꿈
    }
    slides[index-1].style.display = "block"; // 해당 modalSlides를 화면에 띄움
  }
}

function galleryover(elem){
  elem.style.opacity = "0.5";
  var hero = document.getElementsByClassName("hero");
  var deckname = document.getElementsByClassName("deckname");
  for (var i = 0; i < hero.length; i++) {
    if (elem==hero[i]) {
      deckname[i].style = "z-index: 1;"
    }
  }
}
function galleryout(elements){
  elements.style.opacity = "1";
  var hero = document.getElementsByClassName("hero");
  var deckname = document.getElementsByClassName("deckname");
  for (var i = 0; i < deckname.length; i++) {
    if (elements==hero[i]) {
      deckname[i].style = "z-index: 0;"
    }
  }
}

function deleteGallery(id) {
  var index_delete = id.split("n");
  delGalleary = document.getElementById("gallery" + index_delete[1]);
  localStorage.setItem(id, delGalleary);
  delGalleary.remove();
}

function update_storage(){
  for(var i = 1; i < 10 ; i++)
    if(localStorage.getItem("xbutton"+i) !== null)
      deleteGallery("xbutton"+i);
}
update_storage();





function dropdown() {
  var text = document.getElementById("menu_button").innerHTML;
  var div = document.getElementById("myDropdown");
  var pos = div.offsetHeight;

  if (text == "MENU") {
    var animation = setInterval(expand, 1);
    function expand() {
      if (pos > 240)
      clearInterval(animation);
      else {
        pos += 2;
        div.style.height = pos + "px";
      }
    }


    document.getElementById("menu_button").innerHTML = "CLOSE";
    document.getElementById("myDropdown").classList.toggle("show");

  } else {
    var animation = setInterval(collapse, 1);
    function collapse() {
      if (pos < 0) {
        clearInterval(animation);
        document.getElementById("myDropdown").classList.toggle("show");
      } else {
        pos -= 2;
        div.style.height = pos + "px";
      }
    }
    document.getElementById("menu_button").innerHTML = "MENU";
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
