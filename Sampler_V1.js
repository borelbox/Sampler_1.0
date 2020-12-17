//https://github.com/borelbox/Sampler_1.0.git
//PICAPIEDRA'S BOARD
var canvas;
var canvW = 412;
var canvH = 2000;
var canvX = 0;
var canvY = 0;

var gapX1 = canvX + 20;
var gapY1 = canvY + 10;
var gapX2 = 4;
var gapY2 = 4;
var btnSizeX = 120;
var btnSizeY = 60;
var gapX3 = gapX2 + btnSizeX;
var gapY3 = gapY2 + btnSizeY;


function loaded() {
  console.log("AUDIO FILES LOADED");
}

function preload() {
  s1 = loadSound('media/JOAN_10.mp3', loaded);
  s2 = loadSound('media/JOAN_11.mp3', loaded);
  s3 = loadSound('media/JOAN_12.mp3', loaded);
  s4 = loadSound('media/JOAN_13.mp3', loaded);
  s5 = loadSound('media/JOAN_14.mp3', loaded);
  s6 = loadSound('media/JOAN_15.mp3', loaded);
  s7 = loadSound('media/JOAN_16.mp3', loaded);
  s8 = loadSound('media/JOAN_17.mp3', loaded);

  s9 = loadSound('media/JOAN_18.mp3', loaded);
  s10 = loadSound('media/JOAN_19.mp3', loaded);
  s11 = loadSound('media/JOAN_20.mp3', loaded);
  s12 = loadSound('media/JOAN_21.mp3', loaded);
  s13 = loadSound('media/JOAN_22.mp3', loaded);
  s14 = loadSound('media/JOAN_23.mp3', loaded);
  s15 = loadSound('media/JOAN_24.mp3', loaded);
  s16 = loadSound('media/JOAN_25.mp3', loaded);

  s17 = loadSound('media/JOAN_26.mp3', loaded);
  s18 = loadSound('media/JOAN_27.mp3', loaded);
  s19 = loadSound('media/JOAN_28.mp3', loaded);
  s20 = loadSound('media/JOAN_29.mp3', loaded);
  s21 = loadSound('media/JOAN_30.mp3', loaded);
  s22 = loadSound('media/JOAN_31.mp3', loaded);
  s23 = loadSound('media/JOAN_32.mp3', loaded);
  s24 = loadSound('media/JOAN_33.mp3', loaded);

  s25 = loadSound('media/JOAN_34.mp3', loaded);
  s26 = loadSound('media/MAITE_10.mp3', loaded);
  s27 = loadSound('media/MAITE_11.mp3', loaded);
  s28 = loadSound('media/NATI_10.mp3', loaded);
  s29 = loadSound('media/NATI_11.mp3', loaded);
  s30 = loadSound('media/NATI_12.mp3', loaded);
  s31 = loadSound('media/NATI_13.mp3', loaded);
  s32 = loadSound('media/NATI_14.mp3', loaded);

  s33 = loadSound('media/NATI_15.mp3', loaded);
  s34 = loadSound('media/NATI_16.mp3', loaded);
  s35 = loadSound('media/NILS_10.mp3', loaded);
  s36 = loadSound('media/NILS_11.mp3', loaded);
  s37 = loadSound('media/NILS_12.mp3', loaded);
  s38 = loadSound('media/NILS_13.mp3', loaded);
  s39 = loadSound('media/NILS_14.mp3', loaded);
  s40 = loadSound('media/NILS_15.mp3', loaded);

  s41 = loadSound('media/NILS_16.mp3', loaded);
  s42 = loadSound('media/NILS_17.mp3', loaded);
  s43 = loadSound('media/NILS_18.mp3', loaded);
  s44 = loadSound('media/NILS_19.mp3', loaded);
  s45 = loadSound('media/NILS_20.mp3', loaded);
  s46 = loadSound('media/NILS_21.mp3', loaded);
  s47 = loadSound('media/NILS_22.mp3', loaded);
  s48 = loadSound('media/NILS_23.mp3', loaded);

  s49 = loadSound('media/NILS_24.mp3', loaded);
  s50 = loadSound('media/NILS_25.mp3', loaded);
  s51 = loadSound('media/NILS_26.mp3', loaded);
  s52 = loadSound('media/NILS_27.mp3', loaded);
  s53 = loadSound('media/NILS_28.mp3', loaded);
  s54 = loadSound('media/NILS_29.mp3', loaded);
  s55 = loadSound('media/NILS_30.mp3', loaded);
  s56 = loadSound('media/NILS_31.mp3', loaded);

  s57 = loadSound('media/NILS_32.mp3', loaded);
  s58 = loadSound('media/NILS_33.mp3', loaded);
  s59 = loadSound('media/VALEN_10.mp3', loaded);
  s60 = loadSound('media/VALEN_11.mp3', loaded);
  s61 = loadSound('media/VALEN_12.mp3', loaded);
  s62 = loadSound('media/VALEN_13.mp3', loaded);
  s63 = loadSound('media/VALEN_14.mp3', loaded);
  s64 = loadSound('media/VALEN_15.mp3', loaded);

  s65 = loadSound('media/VALEN_16.mp3', loaded);
  s66 = loadSound('media/VALEN_17.mp3', loaded);
  s67 = loadSound('media/VALEN_18.mp3', loaded);
  s68 = loadSound('media/VALEN_19.mp3', loaded);
  s69 = loadSound('media/VALEN_20.mp3', loaded);
  s70 = loadSound('media/VALEN_21.mp3', loaded);
}


