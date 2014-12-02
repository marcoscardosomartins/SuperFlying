(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 550,
	fps: 30,
	color: "#333333",
	manifest: [
		{src:"images/ant.png", id:"ant"},
		{src:"images/arvores.png", id:"arvores"},
		{src:"images/bee.png", id:"bee"},
		{src:"images/bird.png", id:"bird"},
		{src:"images/buildings.png", id:"buildings"},
		{src:"images/buildings2.png", id:"buildings2"},
		{src:"images/clouds.png", id:"clouds"},
		{src:"images/clouds2.png", id:"clouds2"},
		{src:"images/clouds3.png", id:"clouds3"},
		{src:"images/clouds4.png", id:"clouds4"},
		{src:"images/coin01.png", id:"coin01"},
		{src:"images/coin02.png", id:"coin02"},
		{src:"images/coin03.png", id:"coin03"},
		{src:"images/coin04.png", id:"coin04"},
		{src:"images/coin05.png", id:"coin05"},
		{src:"images/coin06.png", id:"coin06"},
		{src:"images/coin07.png", id:"coin07"},
		{src:"images/coin08.png", id:"coin08"},
		{src:"images/coin09.png", id:"coin09"},
		{src:"images/coin10.png", id:"coin10"},
		{src:"images/collectorCoin.png", id:"collectorCoin"},
		{src:"images/fundo.png", id:"fundo"},
		{src:"images/ground.png", id:"ground"},
		{src:"images/ground2.png", id:"ground2"},
		{src:"images/ground3.png", id:"ground3"},
		{src:"images/ground4.png", id:"ground4"},
		{src:"images/hill.png", id:"hill"},
		{src:"images/hills2.png", id:"hills2"},
		{src:"images/hills3.png", id:"hills3"},
		{src:"images/hills4.png", id:"hills4"},
		{src:"images/informacoes.png", id:"informacoes"},
		{src:"images/instrucoes.png", id:"instrucoes"},
		{src:"images/ladybug.png", id:"ladybug"},
		{src:"images/mato1.png", id:"mato1"},
		{src:"images/mato2.png", id:"mato2"},
		{src:"images/mosquito.png", id:"mosquito"},
		{src:"images/mountain.png", id:"mountain"},
		{src:"images/mountain3.png", id:"mountain3"},
		{src:"images/mountain4.png", id:"mountain4"},
		{src:"images/mouse.png", id:"mouse"},
		{src:"images/obstacle.png", id:"obstacle"},
		{src:"images/obstacle2.png", id:"obstacle2"},
		{src:"images/obstacle3.png", id:"obstacle3"},
		{src:"images/obstacle4.png", id:"obstacle4"},
		{src:"images/periquito.png", id:"periquito"},
		{src:"images/premio01.png", id:"premio01"},
		{src:"images/premio01_1.png", id:"premio01_1"},
		{src:"images/premio02.png", id:"premio02"},
		{src:"images/premio02_1.png", id:"premio02_1"},
		{src:"images/premio03.png", id:"premio03"},
		{src:"images/premio03_1.png", id:"premio03_1"},
		{src:"images/premio04.png", id:"premio04"},
		{src:"images/premio04_1.png", id:"premio04_1"},
		{src:"images/premio05.png", id:"premio05"},
		{src:"images/premio05_1.png", id:"premio05_1"},
		{src:"images/premio06.png", id:"premio06"},
		{src:"images/premio06_1.png", id:"premio06_1"},
		{src:"images/premio07.png", id:"premio07"},
		{src:"images/premio07_1.png", id:"premio07_1"},
		{src:"images/space.png", id:"space"},
		{src:"images/title.png", id:"title"},
		{src:"images/top.png", id:"top"},
		{src:"images/toque.png", id:"toque"},
		{src:"images/trees.png", id:"trees"},
		{src:"sounds/coin.mp3", id:"coin"},
		{src:"sounds/pancada.mp3", id:"pancada"}
	]
};



// symbols:



