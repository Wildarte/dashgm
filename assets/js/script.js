const header = document.querySelector('header.header');
const side_menu = document.querySelector('.side_menu');
const body_dash = document.querySelector('.body_dash');
const height_header =  header.getBoundingClientRect().height; //height do header
const width_side_menu = side_menu.getBoundingClientRect().width; //width do sidemenu

console.log('width_side_menu: '+width_side_menu);

side_menu.style.height = "calc(100vh - "+height_header+"px)";//margin top sidebar
body_dash.style.height = "calc(100vh - "+height_header+"px)";
body_dash.style.width = "calc(100% - "+width_side_menu+"px)";



// ===================== modal =================================
const modal = document.querySelectorAll('.modal');
modal.forEach((item, index) => {

    let itens =  item.querySelectorAll('.form_modal input');
    let lab = item.querySelectorAll('.form_modal label')

    itens.forEach((item2, index) => {
        item2.addEventListener('focus', () => {
            lab.forEach((item3) => {
                item3.classList.remove('onfocus')
            })

            lab[index].classList.add('onfocus');
        })
    })
    
    itens.forEach((item2, index) => {
        item2.addEventListener('focusout', () => {
            lab.forEach((item3) => {
                item3.classList.remove('onfocus')
            })

        })
    })

});

const show_pass_register = document.getElementById('show_pass_register');
const show_pass_register_input = document.getElementById('show_pass_register_input');
const show_pass_again_register = document.getElementById('show_pass_again_register_input');
const show_pass_again_register_input = document.getElementById('show_pass_again_register_input');

show_pass_register.addEventListener('click', () => {    

    console.log(show_pass_register_input.type);

    if(show_pass_register_input.getAttribute('type') == "password"){
        show_pass_register_input.getAttribute('type', 'text')
    }else{
        show_pass_register_input.getAttribute('type', 'password')
    }

});