function setup() {
  var canvas = createCanvas(canvW, canvH);
  canvas.position(canvX,canvY);
  background(30);

  textSize(30);
  fill(200);
  textFont('Arial');
  textAlign(CENTER, CENTER);
  text("TOP BOARD(ER)", canvas.width/2, 40);


  playBtn1 = createButton('Eso si que le puedes decir!');
  playBtn1.position(gapX1, gapY1 + gapY3*1);
  playBtn1.size(btnSizeX, btnSizeY);
  playBtn1.mousePressed(playSnd1);

  playBtn2 = createButton('Y si sigue, el problema es de ella!');
  playBtn2.position(gapX1 + gapX3*1, gapY1 + gapY3*1);
  playBtn2.size(btnSizeX, btnSizeY);
  playBtn2.mousePressed(playSnd2);

  playBtn3 = createButton('Pues si no es, no es!');
  playBtn3.position(gapX1 + gapX3*2, gapY1 + gapY3*1);
  playBtn3.size(btnSizeX, btnSizeY);
  playBtn3.mousePressed(playSnd3);


  playBtn4 = createButton('Por ley..., no tenemos acceso!');
  playBtn4.position(gapX1, gapY1 + gapY3*2);
  playBtn4.size(btnSizeX, btnSizeY);
  playBtn4.mousePressed(playSnd4);

  playBtn5 = createButton('Nos lo tiene que dar ella!');
  playBtn5.position(gapX1 + gapX3*1, gapY1 + gapY3*2);
  playBtn5.size(btnSizeX, btnSizeY);
  playBtn5.mousePressed(playSnd5);

  playBtn6 = createButton('Tranquilo Nils');
  playBtn6.position(gapX1 + gapX3*2, gapY1 + gapY3*2);
  playBtn6.size(btnSizeX, btnSizeY);
  playBtn6.mousePressed(playSnd6);


  playBtn7 = createButton('Resetea y ya está!');
  playBtn7.position(gapX1, gapY1 + gapY3*3);
  playBtn7.size(btnSizeX, btnSizeY);
  playBtn7.mousePressed(playSnd7);

  playBtn8 = createButton('No pasa ná!');
  playBtn8.position(gapX1 + gapX3*1, gapY1 + gapY3*3);
  playBtn8.size(btnSizeX, btnSizeY);
  playBtn8.mousePressed(playSnd8);

  playBtn9 = createButton('Son cosas que pasan!');
  playBtn9.position(gapX1 + gapX3*2, gapY1 + gapY3*3);
  playBtn9.size(btnSizeX, btnSizeY);
  playBtn9.mousePressed(playSnd9);


  playBtn10 = createButton('O sea!');
  playBtn10.position(gapX1, gapY1 + gapY3*4);
  playBtn10.size(btnSizeX, btnSizeY);
  playBtn10.mousePressed(playSnd10);

  playBtn11 = createButton('No, porque realmente no sabes!');
  playBtn11.position(gapX1 + gapX3*1, gapY1 + gapY3*4);
  playBtn11.size(btnSizeX, btnSizeY);
  playBtn11.mousePressed(playSnd11);

  playBtn12 = createButton('Pero, oficialmente, no lo sabes!');
  playBtn12.position(gapX1 + gapX3*2, gapY1 + gapY3*4);
  playBtn12.size(btnSizeX, btnSizeY);
  playBtn12.mousePressed(playSnd12);


  playBtn13 = createButton('Pero tu ahora resetea, y siguiente!');
  playBtn13.position(gapX1, gapY1 + gapY3*5);
  playBtn13.size(btnSizeX, btnSizeY);
  playBtn13.mousePressed(playSnd13);

  playBtn14 = createButton('No le puedo ayudar!');
  playBtn14.position(gapX1 + gapX3*1, gapY1 + gapY3*5);
  playBtn14.size(btnSizeX, btnSizeY);
  playBtn14.mousePressed(playSnd14);

  playBtn15 = createButton('Ostia!!!');
  playBtn15.position(gapX1 + gapX3*2, gapY1 + gapY3*5);
  playBtn15.size(btnSizeX, btnSizeY);
  playBtn15.mousePressed(playSnd15);


  playBtn16 = createButton('Y ya está pues!');
  playBtn16.position(gapX1, gapY1 + gapY3*6);
  playBtn16.size(btnSizeX, btnSizeY);
  playBtn16.mousePressed(playSnd16);

  playBtn17 = createButton('Pero eso no puede ser!');
  playBtn17.position(gapX1 + gapX3*1, gapY1 + gapY3*6);
  playBtn17.size(btnSizeX, btnSizeY);
  playBtn17.mousePressed(playSnd17);

  playBtn18 = createButton('Pero eso no puede ser!');
  playBtn18.position(gapX1 + gapX3*2, gapY1 + gapY3*6);
  playBtn18.size(btnSizeX, btnSizeY);
  playBtn18.mousePressed(playSnd18);


  playBtn19 = createButton('No te puedo ayudar!');
  playBtn19.position(gapX1, gapY1 + gapY3*7);
  playBtn19.size(btnSizeX, btnSizeY);
  playBtn19.mousePressed(playSnd19);

  playBtn20 = createButton('En ese momento cambió el chip!');
  playBtn20.position(gapX1 + gapX3*1, gapY1 + gapY3*7);
  playBtn20.size(btnSizeX, btnSizeY);
  playBtn20.mousePressed(playSnd20);

  playBtn21 = createButton('Cierra ya Madrid, que esto no se puede!');
  playBtn21.position(gapX1 + gapX3*2, gapY1 + gapY3*7);
  playBtn21.size(btnSizeX, btnSizeY);
  playBtn21.mousePressed(playSnd21);


  playBtn22 = createButton('Le importa una mierda la salud, eh!');
  playBtn22.position(gapX1, gapY1 + gapY3*8);
  playBtn22.size(btnSizeX, btnSizeY);
  playBtn22.mousePressed(playSnd22);

  playBtn23 = createButton('Y es por eso!');
  playBtn23.position(gapX1 + gapX3*1, gapY1 + gapY3*8);
  playBtn23.size(btnSizeX, btnSizeY);
  playBtn23.mousePressed(playSnd23);

  playBtn24 = createButton('Aquí todavía no se ha llegado a esos datos!');
  playBtn24.position(gapX1 + gapX3*2, gapY1 + gapY3*8);
  playBtn24.size(btnSizeX, btnSizeY);
  playBtn24.mousePressed(playSnd24);


  playBtn25 = createButton('Se descontroló muchísimo!!');
  playBtn25.position(gapX1, gapY1 + gapY3*9);
  playBtn25.size(btnSizeX, btnSizeY);
  playBtn25.mousePressed(playSnd25);

  playBtn26 = createButton('Eh, perdonen chicos!');
  playBtn26.position(gapX1 + gapX3*1, gapY1 + gapY3*9);
  playBtn26.size(btnSizeX, btnSizeY);
  playBtn26.mousePressed(playSnd26);

  playBtn27 = createButton('Me quemaron la cabeza, ya no se nada!');
  playBtn27.position(gapX1 + gapX3*2, gapY1 + gapY3*9);
  playBtn27.size(btnSizeX, btnSizeY);
  playBtn27.mousePressed(playSnd27);


  playBtn28 = createButton('De acuerdo, entonces todo bien!');
  playBtn28.position(gapX1, gapY1 + gapY3*10);
  playBtn28.size(btnSizeX, btnSizeY);
  playBtn28.mousePressed(playSnd28);

  playBtn29 = createButton('Bueno, ya fue Valen!!');
  playBtn29.position(gapX1 + gapX3*1, gapY1 + gapY3*10);
  playBtn29.size(btnSizeX, btnSizeY);
  playBtn29.mousePressed(playSnd29);

  playBtn30 = createButton('Ya pasó!!');
  playBtn30.position(gapX1 + gapX3*2, gapY1 + gapY3*10);
  playBtn30.size(btnSizeX, btnSizeY);
  playBtn30.mousePressed(playSnd30);


  playBtn31 = createButton('Yo habría hecho lo mismo!');
  playBtn31.position(gapX1, gapY1 + gapY3*11);
  playBtn31.size(btnSizeX, btnSizeY);
  playBtn31.mousePressed(playSnd31);

  playBtn32 = createButton('Claro!!!');
  playBtn32.position(gapX1 + gapX3*1, gapY1 + gapY3*11);
  playBtn32.size(btnSizeX, btnSizeY);
  playBtn32.mousePressed(playSnd32);


  playBtn33 = createButton('Que ella decida!!');
  playBtn33.position(gapX1 + gapX3*2, gapY1 + gapY3*11);
  playBtn33.size(btnSizeX, btnSizeY);
  playBtn33.mousePressed(playSnd33);


  playBtn34 = createButton('No te preocupes, todo va a ir bien!');
  playBtn34.position(gapX1, gapY1 + gapY3*12);
  playBtn34.size(btnSizeX, btnSizeY);
  playBtn34.mousePressed(playSnd34);

  playBtn35 = createButton('Tiene 2 opciones...');
  playBtn35.position(gapX1 + gapX3*1, gapY1 + gapY3*12);
  playBtn35.size(btnSizeX, btnSizeY);
  playBtn35.mousePressed(playSnd35);

  playBtn36 = createButton('Actualizar...');
  playBtn36.position(gapX1 + gapX3*2, gapY1 + gapY3*12);
  playBtn36.size(btnSizeX, btnSizeY);
  playBtn36.mousePressed(playSnd36);


  playBtn37 = createButton('Restaurar...');
  playBtn37.position(gapX1, gapY1 + gapY3*13);
  playBtn37.size(btnSizeX, btnSizeY);
  playBtn37.mousePressed(playSnd37);

  playBtn38 = createButton('Me secó la cabeza ese caso, mal!!');
  playBtn38.position(gapX1 + gapX3*1, gapY1 + gapY3*13);
  playBtn38.size(btnSizeX, btnSizeY);
  playBtn38.mousePressed(playSnd38);

  playBtn39 = createButton('MAL!!');
  playBtn39.position(gapX1 + gapX3*2, gapY1 + gapY3*13);
  playBtn39.size(btnSizeX, btnSizeY);
  playBtn39.mousePressed(playSnd39);


  playBtn40 = createButton('Te juro que casi la mando a la mierda!!!');
  playBtn40.position(gapX1, gapY1 + gapY3*14);
  playBtn40.size(btnSizeX, btnSizeY);
  playBtn40.mousePressed(playSnd40);


  playBtn41 = createButton('40 min con la vieja!!');
  playBtn41.position(gapX1 + gapX3*1, gapY1 + gapY3*14);
  playBtn41.size(btnSizeX, btnSizeY);
  playBtn41.mousePressed(playSnd41);

  playBtn42 = createButton('Un quilombo fue eso!!!');
  playBtn42.position(gapX1 + gapX3*2, gapY1 + gapY3*14);
  playBtn42.size(btnSizeX, btnSizeY);
  playBtn42.mousePressed(playSnd42);


  playBtn43 = createButton('La pasé a T2, quedate con el caso!');
  playBtn43.position(gapX1, gapY1 + gapY3*15);
  playBtn43.size(btnSizeX, btnSizeY);
  playBtn43.mousePressed(playSnd43);

  playBtn44 = createButton('Nada!!');
  playBtn44.position(gapX1 + gapX3*1, gapY1 + gapY3*15);
  playBtn44.size(btnSizeX, btnSizeY);
  playBtn44.mousePressed(playSnd44);

  playBtn45 = createButton('Cero paciencia!!');
  playBtn45.position(gapX1 + gapX3*2, gapY1 + gapY3*15);
  playBtn45.size(btnSizeX, btnSizeY);
  playBtn45.mousePressed(playSnd45);


  playBtn46 = createButton('Si, quedate tranquilo, no se que...');
  playBtn46.position(gapX1, gapY1 + gapY3*16);
  playBtn46.size(btnSizeX, btnSizeY);
  playBtn46.mousePressed(playSnd46);

  playBtn47 = createButton('Esa vieja.. ahhhjjj');
  playBtn47.position(gapX1 + gapX3*1, gapY1 + gapY3*16);
  playBtn47.size(btnSizeX, btnSizeY);
  playBtn47.mousePressed(playSnd47);

  playBtn48 = createButton('No entendía una bosta...!');
  playBtn48.position(gapX1 + gapX3*2, gapY1 + gapY3*16);
  playBtn48.size(btnSizeX, btnSizeY);
  playBtn48.mousePressed(playSnd48);


  playBtn49 = createButton('Vieja grande, no entendia nada!');
  playBtn49.position(gapX1, gapY1 + gapY3*17);
  playBtn49.size(btnSizeX, btnSizeY);
  playBtn49.mousePressed(playSnd49);

  playBtn50 = createButton('Y un quilombo!');
  playBtn50.position(gapX1 + gapX3*1, gapY1 + gapY3*17);
  playBtn50.size(btnSizeX, btnSizeY);
  playBtn50.mousePressed(playSnd50);

  playBtn51 = createButton('Estuvo 20 mil años!');
  playBtn51.position(gapX1 + gapX3*2, gapY1 + gapY3*17);
  playBtn51.size(btnSizeX, btnSizeY);
  playBtn51.mousePressed(playSnd51);


  playBtn52 = createButton('No, un quilombo!!!');
  playBtn52.position(gapX1, gapY1 + gapY3*18);
  playBtn52.size(btnSizeX, btnSizeY);
  playBtn52.mousePressed(playSnd52);

  playBtn53 = createButton('Me sacan las ganas de trabajar!');
  playBtn53.position(gapX1 + gapX3*1, gapY1 + gapY3*18);
  playBtn53.size(btnSizeX, btnSizeY);
  playBtn53.mousePressed(playSnd53);

  playBtn54 = createButton('Claro, complicado, respondia así!');
  playBtn54.position(gapX1 + gapX3*2, gapY1 + gapY3*18);
  playBtn54.size(btnSizeX, btnSizeY);
  playBtn54.mousePressed(playSnd54);


  playBtn55 = createButton('NO NO NO NO NO!');
  playBtn55.position(gapX1, gapY1 + gapY3*19);
  playBtn55.size(btnSizeX, btnSizeY);
  playBtn55.mousePressed(playSnd55);

  playBtn56 = createButton('No tengo otro, tiene que ser ese!');
  playBtn56.position(gapX1 + gapX3*1, gapY1 + gapY3*19);
  playBtn56.size(btnSizeX, btnSizeY);
  playBtn56.mousePressed(playSnd56);


  playBtn57 = createButton('Imaginate trabajar con una boluda así!');
  playBtn57.position(gapX1 + gapX3*2, gapY1 + gapY3*19);
  playBtn57.size(btnSizeX, btnSizeY);
  playBtn57.mousePressed(playSnd57);


  playBtn58 = createButton('Es imposible!');
  playBtn58.position(gapX1, gapY1 + gapY3*20);
  playBtn58.size(btnSizeX, btnSizeY);
  playBtn58.mousePressed(playSnd58);

  playBtn59 = createButton('Uhhh, chicos, no se que hacer!');
  playBtn59.position(gapX1 + gapX3*1, gapY1 + gapY3*20);
  playBtn59.size(btnSizeX, btnSizeY);
  playBtn59.mousePressed(playSnd59);

  playBtn60 = createButton('No entiendo nada de la vida!');
  playBtn60.position(gapX1 + gapX3*2, gapY1 + gapY3*20);
  playBtn60.size(btnSizeX, btnSizeY);
  playBtn60.mousePressed(playSnd60);


  playBtn61 = createButton('Pero saben qué?');
  playBtn61.position(gapX1, gapY1 + gapY3*21);
  playBtn61.size(btnSizeX, btnSizeY);
  playBtn61.mousePressed(playSnd61);

  playBtn62 = createButton('No me importa, son las 8!');
  playBtn62.position(gapX1 + gapX3*1, gapY1 + gapY3*21);
  playBtn62.size(btnSizeX, btnSizeY);
  playBtn62.mousePressed(playSnd62);

  playBtn63 = createButton('Disfruten su sabado, muchas gracias...!');
  //playBtn63.style('font-size', 10);
  playBtn63.position(gapX1 + gapX3*2, gapY1 + gapY3*21);
  playBtn63.size(btnSizeX, btnSizeY);
  playBtn63.mousePressed(playSnd63);


  playBtn64 = createButton('SSSiiii!!');
  playBtn64.position(gapX1, gapY1 + gapY3*22);
  playBtn64.size(btnSizeX, btnSizeY);
  playBtn64.mousePressed(playSnd64);

  playBtn65 = createButton('Psiiii!');
  playBtn65.position(gapX1 + gapX3*1, gapY1 + gapY3*22);
  playBtn65.size(btnSizeX, btnSizeY);
  playBtn65.mousePressed(playSnd65);

  playBtn66 = createButton('Ehhhh!');
  playBtn66.position(gapX1 + gapX3*2, gapY1 + gapY3*22);
  playBtn66.size(btnSizeX, btnSizeY);
  playBtn66.mousePressed(playSnd66);


  playBtn67 = createButton('Claro!');
  playBtn67.position(gapX1, gapY1 + gapY3*23);
  playBtn67.size(btnSizeX, btnSizeY);
  playBtn67.mousePressed(playSnd67);

  playBtn68 = createButton('Pero ahora esa esta cerrada!');
  playBtn68.position(gapX1 + gapX3*1, gapY1 + gapY3*23);
  playBtn68.size(btnSizeX, btnSizeY);
  playBtn68.mousePressed(playSnd68);

  playBtn69 = createButton('Y yo le hice un mail-in!');
  playBtn69.position(gapX1 + gapX3*2, gapY1 + gapY3*23);
  playBtn69.size(btnSizeX, btnSizeY);
  playBtn69.mousePressed(playSnd69);


  playBtn70 = createButton('Ya no se!');
  //playBtn70.style('font-size', 10);
  //playBtn70.style('text-align', 'left');
  playBtn70.position(gapX1, gapY1 + gapY3*24);
  playBtn70.size(btnSizeX, btnSizeY);
  playBtn70.mousePressed(playSnd70);

  playBtn71 = createButton('---');
  playBtn71.position(gapX1 + gapX3*1, gapY1 + gapY3*24);
  playBtn71.size(btnSizeX, btnSizeY);
  //playBtn71.mousePressed(playSnd71);

  playBtn72 = createButton('---');
  playBtn72.position(gapX1 + gapX3*2, gapY1 + gapY3*24);
  playBtn72.size(btnSizeX, btnSizeY);
  //playBtn72.mousePressed(playSnd72);
}


