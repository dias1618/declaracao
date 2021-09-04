import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'declaracao';
  inputFocus:ElementRef;
  
  @ViewChild('foto1') foto1:ElementRef<HTMLInputElement>;
  @ViewChild('foto2') foto2:ElementRef<HTMLInputElement>;

  @ViewChild('inputNome') inputNome:ElementRef<HTMLInputElement>;
  @ViewChild('estagio1') estagio1:ElementRef<HTMLInputElement>;
  pergunta1:string='Ola, qual o seu nome?'
  nome:string='';
  @ViewChild('labelIdade') labelIdade:ElementRef<HTMLInputElement>;
  @ViewChild('inputIdade') inputIdade:ElementRef<HTMLInputElement>;
  pergunta11:string;
  idade:string='';
  @ViewChild('labelEstado') labelEstado:ElementRef<HTMLInputElement>;
  @ViewChild('inputEstado') inputEstado:ElementRef<HTMLInputElement>;
  pergunta12:string;
  estado:string='';

  @ViewChild('estagio2') estagio2:ElementRef<HTMLInputElement>;
  pergunta2:string;
  pergunta3:string='Sim ou Claro?';
  @ViewChild('inputSimClaro') inputSimClaro:ElementRef<HTMLInputElement>;

  @ViewChild('estagio3') estagio3:ElementRef<HTMLInputElement>;
  pergunta4:string;
  pergunta5:string='Lógico ou Óbvio?';
  @ViewChild('inputLogicoObvio') inputLogicoObvio:ElementRef<HTMLInputElement>;

  @ViewChild('estagio4') estagio4:ElementRef<HTMLInputElement>;
  texto1:string='Esse carinha ai que está do seu lado até tentou essa semana pegar no violão para tocar essa música, mas não deu muito certo e resolvi fazer algo que faço melhor do que violão. Saiba que você é o amor da minha vida e quero que sejamos bem felizes. Sei que parece clichê e repetitivo mas vou repetir que TE AMO TE AMO TE AMO que nem um disco arranhado por muitos anos ainda. Você é uma amiga deliciosa de se ter ao lado, sempre tentando ajudar, rindo e fazendo graça junto comigo até nas coisas mais bobas. É uma companheira extremamente confiável, em que eu poria minha vida nas mãos sem pensar duas vezes. Responsável e sempre atenta aos detalhes de uma forma que não sabia ser possível alguém fazer. Uma amante fogosa e muito gostosa, que qualquer homem mataria para poder se deitar e se deliciar com esse belo corpo que a natureza te deu. E uma esposa carinhosa e amorosa que faz com que eu nunca me sinta só. Como eu sempre digo, você merece o melhor. Merece ser feliz, merece se ver como a mulher forte que você é, e quero estar ao seu lado contribuindo com vários desses teus lindos sorrisos.'
  texto2:string='Agora um poeminha... ousado...\nMinhas mãos se apoderam do teu seio, sentindo uma pulsação febril descontrolada\nMeu corpo encosta no teu em um encaixe perfeito, quase tornando dois corpos em apenas um\nNossas bocas proferem gemidos destoantes, denunciando o tesão pujante em nossa alma\nLogo suas mãos tateiam pelo meu sexo em um ardor apressado, encontrando-o viril e pronto para te possuir\nSeu corpo agache-se, como de uma felina espreguiçando-se em uma tarde de outono\nSeus seios encostam ao chão pouco depois dos joelhos\nAs pernas se afastam devagar expondo a doce flor que guarda em seu íntimo\nSe abrindo para mim\nEntão vou por trás de você, como uma sombra, rápida e silenciosa\nMeus dedos passam pelo seu corpo, te provando\nEntão você sente ele entrando, cada parte dele raspando dentro de você\n E nos entregamos a selvageria natural dos nossos corpos';
  //@ViewChild('inputLogicoObvio') inputLogicoObvio:ElementRef<HTMLInputElement>;

  constructor(){}

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    this.inputNome.nativeElement.focus();
    this.inputFocus = this.inputNome;
  }

  clickTela(){
    this.inputFocus.nativeElement.focus();
  }

  onEnterNome(){
    this.nome = this.inputNome.nativeElement.value;

    if(this.nome != 'valéria' && this.nome != 'valeria' && this.nome != 'Valéria' && this.nome != 'Valeria' && this.nome != 'Val' && this.nome != 'val' && this.nome != 'Léo' && this.nome != 'Leo' && this.nome != 'leo'){
      this.pergunta1 = 'Acho que esse não é o seu nome. Me diz qual o seu nome, vai.'
      this.inputNome.nativeElement.value = '';
      this.inputNome.nativeElement.focus();
    }
    else{
      this.pergunta11 = `Que nome lindo ${this.nome}. Agora me diz, quantos aninhos você tem?`;
      this.inputIdade.nativeElement.hidden = false;
      this.labelIdade.nativeElement.hidden = false;
      this.inputIdade.nativeElement.focus();
      this.inputFocus = this.inputIdade;
    }
  }

  onEnterIdade(){
    this.idade = this.inputIdade.nativeElement.value;

    if(this.idade != '30'){
      this.pergunta11 = 'Certeza??? Acho que não hein rsrs. Digita só pra mim a sua idade.'
      this.inputIdade.nativeElement.value = '';
      this.inputIdade.nativeElement.focus();
    }
    else{
      this.pergunta12 = `30 aninhos hein, e com um corpão de dar inveja ${this.nome}. E de onde é esse mulherão?`
      this.inputEstado.nativeElement.hidden = false;
      this.labelEstado.nativeElement.hidden = false;
      this.inputEstado.nativeElement.focus();
      this.inputFocus = this.inputEstado;
    }
  }

  onEnterEstado(){
    this.estado = this.inputEstado.nativeElement.value;

    if(this.estado != 'BA' && this.estado != 'Ba' && this.estado != 'ba' && this.estado != 'Bahia' && this.estado != 'bahia' && this.estado != 'BAHIA' && this.estado != 'Vitória da Conquista' && this.estado != 'vitoria da conquista' && this.estado != 'vitória da conquista' && this.estado != 'conquista' && this.estado != 'Conquista'){
      this.pergunta12 = 'Oxente, minta não moss. Fala pro painho aqui de que estado você é.'
      this.inputEstado.nativeElement.value = '';
      this.inputEstado.nativeElement.focus();
    }
    else{
      this.estagio1.nativeElement.hidden = true;
      this.estagio2.nativeElement.hidden = false;
      this.inputSimClaro.nativeElement.focus();
      this.inputFocus = this.inputSimClaro;
      this.pergunta2=`Então, ${this.nome} é essa baiana linda que arrasa corações?`;
      this.foto1.nativeElement.classList.add('fade-in-image')
    }
  }

  onEnterSimClaro(){
    let simClaro:string = this.inputSimClaro.nativeElement.value;
    
    if(simClaro == 'Sim' || simClaro == 'Claro'){
      this.estagio2.nativeElement.hidden = true;
      this.estagio3.nativeElement.hidden = false;
      this.inputLogicoObvio.nativeElement.focus();
      this.inputFocus = this.inputLogicoObvio;
      this.pergunta4='Essa gostosa aqui de 30 anos que tira o folego de qualquer um?';
      this.foto2.nativeElement.classList.add('fade-in-image')
    }
    else{
      this.inputSimClaro.nativeElement.value = '';
      this.inputSimClaro.nativeElement.focus();
    }
  }

  onEnterLogicoObvio(){
    let logicoObvio:string = this.inputLogicoObvio.nativeElement.value;
    
    if(logicoObvio == 'Lógico' || logicoObvio == 'Óbvio'){
      this.estagio3.nativeElement.hidden = true;
      this.estagio4.nativeElement.hidden = false;
      setInterval(this.changeFotos.bind(this, this.estagio4.nativeElement.children[1]), 3000);
      setInterval(this.showText.bind(this, this.texto1, this.texto2), 80);
    }
  }
  currentPos = 0;
  changeFotos(imagem:any){
    
    var images = [
      "assets/images/foto3.png", 
      "assets/images/foto4.jpg", 
      "assets/images/foto5.jpg",
      "assets/images/foto6.png", 
      "assets/images/foto7.jpg", 
      "assets/images/foto8.jpg" 
    ]
    
    this.currentPos = this.currentPos+1;

    if (this.currentPos >= images.length)
        this.currentPos = 0;

    imagem.src = images[this.currentPos];
  }

  index:number=0;
  palavras:string = '';
  index2:number=0;
  palavras2:string = '';
  showText(texto:string, texto2:string) {   
    if(this.palavras.length < texto.length)
      this.palavras += texto.split('')[this.index++];
    else if(this.palavras2.length < texto2.length)
      this.palavras2 += texto2.split('')[this.index2++];
  }

}
