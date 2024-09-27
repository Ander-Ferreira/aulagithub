
class Calculadora {

    #resultado


    constructor() {
        this.#resultado = 0
    }


    get resultado() {
        return this.#resultado
    }


    set resultado(numero) {

        if (typeof numero == "string") {
            numero = numero - 0
        }


        if (isNaN(numero) || typeof numero !== "number") {

            throw new TypeError("O argumento deve ser um número válido")
        }


        this.#resultado = numero
    }


    soma(numero) {
        if (typeof numero == "string") {
            numero = numero - 0
        }
        if (isNaN(numero)) {
            throw new TypeError("O argumento deve ser um número válido")
        }

        this.#resultado += numero
    }


    sub(numero) {
        if (typeof numero == "string") {
            numero = numero - 0
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


describe("Calculadora", () => {

    it("Nova calculadora", () => {
        const calculadora = new Calculadora()
        expect(calculadora).toBeDefined()
        expect(calculadora.resultado).toBeDefined()
        expect(typeof calculadora.resultado).toBe("number")
        expect(calculadora.resultado).toBe(0)
    })


    test("Obtém resultado", () => {
        const calculadora = new Calculadora()
        expect(calculadora.resultado).toBeDefined()
        expect(typeof calculadora.resultado).toBe("number")
    })


    it("Atribui um novo valor a calculadora", () => {
        const calculadora = new Calculadora()


        expect(() => (calculadora.resultado = "texto")).toThrow(TypeError)


        expect(() => (calculadora.resultado = "texto")).toThrow(
            "Precisa ser um arg válido"
        )


        expect(calculadora.resultado).toBe(0)


        expect(() => (calculadora.resultado = "5")).not.toThrow(TypeError)


        expect(calculadora.resultado).toBe(5)
    })


    it("Soma um ao resultado", () => {
        const calculadora = new Calculadora()

        calculadora.soma(10)
        expect(calculadora.resultado).toBeDefined()

        calculadora.soma(5)
        expect(calculadora.resultado).toBe(15)

        calculadora.soma("10")
        expect(calculadora.resultado).toBe(25)

        expect(() => calculadora.soma("texto")).toThrow(TypeError)

        calculadora.soma(-5)
        expect(calculadora.resultado).toBe(20)
    })

    it("A soma precisa aceitar apenas um argumento", () => {
        const calculadora = new Calculadora()

        expect(() => calculadora.soma(10, 5)).not.toThrow()
    })


    it("Retira um número do resultado", () => {
        const calculadora = new Calculadora()

        calculadora.sub(10)
        expect(calculadora.resultado).toBe(-10)

        calculadora.sub(5)
        expect(calculadora.resultado).toBe(-15)

        calculadora.sub("10")
        expect(calculadora.resultado).toBe(-25)

        expect(() => calculadora.sub("texto")).toThrow(TypeError)

        calculadora.sub(-5)
        expect(calculadora.resultado).toBe(-20)
    })

    it("Garante que soma aceite apenas um argumento", () => {
        const calculadora = new Calculadora()

        expect(() => calculadora.soma(10, 5)).not.toThrow()
    })


    it("Multiplica um número do resultado", () => {
        const calculadora = new Calculadora()

        calculadora.resultado = 1

        calculadora.mult(10)
        expect(calculadora.resultado).toBe(10)

        calculadora.mult(5)
        expect(calculadora.resultado).toBe(50)

        calculadora.mult("2")
        expect(calculadora.resultado).toBe(100)

        expect(() => calculadora.mult("texto")).toThrow(TypeError)
    })

    it("Garante que multiplicação aceite apenas um argumento", () => {
        const calculadora = new Calculadora()

        expect(() => calculadora.mult(10)).not.toThrow()
    })


    it("Divide um número do resultado", () => {
        const calculadora = new Calculadora()

        calculadora.resultado = 1

        calculadora.div(10)
        expect(calculadora.resultado).toBe(0.1)

        calculadora.div(5)
        expect(calculadora.resultado).toBe(0.02)


        expect(() => calculadora.div("texto")).toThrow(TypeError)
    })

    it("Garante que divisão aceita apenas um argumento", () => {
        const calculadora = new Calculadora()

        expect(() => calculadora.div(10)).not.toThrow()
    })


    it('Sinal do resultado invertido', () => {
        const calculadora = new Calculadora()


        calculadora.resultado = 0
        calculadora.inversao()
        expect(calculadora.resultado).toBe(-0)


        calculadora.resultado = 10
        calculadora.inversao()
        expect(calculadora.resultado).toBe(-10)


        calculadora.resultado = -5
        calculadora.inversao()
        expect(calculadora.resultado).toBe(5)


        calculadora.resultado = 7
        calculadora.inversao()
        expect(calculadora.resultado).toBe(-7)

        calculadora.resultado = -3
        calculadora.inversao()
        expect(calculadora.resultado).toBe(3)
    })
})