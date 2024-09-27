class Calculadora {

    #resultado
  
    constructor() {
      this.#resultado = 0
    }
  
   
    get resultado() {
      return this.#resultado
    }
  
   
    set resultado(numero) {
      if (typeof numero === "string") {
        numero = Number(numero) 
      }
  
      if (isNaN(numero) || typeof numero !== "number") {
        throw new TypeError("O argumento deve ser um número válido")
      }
  
      this.#resultado = numero
    }
  
    soma(numero) {
      if (typeof numero === "string") {
        numero = Number(numero)
      }
      if (isNaN(numero)) {
        throw new TypeError("O argumento deve ser um número válido")
      }
  
      this.#resultado += numero
    }
  
    sub(numero) {
      if (typeof numero === "string") {
        numero = Number(numero)
      }
      if (isNaN(numero) || typeof numero !== "number") {
        throw new TypeError("O argumento deve ser um número válido")
      }
  
      this.#resultado -= numero
    }
  
    mult(numero) {
      if (arguments.length !== 1) {
        throw new Error("Apenas um argumento é permitido")
      }
  
      if (typeof numero === "string") {
        numero = Number(numero)
      }
  
      if (isNaN(numero) || typeof numero !== "number") {
        throw new TypeError("O argumento deve ser um número válido")
      }
  
      this.#resultado *= numero
    }
  
    div(numero) {
      if (arguments.length !== 1) {
        throw new Error("Apenas um argumento é permitido")
      }
  
      if (typeof numero === "string") {
        numero = Number(numero)
      }
  
      if (isNaN(numero) || typeof numero !== "number") {
        throw new TypeError("O argumento deve ser um número válido")
      }
  
      this.#resultado /= numero
    }
  
       inversao() {
      this.#resultado = -this.#resultado
    }
  }
  
  module.exports = Calculadora