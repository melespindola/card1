class Produto {
    constructor(){
        this.nomeDisplay = document.querySelector('#card-nome');
        this.preview = document.querySelector('#card-preview');
        this.estaAtivo = false;
    }

    atualizarTexto(novoTexto) {
        this.nomeDisplay.innerText = novoTexto;
    }

    mudarCor(novaCor) {
        this.preview.style.backgroundColor = novaCor;
    }

    alternarStatus(estado){

        this.estaAtivo = estado;

        if(this.estaAtivo){
            this.preview.style.border = "5px solid green";
        } else {
            this.preview.style.border = "5px dashed red"
        }
    }
}

const produto = new Produto();

document.querySelector('#in-nome').addEventListener('input', (event)=> {
    produto.atualizarTexto(event.target.value);
});

document.querySelector('#in-cor').addEventListener('input', (event)=> {
    produto.mudarCor(event.target.value);
});

document.querySelector('#card-preview').addEventListener('contextmenu', (event)=> {
    event.preventDefault();

    produto.alternarStatus(!produto.estaAtivo);
});