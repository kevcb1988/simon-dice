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
        this.elegirColor = this.elegirColor.bind(this);
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
        this.subNivel = 0;
        this.iluminarSecuencia();
        this.agregarEventosClick();
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
    
    transformarColor_a_numero(color){
        switch(color){
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde':
                return 3;
        }        
    }

    iluminarSecuencia(){
        for(let i = 0; i < this.nivel; i++){
            const color = this.transformarNumero_a_color(this.secuencia[i]);
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

    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
    }

    elegirColor(e){
        const nombreColor = e.target.dataset.color
        const numeroColor = transformarColor_a_numero(nombreColor);
        this.iluminarColor(nombreColor);
        if(numeroColor === this.secuencia[this.subNivel]){
            this.subNivel++
        }
    }
    
}


function iniciar_juego(){
    window.juego = new Juego();
}