function playSnd1() { 
  if (!s1.isPlaying()) { 
    s1.play();
  } else { 
    s1.stop();
  }
}

function playSnd2() { 
  if (!s2.isPlaying()) { 
    s2.play();
  } else { 
    s2.stop();
  }
}

function playSnd3() { 
  if (!s3.isPlaying()) { 
    s3.play();
  } else { 
    s3.stop();
  }
}

function playSnd4() { 
  if (!s4.isPlaying()) { 
    s4.play();
  } else { 
    s4.stop();
  }
}

function playSnd5() { 
  if (!s5.isPlaying()) { 
    s5.play();
  } else { 
    s5.stop();
  }
}

function playSnd6() { 
  if (!s6.isPlaying()) { 
    s6.play();
  } else { 
    s6.stop();
  }
}

function playSnd7() { 
  if (!s7.isPlaying()) { 
    s7.play();
  } else { 
    s7.stop();
  }
}

function playSnd8() { 
  if (!s8.isPlaying()) { 
    s8.play();
  } else { 
    s8.stop();
  }
}

function playSnd9() { 
  if (!s9.isPlaying()) { 
    s9.play();
  } else { 
    s9.stop();
  }
}

function playSnd10() { 
  if (!s10.isPlaying()) { 
    s10.play();
  } else { 
    s10.stop();
  }
}

