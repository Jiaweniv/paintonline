BasicGame.MainMenu = function (game) {
    sonidoAudio = true;
    estaElMuteActivado = false;
    mundo = this;
    primeraPartida = true;
    numeroJugadores = 1;
    puntuacionJ1 = 0;
    puntuacionJ2 = 0;
   
    mostrarRound = true;
    scoreTotal = 0;
};
BasicGame.MainMenu.prototype = {
     preload: function() {
         if(isMobile){
             factor=1;
             carpet="logos";
         }
         else{
             factor=1.5;
             carpet="logoshd";
         }
        
        this.load.spritesheet('spritted', 'spritted/'+carpet+'/spritted.png',126*factor,90*factor);
        this.load.spritesheet('facebook', 'spritted/'+carpet+'/facebook.png',66*factor,42*factor);
        this.load.spritesheet('twitter', 'spritted/'+carpet+'/twitter.png',66*factor,42*factor);

    },
    create: function () {
        this.pulsado=false;
        mostrarRound = true;
        puntuacionJ1 = 0;
        puntuacionJ2 = 0;
        wind=0;
        nivelActual = 1;
        scoreTotal = 0;
        primeraPartida = true;
        this.pulsado = false;
        this.fondoMenu = this.add.sprite(this.game.world.width / 2, this.game.world.height / 2, 'fondoMenu1');
        this.fondoMenu.anchor.set(0.5);
        this.nube1 = this.add.sprite(-200 * multiplicador, this.game.world.height / 2 - 300 * multiplicador, 'nube1');
        this.nube1.anchor.set(0.5);
        this.nube2 = this.add.sprite(this.game.world.width + 150 * multiplicador, this.game.world.height / 2 - 150 * multiplicador, 'nube1');
        this.nube2.anchor.set(0.5);
        this.nube3 = this.add.sprite(-150 * multiplicador, this.game.world.height / 2, 'nube1');
        this.nube3.anchor.set(0.5);
        this.fondoMenu2 = this.add.sprite(this.game.world.width / 2, this.game.world.height / 2, 'fondoMenu2');
        this.fondoMenu2.anchor.set(0.5);
           this.tirarHojas();
        this.wrestle_jump = this.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 200 * multiplicador, 'wrestle_jump');
        this.wrestle_jump.anchor.set(0.5);
        this.wrestle_jump.angle += 10;
        tweenWrestle = this.game.add.tween(this.wrestle_jump).to({angle: '-20'}, 800, "Sine.easeOut", true, 0, -1);
        tweenWrestle.yoyo(true, 1);
        this.sumo_fever = this.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 70 * multiplicador, 'sumo_fever');
        this.sumo_fever.anchor.set(0.5);
        this.player1 = this.add.button(this.game.world.width / 2 - 200 * multiplicador, this.game.world.height / 2 + 90 * multiplicador, '1player', this.monedita1, this, 0, 2, 1);
        this.player1.anchor.set(0.5);
        this.player2 = this.add.button(this.game.world.width / 2 + 200 * multiplicador, this.game.world.height / 2 + 90 * multiplicador, '2player', this.monedita2, this, 0, 2, 1);
        this.player2.anchor.set(0.5);
        this.audio = this.add.button(this.game.world.width / 2, this.game.world.height / 2 + 220 * multiplicador, 'audio', this.actualizarAudio, this);
        this.audio.onInputOver.add(this.overAudio, this);
        this.audio.onInputOut.add(this.outAudio, this);
        if (!sonidoAudio)
            this.audio.frame = 2;
        this.audio.anchor.set(0.5);

        this.grupoTransicion= this.add.group();
        //this.credito = this.game.add.bitmapText(200,460, 'letra_power',"creditos 0",11);
        this.credito = this.game.add.bitmapText(this.game.world.width  - 250*multiplicador  , this.game.world.height-50*multiplicador, 'creditos', "00000", 22 * multiplicador);
        this.credito.setText('CREDITS ' + String(creditos));
        this.credito.fixedToCamera = true;
        this.credito.smoothed = false;
     
        if (!isExplorer) {
               musica = this.game.add.audio('musica');
               gong=this.game.add.audio('gong');
               impactoCabeza=this.game.add.audio('impacto');
               salto=this.game.add.audio('salto');
               muerte=this.game.add.audio('muerte');
               aplauso=this.game.add.audio('aplauso');
               ouch =this.game.add.audio('ouch'); 
               this.loopMusic(musica);
        }
        
                logos =  this.add.group();

                var escala = 0.8;

                facebook = this.add.button(0, 0, 'facebook',this.irAFacebook, this, 1,0,1);
                twitter = this.add.button(0, 0, 'twitter',this.irATwitter, this, 1,0,1);
                spritted = this.add.button(0, 0, 'spritted',this.irASpritted, this, 1,0,1);
                
                facebook.scale.x = escala;
                facebook.scale.y = escala;
                spritted.scale.x = escala;
                spritted.scale.y = escala;
                twitter.scale.x = escala;
                twitter.scale.y = escala;


                spritted.y = 5;
                twitter.y = (87*escala*factor);
                facebook.y = (87*escala*factor);

                facebook.x = this.game.width -  (130*escala*factor);
                spritted.x = this.game.width -   (130*escala*factor) ;

                twitter.x =  this.game.width - (70*escala*factor);

                logos.add(facebook);
                logos.add(twitter);
                logos.add(spritted);
                logos.x -= 3;
                logos.y += 3;

               /* logos.x -= this.game.width/2+this.game.width/3.5;
                console.log(this.game.width);
                logos.y += this.game.height/2 +100 *multiplicador;*/
    },
     irASpritted: function() {
        window.open('https://www.spritted.com', '_blank');
    },
    irAFacebook: function() {
        window.open('https://www.facebook.com/spritted', '_blank');
    },
    irATwitter: function() {
        window.open('https://twitter.com/spritted', '_blank');
    },
    update: function () {
        this.animarFondo();
         wind = this.game.rnd.between(20, -20);

        emitter.force.x = wind/100;
    },
    monedita1: function () {

        if (!mundo.pulsado) {


            mundo.pulsado = true;
            continuar = true;

            var insertCoinHandler = function (e) {

                if (!estaElMuteActivado) {
                    mundo.sound.mute = false;
                }
                e.target.removeEventListener('coinIn', insertCoinHandler, false);
                creditos = e.data - 1;
                mundo.credito.setText('CREDITS ' + String(creditos));

                mundo.transicionCerrar();
            };
            if (!this.sound.mute) {
                this.sound.mute = true;
                estaElMuteActivado = false;
            } else {
                estaElMuteActivado = true;
            }
            window.addEventListener('coinIn', insertCoinHandler, false);
            Logros.event.insertCoin();
        }
    },
    monedita2: function () {

        if (!mundo.pulsado) {


            mundo.pulsado = true;
            continuar = true;

            var insertCoinHandler = function (e) {

                if (!estaElMuteActivado) {
                    mundo.sound.mute = false;
                }
                e.target.removeEventListener('coinIn', insertCoinHandler, false);
                creditos = e.data - 1;
                mundo.credito.setText('CREDITS ' + String(creditos));
                
                mundo.transicionCerrar2();
            };
            if (!this.sound.mute) {
                this.sound.mute = true;
                estaElMuteActivado = false;
            } else {
                estaElMuteActivado = true;
            }
            window.addEventListener('coinIn', insertCoinHandler, false);
            Logros.event.insertCoin();
        }
    },
    transicionCerrar: function () {
        //  if(!isExplorer)
        //    menumusic.stop();
        numeroJugadores = 1;
        var transicionDer = this.game.add.sprite(this.game.width / 2 + this.game.width, this.game.height / 2, 'der_transicion');
        var transicionIz = this.game.add.sprite(this.game.width / 2 - this.game.width, this.game.height / 2, 'izq_transicion');
      
        transicionIz.anchor.set(0.5);
        transicionDer.anchor.set(0.5);
        transicionIz.x = this.game.width / 2 - transicionIz.width / 2;
        transicionDer.x = this.game.width / 2 + transicionDer.width / 2;
          
        tweentransicionIz1 = this.game.add.tween(transicionIz).to({x: this.game.width / 2}, 1200, Phaser.Easing.Quadratic.InOut, true,500);
        tweentransicionDer1 = this.game.add.tween(transicionDer).to({x: this.game.width / 2}, 1200, Phaser.Easing.Quadratic.InOut, true,500);

        tweentransicionDer1.onComplete.add(function () {
            this.game.time.events.add(500, this.irAjuego, this);
        }, this);
    },
    transicionCerrar2: function () {
        //  if(!isExplorer)
        //    menumusic.stop();
        numeroJugadores = 2;
        var transicionDer = this.game.add.sprite(this.game.width / 2 + this.game.width, this.game.height / 2, 'der_transicion');
        var transicionIz = this.game.add.sprite(this.game.width / 2 - this.game.width, this.game.height / 2, 'izq_transicion');

        transicionIz.anchor.set(0.5);
        transicionDer.anchor.set(0.5);
       
        tweentransicionIz2 = this.game.add.tween(transicionIz).to({x: this.game.width / 2}, 400, Phaser.Easing.Quadratic.InOut, true);
        tweentransicionDer2 = this.game.add.tween(transicionDer).to({x: this.game.width / 2}, 400, Phaser.Easing.Quadratic.InOut, true);

        tweentransicionDer2.onComplete.add(function () {
            this.game.time.events.add(500, this.irAjuego, this);
        }, this);
    },
    irAjuego: function () {
        this.game.state.start('Game');
    },
    loopMusic: function (cancion) {
        cancion.play('', 0, 0.7, true);
        cancion.onLoop.add(function () {
            cancion.play('', 0, 0.7, true);
        }, this);
    },
    actualizarAudio: function () {

        if (sonidoAudio) {

            this.audio.frame = 2;
            sonidoAudio = false;
            this.sound.mute = true;
        }
        else {
            this.sound.mute = false;
            this.audio.frame = 0;
            sonidoAudio = true;

        }

    },
    animarFondo: function () {
        this.nube1.x += 0.2;
        this.nube2.x -= 0.5;
        this.nube3.x += 0.4;
        if (this.nube1.x > this.game.width+200*multiplicador)
            this.nube1.x = -200 * multiplicador;
        if (this.nube2.x < -200*multiplicador)
            this.nube2.x = this.game.world.width + 150 * multiplicador;
        if (this.nube3.x > this.game.width+200*multiplicador)
            this.nube3.x = -150 * multiplicador;

    },
    tirarHojas : function(){
         manager3 = this.game.plugins.add(Phaser.ParticleStorm);
         var leaves = {
        image: [ 'petalo1', 'petalo2' ],
        lifespan: 7850,
        vx: { min: -2, max: 2 },
        vy: { value: 1 },
        scale: { min: 0.4, max: 1 },
        rotation: { initial: -90, value: 180, control: [ { x: 0, y: 0 }, { x: 0.2, y: 0.5 }, { x: 0.4, y: 1 }, { x: 0.6, y: 0.5 }, { x: 1, y:0 } ] }
    };

    manager3.addData('leaves', leaves);

    emitter = manager3.createEmitter();

    emitter.force.y = 0.01;

    emitter.addToWorld();

    emitter.emit('leaves', [0, this.game.world.width], -20, { repeat: -1, frequency: 220 });
    
    
    },
    overAudio : function(){
        if(this.audio.frame===0)
            this.audio.frame = 1;
    },
    outAudio : function(){
        if(this.audio.frame===1)
            this.audio.frame = 0;
    }
};