/* Bar */
// dropdownbutton
function dropdown() {
  var text = document.getElementById("menu_button").innerHTML; // MEUNU or CLOSE
  var div = document.getElementById("myDropdown");
  var pos = div.offsetHeight;
  if (text == "MENU") { // text가 MENU일 경우
    var animation = setInterval(expand, 1); // animation 효과를 내기위해 setInterval사용(1초마다 반복)
    function expand() { // 길이가 늘어나는 함수
      if (pos > 240) // 길이가 240px가 될 때까지
      clearInterval(animation); // animation을 멈춰 줌
      else {
        pos += 3; // 3씩 증가함
        div.style.height = pos + "px"; // height를 변경시켜줌
      }
    }
    document.getElementById("menu_button").innerHTML = "CLOSE"; // MENU에서 CLOSE로 변경
    document.getElementById("myDropdown").classList.toggle("show");
  } else { // text가 CLOSE일 경우
    var animation = setInterval(collapse, 1); // animation 효과를 내기위해 setInteval 사용(1초마다 반복)
    function collapse() {
      if (pos < 0) {
        clearInterval(animation); // 실행되고 있는 Interval을 처리함
        document.getElementById("myDropdown").classList.toggle("show");
      } else {
        pos -= 3; // 3씩 감소함
        div.style.height = pos + "px"; // height를 변경시켜줌
      }
    }
    document.getElementById("menu_button").innerHTML = "MENU"; //CLOSE에서 MENU로 변경
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

/* ImageSlide */
// 슬라이드를 움직이는 메소드
var slideIndex = 1;
var timer;
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
	var x = document.getElementsByClassName("mySlides"); // slide 이미지들을 imgSlides 배열에 저장
  var y = document.getElementsByClassName("dot"); // dot 이미지들을 imgDots 배열에 저장

	for(i=0; i<x.length;i++){
		x[i].style.display = "none"; // 나머지 화면을 none으로 저장
    y[i].className = y[i].className.replace(" active", ""); // active라는 string을 다시 제거
	}
	slideIndex++; // slideIndex를 1증가시켜 다음 화면으로 자동으로 넘겨줌
	if(slideIndex > x.length){slideIndex = 1;} // slideIndex가 Slides와 Dots의 개수보다 커지면 다시 1로 돌려줌
	x[slideIndex-1].style.display = "block"; // block으로 화면에 표시
  y[slideIndex-1].className += " active" // active라는 string을 className 뒤에 붙여줌
}


// timer의 기능
function setTimer(){
  clearInterval(timer); // 타이머를 한개씩만 돌리기 위해
  timer = null; // 동시에 여러 timer가 실행되지 않도록 타이머를 초기화
  timer =  setInterval("carousel()", 1000); // 5초가 지나면 화면이 넘어가도록 timer를 지정
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
      } // Enddatasets
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
/* modal을 열어줌 */
function openModal() {
  document.getElementById('myModal').style.display = "block";
}
/* modal을 닫아줌 */
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}
var index = 1;
// 다음 modalSlide를 띄워줌
function plus() {
  show(++index, 1);
}
// 이전 modalSlide를 띄워줌
function minus(){
  show(--index, 2);
}
// 클릭한 index의 modalSlide를 띄워줌
function current(n) {
  show(index = n, 0);
}
// modalSlides를 띄워주는 메소드
function show(n, pm) {
  var i;
  var modalSlides = document.getElementsByClassName("modalSlides"); // modalSlides를 배열에 저장함
  if(localStorage.getItem("xbutton"+n) !== null){// modalSlide가 제거되어 localStorage에 있나 확인한다
      if(pm === 1){
        plus();
      }// localStorage에 존재하고 plus로 입력된 값이라면 reculsive를 사용하여 다음 화면을 띄움
      else{
        minus();
      } // localStorage에 존재하고 minus로 입력된 값이라면 reculsive를 사용하여 이전 화면을 띄움
  }
  else{ // modalSlide가 제거되지 않았다면 해당 modalIndex의 화면을 띄워준다.
    if (n > modalSlides.length) {index = 1;} // input값이 증가되어 modalSlides배열의 길이보다 커지면 다시 1로 돌려줌
    if (n < 1) {index = modalSlides.length;} // input값이 감소되어 modalSlides배열의 길이보다 커지면 다시 배열 길이로 돌려줌
    for (i = 0; i < modalSlides.length; i++) {
      modalSlides[i].style.display = "none"; // 다른 modalSlides를 none으로 바꿈
    }
    modalSlides[index-1].style.display = "block"; // 해당 modalSlides를 화면에 띄움
  }
}
/* Gallery */
// gallery에 마우스를 올렸을 때
function galleryover(elem){
  elem.style.opacity = "0.5"; // 투명도를 50%
  var hero = document.getElementsByClassName("hero"); // hero 이미지들을 배열에 저장
  var deckname = document.getElementsByClassName("deckname"); // deckname을 배열에 저장
  for (var i = 0; i < hero.length; i++) {
    if (elem==hero[i]) {
      deckname[i].style = "z-index: 1;" // deckname을 뒤로 숨김
    }
  }
}
// gallery에 마우스를 올렸다가 떼어냈을 때
function galleryout(elements){
  elements.style.opacity = "1"; // 투명도를 없애줌
  var hero = document.getElementsByClassName("hero"); // hero 이미지들을 배열에 저장
  var deckname = document.getElementsByClassName("deckname"); // deckname을 배열에 저장
  for (var i = 0; i < deckname.length; i++) {
    if (elements==hero[i]) {
      deckname[i].style = "z-index: 0;" // deckname을 앞으로 옮김
    }
  }
}
// gallery를 제거
function deleteGallery(id) {
  var deleteIndex = id.split("n"); // id로 받는 button에서 n을 기준으로 잘라내 뒤에 있는 n과 숫자만 index_delete에 저장
  delGalleary = document.getElementById("gallery" + deleteIndex[1]);
  localStorage.setItem(id, delGalleary); // localStorage에 key는 n+"number"를 저장하고 제거된 gallery를 value에 저장
  delGalleary.remove();
}
// localStorage를 update시켜줌
update_storage(); // 최초 update_storage
function update_storage(){
  for(var i = 1; i < 10 ; i++){ // 9개의 이미지 모두를 확인
    if(localStorage.getItem("xbutton"+i) !== null) // localStorage에 해당 key값의 data가 없을 경우
      deleteGallery("xbutton"+i);
  }
}
/* GuestBook */
var guestbookIndex = 0;
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
// 댓글을 등록받는 함수
function comment_post() {
   var text = prompt("댓글을 등록해 주세요");
   if (text != null) {
      document.getElementById("comment_td").innerHTML = text; // prompt를 통해 입력받은 값을 comment_td에 저장
   }
}
// guestbook을 추가하여 table에 tr을 만드는 메소드
function add_guestbook(){
  var writer = document.getElementById("writer").value; // writer의 value값을 writer에 저장
  var content = document.getElementById("content").value; // content의 value값을 content에 저장
  var adder = document.getElementById("added_div");
  var tr = document.createElement("tr");
  tr.className = "tr";
  // 각각의 td를 writer, comment, recoment에 저장해줌
  var td1 = document.createElement("td");
  td1.className = "guestwriter";
  var td2 = document.createElement("td");
  td2.className = "guestcomment";
  var td3 = document.createElement("td");
  td3.className = "guestrecoment";
  var comment = document.createElement("button");
  comment.className = "comment";
  comment.innerHTML = "답 글";
  document.getElementById("added").appendChild(tr);
  document.getElementsByClassName("tr")[guestbookIndex].appendChild(td1); // td1을 Child로 만들어줌
  document.getElementsByClassName("tr")[guestbookIndex].appendChild(td2); // td2을 Child로 만들어줌
  document.getElementsByClassName("tr")[guestbookIndex].appendChild(td3); // td3을 Child로 만들어줌
  document.getElementsByClassName("guestwriter")[guestbookIndex].innerHTML = writer; // writer 위치
  document.getElementsByClassName("guestcomment")[guestbookIndex].innerHTML = content; // content 위치
  document.getElementsByClassName("guestrecoment")[guestbookIndex++].appendChild(comment); // comment를 Child로 만들어줌
  document.getElementById("writer").value = null; // 현재 입력된 writer의 value값을 비워준다
  document.getElementById("content").value = null; // 현재 입력된 writer의 value값을 비워준다
  comment.onclick = function add_comment(){ // prompt창을 띄워 답글을 입력받고 해당 텍스트를 tr에 삽입
    var recommentText = prompt("답글을 입력하세요");
    document.getElementsByClassName("guestrecoment")[guestbookIndex].innerHTML = recommentText;
  };
}