function playSnd11() { 
  if (!s11.isPlaying()) { 
    s11.play();
  } else { 
    s11.stop();
  }
}

function playSnd12() { 
  if (!s12.isPlaying()) { 
    s12.play();
  } else { 
    s12.stop();
  }
}

function playSnd13() { 
  if (!s13.isPlaying()) { 
    s13.play();
  } else { 
    s13.stop();
  }
}

function playSnd14() { 
  if (!s14.isPlaying()) { 
    s14.play();
  } else { 
    s14.stop();
  }
}

function playSnd15() { 
  if (!s15.isPlaying()) { 
    s15.play();
  } else { 
    s15.stop();
  }
}

function playSnd16() { 
  if (!s16.isPlaying()) { 
    s16.play();
  } else { 
    s16.stop();
  }
}

function playSnd17() { 
  if (!s17.isPlaying()) { 
    s17.play();
  } else { 
    s17.stop();
  }
}

function playSnd18() { 
  if (!s18.isPlaying()) { 
    s18.play();
  } else { 
    s18.stop();
  }
}

function playSnd19() { 
  if (!s19.isPlaying()) { 
    s19.play();
  } else { 
    s19.stop();
  }
}

function playSnd20() { 
  if (!s20.isPlaying()) { 
    s20.play();
  } else { 
    s20.stop();
  }
}

