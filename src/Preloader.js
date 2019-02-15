BasicGame.Preloader = function (game) {
    cargado = false;
    creditos = 0;

};
BasicGame.Preloader.prototype = {
    preload: function () {
        altoJuego = this.game.world.height;
        anchoJuego = this.game.world.width;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.disableVisibilityChange = false;
        this.game.stage.backgroundColor = '#ffffff';
        this.elementos_logo = this.add.sprite(this.game.width / 2, this.game.height / 2 - 80, 'elementos_logo');
        this.elementos_logo.anchor.set(0.5);
        this.preloadBg = this.add.sprite(this.game.width / 2, this.game.height / 2 + 140, 'preloader1');
        this.preloadBg.x -= this.preloadBg.width / 2;
        this.preloadBar = this.add.sprite(this.game.width / 2, this.game.height / 2 + 140, 'preloader2');
        this.preloadBar.x -= this.preloadBar.width / 2;
        this.load.setPreloadSprite(this.preloadBar);
         this.load.image('negro', 'assets/negro.png');
        this.load.image('elementos_izquierda', 'assets/elementos_izquierda.png');
        this.load.image('elementos_derecha', 'assets/elementos_derecha.png');
        this.load.image('pinceles_brocha', 'assets/pinceles/pinceles_brocha.png');
        this.load.image('pinceles_cera', 'assets/pinceles/pinceles_cera.png');
        this.load.image('pinceles_lapiz', 'assets/pinceles/pinceles_lapiz.png');
        this.load.image('pinceles_lapiz_color', 'assets/pinceles/pinceles_lapiz_color.png');
        this.load.image('pinceles_oleo', 'assets/pinceles/pinceles_oleo.png');
        this.load.image('pinceles_pincel', 'assets/pinceles/pinceles_pincel.png');
        this.load.image('pinceles_rotulador', 'assets/pinceles/pinceles_rotulador.png');
        this.load.image('pinceles_spray', 'assets/pinceles/pinceles_spray.png');
        this.load.image('clear_picture', 'assets/clear_picture.png');
        this.load.image('elementos_color', 'assets/elementos_color.png');
        this.load.image('elementos_ruedaColor', 'assets/elementos_ruedaColor.png');
        this.load.image('fondoRueda', 'assets/fondoRueda.png');
        this.load.image('cuadropequeno', 'assets/cuadropequeno.png');
        // this.load.image('logo_peq', 'assets/logo_peq.png');
        // this.load.spritesheet('fb', 'assets/facebook/fb.png', 514 / 2, 105);
        // this.load.spritesheet('cancels', 'assets/facebook/cancels.png', 300/2, 65);
        // this.load.spritesheet('facebook_spinner', 'assets/facebook/facebook_spinner.png', 100 , 100);
        // this.load.image('panelShare', 'assets/facebook/panelShare.png');
        this.load.spritesheet('elementos', 'assets/elementos.png', 63, 102);
        this.load.spritesheet('elementos_colores', 'assets/elementos_colores.png', 61, 66);
        this.load.spritesheet('elementos_tamano', 'assets/elementos_tamano.png', 61, 66);
        this.load.spritesheet('elementos_pinceles', 'assets/elementos_pinceles.png', 68, 87);
        this.load.spritesheet('elementos_opciones', 'assets/elementos_opciones.png', 61, 66);
        this.load.spritesheet('elementos_goma', 'assets/elementos_goma.png', 71, 70);
        this.load.spritesheet('elementos_paleta', 'assets/elementos_paleta.png', 108, 77);
        this.load.spritesheet('no', 'assets/no.png', 81, 84);
        this.load.spritesheet('yes', 'assets/yes.png', 81, 84);
        this.load.spritesheet('elementos_X', 'assets/elementos_X.png', 49, 58);
        this.load.spritesheet('elementos_undo', 'assets/elementos_undo.png', 71, 70);


        /*
         this.load.bitmapFont('creditos', 'credit/credit.png', 'credit/credit.fnt');
         this.load.bitmapFont('font_menus', carpeta + '/fonts/font_menus/font.png', carpeta + '/fonts/font_menus/font.fnt');
         this.load.bitmapFont('font_grande', carpeta + '/fonts/font_grande/font.png', carpeta + '/fonts/font_grande/font.fnt');
         this.load.bitmapFont('font_ingame', carpeta + '/fonts/font_ingame/font.png', carpeta + '/fonts/font_ingame/font.fnt');
         this.load.bitmapFont('font_menu_peq', carpeta + '/fonts/font_menu_peq/font.png', carpeta + '/fonts/font_menu_peq/font.fnt');
         */

        if (!isExplorer)
        {
          /*  this.game.load.audio('musica', ['audio/musica.ogg', 'audio/musica.mp3']);
            this.game.load.audio('spray', ['audio/spray.ogg', 'audio/spray.mp3']);
            this.game.load.audio('lapiz', ['audio/lapiz.ogg', 'audio/lapiz.mp3']);
            this.game.load.audio('boton', ['audio/boton.ogg', 'audio/boton.mp3']);*/

        }

    },
    create: function () {
        this.game.state.start('Game');
    },
    update: function () {
        /*  if(cargado)
         this.game.state.start('Game');*/
    }


};