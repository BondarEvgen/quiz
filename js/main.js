const data = [null, [], null, null]


activPlate(1)

// Обработчик событий для тега "a class = "button""

const aElements = document.querySelectorAll('a.button')



//  Функция показа одной карточки из всех карточек

function showPlate (number) {

    const elements = document.querySelectorAll('div.plate')
    

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none'
    }

    elements[number - 1].style.display = ''
}

// Функция активации показа одной карточки

function activPlate (number) {
    showPlate(number)

    activatePlate_1(false)
    activatePlate_2(false)
    activatePlate_3(false)
    activatePlate_4(false)
    activatePlate_5(false)
    activatePlate_6(false)
   

    if (number === 1 ) {
        activatePlate_1(true)
    }
    else if (number === 2 ) {
        activatePlate_2(true)
    }
    else if (number === 3 ) {
        activatePlate_3(true)
    }
    else if (number === 4 ) {
        activatePlate_4(true)
    }
    else if (number === 5 ) {
        activatePlate_5(true)
    }
    else if (number === 6 ) {
        activatePlate_6(true)
    }
    



}

// Событие при нажатие на кнопку первой карточки

function activatePlate_1 (active) {
    const aElement = document.querySelector('#startTest')

    if (active) {
        aElement.addEventListener('click', startTest)
    }
     else {
        aElement.removeEventListener('click', startTest)
     }

    
    function startTest (event){
        event.stopImmediatePropagation()
        event.preventDefault()
        activPlate(2)
     }
}

// Событие при нажатие на кнопку второй карточки

function activatePlate_2 (active) {
    const plateElement = document.querySelector('#plate2')
    const labelElements = plateElement.querySelectorAll('label')

    const aElementNext = plateElement.querySelector('.button--next')
    const aElementBack = plateElement.querySelector('.button--back')

    

    // Добовляем или убираем обработчик событий на кноаки 'Далее' и 'Назад'

    if (active) {
        aElementNext.addEventListener('click', toNextPlate)
        aElementBack.addEventListener('click', toPrevPlate)
    }
     else {
        aElementNext.removeEventListener('click', toNextPlate)
        aElementBack.removeEventListener('click', toPrevPlate)
     }

    
     // Обробатываем событие радио бокса

    for ( let i  = 0; i < labelElements.length; i++) {
        const le = labelElements[i]

         if (active) {
            le.addEventListener('click', selectHendler)
        }
        else {
           le.removeEventListener('click', selectHendler)
        }

        
        function selectHendler (event) {

            event.stopImmediatePropagation()

            for ( let i = 0; i < labelElements.length; i++) {
                labelElements[i].classList.remove('radio-block--active')
            }

            this.classList.add('radio-block--active')


            // Заносим выбранный результат в масив результатов data

           const inputElement = this.querySelector('input')
           const value = inputElement.value

           data[0] = value

           
            
        }
        
        
    }

    function toNextPlate(event) {

        event.stopImmediatePropagation()

        event.preventDefault()

        if (data[0]) {
            activPlate(3)
        }
        
    }

    function toPrevPlate(event) {

        event.stopImmediatePropagation()

        event.preventDefault()
        activPlate(1)
        

    }
    


    
}

// Событие при нажатие на кнопку третьей карточки

