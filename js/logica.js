// Selección de botones

const celeste = document.getElementById('color-celeste');
const violeta = document.getElementById('color-violeta');
const naranja = document.getElementById('color-naranja');
const verde = document.getElementById('color-verde');
const btn_iniciar_juego = document.querySelector('.btn-iniciar');

btn_iniciar_juego.addEventListener('click', iniciar_juego);

class Juego{
    constructor(){
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
    }

    inicializar(){
        btn_iniciar_juego.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        };
    }

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }

    siguienteNivel(){
        this.iluminarSecuencia();
    }

    transformarNumero_a_color(numero){
        switch(numero){
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
        }        
    }
    
    iluminarSecuencia(){
        for(var i = 0; i < this.nivel; i++){
            var color = this.transformarNumero_a_color(this.secuencia[i]);
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }
    
    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350);
    }
    
    apagarColor(color){
        this.colores[color].classList.remove('light');
    }
    
}


function iniciar_juego(){
    window.juego = new Juego();
}