function dark_light() {
    let mode = "dark"; //mode에 dark값 부여. dark 값일 경우 light 모드로
    let real = document.getElementsByTagName("body")[0].style.backgroundColor;
    //문제는 light모드일때도 dark값을 부여함. body의 backgroundcolor를 real에 저장.
    //background color가 white일 경ㅇ에는 if절에서 mode를 white로 값을 바꿈
    if (real == "white") {
        mode = "white";
    }

    if (mode == "dark") { //dark모드 light 모드로
        mode = "white";
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        //body의 전체적인 background color 변경. 얘는 복붙하면 됨
        document.getElementsByTagName("li")[0].style.color = "rgb(3, 1, 39)";
        document.getElementsByTagName("li")[1].style.color = "rgb(3, 1, 39)";
        document.getElementsByTagName("li")[2].style.color = "rgb(3, 1, 39)";
        document.getElementsByTagName("li")[3].style.color = "rgb(3, 1, 39)";
        document.getElementsByTagName("li")[4].style.color = "rgb(3, 1, 39)";
        document.getElementsByTagName("li")[5].style.color = "rgb(3, 1, 39)";
        //li의 값인 정강이들, 로맨스, 판타지~ 배열값 이용해서 변경
        document.getElementsByTagName("h1")[0].style.color = "rgb(3, 1, 39)";

        document.getElementsByTagName("ul")[0].style.borderTop = "1px solid rgb(3, 1, 39)";
        document.getElementsByTagName("ul")[0].style.borderBottom = "1px solid rgb(3, 1, 39)";
        //경계선 바꿈. 대문자 쓰는게 중요!
        document.getElementById("text").style.color = "rgb(3, 1, 39)";
        document.getElementById("text1").style.color = "rgb(3, 1, 39)";
        document.getElementById("text2").style.color = "rgb(3, 1, 39)";
        //바꾸고 싶은 글자들에 전부 id값 지정해야함
        document.getElementsByTagName("footer")[0].style.color = "rgb(3, 1, 39)";
        //이건 다 똑같으니 복붙
    }
    else {
        mode = "white";
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(3, 1, 39)";
        document.getElementsByTagName("li")[0].style.color = "white";
        document.getElementsByTagName("li")[1].style.color = "white";
        document.getElementsByTagName("li")[2].style.color = "white";
        document.getElementsByTagName("li")[3].style.color = "white";
        document.getElementsByTagName("li")[4].style.color = "white";
        document.getElementsByTagName("li")[5].style.color = "white";
        document.getElementsByTagName("ul")[0].style.borderTop = "1px solid white";
        document.getElementsByTagName("ul")[0].style.borderBottom = "1px solid white";
        document.getElementById("text").style.color = "white";
        document.getElementById("text1").style.color = "white";
        document.getElementById("text2").style.color = "white";
        document.getElementsByTagName("footer")[0].style.color = "white";
    }
}