(lib.ant = function() {
	this.initialize(img.ant);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,149);


(lib.arvores = function() {
	this.initialize(img.arvores);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,106);


(lib.bee = function() {
	this.initialize(img.bee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,199);


(lib.bird = function() {
	this.initialize(img.bird);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,125);


(lib.buildings = function() {
	this.initialize(img.buildings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,119);


(lib.buildings2 = function() {
	this.initialize(img.buildings2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,93);


(lib.clouds = function() {
	this.initialize(img.clouds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,910,127);


(lib.clouds2 = function() {
	this.initialize(img.clouds2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,857,134);


(lib.clouds3 = function() {
	this.initialize(img.clouds3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,916,151);


(lib.clouds4 = function() {
	this.initialize(img.clouds4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,891,104);


(lib.coin01 = function() {
	this.initialize(img.coin01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.coin02 = function() {
	this.initialize(img.coin02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.coin03 = function() {
	this.initialize(img.coin03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.coin04 = function() {
	this.initialize(img.coin04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.coin05 = function() {
	this.initialize(img.coin05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.coin06 = function() {
	this.initialize(img.coin06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.coin07 = function() {
	this.initialize(img.coin07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.coin08 = function() {
	this.initialize(img.coin08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.coin09 = function() {
	this.initialize(img.coin09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.coin10 = function() {
	this.initialize(img.coin10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


(lib.collectorCoin = function() {
	this.initialize(img.collectorCoin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.fundo = function() {
	this.initialize(img.fundo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.ground = function() {
	this.initialize(img.ground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,86);


(lib.ground2 = function() {
	this.initialize(img.ground2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,87);


(lib.ground3 = function() {
	this.initialize(img.ground3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,86);


(lib.ground4 = function() {
	this.initialize(img.ground4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,89);


(lib.hill = function() {
	this.initialize(img.hill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,37);


(lib.hills2 = function() {
	this.initialize(img.hills2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,154);


(lib.hills3 = function() {
	this.initialize(img.hills3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,618,65);


(lib.hills4 = function() {
	this.initialize(img.hills4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,49);


(lib.informacoes = function() {
	this.initialize(img.informacoes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,625,475);


(lib.instrucoes = function() {
	this.initialize(img.instrucoes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,625,458);


(lib.ladybug = function() {
	this.initialize(img.ladybug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,110);


(lib.mato1 = function() {
	this.initialize(img.mato1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,286);


(lib.mato2 = function() {
	this.initialize(img.mato2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,253);


(lib.mosquito = function() {
	this.initialize(img.mosquito);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,89);


(lib.mountain = function() {
	this.initialize(img.mountain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,165);


(lib.mountain3 = function() {
	this.initialize(img.mountain3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,193);


(lib.mountain4 = function() {
	this.initialize(img.mountain4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,110);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,100);


(lib.obstacle = function() {
	this.initialize(img.obstacle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,455);


(lib.obstacle2 = function() {
	this.initialize(img.obstacle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,384);


(lib.obstacle3 = function() {
	this.initialize(img.obstacle3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,387);


(lib.obstacle4 = function() {
	this.initialize(img.obstacle4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,389);


(lib.periquito = function() {
	this.initialize(img.periquito);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,162);


(lib.premio01 = function() {
	this.initialize(img.premio01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,24);


(lib.premio01_1 = function() {
	this.initialize(img.premio01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.premio02 = function() {
	this.initialize(img.premio02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,24);


(lib.premio02_1 = function() {
	this.initialize(img.premio02_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.premio03 = function() {
	this.initialize(img.premio03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,24);


(lib.premio03_1 = function() {
	this.initialize(img.premio03_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.premio04 = function() {
	this.initialize(img.premio04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,21);


(lib.premio04_1 = function() {
	this.initialize(img.premio04_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.premio05 = function() {
	this.initialize(img.premio05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,16);


(lib.premio05_1 = function() {
	this.initialize(img.premio05_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.premio06 = function() {
	this.initialize(img.premio06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,17);


(lib.premio06_1 = function() {
	this.initialize(img.premio06_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.premio07 = function() {
	this.initialize(img.premio07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,22);


(lib.premio07_1 = function() {
	this.initialize(img.premio07_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.space = function() {
	this.initialize(img.space);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,437,100);


(lib.title = function() {
	this.initialize(img.title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,250);


(lib.top = function() {
	this.initialize(img.top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,961,269);


(lib.toque = function() {
	this.initialize(img.toque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,80);


(lib.trees = function() {
	this.initialize(img.trees);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,102);


(lib.rankingVoltar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{s1:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AgCBqIAyhbIAOAxQAUgPAKgXQASgkgPgoQgOgngngSQgmgSgmAPQgoAPgRAmQgOAfAGAfQAHAhAaAWQAGAFABAJQAAAIgFAHQgGAGgIABQgJAAgGgFQgkgggKguQgJgsATgrQAZg2A4gUQA1gVA2AZQA2AYAUA4QAVA3gZA0QgSAogmAXIAOA1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5A37").s().p("AjlDmQhghfAAiHQAAiGBghfQBfhgCGAAQCGAABgBgQBgBfAACGQAACHhgBfQhgBgiGAAQiGAAhfhgg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AjlDmQhghfAAiHQAAiGBghfQBfhgCGAAQCGAABgBgQBgBfAACGQAACHhgBfQhgBgiGAAQiGAAhfhgg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBD60E").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AD1C").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F38329").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-32.6,65.2,65.3);


(lib.rankingPrice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Camada 1
	this.instance = new lib.premio01();
	this.instance.setTransform(-10,-12);

	this.instance_1 = new lib.premio02();
	this.instance_1.setTransform(-10,-12);

	this.instance_2 = new lib.premio03();
	this.instance_2.setTransform(-10,-12);

	this.instance_3 = new lib.premio04();
	this.instance_3.setTransform(-10,-10.5);

	this.instance_4 = new lib.premio05();
	this.instance_4.setTransform(-10.5,-8);

	this.instance_5 = new lib.premio06();
	this.instance_5.setTransform(-11,-8.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59948E").s().p("AhQAVIAAgpIChAAIAAApg");
	this.shape.setTransform(0,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E837D").s().p("AgVAVIANgVIgNgUIAcAAIAPAfIgGAKg");
	this.shape_1.setTransform(-8.5,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E837D").s().p("AgPAVIgGgKIAPgfIAcAAIgNAUIANAVg");
	this.shape_2.setTransform(8.5,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDADIgBgDIgDgEIAEACIAEgCIAFgDIgCAHIABADIADADIgEgCIgEABIgFADg");
	this.shape_3.setTransform(-5.7,-5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCAEIgCgEIgDgFIAHACIADgCIADgCIgBAEIAAAEIADAEIgFgBIgDABIgFADg");
	this.shape_4.setTransform(0.9,-7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF711E").s().p("Ag6ADIgFgFIB/AAIgEAFg");
	this.shape_5.setTransform(0.2,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC9B22").s().p("Ag6AHIgFgGIAFgHIB0AAIAGAHIgEAGg");
	this.shape_6.setTransform(0.2,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6A220").s().p("AgTAHIgJgaIADgCIAKAaIAPAMIAPgCIAJgPIABgHIACACIACAAIgBAFIgLATIgSADg");
	this.shape_7.setTransform(3.4,-3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEAB19").s().p("AgHAGIgBgEQAAgDADgDQADgEACAAQAFAAADAEIABAEQAAACgDAEQgDADgDAAQgFAAgCgDg");
	this.shape_8.setTransform(3.2,-7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CD7C19").s().p("AgJACQADADAEAAQADAAADgDQAEgCAAgEIgBgEQADAEAAAEQAAADgDADQgDADgEAAQgHAAgCgHg");
	this.shape_9.setTransform(3.3,-6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EEAB19").s().p("AgHAGIgBgEQAAgDADgDQADgEADAAQAEAAAEAEIAAAEQAAACgDAEQgDADgDAAQgEAAgDgDg");
	this.shape_10.setTransform(-3,-7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CD7C19").s().p("AgJACQADADAEAAQADAAADgDQADgCAAgEIAAgEQADAEAAAEQAAADgDADQgDADgEAAQgHAAgCgHg");
	this.shape_11.setTransform(-2.8,-6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B07220").s().p("AgHAQIgFgIIALAFIAIgJIADgNIgCgHIACAAIADAHIgEARIgJAJg");
	this.shape_12.setTransform(-3.9,-4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6A220").s().p("AgRASIgIgRIgBgIIABAAIAAAHIAIANIARADIAOgNIAJgXIAFABIgJAYIgSAQg");
	this.shape_13.setTransform(-3,-3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6F2B49").s().p("AgBgMIADAMIgDANg");
	this.shape_14.setTransform(-3.6,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#903D61").s().p("AgBAAIADgMIAAAZg");
	this.shape_15.setTransform(-4.2,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6F2B49").s().p("AgBgMIADAMIgDANg");
	this.shape_16.setTransform(4.3,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#903D61").s().p("AgBAAIADgMIAAAZg");
	this.shape_17.setTransform(3.8,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6F2B49").s().p("AgDgSIAGATIgGASg");
	this.shape_18.setTransform(0.5,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#903D61").s().p("AgCABIAFgTIAAAlg");
	this.shape_19.setTransform(-0.3,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFDA5F").s().p("AgVAdIACgTIgIgaIAKASIATAEIAVgQIAFgTIAAA7g");
	this.shape_20.setTransform(-3.1,-1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EEAB19").s().p("AgLAHIgBgFQABgEAEgEQAEgEAEAAQAGAAAFADIABAGQAAAEgFAEQgEAEgEABQgHgBgEgEg");
	this.shape_21.setTransform(0,-7.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CD7C19").s().p("AgNADQAEAEAHAAQAEAAAEgEQAFgDAAgGIgBgFQADAFAAAGQAAADgDAFQgFAEgFAAQgJAAgEgJg");
	this.shape_22.setTransform(0.2,-6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EEAB19").s().p("AgKAIIgBgGQgBgEAFgEQAEgFAEABQAHgBAEAFIABAFQAAAEgFAFQgEADgEAAQgHAAgDgDg");
	this.shape_23.setTransform(6.5,-5.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CD7C19").s().p("AgMADQADAEAHAAQAEAAAEgEQAFgDAAgGIgBgFQADAEAAAGQAAAEgDAFQgFAEgFAAQgJAAgDgJg");
	this.shape_24.setTransform(6.7,-5.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EEAB19").s().p("AgLAIIgBgGQABgEAEgEQAEgFAEABQAGgBAFAFIABAFQgBAEgEAFQgEADgFAAQgGAAgEgDg");
	this.shape_25.setTransform(-6.8,-5.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CD7C19").s().p("AgNADQAEAEAGAAQAFAAAEgEQAEgDABgGIgBgFQADAEAAAGQAAAEgDAFQgFAEgFAAQgJAAgEgJg");
	this.shape_26.setTransform(-6.6,-5.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFC20E").s().p("AgjgpIAFAAIACAEIAKAcIAPAKIAOgBIAIgNIABgNIAIgJIAIAJIgJATIgHAXIACAWIgBACIg4ACg");
	this.shape_27.setTransform(3.8,-2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFC20E").s().p("AgVAoIAAgCIABgWIgGgXIgJgTIAIgJIAIAJIABANIAIANIAOABIAPgKIALggIAGAAIAABTg");
	this.shape_28.setTransform(-3.5,-2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B07220").s().p("AALATIgHgFIgEgLIAAABIgMAKIgHgDIgEgIIALAFIAJgIIADgNIgBgGIABAAIABAGIADgCIgBAOIADALIAIAFIAKAAIgDAFg");
	this.shape_29.setTransform(3.1,-4.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D18619").s().p("Ag3APIgBgPIAOAHIAKgHIADgNIgDgKIAEgDIAGADIAAANIAGAKIAKABIAUAAIALgHIACgNIgBgHIAIgDIACAIIgBAOIAEALIAIADIAKgCIAAAJIgPAKIhJAGg");
	this.shape_30.setTransform(0,-3.6);

	this.instance_6 = new lib.premio07();
	this.instance_6.setTransform(-15,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-12,20,24);


(lib.quizOption = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.certo = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// text
	this.txt2 = new cjs.Text("", "24px 'Jockey One'", "#FFFFFF");
	this.txt2.name = "txt2";
	this.txt2.lineHeight = 22;
	this.txt2.lineWidth = 560;
	this.txt2.setTransform(13.1,8.7);

	this.txt = new cjs.Text("", "18px 'Jockey One'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 16;
	this.txt.lineWidth = 560;
	this.txt.setTransform(13.1,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.txt2}]}).wait(3));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D5254").s().p("EglKADYIAAmvMBKVAAAIAAGvg");
	this.shape.setTransform(295,27.5,1.24,1.273);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjGA0IANg4IBqApICljIIBxglIj2GRgAiwAuIB9B7IDMlNIg3ASIirDPIhigng");
	this.shape_1.setTransform(590,26.8,1.24,1.239);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39B54A").s().p("AikAsIAFgYIBiAnICrjPIA3gSIjMFNg");
	this.shape_2.setTransform(588.5,27.1,1.24,1.239);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5AA146").s().p("EglKADXIAAmtMBKVAAAIAAGtg");
	this.shape_3.setTransform(295,27.4,1.24,1.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjCWIgjguIgiAuIiiABIB+iMIh4icIB1gFIBJBTIBKhTIB1AFIh4CcIB+CMgAAtCDIBrAAIhrh3IBriLIhFgCIhTBcIhRhcIhGACIBrCLIhrB3IBrAAIAsg8g");
	this.shape_4.setTransform(590,27.8,1.264,1.264);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF0000").s().p("AAtCCIgtg7IgsA7IhrABIBrh4IhriKIBGgDIBRBdIBThdIBFADIhrCKIBrB4g");
	this.shape_5.setTransform(590,27.9,1.264,1.264);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BA131A").s().p("EglKADXIAAmtMBKVAAAIAAGtg");
	this.shape_6.setTransform(295,27.5,1.24,1.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,590,55);


(lib.pontuacao = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.collectorCoin();
	this.instance.setTransform(-32.5,-32.3,1.308,1.308);

	this.txt = new cjs.Text("00000", "25px 'Upheaval Pro'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 27;
	this.txt.lineWidth = 100;
	this.txt.setTransform(92.8,-18.6,1.308,1.308);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(52,54,54,0.749)").s().p("AqADJQhTgBg7g7Qg7g7AAhSQAAhSA7g6QA7g8BTAAIXKAAIAAGRg");
	this.shape.setTransform(82.3,0.3,1.308,1.308);

	this.addChild(this.shape,this.txt,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.5,-32.3,225,65.4);


(lib.interacao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// tipo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("A0hA1IAAgRIgbAAIAAgJIgJAAIAAhGIAJAAIAAgJIBRAAIAAAJIAJAAIAABGIgJAAIAAAJIgbAAIAAARgA0hASIAbAAIAAg0IgbAAgAX6AkIAAgSIAbAAIAAASgAWWAkIAAgJIgIAAIAAhGIAIAAIAAgJIBSAAIAAAJIAIAAIAABGIgIAAIAAAJgAWxASIAcAAIAAg0IgcAAgAUhAkIAAhYIAlAAIAAA9IAIAAIAAgJIAJAAIAAgHIAKAAIAAgtIAjAAIAAA0IgJAAIAAAJIgIAAIAAAJIgKAAIAAAJIgIAAIAAAJgAS+AkIAAgSIAcAAIAAg0IgcAAIAAgSIBbAAIAAASIgcAAIAAA0IAcAAIAAASgAR2AkIAAhGIgaAAIAAgSIBaAAIAAASIgcAAIAABGgAP5AkIAAgSIAaAAIAAg0IgaAAIAAgSIBaAAIAAASIgcAAIAAA0IAcAAIAAASgAOMAkIAAgSIBAAAIAAgSIg3AAIAAgHIgJAAIAAgkIAJAAIAAgJIBaAAIAAASIg/AAIAAASIA2AAIAAAJIAJAAIAAAiIgJAAIAAAJgAMpAkIAAgJIgIAAIAAhGIAIAAIAAgJIBSAAIAAAJIAIAAIAABGIgIAAIAAAJgANFASIAaAAIAAg0IgaAAgAK0AkIAAhYIBaAAIAAAJIAKAAIAAAkIgKAAIAAAHIg2AAIAAAkgALYgQIAcAAIAAgSIgcAAgAJIAkIAAgSIA/AAIAAgSIg1AAIAAgHIgKAAIAAgkIAKAAIAAgJIBZAAIAAASIg/AAIAAASIA2AAIAAAJIAJAAIAAAiIgJAAIAAAJgAHlAkIAAgSIAbAAIAAg0IgbAAIAAgSIBaAAIAAASIgaAAIAAA0IAaAAIAAASgAF5AkIAAhYIBSAAIAAAJIAIAAIAAAJIAKAAIAAA0IgKAAIAAAJIgIAAIAAAJgAGeASIASAAIAAgJIAIAAIAAgiIgIAAIAAgJIgSAAgADpAkIAAgJIgJAAIAAhPIAkAAIAABGIAcAAIAAhGIAkAAIAABPIgKAAIAAAJgAB9AkIAAgJIgIAAIAAhGIAIAAIAAgJIBaAAIAAASIg/AAIAAASIAbAAIAAAQIgbAAIAAASIA/AAIAAASgAAIAkIAAgSIBAAAIAAgSIg2AAIAAgHIgKAAIAAgkIAKAAIAAgJIBZAAIAAASIg/AAIAAASIA2AAIAAAJIAJAAIAAAiIgJAAIAAAJgAiGAkIAAgJIgJAAIAAhGIAJAAIAAgJIBRAAIAAAJIAJAAIAABGIgJAAIAAAJgAhrASIAbAAIAAg0IgbAAgAj7AkIAAhYIBRAAIAAAJIAJAAIAAAJIAJAAIAAA0IgJAAIAAAJIgJAAIAAAJgAjXASIASAAIAAgJIAJAAIAAgiIgJAAIAAgJIgSAAgAlVAkIAAgkIgbAAIAAAkIgkAAIAAhPIAJAAIAAgJIBRAAIAAAJIAJAAIAABPgAlwgQIAbAAIAAgSIgbAAgAoAAkIAAhYIAkAAIAABGIA/AAIAAASgApjAkIAAgJIgJAAIAAhGIAJAAIAAgJIBaAAIAAASIg/AAIAAASIAbAAIAAAQIgbAAIAAASIA/AAIAAASgAq0AkIAAhGIgbAAIAAgSIBaAAIAAASIgbAAIAABGgAspAkIAAgkIgbAAIAAAkIgkAAIAAhPIAJAAIAAgJIBRAAIAAAJIAJAAIAABPgAtEgQIAbAAIAAgSIgbAAgAuVAkIAAgbIgJAAIAAgJIgJAAIAAgHIgJAAIAAArIgkAAIAAhYIAkAAIAAAJIAJAAIAAAJIAJAAIAAAJIAJAAIAAgbIAkAAIAABYgAxkAkIAAgJIgJAAIAAhGIAJAAIAAgJIBaAAIAAASIg/AAIAAASIAbAAIAAAQIgbAAIAAASIA/AAIAAASgAzQAkIAAgJIgJAAIAAhPIAkAAIAABGIAbAAIAAhGIAkAAIAABPIgJAAIAAAJgA2oAkIAAgJIgJAAIAAhGIAJAAIAAgJIBRAAIAAAJIAJAAIAABGIgJAAIAAAJgA2NASIAbAAIAAg0IgbAAgA35AkIAAhGIgbAAIAAgSIBaAAIAAASIgbAAIAABGg");
	this.shape.setTransform(-0.4,-35.8);

	this.instance = new lib.toque();
	this.instance.setTransform(-20.9,-20.8,0.942,0.938);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BE43").s().p("AHzA6IAAgJIAJAAIAAgSIgbAAIAAgJIgJAAIAAhGIAJAAIAAgJIBRAAIAAAJIAJAAIAAAbIgkAAIAAgSIgbAAIAAA0IAbAAIAAgQIAkAAIAAAZIgJAAIAAAJIgbAAIAAASIgJAAIAAAJgAapAfIAAgSIAbAAIAAASgAZGAfIAAgJIgJAAIAAhGIAJAAIAAgJIBaAAIAAASIg/AAIAAASIAbAAIAAASIgbAAIAAAQIA/AAIAAASgAXRAfIAAgSIA/AAIAAgQIg2AAIAAgJIgJAAIAAgkIAJAAIAAgJIBaAAIAAASIg/AAIAAASIA2AAIAAAJIAJAAIAAAiIgJAAIAAAJgAVuAfIAAgJIgJAAIAAhPIAkAAIAABGIAbAAIAAhGIAkAAIAABPIgJAAIAAAJgAUCAfIAAgJIgJAAIAAhGIAJAAIAAgJIBRAAIAAAJIAJAAIAABGIgJAAIAAAJgAUdANIAbAAIAAg0IgbAAgATMAfIAAgrIgJAAIAAAJIgJAAIAAAHIgJAAIAAgHIgJAAIAAgJIgJAAIAAArIgkAAIAAhYIAkAAIAAAJIAJAAIAAAJIAJAAIAAAJIAJAAIAAgJIAJAAIAAgJIAJAAIAAgJIAkAAIAABYgAPrAfIAAgJIgJAAIAAhGIAJAAIAAgJIBRAAIAAAJIAJAAIAABGIgJAAIAAAJgAQGANIAbAAIAAg0IgbAAgANSAfIAAgJIgJAAIAAhPIAkAAIAABGIAbAAIAAhGIAkAAIAABPIgJAAIAAAJgALmAfIAAgJIgJAAIAAhGIAJAAIAAgJIBRAAIAAAJIAJAAIAABGIgJAAIAAAJgAMBANIAbAAIAAg0IgbAAgAJNAfIAAgJIgJAAIAAhGIAJAAIAAgJIBRAAIAAAJIAJAAIAABGIgJAAIAAAJgAJoANIAbAAIAAg0IgbAAgAGrAfIAAgiIgbAAIAAAiIgkAAIAAhPIAJAAIAAgJIBRAAIAAAJIAJAAIAABPgAGQgVIAbAAIAAgSIgbAAgAEAAfIAAhYIBaAAIAAAJIAJAAIAAAkIgJAAIAAAJIg2AAIAAAigAEkgVIAbAAIAAgSIgbAAgACUAfIAAgSIA/AAIAAgQIg2AAIAAgJIgJAAIAAgkIAJAAIAAgJIBaAAIAAASIg/AAIAAASIA2AAIAAAJIAJAAIAAAiIgJAAIAAAJgAAxAfIAAgJIgJAAIAAhGIAJAAIAAgJIBaAAIAAASIg/AAIAAASIAbAAIAAASIgbAAIAAAQIA/AAIAAASgAhmAfIAAgJIgJAAIAAhGIAJAAIAAgJIBaAAIAAASIg/AAIAAASIAbAAIAAASIgbAAIAAAQIA/AAIAAASgAjbAfIAAhYIBRAAIAAAJIAJAAIAAAJIAJAAIAAA0IgJAAIAAAJIgJAAIAAAJgAi3ANIASAAIAAgJIAJAAIAAgiIgJAAIAAgJIgSAAgAk1AfIAAgiIgbAAIAAAiIgkAAIAAhPIAJAAIAAgJIBRAAIAAAJIAJAAIAABPgAlQgVIAbAAIAAgSIgbAAgAmhAfIAAgiIgbAAIAAAiIgkAAIAAhYIBaAAIAAAJIAJAAIAAAbIgJAAIAAASIAJAAIAAAigAm8gVIAbAAIAAgSIgbAAgAoNAfIAAgiIgbAAIAAAiIgkAAIAAhYIBaAAIAAAJIAJAAIAAAbIgJAAIAAASIAJAAIAAAigAoogVIAbAAIAAgSIgbAAgAp5AfIAAgiIgbAAIAAAiIgkAAIAAhPIAJAAIAAgJIBRAAIAAAJIAJAAIAABPgAqUgVIAbAAIAAgSIgbAAgAskAfIAAhYIBaAAIAAAJIAJAAIAAAbIgJAAIAAASIAJAAIAAAZIgJAAIAAAJgAsAANIAbAAIAAgQIgbAAgAsAgVIAbAAIAAgSIgbAAgAt+AfIAAgiIgbAAIAAAiIgkAAIAAhPIAJAAIAAgJIBRAAIAAAJIAJAAIAABPgAuZgVIAbAAIAAgSIgbAAgAxNAfIAAgJIgJAAIAAhGIAJAAIAAgJIBaAAIAAASIg/AAIAAASIAbAAIAAASIgbAAIAAAQIA/AAIAAASgAzCAfIAAgSIAJAAIAAgJIAJAAIAAgHIAJAAIAAgJIAJAAIAAgJIAJAAIAAgJIAJAAIAAgJIg2AAIAAgSIBjAAIAAAbIgJAAIAAAJIgJAAIAAAJIgJAAIAAAJIgJAAIAAAHIgJAAIAAAJIAtAAIAAASgA0lAfIAAgSIAbAAIAAg0IgbAAIAAgSIBaAAIAAASIgbAAIAAA0IAbAAIAAASgA2RAfIAAhYIAkAAIAABGIA/AAIAAASgA30AfIAAgSIAbAAIAAg0IgbAAIAAgSIBaAAIAAASIgbAAIAAA0IAbAAIAAASgA48AfIAAhGIgbAAIAAgSIBaAAIAAASIgbAAIAABGgA66AfIAAgJIgJAAIAAhPIAkAAIAABGIAbAAIAAhGIAkAAIAABPIgJAAIAAAJg");
	this.shape_1.setTransform(-0.4,-35.3);

	this.instance_1 = new lib.space();
	this.instance_1.setTransform(-131.1,-10.4,0.6,0.6);

	this.instance_2 = new lib.mouse();
	this.instance_2.setTransform(146.5,-27.5,0.746,0.747);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.1,-41.2,311.4,95.4);


(lib.heroes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// nomes
	this.text = new cjs.Text("ABELHA NERVOSA", "45px 'Upheaval Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 404;
	this.text.setTransform(-2,-210);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"AZULÃO",lineWidth:346},0).wait(1).to({text:"FORMIGA VOADORA",lineWidth:521},0).wait(1).to({text:"MOSQUITO BABÃO",lineWidth:362},0).wait(1).to({text:"JOANINHA",lineWidth:253},0).wait(1).to({text:"PERIQUITO"},0).wait(1));

	// heroes
	this.instance = new lib.bee();
	this.instance.setTransform(-91,-99.5);

	this.instance_1 = new lib.bird();
	this.instance_1.setTransform(-75,-62.5);

	this.instance_2 = new lib.ant();
	this.instance_2.setTransform(-92,-74.5);

	this.instance_3 = new lib.mosquito();
	this.instance_3.setTransform(-80,-44.5);

	this.instance_4 = new lib.ladybug();
	this.instance_4.setTransform(-83,-55);

	this.instance_5 = new lib.periquito();
	this.instance_5.setTransform(-75,-81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-210,408,309.5);


(lib.indicacao = function() {
	this.initialize();

	// Camada 1
	this.text = new cjs.Text("CONHECIMENTOS GERAIS", "25px 'Jockey One'", "#58595B");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 276;
	this.text.setTransform(143.3,40.5);

	this.text_1 = new cjs.Text("ENS. FUND. 1 E 2", "25px 'Jockey One'", "#58595B");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 45;
	this.text_1.lineWidth = 258;
	this.text_1.setTransform(450.8,40.5);

	this.text_2 = new cjs.Text("INDICADO PARA:", "16px 'Jockey One'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 176;
	this.text_2.setTransform(450.8,8.5);

	this.text_3 = new cjs.Text("ÁREA DE CONCENTRAÇÃO:", "16px 'Jockey One'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 229;
	this.text_3.setTransform(143.3,8.5);

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5A37").s().p("AxABsIAAjXMAiBAAAIAADXg");
	this.shape.setTransform(145.3,14.8,1.334,1.333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxAD7IAAn2MAiBAAAIAAH2g");
	this.shape_1.setTransform(145.3,40.4,1.334,1.587);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF5A37").s().p("AxABsIAAjXMAiBAAAIAADXg");
	this.shape_2.setTransform(452.8,14.8,1.333,1.333);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AxAD7IAAn2MAiBAAAIAAH2g");
	this.shape_3.setTransform(452.8,40.4,1.333,1.587);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.4,598.1,80);


(lib.heroSmoke = function() {
	this.initialize();

	// smoke
	this.text = new cjs.Text("POft!", "40px 'Upheaval Pro'", "#EF5A37");
	this.text.textAlign = "center";
	this.text.lineHeight = 54;
	this.text.setTransform(1.8,-9.8,0.479,0.479);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATJxIh7EpIAXk3IogEoIEfl+IntgSQE7hbAJABQAJABqJkeII6hzImnkAIGXBMIl4pgIITHIIgWlnIENEsIAbsVIErHpIGgkjIjGHDIKJp+ImuM7IETg6Ii2DFIGTCHIl/AbIHOHxIphhpIDMDCIk5iRIgNHVIh5kjIh6I5g");
	this.shape.setTransform(0,0,0.479,0.479);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-55.7,110,111.6);


(lib.gameOverTrocarPersonagem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// shapes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AiGCrIAJgMIAggOIgbAEIhDgPIgLgIIBFAGIAJgDIgbgDIg5gWIAAgPIA6AVIAXADIhQgjIAPgGIAvARIgvgmIAMgCIA9AeIAHgfIgHgDIgEgRIAPgRIgBgBIgFgQIAXgTIAGACIgKgzIA2gvIAAgGIhCgHIAQgJIA8ADIg/gMIAPgHIBLANIgcgNIgfgGIAPgFIBQANIBYBSIAMBFIBEAkIABABIhJARIgYA/IhCAwIhQgIIgQAIIhPAMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5A37").s().p("AjlDmQhghfAAiHQAAiGBghfQBfhgCGAAQCGAABgBgQBgBfAACGQAACHhgBfQhgBgiGAAQiGAAhfhgg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AjlDmQhghfAAiHQAAiGBghfQBfhgCGAAQCGAABgBgQBgBfAACGQAACHhgBfQhgBgiGAAQiGAAhfhgg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBD60E").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AD1C").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F38329").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-32.6,65.2,65.3);


(lib.gameOverRecompensasinn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// recompensas
	this.instance = new lib.premio01_1();
	this.instance.setTransform(-100,-100);

	this.instance_1 = new lib.premio02_1();
	this.instance_1.setTransform(-100,-100);

	this.instance_2 = new lib.premio03_1();
	this.instance_2.setTransform(-100,-100);

	this.instance_3 = new lib.premio04_1();
	this.instance_3.setTransform(-100,-100);

	this.instance_4 = new lib.premio05_1();
	this.instance_4.setTransform(-100,-100);

	this.instance_5 = new lib.premio06_1();
	this.instance_5.setTransform(-100,-100);

	this.instance_6 = new lib.premio07_1();
	this.instance_6.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// fundo
	this.instance_7 = new lib.fundo();
	this.instance_7.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.gameOverRanking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// shapes
	this.text = new cjs.Text("3", "14px 'Upheaval Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 11;
	this.text.setTransform(16.1,0.7,0.805,0.806);

	this.text_1 = new cjs.Text("2", "14px 'Upheaval Pro'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 11;
	this.text_1.setTransform(-18.1,0.7,0.805,0.806);

	this.text_2 = new cjs.Text("1", "14px 'Upheaval Pro'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 11;
	this.text_2.setTransform(-1.1,0.7,0.805,0.806);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AhgBXIAAiuIDBAAIAACug");
	this.shape.setTransform(17.1,6.7,0.805,0.806);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BE43").s().p("AhgC0IAAlnIDBAAIAAFng");
	this.shape_1.setTransform(-0.1,-0.8,0.805,0.806);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4BE43").s().p("AhgB/IAAj9IDBAAIAAD9g");
	this.shape_2.setTransform(-17.2,3.5,0.805,0.806);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(6));

	// bg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF5A37").s().p("AjlDmQhghfAAiHQAAiGBghfQBfhgCGAAQCGAABgBgQBgBfAACGQAACHhgBfQhgBgiGAAQiGAAhfhgg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AjlDmQhghfAAiHQAAiGBghfQBfhgCGAAQCGAABgBgQBgBfAACGQAACHhgBfQhgBgiGAAQiGAAhfhgg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBD60E").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7AD1C").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F38329").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-32.6,65.2,65.3);


(lib.gameOverPlayAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("Ah4iLIDxCLIjxCMg");
	this.shape.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

	// Camada 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5A37").s().p("AjlDmQhghfAAiHQAAiGBghfQBfhgCGAAQCGAABgBgQBgBfAACGQAACHhgBfQhgBgiGAAQiGAAhfhgg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AjlDmQhghfAAiHQAAiGBghfQBfhgCGAAQCGAABgBgQBgBfAACGQAACHhgBfQhgBgiGAAQiGAAhfhgg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBD60E").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AD1C").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F38329").s().p("AjlDmQhfhfAAiHQAAiGBfhfQBfhgCGAAQCHAABfBgQBfBfAACGQAACHhfBfQhfBgiHAAQiGAAhfhgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-32.6,65.2,65.3);


(lib.counter_frase = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5A37").s().p("AbxCUIAAg8IB3AAIAAA8gAWgCUIAAgeIgfAAIAAjrIAfAAIAAgdIEoAAIAAA7IjPAAIAAA7IBYAAIAAA5IhYAAIAAA7IDPAAIAAA8gAQTCUIAAg8IDPAAIAAg7IiyAAIAAgdIgdAAIAAh1IAdAAIAAgdIEpAAIAAA7IjQAAIAAA7ICyAAIAAAcIAeAAIAAB2IgeAAIAAAegAFRCUIAAgeIgdAAIAAjrIAdAAIAAgdIEpAAIAAA7IjQAAIAAA7IBZAAIAAA5IhZAAIAAA7IDQAAIAAA8gACTCUIAAh3IhYAAIAAB3Ih1AAIAAkmIEnAAIAAAdIAdAAIAABZIgdAAIAAA5IAdAAIAAB3gAA7gcIBYAAIAAg7IhYAAgAjaCUIAAh3IhZAAIAAB3Ih3AAIAAkJIAeAAIAAgdIELAAIAAAdIAeAAIAAEJgAkzgcIBZAAIAAg7IhZAAgAsZCUIAAkmIEpAAIAAAdIAeAAIAAB1IgeAAIAAAdIiyAAIAAB3gAqigcIBYAAIAAg7IhYAAgAxqCUIAAgeIgeAAIAAjrIAeAAIAAgdIEoAAIAAA7IjPAAIAAA7IBZAAIAAA5IhZAAIAAA7IDPAAIAAA8gA0oCUIAAh3IhZAAIAAB3Ih2AAIAAkmIEoAAIAAAdIAeAAIAABZIgeAAIAAA5IAeAAIAAB3gA2BgcIBZAAIAAg7IhZAAgA9nCUIAAkmIEpAAIAAAdIAdAAIAAB1IgdAAIAAAdIizAAIAAB3gA7xgcIBZAAIAAg7IhZAAgAbxA7IAAjNIB3AAIAADNgAKjAdIAAg5IFGAAIAAA5g");
	this.shape.setTransform(-0.3,-70.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5).p("AgzBNIBmAAIAAA1IhmAAgAgziBIBmAAIAAC0IhmAAg");
	this.shape_1.setTransform(184.1,-70.2,1.138,1.136);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyCCIAAg1IBlAAIAAA1gAgyA0IAAi1IBlAAIAAC1g");
	this.shape_2.setTransform(184.1,-70.2,1.138,1.136);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5).p("AAngZIAAAyIhNAAIAAA0IC1AAIAAA1IkDAAIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA0g");
	this.shape_3.setTransform(157.7,-70.2,1.138,1.136);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah0CCIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA1IBNAAIAAAyIhNAAIAAAzIC1AAIAAA1g");
	this.shape_4.setTransform(157.7,-70.2,1.138,1.136);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5).p("Ah0AZIAAgZIgaAAIAAhnIAaAAIAAgaIEDAAIAAA0Ii0AAIAAA0ICaAAIAAAZIAaAAIAABoIgaAAIAAAaIkDAAIAAg1IC1AAIAAg0g");
	this.shape_5.setTransform(120.8,-70.2,1.138,1.136);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiOCCIAAg1IC1AAIAAgzIibAAIAAgaIgaAAIAAhnIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA1ICbAAIAAAYIAaAAIAABoIgaAAIAAAag");
	this.shape_6.setTransform(120.8,-70.2,1.138,1.136);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5).p("AiOgZIEdAAIAAAyIkdAAg");
	this.shape_7.setTransform(84,-70.2,1.138,1.136);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiOAaIAAgyIEdAAIAAAyg");
	this.shape_8.setTransform(84,-70.2,1.138,1.136);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5).p("AAmgZIAAAyIhMAAIAAA0IC1AAIAAA1IkDAAIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA0g");
	this.shape_9.setTransform(47.2,-70.2,1.138,1.136);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah0CCIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA1IBMAAIAAAyIhMAAIAAAzIC1AAIAAA1g");
	this.shape_10.setTransform(47.2,-70.2,1.138,1.136);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5).p("AgmAZIAABpIhoAAIAAkDIEDAAIAAAaIAaAAIAABOIgaAAIAAAyIAaAAIAABpIhoAAIAAhpgAgmhNIAAA0IBNAAIAAg0g");
	this.shape_11.setTransform(10.4,-70.2,1.138,1.136);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnCCIAAhoIhNAAIAABoIhoAAIAAkDIEDAAIAAAaIAaAAIAABPIgaAAIAAAyIAaAAIAABogAgmgYIBNAAIAAg1IhNAAg");
	this.shape_12.setTransform(10.4,-70.2,1.138,1.136);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5).p("AiOCCIAAjpIAaAAIAAgaIDpAAIAAAaIAaAAIAADpIhpAAIAAhpIhMAAIAABpgAgmhNIAAA0IBMAAIAAg0g");
	this.shape_13.setTransform(-26.4,-70.2,1.138,1.136);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnCCIAAhoIhNAAIAABoIhoAAIAAjpIAaAAIAAgaIDpAAIAAAaIAaAAIAADpgAgmgYIBNAAIAAg1IhNAAg");
	this.shape_14.setTransform(-26.4,-70.2,1.138,1.136);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5).p("AiOCCIAAkDIEDAAIAAAaIAaAAIAABnIgaAAIAAAZIibAAIAABpgAgmhNIAAA0IBMAAIAAg0g");
	this.shape_15.setTransform(-63.2,-70.2,1.138,1.136);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiOCCIAAkDIEDAAIAAAaIAaAAIAABnIgaAAIAAAaIiaAAIAABogAglgYIBLAAIAAg1IhLAAg");
	this.shape_16.setTransform(-63.2,-70.2,1.138,1.136);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5).p("AAngZIAAAyIhNAAIAAA0IC1AAIAAA1IkDAAIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA0g");
	this.shape_17.setTransform(-100,-70.2,1.138,1.136);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah0CCIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA1IBNAAIAAAyIhNAAIAAAzIC1AAIAAA1g");
	this.shape_18.setTransform(-100,-70.2,1.138,1.136);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5).p("AgmAZIAABpIhoAAIAAkDIEDAAIAAAaIAaAAIAABOIgaAAIAAAyIAaAAIAABpIhoAAIAAhpgAgmhNIAAA0IBNAAIAAg0g");
	this.shape_19.setTransform(-136.9,-70.2,1.138,1.136);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAnCCIAAhoIhNAAIAABoIhoAAIAAkDIEDAAIAAAaIAaAAIAABPIgaAAIAAAyIAaAAIAABogAgmgYIBNAAIAAg1IhNAAg");
	this.shape_20.setTransform(-136.9,-70.2,1.138,1.136);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5).p("AiOCCIAAkDIEDAAIAAAaIAaAAIAABnIgaAAIAAAZIibAAIAABpgAgmhNIAAA0IBMAAIAAg0g");
	this.shape_21.setTransform(-173.7,-70.2,1.138,1.136);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiOCCIAAkDIEDAAIAAAaIAaAAIAABnIgaAAIAAAaIiaAAIAABogAglgYIBLAAIAAg1IhLAAg");
	this.shape_22.setTransform(-173.7,-70.2,1.138,1.136);

	this.text = new cjs.Text("toque\nPARA INICIAR", "30px 'Upheaval Pro'", "#EF5A37");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 444;
	this.text.setTransform(-2,89.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#231F20").p("ABoAIIhohxIhnBxIAoAAIAABkIB/AAIAAhkg");
	this.shape_23.setTransform(-2.4,-10.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag/BrIAAhkIgoAAIBnhxIBoBxIgoAAIAABkg");
	this.shape_24.setTransform(-2.4,-10.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#231F20").p("ACsgmIAAgXIgQgXIgxAAIAAgUIhFAAIAAgTIg4ABIAAhrIgjgWIglAeIAADZIgngiIg4ABIAABEIAzAhIBBBlIAABYIDYAAIAAhYIASggIAVgTIAAiYg");
	this.shape_25.setTransform(2.3,49.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9C9EA0").s().p("AgHArIAAhWIAPAAIAABWg");
	this.shape_26.setTransform(10.9,56);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9C9EA0").s().p("AgHArIAAhWIAPAAIAABWg");
	this.shape_27.setTransform(5.2,56);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9C9EA0").s().p("AgHArIAAhWIAPAAIAABWg");
	this.shape_28.setTransform(-0.4,56);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AAXhBIAhAVIhvBug");
	this.shape_29.setTransform(10,17.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("Ag3gsIAhgVIBOCDg");
	this.shape_30.setTransform(-15.3,17.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgWg1IAsgOIgTCHg");
	this.shape_31.setTransform(-3.1,13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CDCFD0").s().p("AAOD9IAAhtIAbg5IAAiBIgegmIhBAAIAAgSIhBAAIAAiaIAkAXIAABpIA5AAIAAAUIBDAAIAAATIAxAAIAPAXIAAAXIAPAAIAACYIgVAUIgSAfIAABZg");
	this.shape_32.setTransform(8.9,49.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhFD9IAAhZIhBhkIgzgiIAAhEIA4AAIAnAiIAAjaIAlgeIAjAXIAABqIA4gBIAAAUIBFAAIAAATIAxAAIAQAXIAAAXIAOAAIAACYIgVAUIgSAfIAABZg");
	this.shape_33.setTransform(2.3,49.8);

	this.addChild(this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.text,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-224,-87.5,448,243);


(lib.container = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.instance = new lib.coin01();
	this.instance.setTransform(-17,-17);

	this.instance_1 = new lib.coin02();
	this.instance_1.setTransform(-17,-17);

	this.instance_2 = new lib.coin03();
	this.instance_2.setTransform(-17,-17);

	this.instance_3 = new lib.coin04();
	this.instance_3.setTransform(-17,-17);

	this.instance_4 = new lib.coin05();
	this.instance_4.setTransform(-17,-17);

	this.instance_5 = new lib.coin06();
	this.instance_5.setTransform(-17,-17);

	this.instance_6 = new lib.coin07();
	this.instance_6.setTransform(-17,-17);

	this.instance_7 = new lib.coin08();
	this.instance_7.setTransform(-17,-17);

	this.instance_8 = new lib.coin09();
	this.instance_8.setTransform(-17,-17);

	this.instance_9 = new lib.coin10();
	this.instance_9.setTransform(-17,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-21.1,39.3,42.3);


(lib.closeButton = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AEbA8IAAgxIgbAAIAAAxIgkAAIAAh3IBaAAIAAANIAJAAIAAAkIgJAAIAAAVIAJAAIAAAxgAEAgKIAbAAIAAgZIgbAAgACvA8IAAgxIgbAAIAAAxIgkAAIAAhqIAJAAIAAgNIBRAAIAAANIAJAAIAABqgACUgKIAbAAIAAgZIgbAAgABDA8IAAgxIgbAAIAAAxIgkAAIAAh3IAkAAIAAAxIAbAAIAAgxIAkAAIAAB3gAhdA8IAAgNIgJAAIAAhdIAJAAIAAgNIBRAAIAAANIAJAAIAAAkIgkAAIAAgZIgbAAIAABGIAbAAIAAgYIAkAAIAAAkIgJAAIAAANgAjJA8IAAgNIgJAAIAAhdIAJAAIAAgNIBaAAIAAAYIg/AAIAAAZIAbAAIAAAVIgbAAIAAAYIA/AAIAAAZgAk+A8IAAhqIAJAAIAAgNIBaAAIAAAYIg/AAIAAAZIAbAAIAAAVIgbAAIAAAxg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5A37").s().p("AjlDmQhghfAAiHQAAiGBghfQBfhgCGAAQCGAABgBgQBgBfAACGQAACHhgBfQhgBgiGAAQiGAAhfhgg");
	this.shape_1.setTransform(0,0,1.227,1.227);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80.1);


(lib.Obstacle4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.obstacle4();
	this.instance.setTransform(0,-389);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-389,53,389);


(lib.Mountain4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mountain4();
	this.instance.setTransform(0,-110);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-110,267,110);


(lib.Hills4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.hills4();
	this.instance.setTransform(0,-49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-49,389,49);


(lib.Ground4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.ground4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,400,89);


(lib.Clouds4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.clouds4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,891,104);


(lib.Trees3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.trees();
	this.instance.setTransform(0,-102);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-102,141,102);


(lib.Obstacle3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.obstacle3();
	this.instance.setTransform(0,-387);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-387,59,387);


(lib.Mountain3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mountain3();
	this.instance.setTransform(0,-193);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-193,466,193);


(lib.Hills3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.hills3();
	this.instance.setTransform(0,-65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-65,618,65);


(lib.Ground3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.ground3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,400,86);


(lib.Clouds3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.clouds3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,916,151);


(lib.Trees2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A948D").s().p("AAAAXQACgVgahhIAYA6QAXA6ACALQABALgXAcQgJAOgMALQASgtAAgcg");
	this.shape.setTransform(228.1,-9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#49B0A8").s().p("AgJBJQgZgZAAgPQgBgOAXg5QATg3ACgCQAcBhgCAVQgCAcgSAtQgNgKgLgNg");
	this.shape_1.setTransform(224.6,-9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A948D").s().p("AABAfQACgfgjiAIAgBNQAfBOACAQQACAPgeAlQgOATgQAPQAZg9ABglg");
	this.shape_2.setTransform(208.8,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#49B0A8").s().p("AgMBiQgigigBgTQAAgTAehOIAdhMQAlCAgCAfQgCAlgZA9QgRgNgPgSg");
	this.shape_3.setTransform(204.2,-13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#348982").s().p("AgRCCQARg3ABggQADgogxi0IAtBqQArBuADAUQADAWgrAyQgTAagWAVQAJgVAJgbg");
	this.shape_4.setTransform(171.5,-17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#49B0A8").s().p("AgRCIQgvgvAAgbQgBgbAqhrIAohpQAzC0gDAoQgCAggSA3QgJAbgIAVQgYgTgVgXg");
	this.shape_5.setTransform(165.1,-17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#348982").s().p("AABArQADgrgxixIAtBrQArBtADAUQADAVgrAzQgTAagWAVQAjhUABgzg");
	this.shape_6.setTransform(149.8,-18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#49B0A8").s().p("AgRCIQgvgvgBgbQAAgaAqhsIAohpQAzCxgDArQgDAzgjBUQgXgSgVgYg");
	this.shape_7.setTransform(143.4,-18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#358A84").s().p("AgbDHQAbhUACgxQAFhBhNkRIBFCjQBDCoAFAgQAEAhhBBOQgfAnghAgQANggAOgqg");
	this.shape_8.setTransform(162.4,-27.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F9D96").s().p("AgbDQQhIhIgBgpQgBgoBAimIA/ihQBPERgFBBQgDAxgcBUQgNAqgOAgQgjgcgiglg");
	this.shape_9.setTransform(152.5,-27.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A948D").s().p("AABAXQABgXgahfIAYA6QAYA6ABALQABALgXAcQgJAOgMALQASgtABgcg");
	this.shape_10.setTransform(91.3,-9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#49B0A8").s().p("AgJBJQgZgZAAgPQgBgOAXg5IAVg5QAcBfgCAXQgCAcgSAtQgNgKgLgNg");
	this.shape_11.setTransform(87.8,-9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A948D").s().p("AABAfQACgfgjiAIAgBNQAfBOACAQQACAPgeAlQgOATgQAPQAZg9ABglg");
	this.shape_12.setTransform(72,-13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#49B0A8").s().p("AgMBiQgigigBgTQAAgTAehOIAdhMQAlCAgCAfQgCAlgZA9QgRgNgPgSg");
	this.shape_13.setTransform(67.4,-13.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#348982").s().p("AABArQADgrgxixIAtBqQArBuADAUQADAWgrAyQgTAagWAVQAjhUABgzg");
	this.shape_14.setTransform(34.7,-17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#49B0A8").s().p("AgRCIQgvgvgBgbQAAgaAqhsIAohpQAzCxgDArQgDAzgjBUQgXgTgVgXg");
	this.shape_15.setTransform(28.3,-17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#348982").s().p("AABArQADgrgxixIAtBrQArBtADAUQADAVgrAzQgTAagWAVQAjhUABgzg");
	this.shape_16.setTransform(13,-18.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#49B0A8").s().p("AgSCIQgugvgBgbQAAgaAphsIAphpQAzCxgDArQgDAzgjBUQgXgSgWgYg");
	this.shape_17.setTransform(6.6,-18.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#358A84").s().p("AgbDHQAbhUACgxQAEhChMkQIBFCjQBDCoAFAgQAEAhhBBOQgfAnghAgQANggAOgqg");
	this.shape_18.setTransform(25.6,-27.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3F9D96").s().p("AgbDQQhIhIgBgpQAAgoBAimIA/ihQBOEQgEBCQgDAxgcBUQgOAqgNAgQgkgcgiglg");
	this.shape_19.setTransform(15.7,-27.4);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-54.7,230.7,54.8);


(lib.Obstacle2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.obstacle2();
	this.instance.setTransform(0,-384);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-384,50,384);


(lib.Hills2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.hills2();
	this.instance.setTransform(0,-154);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-154,199,154);


(lib.Ground2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.ground2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,390,87);


(lib.Clouds2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.clouds2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,857,134);


(lib.Buildings2 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.buildings2();
	this.instance.setTransform(0,-93);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-93,120,93);


(lib.bg = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E4D0").s().p("EhLAAq+MAAAhV7MCWBAAAMAAABV7g");
	this.shape.setTransform(480,275);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


(lib.Trees = function() {
	this.initialize();

	// Camada 2
	this.instance = new lib.arvores();
	this.instance.setTransform(0,-106);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-106,300,106);


(lib.Obstacle = function() {
	this.initialize();

	// Camada 2
	this.instance_1 = new lib.obstacle();
	this.instance_1.setTransform(0,-455);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-455,60,455);


(lib.Ground = function() {
	this.initialize();

	// actions
	this.instance_1 = new lib.ground();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,400,86.4);


(lib.FrontBuildings = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5EA2C6").s().p("AslHxIAAlPIBvAAIAAj9IB0AAIAACWIBmAAIAAlCICHAAIAABPIAqgWIBVAAIAjASIAAi2ICBAAIAACKIAWgTIBPAAIAXAUIAAh8IBZAAIAABMIAqgVIAyAAIArAVIAAAIIiHAAIAAAIICHAAIAABPIAqgWIBUAAIArAWIAAAHIipAAIAAAIICpAAIAADkIBxAAIAAiWIB1AAIAAFUIBtAAIAAD4gAlVipICiAAIAAgIIiiAAgAgyjWIB8AAIAAgIIh8AAgAK+DuIAAgIIAYgWIA4AAIAYAWIAAAIgAsgCYIAAgJIAYgVIA5AAIAYAVIAAAJgAJEhkIAAgIIAYgVIBFAAIAYAVIAAAIgAq2hkIAAgIIAYgVIBEAAIAYAVIAAAIgAnckPIAAgIIAqgVIAyAAIArAVIAAAIgABKlpIAAgJIATgVIAyAAIAUAVIAAAJgAizl5IAAgIIAYgVIBRAAIAYAVIAAAIgABdmNIAAg7IAyAAIAAA7gABfnNIAXgjIAYAjg");
	this.shape.setTransform(0,-49.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.7,-99.5,161.4,99.5);


(lib.Clouds = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.clouds();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,910,127);


(lib.Buildings = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.buildings();
	this.instance.setTransform(0,-119);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-119,251,119);


(lib.Bg4 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#244B68").s().p("EhLAAq8MAAAhV3MCWBAAAMAAABV3g");
	this.shape.setTransform(480,275,1,1.001);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


(lib.Bg3 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9ECAB2").s().p("EhK/Aq9MAAAhV6MCV/AAAMAAABV6g");
	this.shape.setTransform(480,275);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


(lib.Bg2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E4D0").s().p("EhLAAq+MAAAhV7MCWBAAAMAAABV7g");
	this.shape.setTransform(480,275);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


(lib.Bg1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E6E0").s().p("EhLAAq+MAAAhV7MCWBAAAMAAABV7g");
	this.shape.setTransform(480,275);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


(lib.btselecionar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// label
	this.text = new cjs.Text("SELECIONE", "30px 'Upheaval Pro'", "#F4BE43");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 161;
	this.text.setTransform(-2,-17);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(7));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5A37").s().p("AxFD2QgpAAgdgeQgegdAAgpIAAkjQAAgpAegdQAdgeApAAMAiLAAAQApAAAdAeQAeAdAAApIAAEjQAAApgeAdQgdAegpAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AxFD2QgpAAgdgeQgegdAAgpIAAkjQAAgpAegdQAdgeApAAMAiLAAAQApAAAdAeQAeAdAAApIAAEjQAAApgeAdQgdAegpAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCDE0B").s().p("AxFD2QgpAAgdgeQgegdAAgpIAAkjQAAgpAegdQAdgeApAAMAiLAAAQApAAAdAeQAeAdAAApIAAEjQAAApgeAdQgdAegpAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9BD16").s().p("AxFD2QgpAAgdgeQgegdAAgpIAAkjQAAgpAegdQAdgeApAAMAiLAAAQApAAAdAeQAeAdAAApIAAEjQAAApgeAdQgdAegpAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59C21").s().p("AxFD2QgpAAgdgeQgegdAAgpIAAkjQAAgpAegdQAdgeApAAMAiLAAAQApAAAdAeQAeAdAAApIAAEjQAAApgeAdQgdAegpAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F27B2C").s().p("AxFD2QgpAAgdgeQgegdAAgpIAAkjQAAgpAegdQAdgeApAAMAiLAAAQApAAAdAeQAeAdAAApIAAEjQAAApgeAdQgdAegpAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-24.6,238.9,49.3);


(lib.btranking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// label
	this.text = new cjs.Text("ranking", "42px 'Upheaval Pro'", "#A4CD4F");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(-1.7,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(6));

	// effects
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E596B").s().p("Aw4B4IgajCIBAh9ICUghIaKAAIDvArIBYCaIAAC1IiEBSIgSAAICChdIgCiqIhViNIjcgnI6IAAIiDAdIg9BxIAaC6ICABfIAMAZg");
	this.shape.setTransform(-1.6,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003744").s().p("AvtEKIi5iWIgIjPIBlinIAYgHIhEB+IAZDHIC0B4IdmAAICahcIAAi7IhhihICEBZIA0DoIhHCPIigA+g");
	this.shape_1.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(6));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004757").s().p("Av/EqIi7iZIgJjSIB2jCIDCgmIaNAAIDrApICiBtIA1DsIhICSIiiA/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08837C").s().p("Av/EqIi7iZIgJjSIB2jCIDCgmIaNAAIDrApICiBtIA1DsIhICSIiiA/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#067473").s().p("Av/EqIi8iZIgIjSIB2jDIDCglIaOAAIDqApICiBuIA1DrIhICRIiiBAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#04656A").s().p("Av/EqIi8iZIgIjSIB2jDIDCglIaOAAIDqApICiBuIA1DrIhICRIiiBAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#025660").s().p("Av/EqIi8iZIgIjSIB2jDIDCglIaOAAIDqApICiBuIA1DrIhICRIiiBAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-29.8,244.1,59.7);


(lib.btnextprev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("Ahsh9IDZB9IjZB+g");
	this.shape.setTransform(-2,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7));

	// shape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5A37").s().p("AjNDOQhVhWAAh4QAAh3BVhWQBWhVB3AAQB4AABWBVQBVBVAAB4QAAB4hVBWQhWBVh4AAQh4AAhVhVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AjNDOQhVhWAAh4QAAh3BVhWQBWhVB3AAQB4AABWBVQBVBVAAB4QAAB4hVBWQhWBVh4AAQh4AAhVhVg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCDE0B").s().p("AjNDOQhVhWAAh4QAAh3BVhWQBWhVB3AAQB4AABWBVQBVBVAAB4QAAB4hVBWQhWBVh4AAQh4AAhVhVg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9BD16").s().p("AjNDOQhVhWAAh4QAAh3BVhWQBWhVB3AAQB4AABWBVQBVBVAAB4QAAB4hVBWQhWBVh4AAQh4AAhVhVg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F59C21").s().p("AjNDOQhVhWAAh4QAAh3BVhWQBWhVB3AAQB4AABWBVQBVBVAAB4QAAB4hVBWQhWBVh4AAQh4AAhVhVg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F27B2C").s().p("AjNDOQhVhWAAh4QAAh3BVhWQBWhVB3AAQB4AABWBVQBVBVAAB4QAAB4hVBWQhWBVh4AAQh4AAhVhVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-29.2,58.4,58.4);


(lib.btiniciar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// label
	this.text = new cjs.Text("jogar", "68px 'Upheaval Pro'", "#A4CD4F");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.setTransform(-1.6,-31.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(6));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E596B").s().p("A4RCtIgmkYIBdi0IDVgvIABAAIADAAMAliAAAIFYA9IB/DfIAAEEIi+B2IgaAAIC6iFIgDj1Ih4jLIk+g5MgljAAAIi8AqIhYCjIAmELIC3CKIASAjg");
	this.shape.setTransform(-2.4,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003744").s().p("A2lF/IkKjXIgLkrICRjwIAigLIhhC2IAkEfIEDCsMAqiAAAIDdiEIAAkOIiLjmIC9B/IBMFOIhmDOIjmBZg");
	this.shape_1.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(6));

	// Camada 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004757").s().p("A2/GsIkNjbIgNkvICqkXIEXg3MAlrAAAIFRA8IDpCdIBNFTIhoDRIjpBbg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08837C").s().p("A2/GtIkOjcIgMkvICqkXIEXg3MAlrAAAIFQA8IDqCdIBNFTIhoDSIjqBbg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#067473").s().p("A2/GtIkOjcIgMkvICqkXIEXg3MAlrAAAIFQA8IDqCdIBNFTIhoDSIjqBbg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#04656A").s().p("A2/GtIkOjcIgMkvICqkXIEXg3MAlrAAAIFQA8IDqCdIBNFTIhoDSIjqBbg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#025660").s().p("A2/GtIkOjcIgMkvICqkXIEXg3MAlrAAAIFQA8IDqCdIBNFTIhoDSIjqBbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.4,-42.9,350.9,85.8);


(lib.Bonus = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#430C4B").s().p("AgYANIAbgKIAWgPIAAAZg");
	this.shape.setTransform(0.5,-11.8,1.456,1.456);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63176C").s().p("AgYANIAAgZIAyAAIAAAZg");
	this.shape_1.setTransform(0.5,-11.8,1.456,1.456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#430C4B").s().p("AAbAAIgQgmIghgFIgEAhIAnAxIgwgxIAHgqIArAGIAUAtQABABAAAYIAAAaIgEADg");
	this.shape_2.setTransform(-5.4,-20.3,1.456,1.456);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#63176C").s().p("AAUA6IgcgcQgfgeAAgBQgBgDAEgbIAFgaIA8AGQAJA0ACABQABABAAAaIgBAZIgDAEIgGg1IgPgnIghgEIgFAgIA0BBg");
	this.shape_3.setTransform(-6.1,-21,1.456,1.456);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#430C4B").s().p("AgrArIAGgZIAHgYIABgBIAdgmIAsAEIgDApIg7AmIAygmIAEghIgkgEIgWAkIgTAvg");
	this.shape_4.setTransform(5.5,-19.3,1.456,1.456);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#63176C").s().p("AgnA1IBCg0IAEgfIgigEIgYAiIgTAxIgCgDIAGgZIAHgYQACgBAWgxIA8AIQgDAygDAFQgDAFhFAog");
	this.shape_5.setTransform(6.2,-19.7,1.456,1.456);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#430C4B").s().p("AgmAaQAjgLAKgJQAUgNALgbIAiATQgcASguARQghALgkAEg");
	this.shape_6.setTransform(14.4,-15.8,1.456,1.456);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#63176C").s().p("AhKAbIAggIQAigKAOgKQAbgUANgNIAiASQgdATgvAQQgdALgeADIgYACg");
	this.shape_7.setTransform(13.3,-15.8,1.456,1.456);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9FDFF").s().p("AgYATIAAglIAxAAIAAAlg");
	this.shape_8.setTransform(0.5,-5.7,1.456,1.456);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(79,13,94,0.459)").s().p("AhuATIC6gUIAjgRIAAAlg");
	this.shape_9.setTransform(7.4,-5.6,1.456,1.456);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(79,13,94,0.459)").s().p("AiPBnICyhNIBsiAIAADNg");
	this.shape_10.setTransform(0.9,14.2,1.456,1.456);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#76288B").s().p("AigAVIAAgpIFBAAIAAApg");
	this.shape_11.setTransform(0.5,-5.7,1.456,1.456);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9FDFF").s().p("AgYBnIAAjNIAxAAIAADNg");
	this.shape_12.setTransform(0.2,14,1.456,1.456);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#430C4B").s().p("AADAUQgcgLgagMIgUgMIAigTIAIAQQAKARAMAHQASAPA9AOQgkgEghgLg");
	this.shape_13.setTransform(-14.4,-15.8,1.456,1.456);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#63176C").s().p("AgDATQgegKgagMIgUgNIAigSIAKAJQANAMAQAMQAYARA4ALIAGAIIgCAAQgkAAgtgQg");
	this.shape_14.setTransform(-13.3,-15.8,1.456,1.456);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#76288B").s().p("AiUBqIAAjTIEpAAIAADTg");
	this.shape_15.setTransform(0.5,14.1,1.456,1.456);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-29.5,50,59.1);


(lib.pauseEstados = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AgeB7IAAj1IA9AAIAAD1g");
	this.shape.setTransform(3.6,0,0.648,0.648);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BE43").s().p("AgeB7IAAj1IA9AAIAAD1g");
	this.shape_1.setTransform(-3.6,0,0.648,0.648);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D35030").s().p("AgwDFIiAiTIAbj1IAiAAIA1AwIA5gwIC2DPIAAB1QAAAcgUAUQgTATgcABg");
	this.shape_2.setTransform(6,4.7,0.648,0.648);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF5A37").s().p("AjKENQgbAAgUgTQgTgUAAgbIAAmVQAAgbATgUQAUgTAbAAIGVAAQAbAAAUATQATAUAAAbIAAGVQAAAbgTAUQgUATgbAAg");
	this.shape_3.setTransform(0,0,0.648,0.648);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2492A").s().p("AgeB7IAAj1IA9AAIAAD1g");
	this.shape_4.setTransform(3.6,0,0.648,0.649);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C2492A").s().p("AgeB7IAAj1IA9AAIAAD1g");
	this.shape_5.setTransform(-3.6,0,0.648,0.649);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D35030").s().p("AgwDEIiAiRIAbj2IAiAAIA1AxIA5gxIC2DQIAAB0QAAAcgUAUQgTATgcAAg");
	this.shape_6.setTransform(6,4.7,0.648,0.649);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF5A37").s().p("AjKENQgbAAgUgUQgTgTAAgcIAAmUQAAgbATgUQAUgTAbAAIGVAAQAbAAAUATQATAUAAAbIAAGUQAAAcgTATQgUAUgbAAg");
	this.shape_7.setTransform(0,0,0.648,0.649);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-17.5,35,35);


(lib.instrucoesButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 3
	this.text = new cjs.Text("INSTRUÇÕES", "7px 'Jockey One'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 9;
	this.text.lineWidth = 36;
	this.text.setTransform(-2.1,19.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AgVBaIAAgkIArAAIAAAkgAgVAjIAAgjIAPAAIAAgRIAcAAIAAgkIgrAAIAAAkIg8AAIAAg2IAPAAIAAgSICFAAIAAASIAPAAIAABHIgPAAIAAARIgtAAIAAASg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D35030").s().p("AhDAvQAdgFgGgGQgGgGgBAFIhMheQA6gwBagYIBrCsIAAAwQAAAUgPANQgIAHgMADIheAAQgBgFhBhQg");
	this.shape_1.setTransform(4.6,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF5A37").s().p("AjKEOQgbAAgUgUQgUgTAAgcIAAmVQAAgcAUgTQAUgUAbAAIGVAAQAcAAATAUQAUATAAAcIAAGVQAAAcgUATQgTAUgcAAg");
	this.shape_2.setTransform(0,0,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-17.5,40,50.8);


(lib.informacoesButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 3
	this.text = new cjs.Text("+ INFORMAÇÕES", "7px 'Jockey One'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 9;
	this.text.lineWidth = 55;
	this.text.setTransform(-2,19.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AhJBaIAAgkIAtAAIAAhrIgtAAIAAgkICTAAIAAAkIgtAAIAABrIAtAAIAAAkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D35030").s().p("Ah7AvIAggNQAggNAAgBIhAhzICTgkIBkCrIAAAxQAAAUgPANQgHAGgJACIifACQgCAAg3hVg");
	this.shape_1.setTransform(5,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF5A37").s().p("AjKEOQgbAAgUgUQgUgTAAgcIAAmVQAAgcAUgTQAUgUAbAAIGVAAQAcAAATAUQAUATAAAcIAAGVQAAAcgUATQgTAUgcAAg");
	this.shape_2.setTransform(0,0,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-17.5,59.3,50.8);


(lib.homeEstados = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AAzCkIAAhiIhqAAIAABiIhsAAIAAi1IgxAAIDUiSIBNA1IAAgfIAqAAIAAA8IBeBAIgxAAIAAC1g");
	this.shape.setTransform(0,0,0.648,0.648);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D35030").s().p("AiCCYIhShcIAAhHIEJh1IAngXIBAAQIA5BJIAACUQAAAbgUAUQgTATgcAAg");
	this.shape_1.setTransform(3.7,7.6,0.648,0.648);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF5A37").s().p("AjKEOQgbAAgUgUQgUgTAAgcIAAmVQAAgcAUgTQAUgUAbAAIGVAAQAcAAATAUQAUATAAAcIAAGVQAAAcgUATQgTAUgcAAg");
	this.shape_2.setTransform(0,0,0.648,0.648);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2492A").s().p("AAzCkIAAhiIhqAAIAABiIhsAAIAAi2IgxAAIDUiRIBNA1IAAgfIAqAAIAAA7IBeBAIgxAAIAAC2g");
	this.shape_3.setTransform(0,0,0.648,0.648);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D35030").s().p("AiCCZIhShcIAAhHIEJh1IAngYIBAAQIA5BKIAACSQAAAcgUAUQgTAUgcAAg");
	this.shape_4.setTransform(3.7,7.6,0.648,0.648);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF5A37").s().p("AjKEOQgbAAgUgUQgUgTAAgdIAAmUQAAgbAUgUQAUgUAbABIGVAAQAcgBATAUQAUAUAAAbIAAGUQAAAcgUAUQgTAUgcAAg");
	this.shape_5.setTransform(0,0,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-17.5,35,35);


(lib.btsound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// sound
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AgcBsQAlgzAAg5QAAg3glg0IAQgMQApA6AAA9QAAA+gpA6g");
	this.shape.setTransform(9.9,0,0.648,0.648);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BE43").s().p("AgVBHQAXgiAAglQAAgjgXgiIAPgMQAcAnAAAqQAAArgcAng");
	this.shape_1.setTransform(6.8,0,0.648,0.648);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4BE43").s().p("AgcBEIAAiHIA5AAIAACHg");
	this.shape_2.setTransform(-9.8,0,0.648,0.648);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4BE43").s().p("AhUBDIAAiFICphjIAAFLg");
	this.shape_3.setTransform(-1.4,0,0.648,0.648);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D35030").s().p("AgughIgSg9IABgBICACUIAAArg");
	this.shape_4.setTransform(13.2,-1.6,0.648,0.648);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D35030").s().p("AgwDZIiwjIIAAiGIBKAAICphjIDODsIAACDQAAAcgUATQgTAUgcgBg");
	this.shape_5.setTransform(2.9,3.4,0.648,0.648);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EF5A37").s().p("AjKEOQgbAAgUgUQgTgTAAgcIAAmVQAAgbATgUQAUgUAbAAIGVAAQAcAAATAUQAUAUgBAbIAAGVQABAcgUATQgTAUgcAAg");
	this.shape_6.setTransform(0,0,0.648,0.648);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2492A").s().p("AgcBsQAlgzAAg5QAAg3glg0IAQgMQApA6AAA9QAAA+gpA6g");
	this.shape_7.setTransform(9.9,0,0.648,0.649);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C2492A").s().p("AgVBGQAXgiAAgkQAAgjgXgiIAPgMQAcAnAAAqQAAArgcAng");
	this.shape_8.setTransform(6.8,0,0.648,0.649);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C2492A").s().p("AgcBEIAAiGIA5AAIAACGg");
	this.shape_9.setTransform(-9.8,0,0.648,0.649);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C2492A").s().p("AhUBDIAAiFICphjIAAFLg");
	this.shape_10.setTransform(-1.4,0,0.648,0.649);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D35030").s().p("AgwDZIiwjJIAAiGIBKAAICphiIDODsIAACCQAAAcgUAUQgTATgcAAg");
	this.shape_11.setTransform(2.9,3.4,0.648,0.649);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF5A37").s().p("AjKENQgbAAgUgTQgTgUAAgcIAAmUQAAgbATgUQAUgTAbAAIGVAAQAcAAATATQAUAUgBAbIAAGUQABAcgUAUQgTATgcAAg");
	this.shape_12.setTransform(0,0,0.648,0.649);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{scaleY:0.648}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_4,p:{scaleY:0.649}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-17.5,35,35);


(lib.hills = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.hill();
	this.instance.setTransform(795,0);

	this.instance_1 = new lib.hill();
	this.instance_1.setTransform(636,0);

	this.instance_2 = new lib.hill();
	this.instance_2.setTransform(477,0);

	this.instance_3 = new lib.hill();
	this.instance_3.setTransform(318,0);

	this.instance_4 = new lib.hill();
	this.instance_4.setTransform(159,0);

	this.instance_5 = new lib.hill();

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,976,37);


(lib.aberturaTop = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.top();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,961,269);


(lib.aberturaTitle = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.title();
	this.instance.setTransform(-234,-145);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-234,-145,516,250);


(lib.abertura_mountain1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mountain();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,400,165);


(lib.abertura_mato2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mato2();
	this.instance.setTransform(-121,-126.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121,-126.5,242,253);


(lib.abertura_mato1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mato1();
	this.instance.setTransform(-139,-143);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139,-143,278,286);


(lib.Ranking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var context = this;
		var playAgain = this.playAgain;
		var ptsTxt = this.ptsTxt;
		var bestTxt = this.bestTxt;
		var reward = this.reward;
		
		this.show = function()
		{
			updateRanking();
			createjs.Tween.get(context, {override:true}).wait(0).to({y:250}, 500, createjs.Ease.quartOut);
		}
		
		this.hide = function()
		{
			createjs.Tween.get(context, {override:true}).wait(0).to({y:-275}, 250, createjs.Ease.quartIn);
			//context.parent.removeRanking();
		}
		
		function reload(event)
		{
			context.parent.reloadTheGame();
			playAgain.gotoAndPlay("s1");
		}
		
		function updateRanking()
		{
			var scores = getOrderedScores();
			insere(scores);
			
			cutScores();
		}
		
		function cutScores()
		{
			var temp = [];
			temp = getOrderedScores(); //JSON.parse(localStorage.getItem('superFlyingHighScore'));
			//console.log(temp);
			if (temp.length > 5)
				temp = temp.slice(0,5);
			//console.log(temp);
			localStorage.setItem('superFlyingHighScore', JSON.stringify(temp));
		}
		
		function insere(scores)
		{
			var pts = [context.pts0, context.pts1, context.pts2, context.pts3, context.pts4];
			var price = [context.price0, context.price1, context.price2, context.price3, context.price4];
			
			for (var i = 0; i < 5; i++)
			{
				if (scores[i])
					pts[i].text = scores[i];
				else 
					pts[i].text = "0";
				//console.log(scores[i]);
				if (scores[i] <= 100)
					price[i].gotoAndStop(0);
				else if (scores[i] <= 200)
					price[i].gotoAndStop(1);
				else if (scores[i] <= 300)
					price[i].gotoAndStop(2);
				else if (scores[i] <= 500)
					price[i].gotoAndStop(3);
				else if (scores[i] <= 750)
					price[i].gotoAndStop(4);
				else if (scores[i] <= 1000)
					price[i].gotoAndStop(5);
				else if (scores[i] > 1000)
					price[i].gotoAndStop(6);
			}
		}
		
		function getHighScore()
		{
			var scores = [];
			scores = scores.concat(getOrderedScores());
			console.log(scores[scores.length - 1]);
			return scores[scores.length - 1];
		}
		
		function getOrderedScores()
		{
			var scores = [];
			scores = scores.concat(getScores());
			if (scores.length > 0)
				order(scores);
			return scores;
		}
		
		function getScores()
		{
			return JSON.parse(localStorage.getItem('superFlyingHighScore'));
		}
		
		function order(ar)
		{
			var i,j,temp;
			for (i = (ar.length - 1); i >= 0; i--)
			{
				for (j = 1; j <= i; j++)
				{
					if (ar[j-1] < ar[j])
					{
						temp = ar[j-1];
						ar[j-1] = ar[j];
						ar[j] = temp;
					} 
				} 
			}
		}
		
		//playAgain.on("click", reload);
		this.btvoltar.on("click", this.hide);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// title
	this.text = new cjs.Text("Ranking", "46px 'Upheaval Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.setTransform(477.8,118.5,1.108,1.109);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59948E").s().p("Ay6DQIAAmgMAl1AAAIAAGgg");
	this.shape.setTransform(480,144.9,1.108,1.109);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E837D").s().p("AlGDRIDCjZIjCjIIG1AAIDYFDIhPBeg");
	this.shape_1.setTransform(341.4,150.9,1.108,1.109);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E837D").s().p("Aj3DRIhPheIDYlDIG1AAIjCDIIDCDZg");
	this.shape_2.setTransform(618.7,150.9,1.108,1.109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// btranking
	this.btvoltar = new lib.rankingVoltar();
	this.btvoltar.setTransform(480,480.6);

	this.text_1 = new cjs.Text("VOLTAR", "22px 'Upheaval Pro'", "#F4BE43");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.setTransform(478,424.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.btvoltar}]}).wait(1));

	// prices
	this.price4 = new lib.rankingPrice();
	this.price4.setTransform(639.3,385.7);

	this.price3 = new lib.rankingPrice();
	this.price3.setTransform(639.3,350.7);

	this.price2 = new lib.rankingPrice();
	this.price2.setTransform(639.3,315.7);

	this.price1 = new lib.rankingPrice();
	this.price1.setTransform(639.3,280.7);

	this.price0 = new lib.rankingPrice();
	this.price0.setTransform(639.3,245.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.price0},{t:this.price1},{t:this.price2},{t:this.price3},{t:this.price4}]}).wait(1));

	// labels
	this.pts3 = new cjs.Text("0", "24px 'Upheaval Pro'", "#FFFFFF");
	this.pts3.name = "pts3";
	this.pts3.textAlign = "right";
	this.pts3.lineHeight = 32;
	this.pts3.lineWidth = 122;
	this.pts3.setTransform(612,338.3);

	this.text_2 = new cjs.Text("4.", "24px 'Upheaval Pro'", "#FFFFFF");
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 21;
	this.text_2.setTransform(309.5,338.3);

	this.pts2 = new cjs.Text("0", "24px 'Upheaval Pro'", "#FFFFFF");
	this.pts2.name = "pts2";
	this.pts2.textAlign = "right";
	this.pts2.lineHeight = 32;
	this.pts2.lineWidth = 122;
	this.pts2.setTransform(612,303.3);

	this.text_3 = new cjs.Text("3.", "24px 'Upheaval Pro'", "#FFFFFF");
	this.text_3.lineHeight = 32;
	this.text_3.lineWidth = 21;
	this.text_3.setTransform(309.5,303.3);

	this.pts1 = new cjs.Text("0", "24px 'Upheaval Pro'", "#FFFFFF");
	this.pts1.name = "pts1";
	this.pts1.textAlign = "right";
	this.pts1.lineHeight = 32;
	this.pts1.lineWidth = 122;
	this.pts1.setTransform(612,268.3);

	this.text_4 = new cjs.Text("2.", "24px 'Upheaval Pro'", "#FFFFFF");
	this.text_4.lineHeight = 32;
	this.text_4.lineWidth = 21;
	this.text_4.setTransform(309.5,268.3);

	this.pts0 = new cjs.Text("0", "24px 'Upheaval Pro'", "#FFFFFF");
	this.pts0.name = "pts0";
	this.pts0.textAlign = "right";
	this.pts0.lineHeight = 32;
	this.pts0.lineWidth = 122;
	this.pts0.setTransform(612,233.3);

	this.text_5 = new cjs.Text("1.", "24px 'Upheaval Pro'", "#FFFFFF");
	this.text_5.lineHeight = 32;
	this.text_5.lineWidth = 21;
	this.text_5.setTransform(309.5,233.3);

	this.text_6 = new cjs.Text("Melhores Pontuações", "30px 'Upheaval Pro'", "#F4BE43");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 20;
	this.text_6.lineWidth = 365;
	this.text_6.setTransform(660.3,191.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E4749").s().p("A5qCaIAAkzMAzVAAAIAAEzg");
	this.shape_3.setTransform(480,245.7,1.096,1);

	this.pts4 = new cjs.Text("0", "24px 'Upheaval Pro'", "#FFFFFF");
	this.pts4.name = "pts4";
	this.pts4.textAlign = "right";
	this.pts4.lineHeight = 32;
	this.pts4.lineWidth = 122;
	this.pts4.setTransform(612,373.3);

	this.text_7 = new cjs.Text("5.", "24px 'Upheaval Pro'", "#FFFFFF");
	this.text_7.lineHeight = 32;
	this.text_7.lineWidth = 21;
	this.text_7.setTransform(309.5,373.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E4749").s().p("A5qCaIAAkzMAzVAAAIAAEzg");
	this.shape_4.setTransform(480,385.7,1.096,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E4749").s().p("A5qCaIAAkzMAzVAAAIAAEzg");
	this.shape_5.setTransform(480,350.7,1.096,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E4749").s().p("A5qCaIAAkzMAzVAAAIAAEzg");
	this.shape_6.setTransform(480,315.7,1.096,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E4749").s().p("A5qCaIAAkzMAzVAAAIAAEzg");
	this.shape_7.setTransform(480,280.7,1.096,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text_7},{t:this.pts4},{t:this.shape_3},{t:this.text_6},{t:this.text_5},{t:this.pts0},{t:this.text_4},{t:this.pts1},{t:this.text_3},{t:this.pts2},{t:this.text_2},{t:this.pts3}]}).wait(1));

	// quadro bg
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#613F42").s().p("A6QZrQgpAAgegdQgdgdAAgpMAAAgwOQAAgpAdgeQAegdApAAMA0hAAAQAqAAAdAdQAdAeAAApMAAAAwOQAAApgdAdQgdAdgqAAg");
	this.shape_8.setTransform(480,296,1.122,1.122);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280,111.5,400,401.8);


(lib.Quiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();	
		
		var context = this;
		var pergunta = this.pergunta;
		var opt0 = this.opt0;
		var opt1 = this.opt1;
		var opt2 = this.opt2;
		var opt3 = this.opt3;
		
		var certo = -1;
		
		/*this.show = function()
		{
			habilita(false);
			createjs.Tween.get(context, {override:true}).wait(0).to({x:480}, 500, createjs.Ease.quartOut);
			setTimeout(habilita, 500, true);
			novaQuestao();
		}*/
		this.hide = function()
		{
			createjs.Tween.get(context, {override:true}).wait(0).to({x:960 + 480}, 250, createjs.Ease.quartIn).call(remove);
		}
		
		function remove()
		{
			try {
				context.parent.removeQuiz();
			} catch(e) {
				console.log("Não foi possível remover o quiz");
			}
		}
		
		function reload(event)
		{
			context.hide();
			answer.gotoAndPlay("s1");
			context.parent.quizSucess();
		}
		
		function responde(event)
		{
			setTimeout(correcao, 3000, event.currentTarget);
			
			if (event.currentTarget.name == certo)
				event.currentTarget.gotoAndStop(1);
			else
				event.currentTarget.gotoAndStop(2);
			
			habilita(false);
		}
		
		function habilita(boo)
		{
			for (var i = 0; i < 4; i++)
				context["opt" + i].mouseEnabled = boo;
		}
		
		function correcao(opt)
		{
			context.hide();
			if (opt.name == certo)
				context.parent.quizSucess();
			else
				context.parent.quizFailed();
			
			setTimeout(reset, 100);
		}
		
		function reset()
		{
			opt0.gotoAndStop(0);
			opt1.gotoAndStop(0);
			opt2.gotoAndStop(0);
			opt3.gotoAndStop(0);
		}
		
		function novaQuestao()
		{
			var r = randomiza(4);
			
			for (var i = 0; i < r.length; i++) 
			{
				context["opt" + i].certo = false;
				context["opt" + i].txt.text = "";
				context["opt" + i].txt2.text = "";
			}
			
			var len = quizQuestions.questao.length;
			var ran = Math.floor(Math.random() * len);
			
			pergunta.text = quizQuestions.questao[ran].pergunta;
			console.log(quizQuestions.questao[ran].resposta, "opt" + r[0]);
			var maior = bigger(ran);
			
			if (maior)
				context["opt" + r[0]].txt.text = quizQuestions.questao[ran].resposta;
			else
				context["opt" + r[0]].txt2.text = quizQuestions.questao[ran].resposta;
			
			//context["opt" + r[0]].certo = true;
			certo = "opt" + r[0];
			
			for (var i = 1; i < r.length; i++)
			{
				if (maior)
					context["opt" + r[i]].txt.text = quizQuestions.questao[ran].errada[i-1];
				else
					context["opt" + r[i]].txt2.text = quizQuestions.questao[ran].errada[i-1];
			}
		}
		
		function bigger(ran)
		{
			if (quizQuestions.questao[ran].resposta.length > 50)
				return true;
			
			for (var i = 1; i < 4; i++)
				if (quizQuestions.questao[ran].errada[i-1].length > 50)
					return true;
				
			return false;
		}
		
		function randomiza(n) 
		{	
			var a = [];
			var aux = 0;
			
			for (var i = 0; i < n; i++) 
			{
				aux = Math.floor(Math.random() * n);
				if (a.indexOf(aux) == -1)
					a.push(aux);
				else
					i--;
			}
			
			return a;
		}
		
		//answer.on("click", reload);
		opt0.on("click", responde);
		opt0.name = "opt0";
		opt1.on("click", responde);
		opt1.name = "opt1";
		opt2.on("click", responde);
		opt2.name = "opt2";
		opt3.on("click", responde);
		opt3.name = "opt3";
		
		habilita(false);
		novaQuestao();
		setTimeout(habilita, 500, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// title
	this.text = new cjs.Text("acertando!!!", "26px 'Upheaval Pro'", "#613F42");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.setTransform(635,114.7);

	this.text_1 = new cjs.Text("mais moedas", "30px 'Upheaval Pro'", "#EF5A37");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 208;
	this.text_1.setTransform(449,112.7);

	this.text_2 = new cjs.Text("ganhE", "26px 'Upheaval Pro'", "#613F42");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(303,114.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD600").s().p("EgpmADkQgcAAgUgUQgUgVAAgbIAAk+QAAgcAUgUQAUgVAcAAMBTNAAAQAcAAAUAVQAUAUAAAcIAAE+QAAAbgUAVQgUAUgcAAg");
	this.shape.setTransform(480,131.7);

	this.text_3 = new cjs.Text("quiz bônus", "42px 'Upheaval Pro'", "#EF5A37");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 32;
	this.text_3.setTransform(478,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#371E21").s().p("EgtRAEXQgmAAgcgcQgbgbgBgnIAAlxQABgnAbgbQAcgcAmAAMBajAAAQAmAAAcAcQAbAbABAnIAAFxQgBAngbAbQgcAcgmAAg");
	this.shape_1.setTransform(480,69.7,1.086,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_3},{t:this.shape},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// arrows
	this.text_4 = new cjs.Text("D", "60px 'Upheaval Pro'", "#F4BE43");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 49;
	this.text_4.lineWidth = 36;
	this.text_4.setTransform(162.1,463.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#371E21").s().p("AjxDXIAAgBIhpjWIBpjUIAAgDIJMAAIAAGug");
	this.shape_2.setTransform(156.2,495.1,1.224,1.273);

	this.text_5 = new cjs.Text("C", "60px 'Upheaval Pro'", "#F4BE43");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 49;
	this.text_5.lineWidth = 36;
	this.text_5.setTransform(162.1,396.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#371E21").s().p("AjxDXIAAgBIhpjWIBpjUIAAgDIJMAAIAAGug");
	this.shape_3.setTransform(156.2,428.6,1.224,1.273);

	this.text_6 = new cjs.Text("B", "60px 'Upheaval Pro'", "#F4BE43");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 49;
	this.text_6.lineWidth = 36;
	this.text_6.setTransform(162.1,330.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#371E21").s().p("AjxDXIAAgBIhpjWIBpjUIAAgDIJMAAIAAGug");
	this.shape_4.setTransform(156.2,362.1,1.224,1.273);

	this.text_7 = new cjs.Text("A", "60px 'Upheaval Pro'", "#F4BE43");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 49;
	this.text_7.lineWidth = 36;
	this.text_7.setTransform(162.1,263.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#371E21").s().p("AjxDXIAAgBIhpjWIBpjUIAAgDIJMAAIAAGug");
	this.shape_5.setTransform(156.2,295.7,1.224,1.273);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.text_7},{t:this.shape_4},{t:this.text_6},{t:this.shape_3},{t:this.text_5},{t:this.shape_2},{t:this.text_4}]}).wait(1));

	// enum
	this.pergunta = new cjs.Text("A alternativa que melhor completa a frase: Desde a pré-história, os homens passaram a utilizar a posição dos ____, como as ____ para marcar o tempo e para orientá-los na direção a ser tomada. é:", "24px 'Jockey One'", "#FFFFFF");
	this.pergunta.name = "pergunta";
	this.pergunta.textAlign = "center";
	this.pergunta.lineHeight = 22;
	this.pergunta.lineWidth = 622;
	this.pergunta.setTransform(478,162.8);

	this.timeline.addTween(cjs.Tween.get(this.pergunta).wait(1));

	// options
	this.opt3 = new lib.quizOption();
	this.opt3.setTransform(436.7,489.2,1,1,0,0,0,238,21.6);

	this.opt2 = new lib.quizOption();
	this.opt2.setTransform(436.7,422.7,1,1,0,0,0,238,21.6);

	this.opt1 = new lib.quizOption();
	this.opt1.setTransform(436.7,356.3,1,1,0,0,0,238,21.6);

	this.opt0 = new lib.quizOption();
	this.opt0.setTransform(436.7,289.8,1,1,0,0,0,238,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.opt0},{t:this.opt1},{t:this.opt2},{t:this.opt3}]}).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#613F42").s().p("EgqtAZNQgzAAglglQglglAAg0MAAAgudQAAg0AlglQAlglAzAAMBVbAAAQA0AAAkAlQAlAlAAA0MAAAAudQAAA0glAlQgkAlg0AAg");
	this.shape_6.setTransform(480,319.9,1.136,1.348);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(97,63,66,0.008)").s().p("EhK/Aq9MAAAhV6MCV/AAAMAAABV6g");
	this.shape_7.setTransform(480,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


(lib.Instrucoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var c = this;
		var interacao = this.interacao;
		
		/*this.show = function()
		{
			c.parent.stopTheGame();
			showingInstrucoes = true;
			createjs.Tween.get(c, {override:true}).wait(0).to({x:480}, 500, createjs.Ease.quartOut);
		}*/
		
		function switchMessage()
		{
			if (createjs.Touch.isSupported()) 
				interacao.gotoAndStop(0);
			else 
				interacao.gotoAndStop(1);
		}
		
		this.hide = function(event)
		{
			c.close.clickCont++;
			if (createjs.Touch.isSupported() && c.close.clickCont % 2 == 0)
				return;
			
			if (!showingGameOver && !showingCounter)
				setTimeout(c.parent.playTheGame, 500);
			createjs.Tween.get(c, {override:true}).wait(0).to({x:canvas.width  / stage.scaleX + 480}, 500, createjs.Ease.quartIn).call(habilitaGame);
		}
		
		function habilitaGame()
		{
			showingInstrucoes = false;
			
			try {
				c.parent.removeInformacoes();
			} catch(e) {
				console.log("Não foi possível remover o quadro de informações");
			}
		}
		
		this.close.on("click", this.hide);
		this.close.clickCont = 0;
		
		setTimeout(switchMessage, 100);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tipos
	this.interacao = new lib.interacao();
	this.interacao.setTransform(480,242.8,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.interacao).wait(1));

	// button
	this.close = new lib.closeButton();
	this.close.setTransform(480,485.6,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.close).wait(1));

	// bg
	this.instance = new lib.instrucoes();
	this.instance.setTransform(167.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.5,25.5,625,490.1);


(lib.Informacoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var c = this;
		
		/*this.show = function()
		{
			showingInformacoes = true;
			createjs.Tween.get(c, {override:true}).wait(0).to({y:275}, 500, createjs.Ease.quartOut);
		}*/
		
		this.hide = function(event)
		{
			c.close.clickCont++;
			if (createjs.Touch.isSupported() && c.close.clickCont % 2 == 0)
				return;
			
			createjs.Tween.get(c, {override:true}).wait(0).to({y:-550}, 500, createjs.Ease.quartIn).call(habilitaGame);
		}
		
		function habilitaGame()
		{
			showingInformacoes = false;
			try {
				c.parent.removeInformacoes();
			} catch(e) {
				console.log("Não foi possível remover o quadro de informações");
			}
		}
		
		this.close.on("click", this.hide);
		this.close.clickCont = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// button
	this.close = new lib.closeButton();
	this.close.setTransform(480,502.6,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.close).wait(1));

	// bg
	this.instance = new lib.informacoes();
	this.instance.setTransform(167.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.5,25.5,625,507.1);


(lib.Periquito = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// smoke
	this.instance = new lib.periquito();
	this.instance.setTransform(-35,-37.8,0.467,0.467);

	this.instance_1 = new lib.heroSmoke();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(5).to({alpha:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-37.8,70,75.6);


(lib.Mosquito = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// smoke
	this.instance = new lib.mosquito();
	this.instance.setTransform(-35,-19.4,0.438,0.438);

	this.instance_1 = new lib.heroSmoke();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(5).to({alpha:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-19.4,70,39);


(lib.Ladybug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// smoke
	this.instance = new lib.ladybug();
	this.instance.setTransform(-40,-26.5,0.482,0.482);

	this.instance_1 = new lib.heroSmoke();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(5).to({alpha:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-26.5,80,53);


(lib.Bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// smoke
	this.instance = new lib.bird();
	this.instance.setTransform(-30,-25,0.4,0.4);

	this.instance_1 = new lib.heroSmoke();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(5).to({alpha:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-25,60,50.1);


(lib.Bee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// smoke
	this.instance = new lib.bee();
	this.instance.setTransform(-37.5,-41,0.412,0.412);

	this.instance_1 = new lib.heroSmoke();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(5).to({alpha:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-41,75,82);


(lib.Ant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// smoke
	this.instance = new lib.ant();
	this.instance.setTransform(-40,-32.4,0.435,0.435);

	this.instance_1 = new lib.heroSmoke();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(5).to({alpha:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-32.4,80,64.8);


(lib.gameOverRecompensas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
		var context = this;
		setTimeout(function() {
			context.play();
		}, 1000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(11));

	// recompensas
	this.level = new lib.gameOverRecompensasinn();
	this.level.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.level).wait(29).to({scaleX:1,scaleY:1,x:80},9,cjs.Ease.get(1)).wait(31).to({scaleX:0.5,scaleY:0.5,x:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this.parent.parent.parent;
		
		var context = this;
		var playAgain = this.playAgain;
		var ptsTxt = this.ptsTxt;
		var bestTxt = this.bestTxt;
		var reward = this.reward;
		
		this.show = function(pts)
		{
			updatePoints(pts);
			showingGameOver = true;
			//playSoundTag('gameover', true);
			playAudio("gameover", true);
			createjs.Tween.get(context, {override:true}).wait(500).to({y:250}, 500, createjs.Ease.quartOut);
		}
		
		this.hide = function()
		{
			setTimeout(function() { showingGameOver = false; }, 100);
			createjs.Tween.get(context, {override:true}).wait(0).to({y:-550}, 250, createjs.Ease.quartIn);
		}
		
		function reload(event)
		{
			playAgain.clickCont++;
			if (createjs.Touch.isSupported() && playAgain.clickCont % 2 == 0)
				return;
			
			context.parent.reloadTheGame();
			//createLevelMusic();
			stopAudio();
			playAgain.gotoAndPlay("s1");
		}
		
		function updatePoints(pts)
		{
			console.log(pts);
			ptsTxt.text = pts + "";
			
			setHighScore(pts);
			//localStorage.clear();
			/*var arr = [0,5,9,3,8];
			localStorage.setItem('teste', JSON.stringify(arr));
			var temp = [];
			temp = JSON.parse(localStorage.getItem('teste'));
			temp.push(2);
			temp = temp.concat([255, 3]);
			console.log(temp);
			for (var i = 0; i < temp.length; i++)
				console.log(temp[i]);*/
			console.log(getHighScore());
			bestTxt.text = getHighScore();
		}
		
		function getHighScore()
		{
			var scores = [];
			scores = scores.concat(getOrderedScores());
			return scores[scores.length - 1];
		}
		
		function getOrderedScores()
		{
			var scores = [];
			scores = scores.concat(getScores());
			if (scores.length > 0)
				order(scores);
			return scores;
		}
		
		function getScores()
		{
			return JSON.parse(localStorage.getItem('superFlyingHighScore'));
		}
		
		function order(ar)
		{
			var i,j,temp;
			for (i = (ar.length - 1); i >= 0; i--)
			{
				for (j = 1; j <= i; j++)
				{
					if (ar[j-1] > ar[j])
					{
						temp = ar[j-1];
						ar[j-1] = ar[j];
						ar[j] = temp;
					} 
				} 
			}
		}
		
		function setHighScore(pts)
		{
			var score = [];
			score = score.concat(getScores());
			//if (localStorage.getItem('superFlyingHighScore'))
				//score = getScores(); //JSON.parse(localStorage.getItem('superFlyingHighScore'));
			
			score.push(pts);
			localStorage.setItem('superFlyingHighScore', JSON.stringify(score));
			//console.log("Game Over ", score.length);
			
			if (pts < 100)
				reward.level.gotoAndStop(0);
			else if (pts < 200)
				reward.level.gotoAndStop(1);
			else if (pts < 300)
				reward.level.gotoAndStop(2);
			else if (pts < 500)
				reward.level.gotoAndStop(3);
			else if (pts < 750)
				reward.level.gotoAndStop(4);
			else if (pts < 1000)
				reward.level.gotoAndStop(5);
			else 
				reward.level.gotoAndStop(6);
			
			//reward.gotoAndPlay("s1");
		}
		
		function showRanking(event)
		{
			context.parent.apresentaRanking();
		}
		
		function trocaPersonagem(event)
		{
			context.bttroca.clickCont++;
			if (createjs.Touch.isSupported() && context.bttroca.clickCont % 2 == 0)
				return;
			
			root.rodaSelecao();
		}
		
		playAgain.on("click", reload);
		playAgain.clickCont = 0;
		this.btranking.on("click", showRanking);
		this.bttroca.on("click", trocaPersonagem);
		this.bttroca.clickCont = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// title
	this.text = new cjs.Text("fim de jogo", "35px 'Upheaval Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.setTransform(478.1,126);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59948E").s().p("Ay6DRIAAmhMAl1AAAIAAGhg");
	this.shape.setTransform(480,142.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E837D").s().p("AlGDRIDCjZIjCjIIG1AAIDYFCIhPBfg");
	this.shape_1.setTransform(354.9,147.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E837D").s().p("Aj3DRIhPhfIDYlCIG1AAIjCDIIDCDZg");
	this.shape_2.setTransform(605.1,147.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// level
	this.reward = new lib.gameOverRecompensas();
	this.reward.setTransform(400.4,276.7);

	this.timeline.addTween(cjs.Tween.get(this.reward).wait(1));

	// bttroca
	this.bttroca = new lib.gameOverTrocarPersonagem();
	this.bttroca.setTransform(584.6,437.4);

	this.text_1 = new cjs.Text("TROCAR", "22px 'Upheaval Pro'", "#F4BE43");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.setTransform(580.6,371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.bttroca}]}).wait(1));

	// btranking
	this.btranking = new lib.gameOverRanking();
	this.btranking.setTransform(477.9,437.4);

	this.text_2 = new cjs.Text("ranking", "22px 'Upheaval Pro'", "#F4BE43");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.setTransform(475.9,371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.btranking}]}).wait(1));

	// button
	this.playAgain = new lib.gameOverPlayAgain();
	this.playAgain.setTransform(371.3,437.4);

	this.text_3 = new cjs.Text("jogar", "22px 'Upheaval Pro'", "#F4BE43");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.setTransform(369.3,371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.playAgain}]}).wait(1));

	// labels
	this.text_4 = new cjs.Text("PONTUAÇÃO", "22px 'Upheaval Pro'", "#F4BE43");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 17;
	this.text_4.lineWidth = 145;
	this.text_4.setTransform(564.3,205.6);

	this.text_5 = new cjs.Text("NÍVEL", "22px 'Upheaval Pro'", "#F4BE43");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 12;
	this.text_5.lineWidth = 85;
	this.text_5.setTransform(398.4,204.3);

	this.ptsTxt = new cjs.Text("0", "25px 'Upheaval Pro'", "#FFFFFF");
	this.ptsTxt.name = "ptsTxt";
	this.ptsTxt.textAlign = "right";
	this.ptsTxt.lineHeight = 15;
	this.ptsTxt.lineWidth = 111;
	this.ptsTxt.setTransform(626.3,229.1);

	this.bestTxt = new cjs.Text("0", "25px 'Upheaval Pro'", "#FFFFFF");
	this.bestTxt.name = "bestTxt";
	this.bestTxt.textAlign = "right";
	this.bestTxt.lineHeight = 15;
	this.bestTxt.lineWidth = 111;
	this.bestTxt.setTransform(626.6,299.4);

	this.text_6 = new cjs.Text("melhor", "22px 'Upheaval Pro'", "#F4BE43");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 12;
	this.text_6.lineWidth = 110;
	this.text_6.setTransform(571.3,277.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_6},{t:this.bestTxt},{t:this.ptsTxt},{t:this.text_5},{t:this.text_4}]}).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D5254").s().p("A4ZMoQgpAAgdgdQgegeAAgpIAA2HQAAgpAegeQAdgdApAAMAwzAAAQApAAAdAdQAeAeAAApIAAWHQAAAqgeAdQgdAdgpAAg");
	this.shape_3.setTransform(480,278.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#613F42").s().p("A6QZrQgpABgegeQgdgdAAgqMAAAgwOQAAgoAdgeQAegeApABMA0hAAAQAqgBAdAeQAdAeAAAoMAAAAwOQAAAqgdAdQgdAegqgBg");
	this.shape_4.setTransform(480,271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,960,582);


(lib.Selecao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
		
		var context = this;
		
		var next = this.next;
		next.clickCont = 0;
		var prev = this.prev;
		prev.clickCont = 0;
		var heroes = this.heroes;
		
		var selecione = this.selecione;
		
		/*this.show = function(pts)
		{
			createjs.Tween.get(context, {override:true}).wait(0).to({y:275}, 500, createjs.Ease.quartOut);
		}*/
		
		this.hide = function()
		{
			createjs.Tween.get(context, {override:true}).wait(0).to({y:-550}, 250, createjs.Ease.quartIn).call(remove);
		}
		
		function remove()
		{
			try {
				context.parent.removeSelecao();
			} catch(e) {
				console.log("Não foi possível remover a seleção");
			}
		}
		
		function nextHandler(event)
		{
			next.clickCont++;
			if (createjs.Touch.isSupported() && next.clickCont % 2 == 0)
				return;
			
			if (heroes.currentFrame < heroes.timeline.duration)
				heroes.gotoAndStop(heroes.currentFrame + 1);
			
			next.gotoAndPlay("s1");
		}
		
		function prevHandler(event)
		{
			prev.clickCont++;
			if (createjs.Touch.isSupported() && prev.clickCont % 2 == 0)
				return;
			
			if (heroes.currentFrame > 0)
				heroes.gotoAndStop(heroes.currentFrame - 1);
			else
				heroes.gotoAndStop(heroes.timeline.duration - 1);
			
			prev.gotoAndPlay("s1");
		}
		
		function selecioneHandler(event)
		{
			selecione.clickCont++;
			if (createjs.Touch.isSupported() && selecione.clickCont % 2 == 0)
				return;
			
			var k = heroes.currentFrame;
			selecionado = k == 0 ? "Bee" : k == 1 ? "Bird" : k == 2 ? "Ant" : k == 3 ? "Mosquito" : k == 4 ? "Ladybug" : "Periquito";
			selecione.gotoAndPlay("s1");
			context.parent.gotoGame();
			context.hide();
		}
		
		next.on("click", nextHandler);
		prev.on("click", prevHandler);
		selecione.on("click", selecioneHandler);
		selecione.clickCont = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// botao selecionar
	this.selecione = new lib.btselecionar();
	this.selecione.setTransform(480,480.9,1.047,1.046);

	this.timeline.addTween(cjs.Tween.get(this.selecione).wait(1));

	// botao next
	this.next = new lib.btnextprev();
	this.next.setTransform(735,316.2,1.524,1.524,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.next).wait(1));

	// botao prev
	this.prev = new lib.btnextprev();
	this.prev.setTransform(225,316.2,1.524,1.524);

	this.timeline.addTween(cjs.Tween.get(this.prev).wait(1));

	// heroes
	this.text = new cjs.Text("ESCOLHA SEU PERSONAGEM", "20px 'Upheaval Pro'", "#F4BE43");
	this.text.textAlign = "center";
	this.text.lineHeight = 11;
	this.text.lineWidth = 343;
	this.text.setTransform(478,88.7);

	this.heroes = new lib.heroes();
	this.heroes.setTransform(480,322.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.heroes},{t:this.text}]}).wait(1));

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D5254").s().p("A7nRhQgYAAgSgRQgSgSAAgZMAAAghKQAAgYASgSQASgRAYAAMA3PAAAQAZAAARARQASASAAAYMAAAAhKQAAAZgSASQgRARgZAAg");
	this.shape.setTransform(480,316.1,1.363,1.363);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#613F42").s().p("A+WXoQgfAAgVgVQgWgWABgeMAAAgs9QgBgeAWgWQAVgVAfAAMA8uAAAQAdAAAWAVQAWAWAAAeMAAAAs9QAAAegWAWQgWAVgdAAg");
	this.shape_1.setTransform(480,286.3,1.363,1.363);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fundo
	this.text_1 = new cjs.Text("ESCOLHA", "bold 12px 'Roboto'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(-60.5,166.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBEBEB").s().p("ApHCgIAAk/ISPAAIAAE/g");
	this.shape_2.setTransform(-58.5,176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(244,190,67,0)").s().p("EhK/Aq9MAAAhV6MCV/AAAMAAABV6g");
	this.shape_3.setTransform(480,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,0,1077,550);


(lib.Counter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// frase
	this.instance = new lib.counter_frase();
	this.instance.setTransform(480,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// bg
	this.text = new cjs.Text("COUNTER", "bold 12px 'Roboto'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(56.5,-25.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("ApHCgIAAk/ISPAAIAAE/g");
	this.shape.setTransform(58.5,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(79,13,94,0.008)").s().p("Eg0VAgfMAAAhA9MBoqAAAMAAABA9g");
	this.shape_1.setTransform(480,275,1.433,1.322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,117,32);


(lib.Cenario04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var context = this;
		var root = this.parent.parent;
		
		var counter = this.counter;
		var pontuacao = this.pontuacao;
		var gameOver = this.gameOver;
		var quiz = this.quiz;
		var bg = this.bg;
		
		var hills, mountains, obstacles, ground, hero;
		var coins, bonus;
		var speed = 7.5;
		var heroSpeed = 10.5;
		var speedUpLimit = -10.5;
		var speedDownLimit = 10.5;
		
		var numCoins = 5;
		var timeout = 0;
		var pontos = 0;
		var creationTimes = 1;
		
		var moveUp = false;
		var canMove = false;
		
		var lastY = 0;
		
		// criar cada objeto separadamente atribuindo para eles a velocidade principal de deslocamento
		// cada objeto deve fazer seus próprios calculos de velocidade baseado na velocidade passada
		
		this.initialize = function()
		{	
			//playSoundTag('level4', true);
			
			pontos = 0;
			creationTimes = 1;
			atualizaPontuacao();
			canMove = false;
			
			counter.gotoAndPlay("s1");
			
			var scale = stage.scaleX;
			var scaledWidth = canvas.width / scale;
			var scaledHeight = canvas.height / scale;
			
			hero = createHero(root.selecionado, scaledWidth * 0.3, scaledHeight * 0.4);
			coins = createContainer("Coins");
			bonus = createContainer("Bonuses");
			
			mountains	= create("Mountains", 		268, 110, 0, scaledHeight - 85, 0.01);
			hills 		= create("Hills", 			360, 49, 0, scaledHeight - 85, 0.02);
			obstacles 	= create("Obstacle", 		scaledWidth * 0.4, 387, scaledWidth * 0.6, 0, 0.8, true); 
			obstacles.x = getScaledWidth();
			
			ground 		= create("Ground", 			398, 87, 0, scaledHeight - 85, 1);
			
			context.addChild(mountains, hills, obstacles, ground, coins, bonus, hero);
			
			context.on("mousedown", stageDownHandler, bg);
			
			document.onkeydown = keyDownHandler;
			document.onkeyup = keyUpHandler;
			
			setTimeout(function() {
				context.setChildIndex(counter, context.getNumChildren() - 1);
				context.setChildIndex(hero, context.getNumChildren() - 1);
				stage.on("click", context.playGame, context, true);
			},500);
		}
		
		this.playGame = function(event)
		{
			var mX = stage.mouseX / stage.scaleX;
			var mY = stage.mouseY / stage.scaleY;
			
			console.log(showingInstrucoes);
			
			if ((mX > 810 && mY > 465) || (mX < 160 && mY < 170) || showingInstrucoes)
			{
				stage.on("click", context.playGame, context, true);
				return;
			}
			
			if (event)
				counter.gotoAndPlay("s2");
			canMove = true;
			context.setChildIndex(counter, context.getNumChildren() - 1);
			context.setChildIndex(pontuacao, context.getNumChildren() - 1);
			quiz.hide();
		}
		
		this.stopGame = function(outside)
		{
			canMove = false;
			if (!outside)
				gameOver.show(pontos);
			context.setChildIndex(gameOver, context.getNumChildren() - 1);
		}
		
		function createHero(nome, px, py)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var type = nome == "Bee" ? lib.Bee : nome == "Mosquito" ? lib.Mosquito : nome == "Ladybug" ? lib.Ladybug : nome == "Ant" ? lib.Ant : nome == "Bird" ? lib.Bird : lib.Periquito;
			var inseto = new type();
			c.addChild(inseto);
			
			c.falling = function()
			{
				if (moveUp)
				{
					if (heroSpeed > speedUpLimit)
						heroSpeed -= 2.5;
				}
				else
				{
					if (heroSpeed < speedDownLimit)
						heroSpeed += 1.5;
				}		
				
				if (canMove)
				{
					this.y += heroSpeed;		
					checkObstaclesCollision();
					checkCoinsCollision();
					checkGroundCollision();
					checkBonusCollision();
				}
			}
			c.on("tick", c.falling);
			return c;
		}
		
		/**
		* Cria um container para outros objetos
		*/ 
		function createContainer(nome)
		{
			var c = new Container.createContainer(nome, {width:0, height:0, x:0, y:0});
			return c;
		}
		
		/**
		* Função genérica para a criação de diversos componentes do cenário
		*/
		function create(nome, largura, altura, px, py, s, duplo)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var g, g2;
			
			c.move = function()
			{
				scale = getScaledWidth();
				
				if (c.x + c.width - scale < 0)
				{
					if (c.getNumChildren() * largura > scale + largura * 2)
					{
						c.removeChild(c.getChildAt(0));
						if (duplo)
							c.removeChild(c.getChildAt(0));
					}
					
					var type = nome == "Ground" ? lib.Ground4 : nome == "Hills" ? lib.Hills4 : 
					nome == "Trees" ? lib.Trees4 : nome == "Mountains" ? lib.Mountain4 : lib.Obstacle4;
					g = new type();
					
					if (duplo)
					{
						//c.x = scale;
						var posY = Math.random() * 150 + 25;
						posY = adjustPosition(posY);
						
						g.x = c.width;
						g.y = posY;
						
						var g2 = new type();
						g2.x = c.width + 53;
						g2.y = posY + 150;
						g2.rotation = 180;
						g.height = g2.height = 387;
						c.addChild(g, g2);
						c.width += largura;
						
						cacheIt(g, nome); 
						cacheIt(g2, nome); 
						
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							if (creationTimes % 10 == 0)
								createBonus("Bonus", posY, 0.8);
							else
								handleCoins("Coin", posY, 0.8);
						}, 200);
					}
					else
					{
						g.x = c.width;
						c.addChild(g);
						c.width += largura;	
						
						cacheIt(g, nome); 
					}
				}
				if (canMove)
					c.x -= speed * s;
			}
			c.on("tick", c.move);
			return c;
		}
		
		function adjustPosition(py)
		{
			if (lastY == 0)
			{
				lastY = py;
			}
			else
			{
				var k = Math.abs(lastY - py);
				if (k < 150)
				{
					if (py < 120)
						py += 120;
					else
						py -= 120;
				}
				lastY = py;
			}
			return py;
		}
		
		// CREATE COINS
		
		/**
		* Método responsável pela definição de parâmetros para a criação das moedas do jogo
		*/
		function handleCoins(nome, py, s)
		{
			if (!canMove)
				return;
			
			creationTimes++;
			
			var k = 0;
			var r = Math.random();
			var pos = r <= 0.2 ? [50,20,0,20,50] : r <= 0.4 ? [50,80,100,80,50] : r <= 0.6 ? [50,80,50,80,50] : r <= 0.8 ? [-50,50,-50,50,-50] : [50,50,50,50,50];
			
			py = getScaledHeight() * (0.1 + Math.random() * 0.5); 
			
			while (k < numCoins)
			{
				createCoin(nome, py, s, k, pos);
				k++;
			}
		}
		
		/**
		* Método responsável pela criação das moedas do jogo de acordo com os 
		* parâmetros definidos anteriormente
		*/
		function createCoin(nome, py, s, k, pos)
		{
			if (!pos)
				return;
			
			var coin = new lib.Coin();
			coin.x = getScaledWidth() + 25 + (50 * (k+1));
			coin.y = py + pos[k];
			coin.move = function() 
			{ 
				if (coin.x < - getScaledWidth() * 2)
					coins.removeChild(coins.getChildAt(0));
				
				if (canMove)
					coin.x -= speed * s; 
			}
			//cacheIt(coin, "Coin");
			
			coin.on("tick", coin.move);
			coins.addChild(coin);
		}
		
		/**
		* Remove um coin especifico caso ele exista
		*/
		function removeCoin(coin)
		{
			if (coin)
			{
				createjs.Tween.get(coin, {override:true}).to({x:pontuacao.x, y:pontuacao.y}, 750, createjs.Ease.quartOut);
				setTimeout(function() {
					coins.removeChild(coin);
				}, 800);
			}
		}
		// END CREATE COINS
		
		function createBonus(nome, py, s)
		{
			creationTimes++;
			
			var b = new lib.Bonus();
			b.name = nome;
			b.x = getScaledWidth() + 175;
			b.y = getScaledHeight() * (0.1 + Math.random() * 0.5);
			b.move = function() 
			{ 
				if (b.x < - getScaledWidth() * 2)
					bonus.removeChild(bonus.getChildAt(0));
				
				if (canMove)
					b.x -= speed * s; 
			}
			
			cacheIt(b, "Bonus");
			
			b.on("tick", b.move);
			bonus.addChild(b);
		}
		/**
		* Remove um bonus especifico caso ele exista
		*/
		function removeBonus(b)
		{
			bonus.removeChild(b);
		}
		
		// COLLISIONS
		
		/**
		* Verifica se o hero está em contato com o bonus para removê-lo e incrementar o contador
		*/
		function checkBonusCollision()
		{
			var i = 0;
			var num = bonus.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (bonus.getChildAt(i) && bonus.getChildAt(i).x > hero.x - 50 && bonus.getChildAt(i).x < hero.x + 100)
				{
					var px = bonus.getChildAt(i).x;
					var py = bonus.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeBonus(bonus.getChildAt(i));
						context.stopGame(true);
						context.setChildIndex(quiz, context.getNumChildren() - 1);
						quiz.show();
						break;
					}
				}
			}
		}
		/**
		* Verifica se o hero está em contato com as moedas para removê-las e incrementar o contador
		*/
		function checkCoinsCollision()
		{
			var i = 0;
			var num = coins.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (coins.getChildAt(i) && coins.getChildAt(i).x > hero.x - 50 && coins.getChildAt(i).x < hero.x + 100)
				{
					var px = coins.getChildAt(i).x;
					var py = coins.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeCoin(coins.getChildAt(i));
						pontos++;
						atualizaPontuacao(true);
						break;
					}
				}
			}
		}
		/**
		* Verifica se o hero está em contato com o chão ou o teto para disparar o estado morte
		*/
		function checkGroundCollision()
		{
			if (hero.y > getScaledWidth() * 0.48 || hero.y < 0)
			{
				context.stopGame();
				hero.getChildAt(0).gotoAndPlay(1);
				return;
			}
		}
		/**
		* Verifica se o hero está em contato com os obstáculos para disparar o estado morte
		*/ 
		function checkObstaclesCollision()
		{
			var i = 0;
			var num = obstacles.getNumChildren();
			
			for (i = 0; i < num; i++)
			{
				if (obstacles.getChildAt(i))
				{
					var px = obstacles.x + obstacles.getChildAt(i).x;
					var py = obstacles.getChildAt(i).y;
					
					if (px > hero.x - 50 && px < hero.x + 100)
					{
						if (obstacles.getChildAt(i).rotation == 0)
						{
							if ((hero.x + 5 > px && hero.x - 5 < px + 56) && (hero.y - 5 < py && hero.y + 5 > py - 387))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								break;
							}
						} 
						else
						{
							if ((hero.x + 5 > px - 56 && hero.x - 5 < px) && (hero.y - 5 < py + 387 && hero.y + 5 > py))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								break;
							}
						}
					}
				}
			}
		}
		
		// END COLLISIONS
		
		this.quizSucess = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
			var k = 0;
			var interval = 0;
			interval = setInterval(function() 
			{
				if (k >= 9)
					clearInterval(interval);
				
				var c = new lib.Coin();
				c.x = hero.x; c.y = hero.y;
				coins.addChild(c);
				removeCoin(c);
				pontos += 1;
				atualizaPontuacao(true);
				k++;
			}, 100);
		}
		this.quizFailed = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
		}
		
		// CANVAS SCALE
		
		function getScaledWidth()
		{
			return canvas.width / stage.scaleX;
		}
		
		function getScaledHeight()
		{
			return canvas.height / stage.scaleY;
		}
		// END CANVAS SCALE
		// CACHE OBJECTS
		function cacheIt(g, nome)
		{
			if (nome == "Obstacle")
				g.cache(0, -390, 54, 390);
			else if (nome == "Ground")
				g.cache(0, 0, 401, 90);
			else if (nome == "Clouds")
				g.cache(0, 0, 420, 68);
			else if (nome == "Coin")
				g.cache(-16, -16, 34, 34);
			else if (nome == "Bonus")
				g.cache(-25, -30, 52, 62);
			else if (nome == "Hills")
				g.cache(0, -50, 390, 50);
			else if (nome == "Mountains")
				g.cache(0, -111, 268, 111);
		}
		
		// INSECT CONTROL
		function stageDownHandler(event)
		{
			moveUp = true;
			event.on("mouseup", stageUpHandler, bg);
			/*if (canMove)
				playSoundTag('jump', 100);*/
		}
		function stageUpHandler(event)
		{
			moveUp = false;
		}
		function keyDownHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = true;
		}
		function keyUpHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = false;
		}
		
		// END INSECT CONTROL
		// UPDATE
		function atualizaPontuacao(colect)
		{
			pontuacao.txt.text = pontos + "";
			if (colect)
				playAudio("sounds/sm_coin.mp3");
		}
		
		// TO RELOAD
		function removeComponents()
		{
			context.removeChild(hero);
			context.removeChild(coins);
			context.removeChild(ground);
			context.removeChild(obstacles);
			context.removeChild(bonus);
			context.removeChild(hills);
			context.removeChild(mountains);
		}
		
		this.reloadTheGame = function(event)
		{
			canMove = false;
			removeComponents();
			context.initialize();
			context.stopGame();
			setTimeout(function() {
				gameOver.hide();
			}, 0);
			setTimeout(function() { context.parent.inicializa(); }, 0);
		}
		
		this.apresentaRanking = function()
		{
			root.rankingHandler();
			//ranking.show();
			//context.setChildIndex(ranking, context.getNumChildren() - 1);
		}
		
		this.initialize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// quiz
	this.quiz = new lib.Quiz();
	this.quiz.setTransform(1440,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.quiz).wait(1));

	// game over
	this.gameOver = new lib.GameOver();
	this.gameOver.setTransform(480,-275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(1));

	// pontos
	this.pontuacao = new lib.pontuacao();
	this.pontuacao.setTransform(814.1,25,0.996,0.996);

	this.timeline.addTween(cjs.Tween.get(this.pontuacao).wait(1));

	// counter
	this.counter = new lib.Counter();
	this.counter.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.counter).wait(1));

	// nuvens
	this.instance = new lib.Clouds4();
	this.instance.setTransform(480.1,110,1,1,0,0,0,457.8,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#244B68").s().p("EhLAAq8MAAAhV3MCWBAAAMAAABV3g");
	this.shape.setTransform(480,275,1,1.001);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// label
	this.text = new cjs.Text("CENARIO 04", "bold 12px 'Roboto'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(-60.5,126.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("ApHCgIAAk/ISPAAIAAE/g");
	this.shape_1.setTransform(-58.5,136);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(235,235,235,0.008)").s().p("A24SDMAAAgkEMAtxAAAMAAAAkEg");
	this.shape_2.setTransform(480,275,3.276,2.381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-443.4,2037,996.5);


(lib.Cenario03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var context = this;
		var root = this.parent.parent;
		
		var counter = this.counter;
		var pontuacao = this.pontuacao;
		var gameOver = this.gameOver;
		var quiz = this.quiz;
		var bg = this.bg;
		
		var hills, mountains, trees, obstacles, ground, hero;
		var coins, bonus;
		var speed = 7.5;
		var heroSpeed = 10.5;
		var speedUpLimit = -10.5;
		var speedDownLimit = 10.5;
		
		var numCoins = 5;
		var timeout = 0;
		var pontos = 0;
		var creationTimes = 1;
		
		var moveUp = false;
		var canMove = false;
		
		var lastY = 0;
		
		// criar cada objeto separadamente atribuindo para eles a velocidade principal de deslocamento
		// cada objeto deve fazer seus próprios calculos de velocidade baseado na velocidade passada
		
		this.initialize = function()
		{	
			//playSoundTag('level3', true);
			
			pontos = 0;
			creationTimes = 1;
			atualizaPontuacao();
			canMove = false;
			
			counter.gotoAndPlay("s1");
			
			var scale = stage.scaleX;
			var scaledWidth = canvas.width / scale;
			var scaledHeight = canvas.height / scale;
			
			hero = createHero(root.selecionado, scaledWidth * 0.3, scaledHeight * 0.4);
			coins = createContainer("Coins");
			bonus = createContainer("Bonuses");
			
			mountains	= create("Mountains", 		500, 192, 0, scaledHeight - 86, 0.01);
			hills 		= create("Hills", 			700, 65, 0, scaledHeight - 86, 0.02);
			trees 		= create("Trees", 			scaledWidth * 0.45, 101, scaledWidth * 0.3, scaledHeight - 85, 0.15);
			obstacles 	= create("Obstacle", 		scaledWidth * 0.4, 387, scaledWidth * 0.6, 0, 0.8, true); 
			obstacles.x = getScaledWidth();
			
			ground 		= create("Ground", 			398, 86, 0, scaledHeight - 86, 1);
			
			context.addChild(mountains, hills, trees, obstacles, ground, coins, bonus, hero);
			
			context.on("mousedown", stageDownHandler, bg);
			
			document.onkeydown = keyDownHandler;
			document.onkeyup = keyUpHandler;
			
			setTimeout(function() {
				context.setChildIndex(counter, context.getNumChildren() - 1);
				context.setChildIndex(hero, context.getNumChildren() - 1);
				stage.on("click", context.playGame, context, true);
			},500);
		}
		
		this.playGame = function(event)
		{
			var mX = stage.mouseX / stage.scaleX;
			var mY = stage.mouseY / stage.scaleY;
			
			console.log(showingInstrucoes);
			
			if ((mX > 810 && mY > 465) || (mX < 160 && mY < 170) || showingInstrucoes)
			{
				stage.on("click", context.playGame, context, true);
				return;
			}
			
			if (event)
				counter.gotoAndPlay("s2");
			canMove = true;
			context.setChildIndex(counter, context.getNumChildren() - 1);
			context.setChildIndex(pontuacao, context.getNumChildren() - 1);
			quiz.hide();
		}
		
		this.stopGame = function(outside)
		{
			canMove = false;
			if (!outside)
				gameOver.show(pontos);
			context.setChildIndex(gameOver, context.getNumChildren() - 1);
		}
		
		function createHero(nome, px, py)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var type = nome == "Bee" ? lib.Bee : nome == "Mosquito" ? lib.Mosquito : nome == "Ladybug" ? lib.Ladybug : nome == "Ant" ? lib.Ant : nome == "Bird" ? lib.Bird : lib.Periquito;
			var inseto = new type();
			c.addChild(inseto);
			
			c.falling = function()
			{
				if (moveUp)
				{
					if (heroSpeed > speedUpLimit)
						heroSpeed -= 2.5;
				}
				else
				{
					if (heroSpeed < speedDownLimit)
						heroSpeed += 1.5;
				}		
				
				if (canMove)
				{
					this.y += heroSpeed;		
					checkObstaclesCollision();
					checkCoinsCollision();
					checkGroundCollision();
					checkBonusCollision();
				}
			}
			c.on("tick", c.falling);
			return c;
		}
		
		/**
		* Cria um container para outros objetos
		*/ 
		function createContainer(nome)
		{
			var c = new Container.createContainer(nome, {width:0, height:0, x:0, y:0});
			return c;
		}
		
		/**
		* Função genérica para a criação de diversos componentes do cenário
		*/
		function create(nome, largura, altura, px, py, s, duplo)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var g, g2;
			
			c.move = function()
			{
				scale = getScaledWidth();
				
				if (c.x + c.width - scale < 0)
				{
					if (c.getNumChildren() * largura > scale + largura * 2)
					{
						c.removeChild(c.getChildAt(0));
						if (duplo)
							c.removeChild(c.getChildAt(0));
					}
					
					var type = nome == "Ground" ? lib.Ground3 : nome == "Hills" ? lib.Hills3 : 
					nome == "Trees" ? lib.Trees3 : nome == "Mountains" ? lib.Mountain3 : lib.Obstacle3;
					g = new type();
					
					if (duplo)
					{
						//c.x = scale;
						var posY = Math.random() * 150 + 25;
						posY = adjustPosition(posY);
						
						g.x = c.width;
						g.y = posY;
						
						var g2 = new type();
						g2.x = c.width;
						g2.y = posY + 550;
						//g2.rotation = 180;
						g.height = g2.height = 387;
						c.addChild(g, g2);
						c.width += largura;
						
						cacheIt(g, nome); 
						cacheIt(g2, nome); 
						
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							if (creationTimes % 10 == 0)
								createBonus("Bonus", posY, 0.8);
							else
								handleCoins("Coin", posY, 0.8);
						}, 200);
					}
					else
					{
						g.x = c.width;
						c.addChild(g);
						c.width += largura;	
						
						cacheIt(g, nome); 
					}
				}
				if (canMove)
					c.x -= speed * s;
			}
			c.on("tick", c.move);
			return c;
		}
		
		function adjustPosition(py)
		{
			if (lastY == 0)
			{
				lastY = py;
			}
			else
			{
				var k = Math.abs(lastY - py);
				if (k < 150)
				{
					if (py < 120)
						py += 120;
					else
						py -= 120;
				}
				lastY = py;
			}
			return py;
		}
		
		// CREATE COINS
		
		/**
		* Método responsável pela definição de parâmetros para a criação das moedas do jogo
		*/
		function handleCoins(nome, py, s)
		{
			if (!canMove)
				return;
			
			creationTimes++;
			
			var k = 0;
			var r = Math.random();
			var pos = r <= 0.2 ? [50,20,0,20,50] : r <= 0.4 ? [50,80,100,80,50] : r <= 0.6 ? [50,80,50,80,50] : r <= 0.8 ? [-50,50,-50,50,-50] : [50,50,50,50,50];
			
			py = getScaledHeight() * (0.1 + Math.random() * 0.5); 
			
			while (k < numCoins)
			{
				createCoin(nome, py, s, k, pos);
				k++;
			}
		}
		
		/**
		* Método responsável pela criação das moedas do jogo de acordo com os 
		* parâmetros definidos anteriormente
		*/
		function createCoin(nome, py, s, k, pos)
		{
			if (!pos)
				return;
			
			var coin = new lib.Coin();
			coin.x = getScaledWidth() + 25 + (50 * (k+1));
			coin.y = py + pos[k];
			coin.move = function() 
			{ 
				if (coin.x < - getScaledWidth() * 2)
					coins.removeChild(coins.getChildAt(0));
				
				if (canMove)
					coin.x -= speed * s; 
			}
			//cacheIt(coin, "Coin");
			
			coin.on("tick", coin.move);
			coins.addChild(coin);
		}
		
		/**
		* Remove um coin especifico caso ele exista
		*/
		function removeCoin(coin)
		{
			if (coin)
			{
				createjs.Tween.get(coin, {override:true}).to({x:pontuacao.x, y:pontuacao.y}, 750, createjs.Ease.quartOut);
				setTimeout(function() {
					coins.removeChild(coin);
				}, 800);
			}
		}
		// END CREATE COINS
		
		function createBonus(nome, py, s)
		{
			creationTimes++;
			
			var b = new lib.Bonus();
			b.name = nome;
			b.x = getScaledWidth() + 175;
			b.y = getScaledHeight() * (0.1 + Math.random() * 0.5);
			b.move = function() 
			{ 
				if (b.x < - getScaledWidth() * 2)
					bonus.removeChild(bonus.getChildAt(0));
				
				if (canMove)
					b.x -= speed * s; 
			}
			
			cacheIt(b, "Bonus");
			
			b.on("tick", b.move);
			bonus.addChild(b);
		}
		/**
		* Remove um bonus especifico caso ele exista
		*/
		function removeBonus(b)
		{
			bonus.removeChild(b);
		}
		
		// COLLISIONS
		
		/**
		* Verifica se o hero está em contato com o bonus para removê-lo e incrementar o contador
		*/
		function checkBonusCollision()
		{
			var i = 0;
			var num = bonus.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (bonus.getChildAt(i) && bonus.getChildAt(i).x > hero.x - 50 && bonus.getChildAt(i).x < hero.x + 100)
				{
					var px = bonus.getChildAt(i).x;
					var py = bonus.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeBonus(bonus.getChildAt(i));
						context.stopGame(true);
						context.setChildIndex(quiz, context.getNumChildren() - 1);
						quiz.show();
						break;
					}
				}
			}
		}
		/**
		* Verifica se o hero está em contato com as moedas para removê-las e incrementar o contador
		*/
		function checkCoinsCollision()
		{
			var i = 0;
			var num = coins.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (coins.getChildAt(i) && coins.getChildAt(i).x > hero.x - 50 && coins.getChildAt(i).x < hero.x + 100)
				{
					var px = coins.getChildAt(i).x;
					var py = coins.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeCoin(coins.getChildAt(i));
						pontos++;
						atualizaPontuacao(true);
						break;
					}
				}
			}
		}
		/**
		* Verifica se o hero está em contato com o chão ou o teto para disparar o estado morte
		*/
		function checkGroundCollision()
		{
			if (hero.y > getScaledWidth() * 0.48 || hero.y < 0)
			{
				context.stopGame();
				hero.getChildAt(0).gotoAndPlay(1);
				return;
			}
		}
		/**
		* Verifica se o hero está em contato com os obstáculos para disparar o estado morte
		*/ 
		function checkObstaclesCollision()
		{
			var i = 0;
			var num = obstacles.getNumChildren();
			
			for (i = 0; i < num; i++)
			{
				if (obstacles.getChildAt(i))
				{
					var px = obstacles.x + obstacles.getChildAt(i).x;
					var py = obstacles.getChildAt(i).y;
					
					if (px > hero.x - 50 && px < hero.x + 100)
					{
						if (obstacles.getChildAt(i).rotation == 0)
						{
							if ((hero.x + 5 > px && hero.x - 5 < px + 56) && (hero.y - 5 < py && hero.y + 5 > py - 387))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								break;
							}
						} 
						else
						{
							if ((hero.x + 5 > px - 56 && hero.x - 5 < px) && (hero.y - 5 < py + 387 && hero.y + 5 > py))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								break;
							}
						}
					}
				}
			}
		}
		
		// END COLLISIONS
		
		this.quizSucess = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
			var k = 0;
			var interval = 0;
			interval = setInterval(function() 
			{
				if (k >= 9)
					clearInterval(interval);
				
				var c = new lib.Coin();
				c.x = hero.x; c.y = hero.y;
				coins.addChild(c);
				removeCoin(c);
				pontos += 1;
				atualizaPontuacao(true);
				k++;
			}, 100);
		}
		this.quizFailed = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
		}
		
		// CANVAS SCALE
		
		function getScaledWidth()
		{
			return canvas.width / stage.scaleX;
		}
		
		function getScaledHeight()
		{
			return canvas.height / stage.scaleY;
		}
		// END CANVAS SCALE
		// CACHE OBJECTS
		function cacheIt(g, nome)
		{
			if (nome == "Tree")
				g.cache(0, -102, 140, 102);
			else if (nome == "Obstacle")
				g.cache(0, -388, 60, 388);
			else if (nome == "Ground")
				g.cache(0, 0, 401, 87);
			else if (nome == "Clouds")
				g.cache(0, 0, 420, 68);
			else if (nome == "Coin")
				g.cache(-16, -16, 34, 34);
			else if (nome == "Bonus")
				g.cache(-25, -30, 52, 62);
			else if (nome == "Hills")
				g.cache(0, -66, 619, 66);
			else if (nome == "Mountains")
				g.cache(0, -193, 466, 193);
		}
		
		// INSECT CONTROL
		function stageDownHandler(event)
		{
			moveUp = true;
			event.on("mouseup", stageUpHandler, bg);
			/*if (canMove)
				playSoundTag('jump', 100);*/
		}
		function stageUpHandler(event)
		{
			moveUp = false;
		}
		function keyDownHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = true;
		}
		function keyUpHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = false;
		}
		    
		function playJump()
		{
			setTimeout(function() { playSoundTag('jump'); }, 500);
		}
		  
		// END INSECT CONTROL
		// UPDATE
		function atualizaPontuacao(colect)
		{
			pontuacao.txt.text = pontos + "";
			if (colect)
				playAudio("sounds/sm_coin.mp3");
		}
		
		// TO RELOAD
		function removeComponents()
		{
			context.removeChild(hero);
			context.removeChild(coins);
			context.removeChild(trees);
			context.removeChild(ground);
			context.removeChild(obstacles);
			context.removeChild(bonus);
			context.removeChild(hills);
			context.removeChild(mountains);
		}
		
		this.reloadTheGame = function(event)
		{
			canMove = false;
			removeComponents();
			context.initialize();
			context.stopGame();
			setTimeout(function() {
				gameOver.hide();
			}, 0);
			setTimeout(function() { context.parent.inicializa(); }, 0);
		}
		
		this.apresentaRanking = function()
		{
			root.rankingHandler();
			//ranking.show();
			//context.setChildIndex(ranking, context.getNumChildren() - 1);
		}
		
		this.initialize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// quiz
	this.quiz = new lib.Quiz();
	this.quiz.setTransform(1440,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.quiz).wait(1));

	// game over
	this.gameOver = new lib.GameOver();
	this.gameOver.setTransform(480,-275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(1));

	// pontos
	this.pontuacao = new lib.pontuacao();
	this.pontuacao.setTransform(814.1,25,0.996,0.996);

	this.timeline.addTween(cjs.Tween.get(this.pontuacao).wait(1));

	// counter
	this.counter = new lib.Counter();
	this.counter.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.counter).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9ECAB2").s().p("EhK/Aq9MAAAhV6MCV/AAAMAAABV6g");
	this.shape.setTransform(480,275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// label
	this.text = new cjs.Text("CENARIO 03", "bold 12px 'Roboto'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(-60.5,86.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("ApHCgIAAk/ISPAAIAAE/g");
	this.shape_1.setTransform(-58.5,96);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(235,235,235,0.008)").s().p("A24SDMAAAgkEMAtxAAAMAAAAkEg");
	this.shape_2.setTransform(480,275,3.276,2.381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-443.4,2037,993.5);


(lib.Cenario02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var context = this;
		var root = this.parent.parent;
		
		var counter = this.counter;
		var pontuacao = this.pontuacao;
		var gameOver = this.gameOver;
		var quiz = this.quiz;
		var bg = this.bg;
		
		var hills, clouds, cloudsBand, backClouds, buildings, trees, fence, obstacles, ground, hero;
		var coins, bonus;
		var speed = 7.5;
		var heroSpeed = 10.5;
		var speedUpLimit = -10.5;
		var speedDownLimit = 10.5;
		
		var numCoins = 5;
		var timeout = 0;
		var pontos = 0;
		var creationTimes = 1;
		
		var moveUp = false;
		var canMove = false;
		
		var lastY = 0;
		
		// criar cada objeto separadamente atribuindo para eles a velocidade principal de deslocamento
		// cada objeto deve fazer seus próprios calculos de velocidade baseado na velocidade passada
		
		this.initialize = function()
		{	
			//playSoundTag('level2', true);
			
			pontos = 0;
			creationTimes = 1;
			atualizaPontuacao();
			canMove = false;
			
			counter.gotoAndPlay("s1");
			
			var scale = stage.scaleX;
			var scaledWidth = canvas.width / scale;
			var scaledHeight = canvas.height / scale;
			
			hero = createHero(root.selecionado, scaledWidth * 0.3, scaledHeight * 0.4);
			coins = createContainer("Coins");
			bonus = createContainer("Bonuses");
			
			buildings 	= create("Buildings", 	118, 92, 0, scaledHeight - 85, 0.1);
			//hills 		= create("Hills", 			416, 202, 0, scaledHeight * 0.5, 0);
			//trees 		= create("Trees", 			scaledWidth * 0.45, 55, 0, scaledHeight - 80, 0.15);
			obstacles 	= create("Obstacle", 		scaledWidth * 0.4, 51, scaledWidth * 0.6, 0, 0.8, true); 
			obstacles.x = getScaledWidth();
			
			ground 		= create("Ground", 			390, 86, 0, scaledHeight - 86, 1);
			
			context.addChild(/*hills, trees,*/ buildings, obstacles, ground, coins, bonus, hero);
			
			context.on("mousedown", stageDownHandler, bg);
			
			document.onkeydown = keyDownHandler;
			document.onkeyup = keyUpHandler;
			
			setTimeout(function() {
				context.setChildIndex(counter, context.getNumChildren() - 1);
				context.setChildIndex(hero, context.getNumChildren() - 1);
				stage.on("click", context.playGame, context, true);
			},500);
		}
		
		this.playGame = function(event)
		{
			var mX = stage.mouseX / stage.scaleX;
			var mY = stage.mouseY / stage.scaleY;
			
			console.log(showingInstrucoes);
			
			if ((mX > 810 && mY > 465) || (mX < 160 && mY < 170) || showingInstrucoes)
			{
				stage.on("click", context.playGame, context, true);
				return;
			}
			
			if (event)
				counter.gotoAndPlay("s2");
			canMove = true;
			context.setChildIndex(counter, context.getNumChildren() - 1);
			context.setChildIndex(pontuacao, context.getNumChildren() - 1);
			quiz.hide();
		}
		
		this.stopGame = function(outside)
		{
			canMove = false;
			if (!outside)
				gameOver.show(pontos);
			context.setChildIndex(gameOver, context.getNumChildren() - 1);
		}
		
		function createHero(nome, px, py)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var type = nome == "Bee" ? lib.Bee : nome == "Mosquito" ? lib.Mosquito : nome == "Ladybug" ? lib.Ladybug : nome == "Ant" ? lib.Ant : nome == "Bird" ? lib.Bird : lib.Periquito;
			var inseto = new type();
			c.addChild(inseto);
			
			c.falling = function()
			{
				if (moveUp)
				{
					if (heroSpeed > speedUpLimit)
						heroSpeed -= 2.5;
				}
				else
				{
					if (heroSpeed < speedDownLimit)
						heroSpeed += 1.5;
				}		
				
				if (canMove)
				{
					this.y += heroSpeed;		
					checkObstaclesCollision();
					checkCoinsCollision();
					checkGroundCollision();
					checkBonusCollision();
				}
			}
			c.on("tick", c.falling);
			return c;
		}
		
		/**
		* Cria um container para outros objetos
		*/ 
		function createContainer(nome)
		{
			var c = new Container.createContainer(nome, {width:0, height:0, x:0, y:0});
			return c;
		}
		
		/**
		* Função genérica para a criação de diversos componentes do cenário
		*/
		function create(nome, largura, altura, px, py, s, duplo)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var g, g2;
			
			c.move = function()
			{
				scale = getScaledWidth();
				
				if (c.x + c.width - scale < 0)
				{
					if (c.getNumChildren() * largura > scale + largura * 2)
					{
						c.removeChild(c.getChildAt(0));
						if (duplo)
							c.removeChild(c.getChildAt(0));
					}
					
					var type = nome == "Ground" ? lib.Ground2 : nome == "Hills" ? lib.Hills2 : nome == "Trees" ? lib.Trees2 : nome == "Buildings" ? lib.Buildings2 : lib.Obstacle2;
					g = new type();
					
					if (duplo)
					{
						//c.x = scale;
						var posY = Math.random() * 150 + 25;
						posY = adjustPosition(posY);
						
						g.x = c.width;
						g.y = posY;
						
						var g2 = new type();
						g2.x = c.width + 50;
						g2.y = posY + 150;
						g2.rotation = 180;
						g.height = g2.height = 384;
						c.addChild(g, g2);
						c.width += largura;
						
						cacheIt(g, nome); 
						cacheIt(g2, nome); 
						
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							if (creationTimes % 10 == 0)
								createBonus("Bonus", posY, 0.8);
							else
								handleCoins("Coin", posY, 0.8);
						}, 200);
					}
					else
					{
						g.x = c.width;
						c.addChild(g);
						c.width += largura;	
						
						cacheIt(g, nome); 
					}
				}
				if (canMove)
					c.x -= speed * s;
			}
			c.on("tick", c.move);
			return c;
		}
		
		function adjustPosition(py)
		{
			if (lastY == 0)
			{
				lastY = py;
			}
			else
			{
				var k = Math.abs(lastY - py);
				if (k < 150)
				{
					if (py < 120)
						py += 120;
					else
						py -= 120;
				}
				lastY = py;
			}
			return py;
		}
		
		// CREATE COINS
		
		/**
		* Método responsável pela definição de parâmetros para a criação das moedas do jogo
		*/
		function handleCoins(nome, py, s)
		{
			if (!canMove)
				return;
			
			creationTimes++;
			
			var k = 0;
			var r = Math.random();
			var pos = r <= 0.2 ? [50,20,0,20,50] : r <= 0.4 ? [50,80,100,80,50] : r <= 0.6 ? [50,80,50,80,50] : r <= 0.8 ? [-50,50,-50,50,-50] : [50,50,50,50,50];
			
			py = getScaledHeight() * (0.1 + Math.random() * 0.5); 
			
			while (k < numCoins)
			{
				createCoin(nome, py, s, k, pos);
				k++;
			}
		}
		
		/**
		* Método responsável pela criação das moedas do jogo de acordo com os 
		* parâmetros definidos anteriormente
		*/
		function createCoin(nome, py, s, k, pos)
		{
			if (!pos)
				return;
			
			var coin = new lib.Coin();
			coin.x = getScaledWidth() + 25 + (50 * (k+1));
			coin.y = py + pos[k];
			coin.move = function() 
			{ 
				if (coin.x < - getScaledWidth() * 2)
					coins.removeChild(coins.getChildAt(0));
				
				if (canMove)
					coin.x -= speed * s; 
			}
			//cacheIt(coin, "Coin");
			
			coin.on("tick", coin.move);
			coins.addChild(coin);
		}
		
		/**
		* Remove um coin especifico caso ele exista
		*/
		function removeCoin(coin)
		{
			if (coin)
			{
				createjs.Tween.get(coin, {override:true}).to({x:pontuacao.x, y:pontuacao.y}, 750, createjs.Ease.quartOut);
				setTimeout(function() {
					coins.removeChild(coin);
				}, 800);
			}
		}
		// END CREATE COINS
		
		function createBonus(nome, py, s)
		{
			creationTimes++;
			
			var b = new lib.Bonus();
			b.name = nome;
			b.x = getScaledWidth() + 175;
			b.y = getScaledHeight() * (0.1 + Math.random() * 0.5);
			b.move = function() 
			{ 
				if (b.x < - getScaledWidth() * 2)
					bonus.removeChild(bonus.getChildAt(0));
				
				if (canMove)
					b.x -= speed * s; 
			}
			
			cacheIt(b, "Bonus");
			
			b.on("tick", b.move);
			bonus.addChild(b);
		}
		/**
		* Remove um bonus especifico caso ele exista
		*/
		function removeBonus(b)
		{
			bonus.removeChild(b);
		}
		
		// COLLISIONS
		
		/**
		* Verifica se o hero está em contato com o bonus para removê-lo e incrementar o contador
		*/
		function checkBonusCollision()
		{
			var i = 0;
			var num = bonus.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (bonus.getChildAt(i) && bonus.getChildAt(i).x > hero.x - 50 && bonus.getChildAt(i).x < hero.x + 100)
				{
					var px = bonus.getChildAt(i).x;
					var py = bonus.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeBonus(bonus.getChildAt(i));
						context.stopGame(true);
						context.setChildIndex(quiz, context.getNumChildren() - 1);
						quiz.show();
						break;
					}
				}
			}
		}
		/**
		* Verifica se o hero está em contato com as moedas para removê-las e incrementar o contador
		*/
		function checkCoinsCollision()
		{
			var i = 0;
			var num = coins.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (coins.getChildAt(i) && coins.getChildAt(i).x > hero.x - 50 && coins.getChildAt(i).x < hero.x + 100)
				{
					var px = coins.getChildAt(i).x;
					var py = coins.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeCoin(coins.getChildAt(i));
						pontos++;
						atualizaPontuacao(true);
						break;
					}
				}
			}
		}
		/**
		* Verifica se o hero está em contato com o chão ou o teto para disparar o estado morte
		*/
		function checkGroundCollision()
		{
			if (hero.y > getScaledWidth() * 0.50 || hero.y < 0)
			{
				context.stopGame();
				hero.getChildAt(0).gotoAndPlay(1);
				return;
			}
		}
		/**
		* Verifica se o hero está em contato com os obstáculos para disparar o estado morte
		*/ 
		function checkObstaclesCollision()
		{
			var i = 0;
			var num = obstacles.getNumChildren();
			
			for (i = 0; i < num; i++)
			{
				if (obstacles.getChildAt(i))
				{
					var px = obstacles.x + obstacles.getChildAt(i).x;
					var py = obstacles.getChildAt(i).y;
					
					if (px > hero.x - 50 && px < hero.x + 100)
					{
						if (obstacles.getChildAt(i).rotation == 0)
						{
							if ((hero.x + 5 > px && hero.x - 5 < px + 56) && (hero.y - 5 < py && hero.y + 5 > py - 334))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								break;
							}
						} 
						else
						{
							if ((hero.x + 5 > px - 56 && hero.x - 5 < px) && (hero.y - 5 < py + 334 && hero.y + 5 > py))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								break;
							}
						}
					}
				}
			}
		}
		
		// END COLLISIONS
		
		this.quizSucess = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
			var k = 0;
			var interval = 0;
			interval = setInterval(function() 
			{
				if (k >= 9)
					clearInterval(interval);
				
				var c = new lib.Coin();
				c.x = hero.x; c.y = hero.y;
				coins.addChild(c);
				removeCoin(c);
				pontos += 1;
				atualizaPontuacao(true);
				k++;
			}, 100);
		}
		this.quizFailed = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
		}
		
		// CANVAS SCALE
		
		function getScaledWidth()
		{
			return canvas.width / stage.scaleX;
		}
		
		function getScaledHeight()
		{
			return canvas.height / stage.scaleY;
		}
		// END CANVAS SCALE
		// CACHE OBJECTS
		function cacheIt(g, nome)
		{
			if (nome == "Tree")
				g.cache(0, -55, 231, 55);
			else if (nome == "Obstacle")
				g.cache(0, -384, 52, 386);
			else if (nome == "Ground")
				g.cache(0, 0, 390, 87);
			else if (nome == "Fence")
				g.cache(0, 0, 87, 35);
			else if (nome == "BackBuildings")
				g.cache(0, -93, 120, 93);
			else if (nome == "BackClouds")
				g.cache(0, 0, 960, 172);
			else if (nome == "Clouds")
				g.cache(0, 0, 420, 68);
			else if (nome == "CloudsBand")
				g.cache(0, 0, 960, 150);
			else if (nome == "Coin")
				g.cache(-16, -16, 34, 34);
			else if (nome == "Bonus")
				g.cache(-25, -30, 52, 62);
			else if (nome == "Hills")
				g.cache(0, 0, 417, 203);
		}
		
		// INSECT CONTROL
		function stageDownHandler(event)
		{
			moveUp = true;
			event.on("mouseup", stageUpHandler, bg);
			/*if (canMove)
				playSoundTag('jump', 100);*/
		}
		function stageUpHandler(event)
		{
			moveUp = false;
		}
		function keyDownHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = true;
		}
		function keyUpHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = false;
		}
		    
		function playJump()
		{
			setTimeout(function() { playSoundTag('jump'); }, 500);
		}
		  
		// END INSECT CONTROL
		// UPDATE
		function atualizaPontuacao(colect)
		{
			pontuacao.txt.text = pontos + "";
			if (colect)
				playAudio("sounds/sm_coin.mp3");
		}
		
		// TO RELOAD
		function removeComponents()
		{
			context.removeChild(hero);
			context.removeChild(coins);
			context.removeChild(trees);
			context.removeChild(ground);
			context.removeChild(obstacles);
			context.removeChild(bonus);
		}
		
		this.reloadTheGame = function(event)
		{
			canMove = false;
			removeComponents();
			context.initialize();
			context.stopGame();
			setTimeout(function() {
				gameOver.hide();
			}, 0);
			setTimeout(function() { context.parent.inicializa(); }, 0);
		}
		
		this.apresentaRanking = function()
		{
			root.rankingHandler();
			//ranking.show();
			//context.setChildIndex(ranking, context.getNumChildren() - 1);
		}
		
		this.initialize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// quiz
	this.quiz = new lib.Quiz();
	this.quiz.setTransform(1440,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.quiz).wait(1));

	// game over
	this.gameOver = new lib.GameOver();
	this.gameOver.setTransform(480,-275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(1));

	// pontos
	this.pontuacao = new lib.pontuacao();
	this.pontuacao.setTransform(814.1,25,0.996,0.996);

	this.timeline.addTween(cjs.Tween.get(this.pontuacao).wait(1));

	// counter
	this.counter = new lib.Counter();
	this.counter.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.counter).wait(1));

	// background
	this.bg = new lib.bg();
	this.bg.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// label
	this.text = new cjs.Text("CENARIO 02", "bold 12px 'Roboto'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(-60.5,46.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("ApHCgIAAk/ISPAAIAAE/g");
	this.shape.setTransform(-58.5,56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(235,235,235,0.008)").s().p("A24SDMAAAgkEMAtxAAAMAAAAkEg");
	this.shape_1.setTransform(480,275,3.276,2.381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-443.4,2037,993.7);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// fundo
	this.instance = new lib.Bg1();
	this.instance.setTransform(480,275,1,1,0,0,0,480,275);

	this.instance_1 = new lib.Bg2();
	this.instance_1.setTransform(480,275,1,1,0,0,0,480,275);

	this.instance_2 = new lib.Bg3();
	this.instance_2.setTransform(480,275,1,1,0,0,0,480,275);

	this.instance_3 = new lib.Bg4();
	this.instance_3.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


(lib.Cenario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var context = this;
		var root = this.parent.parent;
		
		var counter = this.counter;
		var pontuacao = this.pontuacao;
		var gameOver = this.gameOver;
		var quiz;// = this.quiz;
		var bg = this.bg;
		
		var clouds, mountains, buildings, trees, obstacles, ground, hero, hills;
		var coins, bonus;
		var speed = 7.5;
		var heroSpeed = 10.5;
		var speedUpLimit = -10.5;
		var speedDownLimit = 10.5;
		
		var numCoins = 5;
		var timeout = 0;
		var pontos = 0;
		var creationTimes = 1;
		
		var moveUp = false;
		var canMove = false;
		
		var lastY = 0;
		
		var currentHero = "";
		
		this.initialize = function()
		{	
			pontos = 0;
			creationTimes = 1;
			atualizaPontuacao();
			canMove = false;
			
			var scale = stage.scaleX;
			var scaledWidth = canvas.width / scale;
			var scaledHeight = canvas.height / scale;
			
			context.createPersonagem();
			coins = createContainer("Coins");
			bonus = createContainer("Bonuses");
			
			clouds = trees = obstacles = ground = mountains = hills = buildings = trees = null;
			
			cenario = Math.ceil(4 * Math.random());
			//console.log("init");
			if (cenario == 1)
			{
				clouds 		= create("Clouds",			910, 127, 20, 30, 0);
				buildings 	= create("Buildings", 		250, 119, 0, 480, 0);
				trees 		= create("Trees", 			scaledWidth * 0.45, 106, 0, scaledHeight - 80, 0.3);
				obstacles 	= create("Obstacle", 		scaledWidth * 0.4, 60, scaledWidth * 0.6, 0, 0.8, true); 
				obstacles.x = getScaledWidth();
				ground 		= create("Ground", 			398, 86, 0, scaledHeight - 80, 1);
				bg 			= new lib.Bg1();
				//playSoundTag('level1', true);
			}
			else if (cenario == 2)
			{
				buildings 	= create("Buildings2", 		118, 92, 0, scaledHeight - 80, 0.1);
				hills 		= create("Hills2", 			198, 152, 0, scaledHeight - 80, 0);
				clouds 		= create("Clouds2",			857, 134, 50, 28, 0);
				obstacles 	= create("Obstacle2", 		scaledWidth * 0.4, 50, scaledWidth * 0.6, 0, 0.8, true); 
				obstacles.x = getScaledWidth();
				ground 		= create("Ground2", 		390, 86, 0, scaledHeight - 80, 1);
				bg 			= new lib.Bg2();
				//playSoundTag('level2', true);
			}
			else if (cenario == 3)
			{
				mountains	= create("Mountains3", 		500, 192, 0, scaledHeight - 80, 0.01);
				hills 		= create("Hills3", 			700, 65, 0, scaledHeight - 80, 0.02);
				clouds 		= create("Clouds3",			916, 151, 22, 34, 0);
				trees 		= create("Trees3", 			scaledWidth * 0.45, 101, scaledWidth * 0.3, scaledHeight - 80, 0.15);
				obstacles 	= create("Obstacle3", 		scaledWidth * 0.4, 387, scaledWidth * 0.6, 0, 0.8, true); 
				obstacles.x = getScaledWidth();
				ground 		= create("Ground3", 		398, 86, 0, scaledHeight - 80, 1);
				bg 			= new lib.Bg3();
				//playSoundTag('level3', true);
			}
			else
			{
				clouds 		= create("Clouds4",			891, 104, 22, 34, 0);
				mountains	= create("Mountains4", 		268, 110, 0, scaledHeight - 80, 0.01);
				hills 		= create("Hills4", 			360, 49, 0, scaledHeight - 80, 0.02);
				obstacles 	= create("Obstacle4", 		scaledWidth * 0.4, 387, scaledWidth * 0.6, 0, 0.8, true); 
				obstacles.x = getScaledWidth();
				ground 		= create("Ground4", 		398, 87, 0, scaledHeight - 82, 1);
				bg 			= new lib.Bg4();
				//playSoundTag('level4', true);
			}
			
			context.addChild(bg, clouds, mountains, hills, buildings, trees, obstacles, ground, hero, coins, bonus);
			
			context.on("mousedown", stageDownHandler, bg);
			
			showingCounter = true;
			
			document.onkeydown = keyDownHandler;
			document.onkeyup = keyUpHandler;
			
			setTimeout(function() {
				//console.log(counter.timeline.duration);
				counter.gotoAndStop(1);
				context.setChildIndex(counter, context.getNumChildren() - 1);
				context.setChildIndex(hero, context.getNumChildren() - 1);
				stage.on("click", context.playGame);
			}, 500);
		}
		
		this.createPersonagem = function()
		{
			/*if (currentHero == selecionado)
				return;*/
			
			/*if (showingGameOver)
				return;*/
			
			currentHero = selecionado;
			
			if (hero)
				context.removeChild(hero);
			
			hero = createHero(selecionado, getScaledWidth() * 0.3, getScaledHeight() * 0.3);
			context.addChild(hero);
		}
		
		this.playGame = function(event)
		{
			var mX = stage.mouseX / stage.scaleX;
			var mY = stage.mouseY / stage.scaleY;
			
			if ((((mX > 810 && mY > 465) || (mX < 160 && mY < 170)) || (parteInicial || !showingCounter || showingInstrucoes || showingInformacoes)) && event)
				return;
			
			if (event) 
			{
				showingCounter = false;
				counter.gotoAndStop(0);
			}
			stage.removeAllEventListeners();
			canMove = true;
			context.setChildIndex(counter, context.getNumChildren() - 1);
			context.setChildIndex(pontuacao, context.getNumChildren() - 1);
			//quiz.hide();
		}
		
		this.stopGame = function(outside)
		{
			canMove = false;
			
			if (!outside)
			{
				gameOver.show(pontos);
				//showGameOver();
			}
			context.setChildIndex(gameOver, context.getNumChildren() - 1);
		}
		
		function createHero(nome, px, py)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var type = nome == "Bee" ? lib.Bee : nome == "Mosquito" ? lib.Mosquito : nome == "Ladybug" ? lib.Ladybug : nome == "Ant" ? lib.Ant : nome == "Bird" ? lib.Bird : lib.Periquito;
			var inseto = new type();
			c.addChild(inseto);
			
			c.falling = function()
			{
				if (moveUp)
				{
					if (heroSpeed > speedUpLimit)
						heroSpeed -= 2.5;
				}
				else
				{
					if (heroSpeed < speedDownLimit)
						heroSpeed += 1.5;
				}		
				
				if (canMove)
				{
					this.y += heroSpeed;		
					checkObstaclesCollision();
					checkCoinsCollision();
					checkGroundCollision();
					checkBonusCollision();
				}
			}
			c.on("tick", c.falling);
			return c;
		}
		
		/**
		* Cria um container para outros objetos
		*/ 
		function createContainer(nome)
		{
			var c = new Container.createContainer(nome, {width:0, height:0, x:0, y:0});
			return c;
		}
		
		/**
		* Função genérica para a criação de diversos componentes do cenário
		*/
		function create(nome, largura, altura, px, py, s, duplo)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var g, g2;
			
			c.move = function()
			{
				scale = getScaledWidth();
				
				if (c.x + c.width - scale < 0)
				{
					if (c.getNumChildren() * largura > scale + largura * 2)
					{
						c.removeChild(c.getChildAt(0));
						if (duplo)
							c.removeChild(c.getChildAt(0));
					}
					
					var type = nome == "Ground" ? lib.Ground : nome == "Ground2" ? lib.Ground2 : nome == "Ground3" ? lib.Ground3 : nome == "Ground4" ? lib.Ground4 : 
					nome == "Trees" ? lib.Trees : nome == "Trees2" ? lib.Trees2 : nome == "Trees3" ? lib.Trees3 : nome == "Trees4" ? lib.Trees4 : 
					nome == "Hills" ? lib.Hills : nome == "Hills2" ? lib.Hills2 : nome == "Hills3" ? lib.Hills3 : nome == "Hills4" ? lib.Hills4 : 
					nome == "Buildings" ? lib.Buildings : nome == "Buildings2" ? lib.Buildings2 : nome == "Buildings3" ? lib.Buildings3 : nome == "Buildings4" ? lib.Buildings4 : 
					nome == "Obstacle" ? lib.Obstacle : nome == "Obstacle2" ? lib.Obstacle2 : nome == "Obstacle3" ? lib.Obstacle3 : nome == "Obstacle4" ? lib.Obstacle4 : 
					nome == "Clouds" ? lib.Clouds : nome == "Clouds2" ? lib.Clouds2 : nome == "Clouds3" ? lib.Clouds3 : nome == "Clouds4" ? lib.Clouds4 : 
					nome == "Mountains" ? lib.Mountain : nome == "Mountains2" ? lib.Mountain2 : nome == "Mountains3" ? lib.Mountain3 : lib.Mountain4;
					/*var type = nome == "Ground" ? lib.Ground : nome == "Trees" ? lib.Trees : nome == "Buildings" ? lib.Buildings : nome == "Clouds" ? lib.Clouds : 
					nome == "Obstacle" ? lib.Obstacle : nome == "Ground2" ? lib.Ground2 : nome == "Hills2" ? lib.Hills2 : nome == "Bui" ? lib.Ground2 : ;*/
					g = new type();
					
					if (duplo)
					{
						//c.x = scale;
						var posY = Math.random() * 150 + 25;
						posY = adjustPosition(posY);
						
						g.x = c.width;
						g.y = posY;
						
						var g2 = new type();
						if (nome == "Obstacle2" || nome == "Obstacle3")
						{
							g2.x = c.width;
							g2.y = posY + 550;
							//g2.rotation = 180;
						}
						else
						{
							g2.x = c.width + 56;
							g2.y = posY + 150;
							g2.rotation = 180;
						}
						
						g.height = g2.height = altura;
						c.addChild(g, g2);
						c.width += largura;
						
						//cacheIt(g, nome); 
						//cacheIt(g2, nome); 
						
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							if (creationTimes % 10 == 0)
								createBonus("Bonus", posY, 0.8);
							else
								handleCoins("Coin", posY, 0.8);
						}, 200);
					}
					else
					{
						g.x = c.width;
						c.addChild(g);
						c.width += largura;	
						
						//cacheIt(g, nome); 
					}
				}
				if (canMove)
					c.x -= speed * s;
			}
			c.on("tick", c.move);
			return c;
		}
		
		function adjustPosition(py)
		{
			if (lastY == 0)
			{
				lastY = py;
			}
			else
			{
				var k = Math.abs(lastY - py);
				if (k < 150)
				{
					if (py < 120)
						py += 120;
					else
						py -= 120;
				}
				lastY = py;
			}
			return py;
		}
		
		// CREATE COINS
		
		/**
		* Método responsável pela definição de parâmetros para a criação das moedas do jogo
		*/
		function handleCoins(nome, py, s)
		{
			if (!canMove)
				return;
			
			creationTimes++;
			
			var k = 0;
			var r = Math.random();
			var pos = r <= 0.2 ? [50,20,0,20,50] : r <= 0.4 ? [50,80,100,80,50] : r <= 0.6 ? [50,80,50,80,50] : r <= 0.8 ? [-50,50,-50,50,-50] : [50,50,50,50,50];
			
			py = getScaledHeight() * (0.1 + Math.random() * 0.5); 
			
			while (k < numCoins)
			{
				createCoin(nome, py, s, k, pos);
				k++;
			}
		}
		
		/**
		* Método responsável pela criação das moedas do jogo de acordo com os 
		* parâmetros definidos anteriormente
		*/
		function createCoin(nome, py, s, k, pos)
		{
			if (!pos)
				return;
			
			var coin = new lib.Coin();
			coin.x = getScaledWidth() + 25 + (50 * (k+1));
			coin.y = py + pos[k];
			coin.move = function() 
			{ 
				if (coin.x < - getScaledWidth() * 2)
					coins.removeChild(coins.getChildAt(0));
				
				if (canMove)
					coin.x -= speed * s; 
			}
			//cacheIt(coin, "Coin");
			
			coin.on("tick", coin.move);
			coins.addChild(coin);
		}
		
		/**
		* Remove um coin especifico caso ele exista
		*/
		function removeCoin(coin)
		{
			if (coin)
			{
				createjs.Tween.get(coin, {override:true}).to({x:pontuacao.x, y:pontuacao.y}, 750, createjs.Ease.quartOut);
				setTimeout(function() {
					coins.removeChild(coin);
				}, 800);
			}
		}
		// END CREATE COINS
		
		function createBonus(nome, py, s)
		{
			creationTimes++;
			
			var b = new lib.Bonus();
			b.name = nome;
			b.x = getScaledWidth() + 175;
			b.y = getScaledHeight() * (0.1 + Math.random() * 0.5);
			b.move = function() 
			{ 
				if (b.x < - getScaledWidth() * 2)
					bonus.removeChild(bonus.getChildAt(0));
				
				if (canMove)
					b.x -= speed * s; 
			}
			
			cacheIt(b, "Bonus");
			
			b.on("tick", b.move);
			bonus.addChild(b);
		}
		/**
		* Remove um bonus especifico caso ele exista
		*/
		function removeBonus(b)
		{
			bonus.removeChild(b);
		}
		
		// COLLISIONS
		
		/**
		* Verifica se o hero está em contato com o bonus para removê-lo e incrementar o contador
		*/
		function checkBonusCollision()
		{
			var i = 0;
			var num = bonus.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (bonus.getChildAt(i) && bonus.getChildAt(i).x > hero.x - 50 && bonus.getChildAt(i).x < hero.x + 100)
				{
					var px = bonus.getChildAt(i).x;
					var py = bonus.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeBonus(bonus.getChildAt(i));
						context.stopGame(true);
						/*context.setChildIndex(quiz, context.getNumChildren() - 1);
						quiz.show();*/
						showQuiz();
						break;
					}
				}
			}
		}
		
		function criaQuiz()
		{
			quiz = new lib.Quiz();
			quiz.x = canvas.width / stage.scaleX + 50;
			context.addChild(quiz);
		}
		
		this.removeQuiz = function()
		{
			context.removeChild(quiz);
		}
		
		function showQuiz()
		{
			criaQuiz();
			createjs.Tween.get(quiz, {override:true}).wait(0).to({x:0}, 500, createjs.Ease.quartOut);
			//createjs.Tween.get(instrucoes, {override:true}).wait(0).to({x:0}, 500, createjs.Ease.quartOut);
		}
		
		/**
		* Verifica se o hero está em contato com as moedas para removê-las e incrementar o contador
		*/
		function checkCoinsCollision()
		{
			var i = 0;
			var num = coins.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (coins.getChildAt(i) && coins.getChildAt(i).x > hero.x - 50 && coins.getChildAt(i).x < hero.x + 100)
				{
					var px = coins.getChildAt(i).x;
					var py = coins.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeCoin(coins.getChildAt(i));
						pontos++;
						atualizaPontuacao(true);
						break;
					}
				}
			}
		}
		/**
		* Verifica se o hero está em contato com o chão ou o teto para disparar o estado morte
		*/
		function checkGroundCollision()
		{
			if (hero.y > getScaledWidth() * 0.49 || hero.y < 0)
			{
				context.stopGame();
				hero.getChildAt(0).gotoAndPlay(1);
				playAudio("pancada", false);
				return;
			}
		}
		/**
		* Verifica se o hero está em contato com os obstáculos para disparar o estado morte
		*/ 
		function checkObstaclesCollision()
		{
			var i = 0;
			var num = obstacles.getNumChildren();
			
			for (i = 0; i < num; i++)
			{
				if (obstacles.getChildAt(i))
				{
					var px = obstacles.x + obstacles.getChildAt(i).x;
					var py = obstacles.getChildAt(i).y;
					
					if (px > hero.x - 50 && px < hero.x + 100)
					{
						if (obstacles.getChildAt(i).rotation == 0)
						{
							if ((hero.x + 5 > px && hero.x - 5 < px + 56) && (hero.y - 5 < py && hero.y + 5 > py - 387))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								playAudio("pancada", false);
								break;
							}
						} 
						else
						{
							if ((hero.x + 5 > px - 56 && hero.x - 5 < px) && (hero.y - 5 < py + 334 && hero.y + 5 > py))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								playAudio("pancada", false);
								break;
							}
						}
					}
				}
			}
		}
		
		// END COLLISIONS
		
		this.quizSucess = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
			var k = 0;
			var interval = 0;
			interval = setInterval(function() 
			{
				if (k >= 9)
					clearInterval(interval);
				
				var c = new lib.Coin();
				c.x = hero.x; c.y = hero.y;
				coins.addChild(c);
				removeCoin(c);
				pontos += 1;
				atualizaPontuacao(true);
				k++;
			}, 100);
		}
		this.quizFailed = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
		}
		
		// CANVAS SCALE
		
		function getScaledWidth()
		{
			return canvas.width / stage.scaleX;
		}
		
		function getScaledHeight()
		{
			return canvas.height / stage.scaleY;
		}
		// END CANVAS SCALE
		// CACHE OBJECTS
		function cacheIt(g, nome)
		{
			if (nome == "Tree")
				g.cache(0, -106, 300, 106);
			else if (nome == "Obstacle")
				g.cache(0, -455, 60, 455);
			else if (nome == "Ground")
				g.cache(0, 0, 398, 87);
			else if (nome == "Buildings")
				g.cache(0, -120, 252, 120);
			else if (nome == "Clouds")
				g.cache(0, 0, 911, 128);
			else if (nome == "Coin")
				g.cache(-16, -16, 34, 34);
			else if (nome == "Bonus")
				g.cache(-25, -30, 52, 62);
		}
		
		// INSECT CONTROL
		function stageDownHandler(event)
		{
			moveUp = true;
			event.on("mouseup", stageUpHandler, bg);
			
			/*if (canMove)
				playSoundTag('jump', 100);*/
		}
		function stageUpHandler(event)
		{
			moveUp = false;
		}
		function keyDownHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = true;
		}
		function keyUpHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = false;
		}
		
		// END INSECT CONTROL
		// UPDATE
		function atualizaPontuacao(colect)
		{
			pontuacao.txt.text = pontos + "";
			if (colect)
				playAudio("sm_coin", false);
		}
		
		// TO RELOAD
		function removeComponents()
		{
			context.removeChild(hero);
			context.removeChild(coins);
			context.removeChild(clouds);
			context.removeChild(buildings);
			context.removeChild(trees);
			context.removeChild(mountains);
			context.removeChild(hills);
			context.removeChild(ground);
			context.removeChild(obstacles);
			context.removeChild(bonus);
			context.removeChild(bg);
		}
		
		this.reloadTheGame = function()
		{
			canMove = false;
			removeComponents();
			context.initialize();
			context.stopGame(true);
			stage.off("click", context.playGame);
			setTimeout(function() {
				gameOver.hide();
			}, 0);
			setTimeout(function() { context.parent.inicializa(); }, 0);
		}
		
		this.apresentaRanking = function()
		{
			root.rankingHandler();
		}
		
		this.initialize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// game over
	this.gameOver = new lib.GameOver();
	this.gameOver.setTransform(480,-275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(1));

	// pontos
	this.pontuacao = new lib.pontuacao();
	this.pontuacao.setTransform(785.1,29,0.996,0.996);

	this.timeline.addTween(cjs.Tween.get(this.pontuacao).wait(1));

	// counter
	this.counter = new lib.Counter();
	this.counter.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.counter).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E6E0").s().p("EhLAAq+MAAAhV7MCWBAAAMAAABV7g");
	this.shape.setTransform(480,275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// label
	this.text = new cjs.Text("CENARIO", "bold 12px 'Roboto'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(-60.5,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("ApHCgIAAk/ISPAAIAAE/g");
	this.shape_1.setTransform(-58.5,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(235,235,235,0.008)").s().p("A24SDMAAAgkEMAtxAAAMAAAAkEg");
	this.shape_2.setTransform(480,275,3.276,2.381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-443.4,2037,1246.9);


(lib.inicioButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 3
	this.text = new cjs.Text("INICIO", "7px 'Jockey One'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 9;
	this.text.lineWidth = 18;
	this.text.setTransform(-2,19.5);

	this.estados = new lib.homeEstados();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.estados},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-17.5,35,50.8);


(lib.btpause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var context = this;
		
		var pauseSwitch = this;
		var estados = this.estados;
		pauseSwitch.clickCont = 0;
		
		function pauseHandler(e)
		{
			pauseSwitch.clickCont++;
			if (createjs.Touch.isSupported() && pauseSwitch.clickCont % 2 == 0)
				return;
			
			context.togglePlayPause();
		}
		
		this.togglePlayPause = function()
		{
			console.log(showingCounter, showingGameOver, showingInstrucoes, showingInformacoes);
			if (showingCounter || showingGameOver || showingInstrucoes || showingInformacoes)
				return;
			
			if (estados.currentFrame == 0) {
				estados.gotoAndStop(1);
				pauseTheGame();
			} else {
				estados.gotoAndStop(0);
				resumeTheGame();
			}
			
			/*if (context.enableSounds)
				playSound("click");*/
		}
		
		function resumeTheGame()
		{
			context.parent.playTheGame();
		}
		function pauseTheGame()
		{
			context.parent.stopTheGame();
		}
		
		pauseSwitch.on("pressup", pauseHandler);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shape
	this.estados = new lib.pauseEstados();

	this.timeline.addTween(cjs.Tween.get(this.estados).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-17.5,35,35);


(lib.audioComponent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var music = playSound("music", 1000);
		//music.setVolume(0.5);
		
		var context = this;
		var sons = this.sons;
		
		function sonsHandler(event)
		{
			sons.cont++;
			if (createjs.Touch.isSupported() && sons.cont % 2 == 0)
				return;
			
			if (sons.currentFrame == 0)
			{
				//context.parent.enableSounds = false;
				allowSound = false;
				//music.setVolume(0.0);
				pauseSoundTag(currentTheme);
				sons.gotoAndStop(1);
			}
			else
			{
				//context.parent.enableSounds = true;
				allowSound = true;
				//music.setVolume(0.5);
				playSoundTag(currentTheme);
				sons.gotoAndStop(0);
			}
		}
		
		sons.on("click", sonsHandler);
		sons.cont = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// botao
	this.sons = new lib.btsound();
	this.sons.setTransform(0,0.2,1,1.001,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.sons).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-17.5,35,35);


(lib.Abertura = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":25});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(19).call(this.frame_43).wait(1));

	// title
	this.instance = new lib.aberturaTitle();
	this.instance.setTransform(456.3,-137.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:175.7},10,cjs.Ease.get(1)).wait(11).to({y:-137.9},6,cjs.Ease.get(-1)).to({_off:true},1).wait(7));

	// top
	this.instance_1 = new lib.aberturaTop();
	this.instance_1.setTransform(480.4,-145.3,1,1,0,0,0,480.4,134.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:134.7},10,cjs.Ease.get(1)).wait(18).to({y:-145.3},7,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// mato
	this.instance_2 = new lib.abertura_mato1();
	this.instance_2.setTransform(-94.7,622.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:80.3,y:447.5},10,cjs.Ease.get(1)).wait(18).to({x:-94.7,y:622.5},7,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// mato
	this.instance_3 = new lib.abertura_mato2();
	this.instance_3.setTransform(1031.1,616);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:862.1,y:447.1},10,cjs.Ease.get(1)).wait(18).to({x:1031.1,y:616},7,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// hills
	this.instance_4 = new lib.hills();
	this.instance_4.setTransform(479.3,575.5,1,1,0,0,0,481.5,18.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:531.5},10,cjs.Ease.get(1)).wait(18).to({y:575.5},7,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

	// mountain
	this.instance_5 = new lib.abertura_mountain1();
	this.instance_5.setTransform(1174.7,466.7,1,1,0,0,0,200,82.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({x:692},10,cjs.Ease.get(1)).wait(18).to({x:1174.7},7,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

	// mountain
	this.instance_6 = new lib.abertura_mountain1();
	this.instance_6.setTransform(-210.2,466.7,1,1,0,0,0,200,82.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({x:290.8},10,cjs.Ease.get(1)).wait(18).to({x:-210.2},7,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al+BKQgbAAgVgDQgpgIAjgTQAWgLBPgEQAngBAjAAQgfgFgcgLQg4gSARgWQALgNAvgPQAwgOAtgDQA0gCAQARQAUAVgkAsIAtgXQAzgSAhAeIAEgLQAHgNANgKQAogjBbAAQBmAAgIAlQgDAOgWANQgUAJgbAEIBGgHQBYgHAoASQApAThNAQIhUALICeAHQCEAIiBAFg");
	this.shape.setTransform(629.4,443.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArVC6QhxgMgTgsQgTgrBjgTQAxgKA1gBQgsgdgSgmQglhQB+g3QBIgfBVAPQBPANA0ArQA2ArgIAvQgIAthIAhIAJgEQAigMAlgGQBzgTBbAxQgOgbgCghQgDg+BAgYQBGgbA+AtQAZATAHAWQADAIAAAGIACgFQASgkAYgfQBNhkBygOQBBgHA7AjQA3AgAXAzQAXA1gcAmQgZAjg7AOIA+gKQBtgKAtAnQAsAng0APIg+AHIBSAAQBbABAvAIQAzAIgJAPQgJAOghAAI2aAAIgjABQgkAAgmgEg");
	this.shape_1.setTransform(239.7,235.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqYCqQhogLgRgoQgRgoBagRQAugJAwgBQgogagRgjQgihJB0gzQBCgcBOANQBIAMAwAnQAxAogIArQgHArhGAeIANgFQAfgLAhgFQBqgSBTAtQgNgZgBgeQgDg5A6gWQBAgYA5ApQAXARAHAUQACAHAAAGIACgEQAQghAWgdQBHhcBogMQA8gHA2AgQAzAeAUAvQAVAwgZAjQgXAgg1ANIA4gKQBkgJApAkQApAkgxANIg4AHIBLgBQBTACArAHQAvAIgJANQgIANgeAAI0hAAIggABQghAAgjgEg");
	this.shape_2.setTransform(741.7,370.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AssCeQg6AAgsgIQhXgQBKgoQAvgZCngGQBTgFBKACQhCgMg7gWQh2gpAkguQAWgdBlgeQBngfBegFQBtgGAkAlQAqAshMBfIAagRQAigUAigMQBsgnBHBAIAJgXQAOgbAcgYQBYhJDAAAQBsABA0AXQAuAVgGAhQgGAfgwAaQgsAWg8AJICZgRQC7gOBWAnQBWApiiAhIi0AXIFQAPQEYARkSAMg");
	this.shape_3.setTransform(516.5,47.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ApgB2QgsAAghgGQhBgMA4gdQAjgTB9gFQA+gDA3ABQgxgJgsgQQhZgfAbgjQARgVBLgXQBNgXBHgEQBSgEAbAcQAgAhg6BHIAUgMQAagQAZgJQBRgdA1AwQAFgbAigcQBBg4CQABQBRAAAnASQAjAPgFAZQgFAXgkAUQggAQgqAGIBvgMQCMgKBBAdQBAAfh6AYIiGASID8ALQDSAMjOAJg");
	this.shape_4.setTransform(263.1,385.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AuRCyQhBAAgxgJQhigSBTgtQA1gcC7gIQBdgEBTACQhKgOhCgYQiEgvAog0QAZggBxgjQB0giBqgGQB7gGAoApQAvAxhWBsIAegTQAmgYAmgNQB6gsBQBJIAKgaQAQgfAfgaQBihTDYABQB6AAA7AbQA0AXgIAlQgHAjg2AdQgiATgqAJQBDgIBBgFQDRgPBhAsQBhAvi2AkQg5ALhOAJIhDAHIF5AQQE8ATk1AOg");
	this.shape_5.setTransform(831.7,68.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ArlC0Qh7gHgEglQgGgzBkgPQBcgNBLAZQgSgvAIg1QAQhuCCgqQBIgXA+AZQA1AVAhAxQAeAugDAtQgCAkgbAQIAQgHQAkgOAmgHQB6gSBmA8QAAgMAFgUQAJglAWggQBHhpCwgCQBjgCA6AiQAzAcALAwQAKApgaAnQgaAmgvAKIB4gRQCIgLBPAiQBWAkgkAcQgeAYhLAAI1dAAQgdABgcAAQggAAghgCg");
	this.shape_6.setTransform(811.6,235.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#D1E7FF","#6BCBDD"],[0,1],3.8,186,0,3.8,186,432.3).s().p("EhLBAq9MAAAhV5MCWDAAAMAAABV5g");
	this.shape_7.setTransform(480.3,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.7,-280,1385.8,1045.5);


(lib.Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var c = this;
		var cenario = this.cenario;
		
		this.inicializa = function()
		{
			if (cenario || !showingGameOver)
				cenario.createPersonagem();
			
			/*if (c.getNumChildren() > 0)
				c.removeAllChildren();
			
			var k = Math.ceil(4 * Math.random());
			if (k == 1) {
				cenario = new lib.Cenario01();
				playSoundTag('level1', true);
			}
			else if (k == 2) {
				cenario = new lib.Cenario02();
				playSoundTag('level2', true);
			}
			else if (k == 3) {
				cenario = new lib.Cenario03();
				playSoundTag('level3', true);
			}
			else if (k == 4) {
				cenario = new lib.Cenario04();
				playSoundTag('level4', true);
			}
			//cenario = new lib.Cenario();
			//c.addChild(cenario);
			//console.log("criado");
			//c.gotoAndStop(k);
			//console.log("Sorteado ", k);*/
		}
		
		//this.inicializa();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cenarios
	this.cenario = new lib.Cenario();
	this.cenario.setTransform(901.5,53.3,1,1,0,0,0,901.5,53.3);

	this.timeline.addTween(cjs.Tween.get(this.cenario).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-443.4,1093.8,993.5);


(lib.Cenario01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var context = this;
		var root = this.parent.parent;
		
		var counter = this.counter;
		var pontuacao = this.pontuacao;
		var gameOver = this.gameOver;
		var quiz = this.quiz;
		var bg = this.bg;
		
		var clouds, cloudsBand, backClouds, buildings, trees, fence, obstacles, ground, hero;
		var coins, bonus;
		var speed = 7.5;
		var heroSpeed = 10.5;
		var speedUpLimit = -10.5;
		var speedDownLimit = 10.5;
		
		var numCoins = 5;
		var timeout = 0;
		var pontos = 0;
		var creationTimes = 1;
		
		var moveUp = false;
		var canMove = false;
		
		var lastY = 0;
		
		// criar cada objeto separadamente atribuindo para eles a velocidade principal de deslocamento
		// cada objeto deve fazer seus próprios calculos de velocidade baseado na velocidade passada
		
		this.initialize = function()
		{	
			pontos = 0;
			creationTimes = 1;
			atualizaPontuacao();
			canMove = false;
			
			counter.gotoAndPlay("s1");
			
			var scale = stage.scaleX;
			var scaledWidth = canvas.width / scale;
			var scaledHeight = canvas.height / scale;
			
			hero = createHero(root.selecionado, scaledWidth * 0.3, scaledHeight * 0.4);
			coins = createContainer("Coins");
			bonus = createContainer("Bonuses");
			
			//clouds 		= create("Clouds",			500, 70, scaledWidth * 0.1, scaledHeight * 0.1, 0.05);
			//cloudsBand 	= create("CloudsBand",		960, 148, 0, scaledHeight * 0.3, 1.2);
			//backClouds 	= create("BackClouds",		960, 172, 0, scaledHeight * 0.5, 0.1);
			//buildings 	= create("BackBuildings", 	160, 122, 0, scaledHeight - 60, 0.1);
			trees 		= create("Trees", 			scaledWidth * 0.45, 106, 0, scaledHeight - 80, 0.3);
			obstacles 	= create("Obstacle", 		scaledWidth * 0.4, 60, scaledWidth * 0.6, 0, 0.8, true); 
			obstacles.x = getScaledWidth();
			//fence 		= create("Fence", 			86, 35, 0, scaledHeight - 115, 0.9);
			ground 		= create("Ground", 			398, 86, 0, scaledHeight - 80, 1);
			
			context.addChild(trees, obstacles, /*fence, */ground, coins, bonus, hero);
			
			context.on("mousedown", stageDownHandler, bg);
			
			document.onkeydown = keyDownHandler;
			document.onkeyup = keyUpHandler;
			
			setTimeout(function() {
				context.setChildIndex(counter, context.getNumChildren() - 1);
				context.setChildIndex(hero, context.getNumChildren() - 1);
				stage.on("click", context.playGame, context, true);
			},500);
		}
		
		this.playGame = function(event)
		{
			var mX = stage.mouseX / stage.scaleX;
			var mY = stage.mouseY / stage.scaleY;
			
			console.log(showingInstrucoes);
			
			if ((mX > 810 && mY > 465) || (mX < 160 && mY < 170) || showingInstrucoes)
			{
				stage.on("click", context.playGame, context, true);
				return;
			}
			
			if (event)
				counter.gotoAndPlay("s2");
			canMove = true;
			context.setChildIndex(counter, context.getNumChildren() - 1);
			context.setChildIndex(pontuacao, context.getNumChildren() - 1);
			quiz.hide();
		}
		
		this.stopGame = function(outside)
		{
			canMove = false;
			if (!outside)
				gameOver.show(pontos);
			context.setChildIndex(gameOver, context.getNumChildren() - 1);
		}
		
		function createHero(nome, px, py)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var type = nome == "Bee" ? lib.Bee : nome == "Mosquito" ? lib.Mosquito : nome == "Ladybug" ? lib.Ladybug : nome == "Ant" ? lib.Ant : nome == "Bird" ? lib.Bird : lib.Periquito;
			var inseto = new type();
			c.addChild(inseto);
			
			c.falling = function()
			{
				if (moveUp)
				{
					if (heroSpeed > speedUpLimit)
						heroSpeed -= 2.5;
				}
				else
				{
					if (heroSpeed < speedDownLimit)
						heroSpeed += 1.5;
				}		
				
				if (canMove)
				{
					this.y += heroSpeed;		
					checkObstaclesCollision();
					checkCoinsCollision();
					checkGroundCollision();
					checkBonusCollision();
				}
			}
			c.on("tick", c.falling);
			return c;
		}
		
		/**
		* Cria um container para outros objetos
		*/ 
		function createContainer(nome)
		{
			var c = new Container.createContainer(nome, {width:0, height:0, x:0, y:0});
			return c;
		}
		
		/**
		* Função genérica para a criação de diversos componentes do cenário
		*/
		function create(nome, largura, altura, px, py, s, duplo)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var g, g2;
			
			c.move = function()
			{
				scale = getScaledWidth();
				
				if (c.x + c.width - scale < 0)
				{
					if (c.getNumChildren() * largura > scale + largura * 2)
					{
						c.removeChild(c.getChildAt(0));
						if (duplo)
							c.removeChild(c.getChildAt(0));
					}
					
					var type = nome == "Ground" ? lib.Ground : nome == "Fence" ? lib.Fence : nome == "Trees" ? lib.Trees : lib.Obstacle;
					g = new type();
					
					if (duplo)
					{
						//c.x = scale;
						var posY = Math.random() * 150 + 25;
						posY = adjustPosition(posY);
						
						g.x = c.width;
						g.y = posY;
						
						var g2 = new type();
						g2.x = c.width + 56;
						g2.y = posY + 150;
						g2.rotation = 180;
						g.height = g2.height = 334;
						c.addChild(g, g2);
						c.width += largura;
						
						cacheIt(g, nome); 
						cacheIt(g2, nome); 
						
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							if (creationTimes % 10 == 0)
								createBonus("Bonus", posY, 0.8);
							else
								handleCoins("Coin", posY, 0.8);
						}, 200);
					}
					else
					{
						g.x = c.width;
						c.addChild(g);
						c.width += largura;	
						
						cacheIt(g, nome); 
					}
				}
				if (canMove)
					c.x -= speed * s;
			}
			c.on("tick", c.move);
			return c;
		}
		
		function adjustPosition(py)
		{
			if (lastY == 0)
			{
				lastY = py;
			}
			else
			{
				var k = Math.abs(lastY - py);
				if (k < 150)
				{
					if (py < 120)
						py += 120;
					else
						py -= 120;
				}
				lastY = py;
			}
			return py;
		}
		
		// CREATE COINS
		
		/**
		* Método responsável pela definição de parâmetros para a criação das moedas do jogo
		*/
		function handleCoins(nome, py, s)
		{
			if (!canMove)
				return;
			
			creationTimes++;
			
			var k = 0;
			var r = Math.random();
			var pos = r <= 0.2 ? [50,20,0,20,50] : r <= 0.4 ? [50,80,100,80,50] : r <= 0.6 ? [50,80,50,80,50] : r <= 0.8 ? [-50,50,-50,50,-50] : [50,50,50,50,50];
			
			py = getScaledHeight() * (0.1 + Math.random() * 0.5); 
			
			while (k < numCoins)
			{
				createCoin(nome, py, s, k, pos);
				k++;
			}
		}
		
		/**
		* Método responsável pela criação das moedas do jogo de acordo com os 
		* parâmetros definidos anteriormente
		*/
		function createCoin(nome, py, s, k, pos)
		{
			if (!pos)
				return;
			
			var coin = new lib.Coin();
			coin.x = getScaledWidth() + 25 + (50 * (k+1));
			coin.y = py + pos[k];
			coin.move = function() 
			{ 
				if (coin.x < - getScaledWidth() * 2)
					coins.removeChild(coins.getChildAt(0));
				
				if (canMove)
					coin.x -= speed * s; 
			}
			//cacheIt(coin, "Coin");
			
			coin.on("tick", coin.move);
			coins.addChild(coin);
		}
		
		/**
		* Remove um coin especifico caso ele exista
		*/
		function removeCoin(coin)
		{
			if (coin)
			{
				createjs.Tween.get(coin, {override:true}).to({x:pontuacao.x, y:pontuacao.y}, 750, createjs.Ease.quartOut);
				setTimeout(function() {
					coins.removeChild(coin);
				}, 800);
			}
		}
		// END CREATE COINS
		
		function createBonus(nome, py, s)
		{
			creationTimes++;
			
			var b = new lib.Bonus();
			b.name = nome;
			b.x = getScaledWidth() + 175;
			b.y = getScaledHeight() * (0.1 + Math.random() * 0.5);
			b.move = function() 
			{ 
				if (b.x < - getScaledWidth() * 2)
					bonus.removeChild(bonus.getChildAt(0));
				
				if (canMove)
					b.x -= speed * s; 
			}
			
			cacheIt(b, "Bonus");
			
			b.on("tick", b.move);
			bonus.addChild(b);
		}
		/**
		* Remove um bonus especifico caso ele exista
		*/
		function removeBonus(b)
		{
			bonus.removeChild(b);
		}
		
		// COLLISIONS
		
		/**
		* Verifica se o hero está em contato com o bonus para removê-lo e incrementar o contador
		*/
		function checkBonusCollision()
		{
			var i = 0;
			var num = bonus.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (bonus.getChildAt(i) && bonus.getChildAt(i).x > hero.x - 50 && bonus.getChildAt(i).x < hero.x + 100)
				{
					var px = bonus.getChildAt(i).x;
					var py = bonus.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeBonus(bonus.getChildAt(i));
						context.stopGame(true);
						context.setChildIndex(quiz, context.getNumChildren() - 1);
						quiz.show();
						break;
					}
				}
			}
		}
		/**
		* Verifica se o hero está em contato com as moedas para removê-las e incrementar o contador
		*/
		function checkCoinsCollision()
		{
			var i = 0;
			var num = coins.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (coins.getChildAt(i) && coins.getChildAt(i).x > hero.x - 50 && coins.getChildAt(i).x < hero.x + 100)
				{
					var px = coins.getChildAt(i).x;
					var py = coins.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) && (hero.y - 35 < py && hero.y + 35 > py))
					{
						removeCoin(coins.getChildAt(i));
						pontos++;
						atualizaPontuacao(true);
						break;
					}
				}
			}
		}
		/**
		* Verifica se o hero está em contato com o chão ou o teto para disparar o estado morte
		*/
		function checkGroundCollision()
		{
			if (hero.y > getScaledWidth() * 0.50 || hero.y < 0)
			{
				context.stopGame();
				hero.getChildAt(0).gotoAndPlay(1);
				return;
			}
		}
		/**
		* Verifica se o hero está em contato com os obstáculos para disparar o estado morte
		*/ 
		function checkObstaclesCollision()
		{
			var i = 0;
			var num = obstacles.getNumChildren();
			
			for (i = 0; i < num; i++)
			{
				if (obstacles.getChildAt(i))
				{
					var px = obstacles.x + obstacles.getChildAt(i).x;
					var py = obstacles.getChildAt(i).y;
					
					if (px > hero.x - 50 && px < hero.x + 100)
					{
						if (obstacles.getChildAt(i).rotation == 0)
						{
							if ((hero.x + 5 > px && hero.x - 5 < px + 56) && (hero.y - 5 < py && hero.y + 5 > py - 334))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								break;
							}
						} 
						else
						{
							if ((hero.x + 5 > px - 56 && hero.x - 5 < px) && (hero.y - 5 < py + 334 && hero.y + 5 > py))
							{
								context.stopGame();
								hero.getChildAt(0).gotoAndPlay(1);
								break;
							}
						}
					}
				}
			}
		}
		
		// END COLLISIONS
		
		this.quizSucess = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
			var k = 0;
			var interval = 0;
			interval = setInterval(function() 
			{
				if (k >= 9)
					clearInterval(interval);
				
				var c = new lib.Coin();
				c.x = hero.x; c.y = hero.y;
				coins.addChild(c);
				removeCoin(c);
				pontos += 1;
				atualizaPontuacao(true);
				k++;
			}, 100);
		}
		this.quizFailed = function()
		{
			// espera 1 seg para voltar ao fluxo do jogo
			setTimeout(function() { context.playGame(); }, 1500);
		}
		
		// CANVAS SCALE
		
		function getScaledWidth()
		{
			return canvas.width / stage.scaleX;
		}
		
		function getScaledHeight()
		{
			return canvas.height / stage.scaleY;
		}
		// END CANVAS SCALE
		// CACHE OBJECTS
		function cacheIt(g, nome)
		{
			if (nome == "Tree")
				g.cache(0, -106, 300, 106);
			else if (nome == "Obstacle")
				g.cache(0, -455, 60, 455);
			else if (nome == "Ground")
				g.cache(0, 0, 398, 87);
			else if (nome == "Fence")
				g.cache(0, 0, 87, 35);
			else if (nome == "BackBuildings")
				g.cache(0, -122, 160, 122);
			else if (nome == "BackClouds")
				g.cache(0, 0, 960, 172);
			else if (nome == "Clouds")
				g.cache(0, 0, 420, 68);
			else if (nome == "CloudsBand")
				g.cache(0, 0, 960, 150);
			else if (nome == "Coin")
				g.cache(-16, -16, 34, 34);
			else if (nome == "Bonus")
				g.cache(-25, -30, 52, 62);
		}
		
		// INSECT CONTROL
		function stageDownHandler(event)
		{
			moveUp = true;
			event.on("mouseup", stageUpHandler, bg);
			/*if (canMove)
				playSoundTag('jump', 100);*/
		}
		function stageUpHandler(event)
		{
			moveUp = false;
		}
		function keyDownHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = true;
		}
		function keyUpHandler(event)
		{
			if (event.keyCode == 38 || event.keyCode == 32)
				moveUp = false;
		}
		    
		function playJump()
		{
			setTimeout(function() { playSoundTag('jump'); }, 500);
		}
		  
		// END INSECT CONTROL
		// UPDATE
		function atualizaPontuacao(colect)
		{
			pontuacao.txt.text = pontos + "";
			if (colect)
				playAudio("sounds/sm_coin.mp3");
		}
		
		// TO RELOAD
		function removeComponents()
		{
			context.removeChild(hero);
			context.removeChild(coins);
			context.removeChild(clouds);
			context.removeChild(buildings);
			context.removeChild(trees);
			context.removeChild(fence);
			context.removeChild(ground);
			context.removeChild(obstacles);
			context.removeChild(bonus);
		}
		
		this.reloadTheGame = function(event)
		{
			canMove = false;
			removeComponents();
			context.initialize();
			context.stopGame();
			setTimeout(function() {
				gameOver.hide();
			}, 0);
			setTimeout(function() { context.parent.inicializa(); }, 0);
		}
		
		this.apresentaRanking = function()
		{
			root.rankingHandler();
			//ranking.show();
			//context.setChildIndex(ranking, context.getNumChildren() - 1);
		}
		
		this.initialize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// quiz
	this.quiz = new lib.Quiz();
	this.quiz.setTransform(1440,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.quiz).wait(1));

	// game over
	this.gameOver = new lib.GameOver();
	this.gameOver.setTransform(480,-275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(1));

	// pontos
	this.pontuacao = new lib.pontuacao();
	this.pontuacao.setTransform(814.1,25,0.996,0.996);

	this.timeline.addTween(cjs.Tween.get(this.pontuacao).wait(1));

	// counter
	this.counter = new lib.Counter();
	this.counter.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.counter).wait(1));

	// predios
	this.instance = new lib.Buildings();
	this.instance.setTransform(743.7,478.3);
	this.instance.cache(-2,-121,255,123);

	this.instance_1 = new lib.Buildings();
	this.instance_1.setTransform(493.5,478.3);
	this.instance_1.cache(-2,-121,255,123);

	this.instance_2 = new lib.Buildings();
	this.instance_2.setTransform(243.3,478.3);
	this.instance_2.cache(-2,-121,255,123);

	this.instance_3 = new lib.Buildings();
	this.instance_3.setTransform(-6.9,478.3);
	this.instance_3.cache(-2,-121,255,123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// nuvens
	this.instance_4 = new lib.Clouds();
	this.instance_4.setTransform(228.3,63.3,1,1,0,0,0,208.5,33.8);
	this.instance_4.cache(-2,-2,914,131);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// background
	this.bg = new lib.bg_1();
	this.bg.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// label
	this.text = new cjs.Text("CENARIO 01", "bold 12px 'Roboto'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(-60.5,6.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("ApHCgIAAk/ISPAAIAAE/g");
	this.shape.setTransform(-58.5,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(235,235,235,0.008)").s().p("A24SDMAAAgkEMAtxAAAMAAAAkEg");
	this.shape_1.setTransform(480,275,3.276,2.381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-443.4,2037,1246.9);


// stage content:
(lib.superflying = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{selecao:20,jogo:40});

	// timeline functions:
	this.frame_0 = function() {
		var context = this;
		var game = this.game;
		
		var pause = this.pause;
		var iniciar = this.iniciar;
		var ranking = this.ranking;
		var btranking = this.btranking;
		var inicio = this.inicio;
		
		var btinformacoes = this.btinformacoes;
		var btinstrucoes = this.btinstrucoes;
		var instrucoes;// = this.instrucoes;
		var informacoes;// = this.informacoes;
		
		var abertura;// = this.abertura;
		var selecao;// = this.selecao;
		var container = this.container;
		
		this.criaAbertura = function()
		{
			abertura = new lib.Abertura();
			container.addChild(abertura);
		}
		
		this.removeAbertura = function()
		{
			container.removeChild(abertura);
		}
		
		this.criaSelecao = function()
		{
			selecao = new lib.Selecao();
			context.addChild(selecao);
		}
		
		this.removeSelecao = function()
		{
			context.removeChild(selecao);
		}
		
		this.rodaSelecao = function()
		{
			context.criaSelecao();
			selecao.y = -550;
			createjs.Tween.get(selecao, {override:true}).wait(0).to({y:0}, 500, createjs.Ease.quartOut);
		}
		
		this.playTheGame = function()
		{
			try {
				game.cenario.playGame();
			} catch(e) {
				console.log("Não existe game ainda");
			}	
		}
		
		this.stopTheGame = function()
		{
			try {
				game.cenario.stopGame(true);
			} catch(e) {
				console.log("Não existe game ainda");
			}
		}
		
		this.gotoGame = function()
		{
			//createLevelMusic();
			//fadeOut(currentTheme);
			stopAudio();
			context.removeAbertura();
			//console.log(selecionado);
			context.gotoAndPlay("jogo");
			try {
				game.inicializa();
			} catch(e) {
				console.log("Não foi possível inicializar o game");
			}
			setTimeout(function() { parteInicial = false; }, 100);
		}
		
		function iniciarHandler(event)
		{
			iniciar.clickCont++;
			if (createjs.Touch.isSupported() && iniciar.clickCont % 2 == 0)
				return;
			
			context.gotoAndPlay("selecao");
			abertura.gotoAndPlay("s1");
			context.rodaSelecao();
		}
		
		this.rankingHandler = function(event)
		{
			ranking.show();
		}
		
		function reset(event)
		{
			inicio.clickCont++;
			if (createjs.Touch.isSupported() && inicio.clickCont % 2 == 0)
				return;
				
			parteInicial = true;
			if (stage.hasEventListener)
				stage.removeAllEventListeners();
			
			try {
				game.cenario.reloadTheGame();
			} catch(e) {
				console.log("Não existe game ainda");
			}
			
			if (selecao) 
				createjs.Tween.get(selecao, {override:true}).wait(0).to({y:-550}, 300, createjs.Ease.quartIn).call(context.removeSelecao);
				
			if (ranking) ranking.hide();
			
			context.gotoAndPlay(1);
			abertura.gotoAndPlay(1);
			
			context.criaAbertura();
			
			playAudio("abertura", true);
		}
		
		this.criaInformacoes = function()
		{
			informacoes = new lib.Informacoes();
			context.addChild(informacoes);
		}
		
		this.removeInformacoes = function()
		{
			context.removeChild(informacoes);
		}
		
		function showInformacoes(event)
		{
			btinformacoes.clickCont++;
			if (createjs.Touch.isSupported() && btinformacoes.clickCont % 2 == 0)
				return;
			
			showingInformacoes = true;
			context.criaInformacoes();
			informacoes.y = -550;
			createjs.Tween.get(informacoes, {override:true}).wait(0).to({y:0}, 500, createjs.Ease.quartOut);
			
			//context.setChildIndex(informacoes, context.getNumChildren() - 1);
			//informacoes.show();
		}
		
		this.criaInstrucoes = function()
		{
			instrucoes = new lib.Instrucoes();
			context.addChild(instrucoes);
		}
		
		this.removeInstrucoes = function()
		{
			context.removeChild(instrucoes);
		}
		
		function showInstrucoes(event)
		{
			btinstrucoes.clickCont++;
			if (createjs.Touch.isSupported() && btinstrucoes.clickCont % 2 == 0)
				return;
			
			context.criaInstrucoes();
			instrucoes.x = canvas.width / stage.scaleX + 50;
			context.stopTheGame();
			showingInstrucoes = true;
			createjs.Tween.get(instrucoes, {override:true}).wait(0).to({x:0}, 500, createjs.Ease.quartOut);
			
			/*context.setChildIndex(instrucoes, context.getNumChildren() - 1);
			instrucoes.show();*/
		}
		
		iniciar.on("click", iniciarHandler);
		iniciar.clickCont = 0;
		btranking.on("click", this.rankingHandler);
		btranking.clickCont = 0;
		inicio.on("click", reset);
		inicio.clickCont = 0;
		
		btinformacoes.on("click", showInformacoes);
		btinformacoes.clickCont = 0;
		btinstrucoes.on("click", showInstrucoes);
		btinstrucoes.clickCont = 0;
		
		window.addEventListener("keydown", function(e) {
		    // space and arrow keys
		    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
		        e.preventDefault();
		    }
			
			if (e.keyCode == 80)
			{
				pause.togglePlayPause();
			}
		}, false);
		
		this.criaAbertura();
		
		createjs.Touch.enable(stage, true, true);
		playAudio("abertura", true);
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(1));

	// sound button
	this.audioComponent = new lib.audioComponent();
	this.audioComponent.setTransform(45,47.1,1.547,1.547,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.audioComponent).wait(60));

	// pause
	this.pause = new lib.btpause();
	this.pause.setTransform(45,111.6,1.546,1.546,0,0,0,0,0.2);
	this.pause.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.pause).wait(40).to({visible:true},0).wait(20));

	// informacoes
	this.btinformacoes = new lib.informacoesButton();
	this.btinformacoes.setTransform(60,503,1.547,1.546);

	this.timeline.addTween(cjs.Tween.get(this.btinformacoes).wait(20).to({y:603},9,cjs.Ease.get(1)).wait(31));

	// botao inicio
	this.inicio = new lib.inicioButton();
	this.inicio.setTransform(913.2,593,1.547,1.546);

	this.timeline.addTween(cjs.Tween.get(this.inicio).wait(20).to({y:503},9,cjs.Ease.get(1)).wait(31));

	// instrucoes
	this.btinstrucoes = new lib.instrucoesButton();
	this.btinstrucoes.setTransform(844.7,593,1.547,1.546);

	this.timeline.addTween(cjs.Tween.get(this.btinstrucoes).wait(40).to({y:503},8,cjs.Ease.get(1)).wait(12));

	// ranking
	this.ranking = new lib.Ranking();
	this.ranking.setTransform(480,-275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.ranking).wait(60));

	// game
	this.game = new lib.Game();
	this.game._off = true;

	this.timeline.addTween(cjs.Tween.get(this.game).wait(40).to({_off:false},0).wait(20));

	// botao rankink
	this.btranking = new lib.btranking();
	this.btranking.setTransform(-217,421.1);

	this.timeline.addTween(cjs.Tween.get(this.btranking).to({x:480},9,cjs.Ease.get(1)).wait(11).to({x:1161},7,cjs.Ease.get(-1)).to({_off:true},1).wait(32));

	// botao iniciar
	this.iniciar = new lib.btiniciar();
	this.iniciar.setTransform(1180,336.9);

	this.timeline.addTween(cjs.Tween.get(this.iniciar).to({x:480},9,cjs.Ease.get(1)).wait(11).to({x:-205.4},7,cjs.Ease.get(-1)).to({_off:true},1).wait(32));

	// indicacao
	this.instance = new lib.indicacao();
	this.instance.setTransform(425.3,584.8,0.768,0.768,0,0,0,227.8,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:496.8},9,cjs.Ease.get(1)).wait(11).to({y:584.8},7,cjs.Ease.get(-1)).wait(33));

	// container
	this.container = new lib.container();

	this.timeline.addTween(cjs.Tween.get(this.container).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141,-163.5,1694.5,1082.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;