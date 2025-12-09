let dolar = 5.36

let usdInput = document.querySelector('#usd')
let brlInput = document.querySelector('#brl')

usdInput.addEventListener('keyup', () => {
    convert('usd-to-brl')
})

brlInput.addEventListener('keyup', () => {
    convert('brl-to-usd')
})

usdInput.addEventListener('blur', () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener('blur', () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = '1000,00'
convert('usd-to-brl')

function formatCurrency(value) {
    // adjuste the value
    let fixedValue = fixValue(value)

    // utilize function of formatted
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat('pt-br', options)

    // return the value formatted
    return formatter.format(fixedValue)
}

function fixValue(value) {
    // will replace the comma(,) with a point(.)
    let fixedValue = value.replace(',', '.')

    // will take the string that contains a number and transform into a number
    let floatValue = parseFloat(fixedValue)

    // security check
    if(floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
    if(type == 'usd-to-brl') {
        // adjuste the value
        let fixedValue = fixValue(usdInput.value)

        // convert the value
        let result = fixedValue * dolar
        result = result.toFixed(2)

        // show on the field of real
        brlInput.value = formatCurrency(result)
    }

    if(type == 'brl-to-usd') {
        // adjuste the value
        let fixedValue = fixValue(brlInput.value)
        
        // convert the value
        let result = fixedValue / dolar
        result = result.toFixed(2)

        // show on the field of dollar
        usdInput.value = formatCurrency(result)
    }
}