function playSnd21() { 
  if (!s21.isPlaying()) { 
    s21.play();
  } else { 
    s21.stop();
  }
}

function playSnd22() { 
  if (!s22.isPlaying()) { 
    s22.play();
  } else { 
    s22.stop();
  }
}

function playSnd23() { 
  if (!s23.isPlaying()) { 
    s23.play();
  } else { 
    s23.stop();
  }
}

function playSnd24() { 
  if (!s24.isPlaying()) { 
    s24.play();
  } else { 
    s24.stop();
  }
}

function playSnd25() { 
  if (!s25.isPlaying()) { 
    s25.play();
  } else { 
    s25.stop();
  }
}

function playSnd26() { 
  if (!s26.isPlaying()) { 
    s26.play();
  } else { 
    s26.stop();
  }
}

function playSnd27() { 
  if (!s27.isPlaying()) { 
    s27.play();
  } else { 
    s27.stop();
  }
}

function playSnd28() { 
  if (!s28.isPlaying()) { 
    s28.play();
  } else { 
    s28.stop();
  }
}

function playSnd29() { 
  if (!s29.isPlaying()) { 
    s29.play();
  } else { 
    s29.stop();
  }
}

function playSnd30() { 
  if (!s30.isPlaying()) { 
    s30.play();
  } else { 
    s30.stop();
  }
}

