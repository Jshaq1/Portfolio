const serviceSelect = document.querySelector('#Service')
const roomsFields = document.querySelector('#AdditionalFields')
const roomSelectFields = document.querySelectorAll('#RoomSelect')
const upholstFields = document.querySelectorAll('#UpholstSelect')
const quoteTotal = document.querySelector('#QuoteTotal')
const quoteSection = document.querySelector('.quotesummary')

serviceSelect.addEventListener('change', function minimumCharge() {
    const minimumCharge = document.querySelector('#MinPrice')
    const selectedService = document.querySelector('#Service').value
    const carpetsAdditional = document.querySelector('#AdditionalFields')
    const upholsteryAdditional = document.querySelector('#UpholsteryFields')

    minimumCharge.innerHTML = ''

    if (selectedService === 'Carpets') {
        minimumCharge.innerHTML = '$135'
        quoteTotal.innerText = '$135'
        quoteSection.innerHTML = ''
        carpetsAdditional.classList.add('show')
    }

    if (selectedService === 'Upholstery') {
        minimumCharge.innerHTML = '$135'
        quoteTotal.innerText = '$135'
        quoteSection.innerHTML = ''
        carpetsAdditional.classList.remove('show')
        upholsteryAdditional.classList.add('show')
    }

    if (selectedService === '') {

    }
})


roomSelectFields.forEach(field => {
    field.addEventListener('change', function carpetCalc(e) {
        const minPriceDiv = document.querySelector('#minPriceDiv')
        const floorsDiv = document.querySelector('#floorsDiv')
        const roomTotal = document.querySelector(`#${e.target.name}Room`)
        const priceTotal = document.querySelector(`#${e.target.name}Price`)
        const selectedPrice = e.target.getAttribute('price')

        if (e.target.value === '0') {
            roomTotal.remove()
            priceTotal.remove()
        }

        if (roomTotal === null && priceTotal === null) {
            let roomTotal = document.createElement('h1')
            let priceTotal = document.createElement('h1')
            priceTotal.id = `${e.target.name}Price`
            roomTotal.id = `${e.target.name}Room`
            priceTotal.classList.add('quotePrice')
            roomTotal.classList.add('quoteText')

            if (e.target.name === 'Floors') {
                roomTotal.innerText = `${e.target.selectedOptions[0].text}  x  ${e.target.name}`
                priceTotal.innerText = `+ ${e.target.value}%`
                floorsDiv.append(roomTotal, priceTotal)
            }
            else {
                roomTotal.innerText = `${e.target.selectedOptions[0].text}  x  ${e.target.name}`
                priceTotal.innerText = `$${Number(e.target.value) * Number(selectedPrice)}`
                quoteSection.append(roomTotal, priceTotal)
            }
        }

        else {
            if (e.target.name === 'Floors') {
                roomTotal.innerText = ''
                priceTotal.innerText = ''
                roomTotal.innerText = `${e.target.selectedOptions[0].text}  x  ${e.target.name}`
                priceTotal.innerText = `+ ${e.target.value}%`
            }
            else {
                roomTotal.innerText = ''
                priceTotal.innerText = ''
                roomTotal.innerText = `${e.target.selectedOptions[0].text}  x  ${e.target.name}`
                priceTotal.innerText = `$${Number(e.target.value) * Number(selectedPrice)}`
            }
        }

        const totalPricingArray = []
        roomSelectFields.forEach(item => {
            if (item.name !== 'Floors') {
                totalPricingArray.push(Number(item.value) * Number(item.getAttribute('price')))
            }
        })

        const minPrice = 135
        const floorsMultiplier = Number(`1.${roomSelectFields[3].value}`)
        const totalPrice = totalPricingArray.reduce((accum, current) => accum + current, 0) * floorsMultiplier
        quoteTotal.innerText = ''
        console.log(totalPrice)
        if (totalPrice < 135) {
            minPriceDiv.classList.remove('hide')
            quoteTotal.innerText = `$${minPrice * floorsMultiplier}`
        }
        else {
            minPriceDiv.classList.add('hide')
            quoteTotal.innerText = `$${totalPrice.toFixed(2)}`
        }
    })
})

upholstFields.forEach(field => {
    field.addEventListener('change', function upholstCalc(e) {
        console.log('working')
        const quoteSection = document.querySelector('.quotesummary')
        const minPriceDiv = document.querySelector('#minPriceDiv')
        const floorsDiv = document.querySelector('#floorsDiv')
        const roomTotal = document.querySelector(`#${e.target.name}Room`)
        const priceTotal = document.querySelector(`#${e.target.name}Price`)
        const selectedPrice = e.target.getAttribute('price')

        if (e.target.value === '0') {
            roomTotal.remove()
            priceTotal.remove()
        }

        if (roomTotal === null && priceTotal === null) {
            let roomTotal = document.createElement('h1')
            let priceTotal = document.createElement('h1')
            priceTotal.id = `${e.target.name}Price`
            roomTotal.id = `${e.target.name}Room`
            priceTotal.classList.add('quotePrice')
            roomTotal.classList.add('quoteText')

            roomTotal.innerText = `${e.target.selectedOptions[0].text}  x  ${e.target.name}`
            priceTotal.innerText = `$${Number(e.target.value) * Number(selectedPrice)}`
            quoteSection.append(roomTotal, priceTotal)
        }

        else {
            roomTotal.innerText = ''
            priceTotal.innerText = ''
            roomTotal.innerText = `${e.target.selectedOptions[0].text}  x  ${e.target.name}`
            priceTotal.innerText = `$${Number(e.target.value) * Number(selectedPrice)}`
        }

        const totalPricingArray = []
        upholstFields.forEach(item => {
            totalPricingArray.push(Number(item.value) * Number(item.getAttribute('price')))
        })

            const minPrice = 135
            const totalPrice = totalPricingArray.reduce((accum, current) => accum + current, 0)
            quoteTotal.innerText = ''
            console.log(totalPrice)
            if (totalPrice < 135) {
                minPriceDiv.classList.remove('hide')
                quoteTotal.innerText = `$${minPrice}`
            }
            else {
                minPriceDiv.classList.add('hide')
                quoteTotal.innerText = `$${totalPrice.toFixed(2)}`
            }
        })

    })




