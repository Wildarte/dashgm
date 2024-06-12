const header = document.querySelector('header.header');
const side_menu = document.querySelector('.side_menu');
const body_dash = document.querySelector('.body_dash');
if(header){
    const height_header =  header.getBoundingClientRect().height; //height do header  
    side_menu.style.height = "calc(100vh - "+height_header+"px)";//margin top sidebar
    side_menu.style.top = height_header+"px"; 
    body_dash.style.height = "calc(100vh - "+height_header+"px)";
}
if(side_menu){

    const width_side_menu = side_menu.getBoundingClientRect().width; //width do sidemenu
    body_dash.style.width = "calc(100% - "+width_side_menu+"px)";
}



// ===================== modal =====================================================================
const modal = document.querySelectorAll('.modal');

if(modal){
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
}


const show_pass_register = document.getElementById('show_pass_register');
const show_pass_register_input = document.getElementById('show_pass_register_input');
const show_pass_again_register = document.getElementById('show_pass_again_register');
const show_pass_again_register_input = document.getElementById('show_pass_again_register_input');

if(show_pass_register){
    show_pass_register.addEventListener('click', () => {    


        if(show_pass_register_input.type == "password"){
            show_pass_register_input.type = "text"
            show_pass_register.querySelector('i').classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
        }else{
            show_pass_register_input.type = 'password';
            show_pass_register.querySelector('i').classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
        }
    
    });
}

if(show_pass_again_register){
    show_pass_again_register.addEventListener('click', () => {    


        if(show_pass_again_register_input.type == "password"){
            show_pass_again_register_input.type = "text"
            show_pass_again_register.querySelector('i').classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
        }else{
            show_pass_again_register_input.type = 'password';
            show_pass_again_register.querySelector('i').classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
        }
    
    });
}


const show_pass_login = document.getElementById('show_pass_login');

if(show_pass_login){
    show_pass_login.addEventListener('click', () => {    


        if(show_pass_login_input.type == "password"){
            show_pass_login_input.type = "text"
            show_pass_login.querySelector('i').classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
        }else{
            show_pass_login_input.type = 'password';
            show_pass_login.querySelector('i').classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
        }
    
    });
}

const modal_register = document.getElementById('modal_register');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function(){

        if(modal_register){
            modal_register.classList.add('d-modal')
        }

    },2300);

});

const modal_deposito_balance = document.getElementById('modal_deposito_balance');

document.addEventListener('DOMContentLoaded', () => {

    setTimeout(function(){

        if(modal_deposito_balance){
            modal_deposito_balance.classList.add('d-modal')
        }

    },2500);

});

document.addEventListener('DOMContentLoaded', () => {

    setTimeout(function(){

        if(modal_deposito){
            modal_deposito.classList.add('d-modal')
        }
       

    },2000);

});

//fechar modal registro =============================
const close_modal_register = document.getElementById('close_modal_register');

if(close_modal_register){
    close_modal_register.addEventListener('click', () => {

        modal_register.classList.remove('d-modal')
    
    });
}

const close_modal_login = document.getElementById('close_modal_login');

if(close_modal_login){
    close_modal_login.addEventListener('click', () => {

        modal_login.classList.remove('d-modal')
    
    });
}

const close_modal_control_balance = document.getElementById('close_modal_control_balance');

if(close_modal_control_balance){
    close_modal_control_balance.addEventListener('click', () => {

        modal_deposito_balance.classList.remove('d-modal')
    
    });
}

// fechar modal deposito =============================
const close_modal_deposito = document.getElementById('close_modal_deposito');
const modal_deposito = document.getElementById('modal_deposito');

if(close_modal_deposito){
    close_modal_deposito.addEventListener('click', () => {

        modal_deposito.classList.remove('d-modal')
    
    });
}

const field_language = document.querySelector('.field_language');
const list_field_language = document.querySelector('.list_field_language');

if(field_language){
    field_language.addEventListener('click', () => {

        list_field_language.classList.toggle('d-modal');
        field_language.querySelector('i').classList.toggle('rotate')
    
    });
}


const item_list_field_language = document.querySelectorAll('.item_list_field_language');

if(item_list_field_language){
    item_list_field_language.forEach((item) => {
        item.addEventListener('click', () => {
            list_field_language.classList.remove('d-modal');
            field_language.querySelector('i').classList.remove('rotate')
        });
    });
}


// ===================== modal =====================================================================



//===== sections games =============================================================================
const popular = document.getElementById('popular');
const slots = document.getElementById('slots')

if(body_dash){
    body_dash.addEventListener('scroll', () => {

    
    });
}

//===== sections games =============================================================================




// ===== sidebar ==================================================================================
const btn_side = document.querySelector('.btn_side');
const header_center = document.querySelector('.header_center');
const over_dash = document.querySelector('.over_dash');

