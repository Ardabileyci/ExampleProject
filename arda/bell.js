(() => {
    'use strict';

    const buildHTML = () => {
        const outerHtml = 
        `<div class="yunus"></div>`;
        Insider.dom('body').append(outerHtml);
    };

    const headerSec = () => {
        const headerSection = 
        `<div class="bell">
            <i class='fa fa-bell' style='font-size:24px;color:#0038AE'></i>
        </div>`;
        Insider.dom('.header-section').append(headerSection);
    };

    const buildCSS = () => {
        const customCss = 
    `.bell{
        justify-content: center;
        text-align: center;
        right: 0;   
        cursor: pointer;
    }
        
    .yunus{
        display: none;
        justify-content: space-between;
        flex-direction: row;
        text-align: center;
        align-items: center;
        background-color: white;
        border: 2px solid #0038AE;
        border-radius: 10px;
        margin-right: 50px;
        position: fixed;
        bottom: 51%;
        left: 50%;
        z-index: 1040;
        padding: 20px;
    }

    .yunus-product{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    
    .yunus-image{
        width: 200px;
        height: auto;
    }
        
    .yunus-price{
        font-size: 22px;
        font-weight: bold;
        white-space: nowrap;
        letter-spacing: -0.2px;
        color: #193db0
    }
        
    .yunus-title{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
    }`
        const styleElement = document.createElement('style');
        styleElement.innerHTML = customCss;
        document.head.append(styleElement);
    };

    const setEvents = () => {
            Insider.eventManager.once(`click.bell:`, '.bell', () => {
            const yunFlex = document.querySelector('.yunus');
            if(yunFlex.style.display === 'flex'){
                yunFlex.style.display = 'none';
            }
            else{
                yunFlex.style.display = 'flex';
            }  
        });
    };
    let list = JSON.parse(localStorage.getItem('list'));
    const addToStorage = () => {
        const resim = document.querySelector('.product-large-image')?.src ?? '';
        const title= document.querySelector('.product-title')?.textContent ?? '';
        const price = document.querySelector('.current-price')?.textContent ?? '';
            const newItem = {
                resim,
                price,
                title,
                };
            if(!list){
            list = [];
            list.push(newItem);
            localStorage.setItem('list', JSON.stringify(list));
            }
            else{
                list.push(newItem);
                localStorage.setItem('list', JSON.stringify(list));
            }        
    };
    const addToYunus = () => {
        const yunus = document.querySelector('.yunus');

        list.slice(-3).forEach((item) => {
            const newYunus = document.createElement('div');
            newYunus.classList.add('yunus-product');

            const foto = document.createElement('img');
            foto.classList.add('yunus-image');
            foto.src = item.resim;
            newYunus.append(foto);

            const isim = document.createElement('span');
            isim.textContent = item.title;
            isim.classList.add('yunus-title');
            newYunus.append(isim);

            const fiyat = document.createElement('span');
            fiyat.textContent = item.price;
            fiyat.classList.add('yunus-price');
            newYunus.append(fiyat);

            yunus.append(newYunus)

        });
    };


   

    buildHTML();
    buildCSS();
    setEvents();
    if(document.querySelectorAll('.product-code').length > 0){
        addToStorage();
    }
    addToYunus();
    headerSec();
})();
