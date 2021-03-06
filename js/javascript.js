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
window.onclick = function(event) { // 메뉴버튼을 활성화시켰을 경우 바탕을 누르면 drop메뉴가 사라짐
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

    }
  }
}
// gallery에 마우스를 올렸다가 떼어냈을 때
function galleryout(elements){

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

  }
}
/* GuestBook */
function post() {
   var name = document.getElementById("writer").value;
   var text = document.getElementById("comment").value;
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
/*  */
function comment_post() {
   var text = prompt("댓글을 등록해 주세요");
   if (text != null){ document.getElementById("comment_td").innerHTML = text; }
}
/*  */
var guestIndex = 0;
function reply(){//방명록에 정보를 추가해주는 메소드
  var i = guestIndex;
  var writer = document.getElementById("writer").value;
  var content = document.getElementById("content").value;
  document.getElementById("writer").value = null;
  document.getElementById("content").value = null;
  var adder = document.getElementById("added_div");
  adder.style = "display:inline";
  var tr = document.createElement("tr");
  tr.className = "tr";
  var td1 = document.createElement("td");
  td1.className = "guestWriter";
  var td2 = document.createElement("td");
  td2.className = "guestComment";
  var td3 = document.createElement("td");
  td3.className = "guestRecomment";
  var comment = document.createElement("button");
  comment.className = "comment";
  comment.innerHTML = "답글달기";
  document.getElementById("added").appendChild(tr);
  document.getElementsByClassName("tr")[guestIndex].appendChild(td1);
  document.getElementsByClassName("tr")[guestIndex].appendChild(td2);
  document.getElementsByClassName("tr")[guestIndex].appendChild(td3);
  document.getElementsByClassName("guestWriter")[guestIndex].innerHTML = writer;
  document.getElementsByClassName("guestComment")[guestIndex].innerHTML = content;
  document.getElementsByClassName("guestRecomment")[guestIndex].appendChild(comment);
  // 방명록에 덧글을 입력받는 메소드
  comment.onclick = function add_comment(){
    var comment_value = prompt("덧글을 입력하세요");
    if(comment_value.includes("www.") ||  comment_value.includes("http://") || comment_value.includes("https://")) { // URL 입력일 경ㅇ
      if(!comment_value.includes("http://") || !comment_value.includes("https://"))
        comment_value = "http://" + comment_value;
      $.ajax({ // Jquery사용
        type: 'POST',
        url: 'https://graph.facebook.com',
        data: {
          id: comment_value,
          scrape: true
        },
        success: function(response) {
          var content_comment = document.getElementsByClassName("guestRecomment")[i];
          console.log(response);
          content_comment.removeChild(content_comment.childNodes[0]);
          content_comment.appendChild(url(response));
        },
        error: function(response) {
          document.getElementsByClassName("guestRecomment")[i].innerHTML = comment_value;
        }
      });
    } else { // 일반 답글일 경우
      document.getElementsByClassName("guestRecomment")[i].innerHTML = comment_value;
    }
  }
  guestIndex++;
}
/* URL */
function url(response) {
  var link = document.createElement("guestWriter");
  link.href = response.url;
  link.target = "_blank";
  var div = document.createElement("div");
  div.className = "url";
  var urlImage = document.createElement("div");
  urlImage.id = "urlImage";
  var image = document.createElement("img");
  image.src = response.image[0].url;
  urlImage.appendChild(image);
  var urlData = document.createElement("div");
  urlData.id = "urlData";
  var title = document.createElement("h3");
  title.innerHTML = response.title;
  var description = document.createElement("p");
  description.innerHTML = response.description;
  var url = document.createElement("p");
  url.innerHTML = response.url;
  urlData.appendChild(title);
  urlData.appendChild(description);
  urlData.appendChild(url);
  div.appendChild(urlImage);
  div.appendChild(urlData);
  link.appendChild(div);
  return link;
}