if(btn_side){
    btn_side.addEventListener('click', () => {

        if(btn_side.classList.contains('sidebar_mobile')){
            if(side_menu.classList.contains('open_side_bar')){
                side_menu.classList.remove('open_side_bar');
                btn_side.classList.remove('rotate');
                over_dash.classList.remove('open_over_dash');
            }else{
                side_menu.classList.add('open_side_bar');
                btn_side.classList.add('rotate');
                over_dash.classList.add('open_over_dash');
            }
        }else{
            if(btn_side.classList.contains('rotate')){
                btn_side.classList.remove('rotate');
                body_dash.classList.remove('w-100');
                side_menu.classList.remove('open_side_bar');
                over_dash.classList.remove('open_over_dash');
            }else{
                btn_side.classList.add('rotate');
                body_dash.classList.add('w-100');
                side_menu.classList.add('open_side_bar');
                over_dash.classList.add('open_over_dash');
            }
        } 
    
    });
}

if(over_dash){
    over_dash.addEventListener('click', () => {
        side_menu.classList.remove('open_side_bar');
        btn_side.classList.remove('rotate');
        over_dash.classList.remove('open_over_dash');
    })
}

// ===== sidebar ==================================================================================



const select_language = document.querySelector('.select_language');
const list_select_language = document.querySelector('.list_select_language');

if(select_language){
    select_language.addEventListener('click', () => {

        list_select_language.classList.toggle('d-modal')
    
    });
}


const close_flag_app = document.querySelector('.close_flag_app');
const flag_app = document.querySelector('.flag_app');

if(close_flag_app){
    close_flag_app.addEventListener('click', () => {
        flag_app.classList.add('d-none')
    });
}




// ===============  control responsivo sidebar ========================================================
if(window.matchMedia('(max-width: 940px)').matches){
    btn_side.classList.add('sidebar_mobile');
}
// ===============  control responsivo sidebar ========================================================


window.addEventListener('resize', () => {
    const header = document.querySelector('header.header');
    side_menu.style.height = "calc(100vh - "+height_header+"px)";//margin top sidebar
    side_menu.style.top = height_header+"px";
    body_dash.style.height = "calc(100vh - "+height_header+"px)";
    body_dash.style.width = "calc(100% - "+width_side_menu+"px)";

    if(window.matchMedia('(max-width: 940px)').matches){
        btn_side.classList.add('sidebar_mobile');
    }else{
        btn_side.classList.remove('sidebar_mobile');
    }
})




// =================== control sections =============================================================
const first_section_cards = document.querySelectorAll('.first_section_cards a');

if(first_section_cards){
    first_section_cards.forEach((item, index) => {

        item.addEventListener('click', () => {
    
            if(item.classList.contains('item_card_select')){
    
            }else{
                first_section_cards.forEach((item2) => {
    
                    if(item2.classList.contains('item_card_select')){
                        item2.classList.remove('item_card_select');
    
                        let img2 = item2.querySelector('img').getAttribute('src');
        
                        let new_img2 = "";
                        let rm_final2 = img2.replace(".png", "");
                        new_img2 = rm_final2.concat("-off.png");
                            
                        item2.querySelector('img').setAttribute('src', new_img2);
                    }
                   
                });
        
                let img = item.querySelector('img').getAttribute('src');
                let new_img = "";
        
                if(img.includes('-off.png')){
                    let rm_final = img.replace("-off.png", "");
                    new_img = rm_final.concat(".png");
                }else{
                    let rm_final = img.replace(".png", "");
                    new_img = rm_final.concat("-off.png");
                }
        
                console.log('img: '+ img);
                console.log('new img: '+new_img)
                
                first_section_cards[index].querySelector('img').setAttribute('src', new_img);
                first_section_cards[index].classList.add('item_card_select');
            }
    
            
    
    
        });
    
    });
}

// =================== control sections =============================================================



//================== control mobile =======================================================
const btn_deposit_button = document.getElementById('btn_deposit_button');
const list_select_deposit = document.querySelector('.list_select_deposit');

if(btn_deposit_button){

    btn_deposit_button.addEventListener('click', () => {

        list_select_deposit.classList.toggle('d-modal');

        btn_deposit_button.querySelector('i').classList.toggle('rotate')

    });
}
//================== control mobile =======================================================



const btn_login = document.getElementById('btn_login');

if(btn_login){
    btn_login.addEventListener('click', () => {

        modal_login.classList.add('d-modal')
    
    });
}

const btn_register = document.getElementById('btn_register');

if(btn_register){
    btn_register.addEventListener('click', () => {

        modal_register.classList.add('d-modal')
    
    });
}