function activatePlate_3 (active) {
    const plateElement = document.querySelector('#plate3')
    const labelElements = plateElement.querySelectorAll('label')

    const aElementNext = plateElement.querySelector('.button--next')
    const aElementBack = plateElement.querySelector('.button--back')

  

    // Добовляем или убираем обработчик событий на кноаки 'Далее' и 'Назад'

    if (active) {
        aElementNext.addEventListener('click', toNextPlate)
        aElementBack.addEventListener('click', toPrevPlate)
    }
     else {
        aElementNext.removeEventListener('click', toNextPlate)
        aElementBack.removeEventListener('click', toPrevPlate)
     }

    
    // Обробатываем событие радио бокса

    for ( let i  = 0; i < labelElements.length; i++) {
        const le = labelElements[i]

         if (active) {
            le.addEventListener('click', selectHendler)
        }
        else {
           le.removeEventListener('click', selectHendler)
        }

        
        function selectHendler (event) {

            event.stopImmediatePropagation()
            const inputElement = this.querySelector('input')

            

            this.classList.toggle('checkbox-block--active')

            inputElement.checked = !inputElement.checked

            event.preventDefault()
        

           const answers = []

            for (let i = 0; i < labelElements.length; i++) {
                const imputElement = labelElements[i].querySelector('input')

                if (imputElement.checked) {
                    answers.push(imputElement.value)
                }
            }

           data[1] = answers
            
        }
        
        
    }

    function toNextPlate(event) {

        event.stopImmediatePropagation()

        event.preventDefault()

        if (data[1].length > 0) {
            activPlate(4)
        }
        
    }

    function toPrevPlate(event) {

        event.stopImmediatePropagation()
        event.preventDefault()
        activPlate(2)
        

    }


}
// Событие при нажатие на кнопку четвертой карточки

function activatePlate_4 (active) {
    
    const plateElement = document.querySelector('#plate4')
    const labelElements = plateElement.querySelectorAll('label')

    const aElementNext = plateElement.querySelector('.button--next')
    const aElementBack = plateElement.querySelector('.button--back')

    

    // Добовляем или убираем обработчик событий на кноаки 'Далее' и 'Назад'

    if (active) {
        aElementNext.addEventListener('click', toNextPlate)
        aElementBack.addEventListener('click', toPrevPlate)
    }
     else {
        aElementNext.removeEventListener('click', toNextPlate)
        aElementBack.removeEventListener('click', toPrevPlate)
     }

    
     // Обробатываем событие радио бокса

    for ( let i  = 0; i < labelElements.length; i++) {
        const le = labelElements[i]

         if (active) {
            le.addEventListener('click', selectHendler)
        }
        else {
           le.removeEventListener('click', selectHendler)
        }

        
        function selectHendler (event) {
           
            event.stopImmediatePropagation()
            this.classList.add('radio-block--active')


            // Заносим выбранный результат в масив результатов data

           const inputElement = this.querySelector('input')
           const value = inputElement.value

           

           data[2] = value

           
            
        }
        
        
    }

    function toNextPlate(event) {

        event.stopImmediatePropagation()
        event.preventDefault()

        if (data[2]) {
            activPlate(5)
        }
        
    }

    function toPrevPlate(event) {

        event.stopImmediatePropagation()
        event.preventDefault()
        activPlate(3)
        

    }

    
}

// Событие при нажатие на кнопку пятой карточки

function activatePlate_5 (active) {
    const buttonResults= document.querySelector('#getResults')
  

    

    if (active) {
        buttonResults.addEventListener('click', getResult)
    }
     else {
        buttonResults.removeEventListener('click', getResult)
    }

    function getResult (event) {

        event.stopImmediatePropagation()
        const email = document.querySelector('#email')
        const confirmBox = document.querySelector('#confirmBox')
     

        const emailValue = email.value
        
        if (email.value && confirmBox.checked) {
            data[3] = emailValue
            activPlate(6)
        }
        
    }


}

// Событие при нажатие на кнопку шестой карточки

function activatePlate_6 (active) {
    const bonusCard1 = document.querySelector('#bonus-card1')
    const bonusCard2 = document.querySelector('#bonus-card2')

    bonusCard1.addEventListener('click', bonusCardEventOne)

    bonusCard2.addEventListener('click', bonusCardEventTwo)


    function bonusCardEventOne (event) {
        event.stopImmediatePropagation()
        location = 'https://www.youtube.com/watch?v=PK3u5mdA_g0'
    }

    function bonusCardEventTwo (event) {
        event.stopImmediatePropagation()
        location = 'https://www.youtube.com/watch?v=M9DlUe08hZE'
    }

   
}