function playSnd31() { 
  if (!s31.isPlaying()) { 
    s31.play();
  } else { 
    s31.stop();
  }
}

function playSnd32() { 
  if (!s32.isPlaying()) { 
    s32.play();
  } else { 
    s32.stop();
  }
}

function playSnd33() { 
  if (!s33.isPlaying()) { 
    s33.play();
  } else { 
    s33.stop();
  }
}

function playSnd34() {
  if (!s34.isPlaying()) {
    s34.play();
  } else {
    s34.stop();
  }
}

function playSnd35() {
  if (!s35.isPlaying()) {
    s35.play();
  } else {
    s35.stop();
  }
}

function playSnd36() {
  if (!s36.isPlaying()) {
    s36.play();
  } else {
    s36.stop();
  }
}

function playSnd37() {
  if (!s37.isPlaying()) {
    s37.play();
  } else {
    s37.stop();
  }
}

function playSnd38() {
  if (!s38.isPlaying()) {
    s38.play();
  } else {
    s38.stop();
  }
}

function playSnd39() {
  if (!s39.isPlaying()) {
    s39.play();
  } else {
    s39.stop();
  }
}

function playSnd40() {
  if (!s40.isPlaying()) {
    s40.play();
  } else {
    s40.stop();
  }
}

function playSnd41() {
  if (!s41.isPlaying()) {
    s41.play();
  } else {
    s41.stop();
  }
}

