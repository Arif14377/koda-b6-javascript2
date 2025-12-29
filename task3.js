const temperature = {
    base: 10,
    toFahrenheit: function() {
        return (this.base * 1.8) + 32.0
    },
    toKelvin: function() {
        return this.base + 273.15
    },
    toReamur: function() {
        return this.base * 0.8
    }
}

console.log(temperature.toFahrenheit())
console.log(temperature.toReamur())
console.log(temperature.toKelvin())