//================================ buttons select pagto ========================================
const over_btn_deposit_item = document.querySelectorAll('.over_btn_deposit_item');

if(over_btn_deposit_item){

    over_btn_deposit_item.forEach((item, index) => {

        let btn_deposit_item = item.querySelectorAll('.btn_deposit_item');
    
        btn_deposit_item.forEach((item2, index2) => {
    
            item2.addEventListener('click', () => {
    
              
                btn_deposit_item.forEach((item3, index3) => {
                    item3.classList.remove('active');
                });
    
                btn_deposit_item[index2].classList.add('active');
                
            });
    
        });
    
    });
}
//================================ buttons select pagto ========================================



const btn_perfil_depoisit = document.getElementById('btn_perfil_depoisit');
const modal_control_deposit = document.getElementById('modal_control_deposit');

if(btn_perfil_depoisit){

    btn_perfil_depoisit.addEventListener('click', (e) => {

        e.preventDefault();
        modal_control_deposit.classList.add('d-modal')
    
    });

}

const btn_perfil_depoisit2 = document.getElementById('btn_perfil_depoisit2');

if(btn_perfil_depoisit2){

    btn_perfil_depoisit2.addEventListener('click', (e) => {

        e.preventDefault();
        modal_control_deposit.classList.add('d-modal')
    
    });
    
}

const close_modal_control_balance_deposit = document.getElementById('close_modal_control_balance_deposit');

if(close_modal_control_balance_deposit){

    close_modal_control_balance_deposit.addEventListener('click', (e) => {

        e.preventDefault();
        modal_control_deposit.classList.remove('d-modal')
    
    });
}

const btn_perfil = document.getElementById('btn_perfil');
const list_options_user = document.querySelector('.list_options_user');

if(btn_perfil){
    
    btn_perfil.addEventListener('click', (e) => {

        e.preventDefault();
        list_options_user.classList.toggle('open_list_options_user');
    
    });

}

//================== control senha saque ===================================
const senha_saque_input = document.querySelectorAll('.senha_saque .input input');
const senha_saque = document.querySelectorAll('.senha_saque .input');

senha_saque_input.forEach((item, index) => {

    item.addEventListener('focus', () => {
        
        senha_saque.forEach((item2) => {

            item2.classList.remove('b-red');

        });

        senha_saque[index].classList.add('b-red');
        
    });

    item.addEventListener('change', () => {

        if(index < senha_saque_input.length){

        }

    });


})

const close_modal_control_balance_saque = document.getElementById('close_modal_control_balance_saque');
const btn_perfil_saque = document.getElementById('btn_perfil_saque');
const btn_perfil_saque2 = document.getElementById('btn_perfil_saque2');
const modal_control_saque = document.getElementById('modal_control_saque');

if(close_modal_control_balance_saque){
    close_modal_control_balance_saque.addEventListener('click', () => {

        modal_control_saque.classList.remove('d-modal')
    
    });

    btn_perfil_saque.addEventListener('click', (e) => {

        e.preventDefault();
        modal_control_saque.classList.add('d-modal')

    });

    btn_perfil_saque2.addEventListener('click', (e) => {

        e.preventDefault();
        modal_control_saque.classList.add('d-modal')

    });
}

//================== control senha saque ===================================



// =================== control sections game page =============================================================
const list_side_game_page = document.querySelectorAll('.list_side_game_page a');

if(list_side_game_page){
    list_side_game_page.forEach((item, index) => {

        item.addEventListener('click', (e) => {

            e.preventDefault();
            
            list_side_game_page.forEach((item2, index2) => {

                item2.classList.remove('btn_bg_red')

            });

            list_side_game_page[index].classList.add('btn_bg_red')
    
        });
    
    });
}


const list_game_page = document.querySelectorAll('.list_game_page button');

if(list_game_page){
    list_game_page.forEach((item, index) => {

        item.addEventListener('click', (e) => {

            e.preventDefault();
            
            list_game_page.forEach((item2, index2) => {

                item2.classList.remove('btn_bg_red')

            });

            list_game_page[index].classList.add('btn_bg_red')
    
        });
    
    });
}

// =================== control sections game page =============================================================




// ===================================== page promocao ========================================================
const paged_promo = document.querySelectorAll('.pages_promo .paged_promo');
const list_head_page_promocao = document.querySelectorAll('.list_head_page_promocao a');

list_head_page_promocao.forEach((item,index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        paged_promo.forEach((item2) => {
            item2.classList.remove('active');
        });

        list_head_page_promocao.forEach((item3) => {
            item3.classList.remove('active');
        });

        paged_promo[index].classList.add('active');
        list_head_page_promocao[index].classList.add('active')
    })
})
// ===================================== page promocao ========================================================