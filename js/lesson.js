const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK';
        phoneResult.style.color = 'green';
    } else {
        phoneResult.innerHTML = 'ERROR';
        phoneResult.style.color = 'red';
    }
}

//Tab slider
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')

let index = 0

const hideSlide = () => {
    tabContentBlocks.forEach(item => item.style.display = 'none')
    tabs.forEach(item => item.classList.remove('tab_content_item_active'))
}

const showSlide = (i = 0) => {
    tabContentBlocks[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentBlocks.length - 1) {
            i = 0
        }
        index = i
        hideSlide()
        showSlide(i)
    }, 3000) 
}

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, idx) => {
            if (event.target === tab) {
                index = idx
                hideSlide()
                showSlide(index)
            }
        })
    }
}

hideSlide()
showSlide(index)
autoSlider(index)

//convertor
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const convertor = (element) => {
    element.addEventListener("input", async () => {
        try {
            const response = await fetch('../data/convertor.json');
            const data = await response.json();

            const som = parseFloat(somInput.value);
            const usd = parseFloat(usdInput.value);
            const eur = parseFloat(eurInput.value);

            if (element.id === 'som') {
                usdInput.value = (element.value / data.usd).toFixed(2);
                eurInput.value = (element.value / data.eur).toFixed(2);
            } else if (element.id === 'usd') {
                somInput.value = (element.value * data.usd).toFixed(2);
                eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
            } else if (element.id === 'eur') {
                usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2);
                somInput.value = (element.value * data.eur).toFixed(2);
            }

            if (element.value === '') {
                somInput.value = '';
                usdInput.value = '';
                eurInput.value = '';
            }

        } catch (error) {
            console.error('Ошибка при конвертации валют:', error);
        }
    });
};

convertor(somInput);
convertor(usdInput);
convertor(eurInput);
