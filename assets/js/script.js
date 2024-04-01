const header = document.querySelector('header.header');
const side_menu = document.querySelector('.side_menu');
const body_dash = document.querySelector('.body_dash');
const height_header =  header.getBoundingClientRect().height; //height do header
const width_side_menu = side_menu.getBoundingClientRect().width; //width do sidemenu

console.log('width_side_menu: '+width_side_menu);

side_menu.style.height = "calc(100vh - "+height_header+"px)";//margin top sidebar
body_dash.style.height = "calc(100vh - "+height_header+"px)";
body_dash.style.width = "calc(100% - "+width_side_menu+"px)";