function playSnd42() {
  if (!s42.isPlaying()) {
    s42.play();
  } else {
    s42.stop();
  }
}

function playSnd43() {
  if (!s43.isPlaying()) {
    s43.play();
  } else {
    s43.stop();
  }
}

function playSnd44() {
  if (!s44.isPlaying()) {
    s44.play();
  } else {
    s44.stop();
  }
}

function playSnd45() {
  if (!s45.isPlaying()) {
    s45.play();
  } else {
    s45.stop();
  }
}

function playSnd46() {
  if (!s46.isPlaying()) {
    s46.play();
  } else {
    s46.stop();
  }
}

function playSnd47() {
  if (!s47.isPlaying()) {
    s47.play();
  } else {
    s47.stop();
  }
}

function playSnd48() {
  if (!s48.isPlaying()) {
    s48.play();
  } else {
    s48.stop();
  }
}

function playSnd49() {
  if (!s49.isPlaying()) {
    s49.play();
  } else {
    s49.stop();
  }
}

function playSnd50() {
  if (!s50.isPlaying()) {
    s50.play();
  } else {
    s50.stop();
  }
}

function playSnd51() {
  if (!s51.isPlaying()) {
    s51.play();
  } else {
    s51.stop();
  }
}

function playSnd52() {
  if (!s52.isPlaying()) {
    s52.play();
  } else {
    s52.stop();
  }
}

