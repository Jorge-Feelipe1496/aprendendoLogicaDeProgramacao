class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // normaliza para minúsculo
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = "magia";
                break;
            case 'guerreiro':
                ataque = "espada";
                break;
            case 'monge':
                ataque = "artes marciais";
                break;
            case 'ninja':
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
        console.log(`${this.tipo} atacou usando ${ataque}`); // sem "o"
    }
}

// Testes
const heroi1 = new Heroi("Gandalf", 2019, "mago");
heroi1.atacar(); // mago atacou usando magia
const heroi2 = new Heroi("Conan", 35, "guerreiro");
heroi2.atacar(); // guerreiro atacou usando espada
const heroi3 = new Heroi("Li Mu Bai", 28, "monge");
heroi3.atacar(); // monge atacou usando artes marciais
const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar(); // ninja atacou usando shuriken
