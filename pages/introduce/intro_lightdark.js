//라이트 & 다크모드 버튼 
//작품 수 8개 기준(다르면 line 35, 60 작품 수에 맞춰서 수정)

function dark_light() {
    let mode = "dark"; //mode에 dark값 부여. dark 값일 경우 light 모드로
    let real = document.getElementsByTagName("body")[0].style.backgroundColor;
    //문제는 light모드일때도 dark값을 부여함. body의 backgroundcolor를 real에 저장.
    //background color가 white일 경우에는 if절에서 mode를 white로 값을 바꿈
    if (real == "white") {
        mode = "white";
    }

    if (mode == "dark") { //dark모드 light 모드로
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        //body의 전체적인 background color 변경. 얘는 복붙하면 됨
        for(let i = 0; i <5; i ++) {
            document.getElementsByTagName("li")[i].style.color = "rgb(3, 1, 39)";
        } //li의 값인 정강이들, 로맨스, 판타지~ 배열값 이용해서 변경
        document.getElementsByTagName("ul")[0].style.borderTop = "1px solid rgb(3, 1, 39)";
        document.getElementsByTagName("ul")[0].style.borderBottom = "1px solid rgb(3, 1, 39)";
        //ul의 경계선 변경
        document.getElementsByTagName("h1")[0].style.color = "rgb(3, 1, 39)";
        //h1 변경
        document.getElementsByTagName("p")[0].style.color = "rgb(3, 1, 39)";
        document.getElementById("info").style.color = "rgb(3, 1, 39)";
        document.getElementById("content").style.color = "rgb(3, 1, 39)";
        let table = document.getElementsByTagName("table")[0];
        let t = table.getElementsByTagName("*");
        for(let i = 0; i <t.length; i ++) {
            t[i].style.color = "rgb(3, 1, 39)";
        }
        document.getElementsByTagName("ul")[1].style.color = "rgb(3, 1, 39)";
        document.getElementsByTagName("ul")[1].style.borderTop = "1px solid rgb(3, 1, 39)";
        document.getElementsByTagName("ul")[1].style.borderBottom = "1px solid rgb(3, 1, 39)";
        document.getElementsByTagName("button")[0].style.backgroundColor = "white";
        document.getElementsByTagName("button")[0].style.border = "1px solid rgb(3, 1, 39)";
        document.getElementsByTagName("button")[0].style.color = "rgb(3, 1, 39)";

        document.getElementsByTagName("footer")[0].style.color = "rgb(3, 1, 39)";
        //맨아래 저작권 변경
    }



    else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(3, 1, 39)";
        for(let i = 0; i <5; i ++) {
            document.getElementsByTagName("li")[i].style.color = "white";
        } //li의 값인 정강이들, 로맨스, 판타지~ 배열값 이용해서 변경
        document.getElementsByTagName("ul")[0].style.borderTop = "1px solid white";
        document.getElementsByTagName("ul")[0].style.borderBottom = "1px solid white";
        document.getElementsByTagName("h1")[0].style.color = "white";
        document.getElementsByTagName("p")[0].style.color = "white";
        document.getElementById("info").style.color = "white";
        document.getElementById("content").style.color = "white";
        let table = document.getElementsByTagName("table")[0];
        let t = table.getElementsByTagName("*");
        for(let i = 0; i <t.length; i ++) {
            t[i].style.color = "white";
        }

        document.getElementsByTagName("ul")[1].style.color = "white";
        document.getElementsByTagName("ul")[1].style.borderTop = "1px solid white";
        document.getElementsByTagName("ul")[1].style.borderBottom = "1px solid white";
        document.getElementsByTagName("button")[0].style.backgroundColor = "rgb(3, 1, 39)";
        document.getElementsByTagName("button")[0].style.border = "1px solid white";
        document.getElementsByTagName("button")[0].style.color = "white";
        document.getElementsByTagName("footer")[0].style.color = "white";
    }
}