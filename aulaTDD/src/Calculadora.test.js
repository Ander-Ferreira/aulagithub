

class Calculadora{
    #resultado
    constructor(){
        this.#resultado = 0

      
    }

    get resultado(){
        return this.#resultado
    }

    set resultado(numero) {
        if(typeof numero == 'string'){
            numero = numero - 0
        }

        if(isNaN(numero)) {
            throw new TypeError('O argumento deve ser um número válido ')
        }

        this.#resultado
    }
}




//Testes para dar Errado

test('Criar nova calculadora', ()=>{

})

//Agrupar testes

describe('Funções da calculadora', ()=> {
    
    it('Criar nova calculadora', ()=>{
        const calculadora = new Calculadora()
        
        expect(calculadora).toBeDefined()
        expect(calculadora.resultado).toBeDefined()
        expect(typeof calculadora.resultado).toBeDefined("number")
        expect(typeof calculadora.resultado).toBeDefined(0)




    })

    it('Obtém resultado', ()=>{
        const calculadora = new Calculadora()
        //expect(calculadora).toBeDefined()
        expect(typeof calculadora.resultado).toBe('number')
        

    })

    it('Atribui um novo valor', () => {

        const calculadora = new Calculadora()
        calculadora.resultado = 'Texto'
        expect(calculadora.resultado).toBe(0)
        
    })



})

it('Outra forma de teste', ()=>{



})