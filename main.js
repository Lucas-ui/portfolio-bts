import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    //observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const intersecting = entry.isIntersecting
            if (intersecting) {
                entry.target.classList.add('active');
            }
        })
    })

    document.querySelectorAll('.animated').forEach(elem => {
        observer.observe(elem);
    })

    //menu burger
    const menu_burger = document.querySelector('.burger-icon');
    const menu_mobile = document.querySelector('.menu-mobile');
    const body = document.body;

    if (menu_burger) {
        menu_burger.addEventListener('click', () => {
            menu_mobile.classList.toggle('visible');
            body.classList.toggle('menu-open');
        });
    } else {
        throw new Error('Pas de menu burger');
    }

    //experiences
    const btn_pro = document.querySelector('.btn-pro');
    const btn_formations = document.querySelector('.btn-formations');
    const btn_all = document.querySelector('.btn-all');

    const exp_formations = document.querySelector('.exp-formations');
    const exp_pro = document.querySelector('.exp-pro');

    btn_pro.addEventListener('click', () => {
        exp_formations.classList.add('invisible');
        exp_pro.classList.add('visible');
        if (exp_pro.classList.contains('invisible')) {
            exp_pro.style.display = "block";
            exp_pro.classList.remove('invisible');
            exp_formations.style.display = "none";
            btn_pro.classList.remove('clicked');
        } else {
            exp_formations.style.display = "none";
        }
    })

    btn_formations.addEventListener('click', () => {
        exp_pro.classList.add('invisible');
        exp_formations.classList.add('visible');
        if (exp_formations.classList.contains('visible')) {
            exp_formations.style.display = "block";
            exp_formations.classList.remove("invisible");
            exp_pro.style.display = "none";
        } else {
            exp_pro.style.display = "none";
        }
    })

    btn_all.addEventListener('click', () => {
        exp_pro.style.display = "block";
        exp_formations.style.display = "block";
        exp_pro.classList.remove('invisible');
        exp_pro.classList.remove('visible');
        exp_formations.classList.remove('invisible');
        exp_formations.classList.remove('visible');
    })

    if (!btn_all.classList.contains('clicked')) {
        btn_all.classList.add('clicked');
    }
})