function playSnd53() {
  if (!s53.isPlaying()) {
    s53.play();
  } else {
    s53.stop();
  }
}

function playSnd54() {
  if (!s54.isPlaying()) {
    s54.play();
  } else {
    s54.stop();
  }
}

function playSnd55() {
  if (!s55.isPlaying()) {
    s55.play();
  } else {
    s55.stop();
  }
}

function playSnd56() {
  if (!s56.isPlaying()) {
    s56.play();
  } else {
    s56.stop();
  }
}

function playSnd57() {
  if (!s57.isPlaying()) {
    s57.play();
  } else {
    s57.stop();
  }
}

function playSnd58() {
  if (!s58.isPlaying()) {
    s58.play();
  } else {
    s58.stop();
  }
}

function playSnd59() {
  if (!s59.isPlaying()) {
    s59.play();
  } else {
    s59.stop();
  }
}

function playSnd60() {
  if (!s60.isPlaying()) {
    s60.play();
  } else {
    s60.stop();
  }
}

function playSnd61() {
  if (!s61.isPlaying()) {
    s61.play();
  } else {
    s61.stop();
  }
}

function playSnd62() {
  if (!s62.isPlaying()) {
    s62.play();
  } else {
    s62.stop();
  }
}

function playSnd63() {
  if (!s63.isPlaying()) {
    s63.play();
  } else {
    s63.stop();
  }
}

function playSnd64() {
  if (!s64.isPlaying()) {
    s64.play();
  } else {
    s64.stop();
  }
}

function playSnd65() {
  if (!s65.isPlaying()) {
    s65.play();
  } else {
    s65.stop();
  }
}

function playSnd66() {
  if (!s66.isPlaying()) {
    s66.play();
  } else {
    s66.stop();
  }
}

function playSnd67() {
  if (!s67.isPlaying()) {
    s67.play();
  } else {
    s67.stop();
  }
}

function playSnd68() {
  if (!s68.isPlaying()) {
    s68.play();
  } else {
    s68.stop();
  }
}

function playSnd69() {
  if (!s69.isPlaying()) {
    s69.play();
  } else {
    s69.stop();
  }
}

function playSnd70() {
  if (!s70.isPlaying()) {
    s70.play();
  } else {
    s70.stop();
  }
}
