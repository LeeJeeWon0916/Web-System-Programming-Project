//클릭시 발생하는 스크립트. 클릭시 table의 visibility를 hidden이나 inherit으로 바꿈-->

function menu_switch() {
    const menu_table = document.getElementById('menu_table');
    if (menu_table.style.visibility == 'hidden') {
         menu_table.style.visibility = 'inherit';
        }
    else {
        menu_table.style.visibility = 'hidden';
        }
    }
