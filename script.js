const convertButton = document.querySelector(".convert-button")
const currencySelectValue = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConvertd = document.querySelector(".currency-value")
    console.log(currencySelectValue.value)

    const dolarToday = 4.95
    const euroToday = 5.37
    const libraToday = 6.34 
    const biticoinToday = 338.21


    if (currencySelectValue.value == "dolar") {
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelectValue.value == "euro") {
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)

    if (currencySelectValue.value == "libra") {
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectValue.value == "bitcoin") {
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / biticoinToday)
    }

}
function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const curencyImage = document.getElementById("currency-img")

    if (currencySelectValue.value == 'dolar') {
        currencyName.innerHTML = "Dólar americano"
        curencyImage.src = "./PNG/Dólar.png"

    }

    if (currencySelectValue.value == 'euro') {
        currencyName.innerHTML = "Euro"
        curencyImage.src = "./PNG/euro.png"
    }

    if (currencySelectValue.value == 'libra') {
        currencyName.innerHTML = "£ Libra"
        curencyImage.src = "./PNG/Libra.png"

    }

    if (currencySelectValue.value == 'bitcoin') {
        currencyName.innerHTML = "BTC Bitcoin"
        curencyImage.src = "./PNG/Bitcoin.png"

    }

    convertValues()
}


currencySelectValue.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)