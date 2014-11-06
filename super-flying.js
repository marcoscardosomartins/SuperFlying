(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 550,
	fps: 30,
	color: "#333333",
	manifest: [
		{src:"images/arvores.png", id:"arvores"},
		{src:"images/buildings.png", id:"buildings"},
		{src:"images/cerca.png", id:"cerca"},
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
		{src:"images/gameOverCoin.png", id:"gameOverCoin"},
		{src:"images/ground.png", id:"ground"},
		{src:"images/obstacle.png", id:"obstacle"}
	]
};



// symbols:



(lib.arvores = function() {
	this.initialize(img.arvores);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,106);


(lib.buildings = function() {
	this.initialize(img.buildings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,123);


(lib.cerca = function() {
	this.initialize(img.cerca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,35);


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


(lib.gameOverCoin = function() {
	this.initialize(img.gameOverCoin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.ground = function() {
	this.initialize(img.ground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,86);


(lib.obstacle = function() {
	this.initialize(img.obstacle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,334);


(lib.reloadButton = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F0D5E").s().p("AiZixIEzCxIkzCyg");
	this.shape.setTransform(-6.5,-16,0.685,0.685,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F0D5E").s().p("AFsAAYAADJijCjjJAAYjIAAijijAAjJYAAjICjijDIAAIAACSYh3AAhiBiAAB3YAAB4BiBiB3AAYB4AABihiAAh4g");
	this.shape_1.setTransform(0,3.3,0.685,0.685,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmgGgQitisAAj0QAAjzCtitQCtitDzAAQD0AACsCtQCuCtAADzQAAD0iuCsQisCuj0AAQjzAAitiug");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,-59,118,118);


(lib.pontuacao = function() {
	this.initialize();

	// Camada 1
	this.txt = new cjs.Text("1000 pts", "25px 'Upheaval Pro'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 27;
	this.txt.lineWidth = 118;
	this.txt.setTransform(-2,22.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F0D5E").s().rc(-67.5,-30.05,135,60.1,0,0,18,18);
	this.shape.setTransform(0,30.1,1,1.003);

	this.addChild(this.shape,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,0,135,60.3);


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


(lib.counter_frase = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AgTA+IAAgUIggAAIAAgLIgLAAIAAhSIALAAIAAgKIBcAAIAAAKIALAAIAABSIgLAAIAAALIggAAIAAAUgAgTAUIAcAAIAAg8IgcAAgADOAqIAAgLIgKAAIAAhSIAKAAIAAgKIBpAAIAAAVIhKAAIAAAVIAgAAIAAATIggAAIAAAUIBKAAIAAAWgABNAqIAAgLIgLAAIAAhcIAqAAIAABRIAfAAIAAhRIAqAAIAABcIgLAAIAAALgAi0AqIAAgLIgLAAIAAhSIALAAIAAgKIBdAAIAAAKIALAAIAABSIgLAAIAAALgAiVAUIAfAAIAAg8IgfAAgAkWAqIAAhSIggAAIAAgVIBpAAIAAAVIgfAAIAABSg");
	this.shape.setTransform(-72.4,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BE43").s().p("AgUA+IAAgUIgfAAIAAgLIgKAAIAAhSIAKAAIAAgKIBcAAIAAAKIAKAAIAABSIgKAAIAAALIgfAAIAAAUgAgUAUIAeAAIAAg8IgeAAgADOAqIAAgLIgLAAIAAhSIALAAIAAgKIBoAAIAAAVIhJAAIAAAVIAfAAIAAATIgfAAIAAAUIBJAAIAAAWgABMAqIAAgLIgKAAIAAhcIAqAAIAABRIAfAAIAAhRIAqAAIAABcIgKAAIAAALgAi1AqIAAgLIgKAAIAAhSIAKAAIAAgKIBfAAIAAAKIAKAAIAABSIgKAAIAAALgAiVAUIAfAAIAAg8IgfAAgAkWAqIAAhSIggAAIAAgVIBpAAIAAAVIggAAIAABSg");
	this.shape_1.setTransform(72.5,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjWhrIJqAAIAADXIpqAAIi9hsg");
	this.shape_2.setTransform(66.2,28.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF5A37").s().p("AjWBsIi9hsIC9hrIJqAAIAADXg");
	this.shape_3.setTransform(66.2,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").p("ABoAIIhohxIhnBxIAoAAIAABkIB/AAIAAhkg");
	this.shape_4.setTransform(-6.2,-10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/BrIAAhkIgoAAIBnhxIBoBxIgoAAIAABkg");
	this.shape_5.setTransform(-6.2,-10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").p("ACsgmIAAgXIgQgXIgxAAIAAgUIhFAAIAAgTIg4ABIAAhrIgjgWIglAeIAADZIgngiIg4ABIAABEIAzAhIBBBlIAABYIDYAAIAAhYIASggIAVgTIAAiYg");
	this.shape_6.setTransform(-1.5,49.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9C9EA0").s().p("AgHArIAAhWIAPAAIAABWg");
	this.shape_7.setTransform(7.1,56);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C9EA0").s().p("AgHArIAAhWIAPAAIAABWg");
	this.shape_8.setTransform(1.5,56);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9C9EA0").s().p("AgHArIAAhWIAPAAIAABWg");
	this.shape_9.setTransform(-4.2,56);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAXhBIAhAVIhvBug");
	this.shape_10.setTransform(6.3,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("Ag3gsIAhgVIBOCDg");
	this.shape_11.setTransform(-19,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgWg1IAsgOIgTCHg");
	this.shape_12.setTransform(-6.9,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CDCFD0").s().p("AAOD9IAAhtIAbg5IAAiBIgegmIhBAAIAAgSIhBAAIAAiaIAkAXIAABpIA5AAIAAAUIBDAAIAAATIAxAAIAPAXIAAAXIAPAAIAACYIgVAUIgSAfIAABZg");
	this.shape_13.setTransform(5.2,49.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhFD9IAAhZIhBhkIgzgiIAAhEIA4AAIAnAiIAAjaIAlgeIAjAXIAABqIA4gBIAAAUIBFAAIAAATIAxAAIAQAXIAAAXIAOAAIAACYIgVAUIgSAfIAABZg");
	this.shape_14.setTransform(-1.5,49.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADWhrIppAAIAADXIJpAAIC+hsg");
	this.shape_15.setTransform(-66.1,28.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EF5A37").s().p("AmTBsIAAjXIJpAAIC+BrIi+Bsg");
	this.shape_16.setTransform(-66.1,28.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EF5A37").s().p("AYaCCIAAg0IBpAAIAAA0gATxCCIAAgaIgaAAIAAjPIAaAAIAAgaIEFAAIAAA0Ii2AAIAAA0IBOAAIAAAyIhOAAIAAA1IC2AAIAAA0gAOUCCIAAg0IC3AAIAAg1IidAAIAAgZIgaAAIAAhnIAaAAIAAgaIEFAAIAAA0Ii2AAIAAA0ICcAAIAAAZIAaAAIAABoIgaAAIAAAagAEoCCIAAgaIgaAAIAAjPIAaAAIAAgaIEFAAIAAA0Ii2AAIAAA0IBOAAIAAAyIhOAAIAAA1IC2AAIAAA0gACCCCIAAhpIhOAAIAABpIhnAAIAAkDIEDAAIAAAaIAaAAIAABOIgaAAIAAAyIAaAAIAABpgAA0gZIBOAAIAAg0IhOAAgAi/CCIAAhpIhOAAIAABpIhpAAIAAjpIAaAAIAAgaIDrAAIAAAaIAaAAIAADpgAkNgZIBOAAIAAg0IhOAAgAq5CCIAAkDIEFAAIAAAaIAaAAIAABnIgaAAIAAAZIicAAIAABpgApQgZIBOAAIAAg0IhOAAgAviCCIAAgaIgaAAIAAjPIAaAAIAAgaIEFAAIAAA0Ii2AAIAAA0IBOAAIAAAyIhOAAIAAA1IC2AAIAAA0gAyICCIAAhpIhOAAIAABpIhpAAIAAkDIEFAAIAAAaIAaAAIAABOIgaAAIAAAyIAaAAIAABpgAzWgZIBOAAIAAg0IhOAAgA6CCCIAAkDIEFAAIAAAaIAaAAIAABnIgaAAIAAAZIicAAIAABpgA4ZgZIBOAAIAAg0IhOAAgAYaA0IAAi1IBpAAIAAC1gAJRAZIAAgyIEfAAIAAAyg");
	this.shape_17.setTransform(-0.2,-62);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5).p("AgziBIBmAAIAAC0IhmAAgAgzBNIBmAAIAAA1IhmAAg");
	this.shape_18.setTransform(161.9,-62);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyCCIAAg1IBlAAIAAA1gAgyA0IAAi1IBlAAIAAC1g");
	this.shape_19.setTransform(161.9,-62);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5).p("AAngZIAAAyIhNAAIAAA0IC1AAIAAA1IkDAAIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA0g");
	this.shape_20.setTransform(138.6,-62);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah0CCIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA1IBNAAIAAAyIhNAAIAAAzIC1AAIAAA1g");
	this.shape_21.setTransform(138.6,-62);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5).p("Ah0AZIAAgZIgaAAIAAhnIAaAAIAAgaIEDAAIAAA0Ii0AAIAAA0ICaAAIAAAZIAaAAIAABoIgaAAIAAAaIkDAAIAAg1IC1AAIAAg0g");
	this.shape_22.setTransform(106.3,-62);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiOCCIAAg1IC1AAIAAgzIibAAIAAgaIgaAAIAAhnIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA1ICbAAIAAAYIAaAAIAABoIgaAAIAAAag");
	this.shape_23.setTransform(106.3,-62);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5).p("AiOgZIEdAAIAAAyIkdAAg");
	this.shape_24.setTransform(73.9,-62);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiOAaIAAgyIEdAAIAAAyg");
	this.shape_25.setTransform(73.9,-62);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5).p("AAmgZIAAAyIhMAAIAAA0IC1AAIAAA1IkDAAIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA0g");
	this.shape_26.setTransform(41.6,-62);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah0CCIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA1IBMAAIAAAyIhMAAIAAAzIC1AAIAAA1g");
	this.shape_27.setTransform(41.6,-62);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5).p("AgmAZIAABpIhoAAIAAkDIEDAAIAAAaIAaAAIAABOIgaAAIAAAyIAaAAIAABpIhoAAIAAhpgAgmhNIAAA0IBNAAIAAg0g");
	this.shape_28.setTransform(9.2,-62);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAnCCIAAhoIhNAAIAABoIhoAAIAAkDIEDAAIAAAaIAaAAIAABPIgaAAIAAAyIAaAAIAABogAgmgYIBNAAIAAg1IhNAAg");
	this.shape_29.setTransform(9.2,-62);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5).p("AiOCCIAAjpIAaAAIAAgaIDpAAIAAAaIAaAAIAADpIhpAAIAAhpIhMAAIAABpgAgmhNIAAA0IBMAAIAAg0g");
	this.shape_30.setTransform(-23.2,-62);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAnCCIAAhoIhNAAIAABoIhoAAIAAjpIAaAAIAAgaIDpAAIAAAaIAaAAIAADpgAgmgYIBNAAIAAg1IhNAAg");
	this.shape_31.setTransform(-23.2,-62);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5).p("AiOCCIAAkDIEDAAIAAAaIAaAAIAABnIgaAAIAAAZIibAAIAABpgAgmhNIAAA0IBMAAIAAg0g");
	this.shape_32.setTransform(-55.5,-62);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AiOCCIAAkDIEDAAIAAAaIAaAAIAABnIgaAAIAAAaIiaAAIAABogAglgYIBLAAIAAg1IhLAAg");
	this.shape_33.setTransform(-55.5,-62);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5).p("AAngZIAAAyIhNAAIAAA0IC1AAIAAA1IkDAAIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA0g");
	this.shape_34.setTransform(-87.9,-62);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ah0CCIAAgaIgaAAIAAjPIAaAAIAAgaIEDAAIAAA0Ii1AAIAAA1IBNAAIAAAyIhNAAIAAAzIC1AAIAAA1g");
	this.shape_35.setTransform(-87.9,-62);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5).p("AgmAZIAABpIhoAAIAAkDIEDAAIAAAaIAaAAIAABOIgaAAIAAAyIAaAAIAABpIhoAAIAAhpgAgmhNIAAA0IBNAAIAAg0g");
	this.shape_36.setTransform(-120.3,-62);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAnCCIAAhoIhNAAIAABoIhoAAIAAkDIEDAAIAAAaIAaAAIAABPIgaAAIAAAyIAaAAIAABogAgmgYIBNAAIAAg1IhNAAg");
	this.shape_37.setTransform(-120.3,-62);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5).p("AiOCCIAAkDIEDAAIAAAaIAaAAIAABnIgaAAIAAAZIibAAIAABpgAgmhNIAAA0IBMAAIAAg0g");
	this.shape_38.setTransform(-152.6,-62);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiOCCIAAkDIEDAAIAAAaIAaAAIAABnIgaAAIAAAaIiaAAIAABogAglgYIBLAAIAAg1IhLAAg");
	this.shape_39.setTransform(-152.6,-62);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.5,-77.6,339.1,153.7);


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


(lib.Bonus = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#430C4B").s().p("AgYANIAbgKIAWgPIAAAZg");
	this.shape.setTransform(25.5,17.7,1.456,1.456);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63176C").s().p("AgYANIAAgZIAyAAIAAAZg");
	this.shape_1.setTransform(25.5,17.8,1.456,1.456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#430C4B").s().p("AAbAAIgQgmIghgFIgEAhIAnAxIgwgxIAHgqIArAGIAUAtQABABAAAYIAAAaIgEADg");
	this.shape_2.setTransform(19.6,9.2,1.456,1.456);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#63176C").s().p("AAUA6IgcgcQgfgeAAgBQgBgDAEgbIAFgaIA8AGQAJA0ACABQABABAAAaIgBAZIgDAEIgGg1IgPgnIghgEIgFAgIA0BBg");
	this.shape_3.setTransform(18.9,8.6,1.456,1.456);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#430C4B").s().p("AgrArIAGgZIAHgYIABgBIAdgmIAsAEIgDApIg7AmIAygmIAEghIgkgEIgWAkIgTAvg");
	this.shape_4.setTransform(30.5,10.2,1.456,1.456);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#63176C").s().p("AgnA1IBCg0IAEgfIgigEIgYAiIgTAxIgCgDIAGgZIAHgYQACgBAWgxIA8AIQgDAygDAFQgDAFhFAog");
	this.shape_5.setTransform(31.2,9.8,1.456,1.456);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#430C4B").s().p("AgmAaQAjgLAKgJQAUgNALgbIAiATQgcASguARQghALgkAEg");
	this.shape_6.setTransform(39.4,13.8,1.456,1.456);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#63176C").s().p("AhKAbIAggIQAigKAOgKQAbgUANgNIAiASQgdATgvAQQgdALgeADIgYACg");
	this.shape_7.setTransform(38.3,13.8,1.456,1.456);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9FDFF").s().p("AgYATIAAglIAxAAIAAAlg");
	this.shape_8.setTransform(25.5,23.8,1.456,1.456);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(79,13,94,0.459)").s().p("AhuATIC6gUIAjgRIAAAlg");
	this.shape_9.setTransform(32.4,23.9,1.456,1.456);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(79,13,94,0.459)").s().p("AiPBnICyhNIBsiAIAADNg");
	this.shape_10.setTransform(25.9,43.7,1.456,1.456);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#76288B").s().p("AigAVIAAgpIFBAAIAAApg");
	this.shape_11.setTransform(25.5,23.8,1.456,1.456);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9FDFF").s().p("AgYBnIAAjNIAxAAIAADNg");
	this.shape_12.setTransform(25.2,43.5,1.456,1.456);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#430C4B").s().p("AADAUQgcgLgagMIgUgMIAigTIAIAQQAKARAMAHQASAPA9AOQgkgEghgLg");
	this.shape_13.setTransform(10.6,13.8,1.456,1.456);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#63176C").s().p("AgDATQgegKgagMIgUgNIAigSIAKAJQANAMAQAMQAYARA4ALIAGAIIgCAAQgkAAgtgQg");
	this.shape_14.setTransform(11.7,13.8,1.456,1.456);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#76288B").s().p("AiUBqIAAjTIEpAAIAADTg");
	this.shape_15.setTransform(25.5,43.6,1.456,1.456);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,59.1);


(lib.Path_25 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAuIgRgXIgMgnIAEgKIAOgUIABAFIgMAWIAMAjIAUAYIAAAHg");
	this.shape.setTransform(2.1,4.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.2,9.6);


(lib.Path_21 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222424").s().p("AgIBDIgygnIgPg+IAwAfIAhgNIAbg4IAnB/IggASg");
	this.shape.setTransform(7.4,7.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,14.7);


(lib.Path_16 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAAIAEgKIAIgNIAKANIADAaIgSAIg");
	this.shape.setTransform(1.4,2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.7,4.9);


(lib.Path_15 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,253,227,0)","#C4BE87"],[0,1],-7.8,-3,8.8,6.3).s().p("AgbA5IgqhMIAEg+IAKAsIA3BHIBGAsIgTAEQgFAAhJgZg");
	this.shape.setTransform(7.1,8.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,16.6);


(lib.Path_14 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,253,227,0)","#C4BE87"],[0,1],-5.7,-5,7.3,8.9).s().p("AAgBfQgEgBg/guIgQhWIAXg6QgFAtABAAIAeBUIA2BAg");
	this.shape.setTransform(5.2,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.5,19.6);


(lib.Path_13 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAaIgKgoIAKgZIAPALIALAmIAAATIgLALg");
	this.shape.setTransform(1.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.8,8.1);


(lib.Path_12 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,253,227,0)","#C4BE87"],[0,1],-1.7,-5.9,4.7,8.6).s().p("AANBRQgEgCgkg3IAMhHIAggoIgQAjIAABKIAaBCg");
	this.shape.setTransform(2.8,8.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.6,17.7);


(lib.Path_11 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALBEIgTgaIgNgqIgBgBIAFgMIAhg1IAFgDIAAACIgjA9IgBAFIAPAnIAXAgg");
	this.shape.setTransform(2.4,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,14.1);


(lib.Path_10 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYB7IgNgbIgCg2IAPgmIAzg7IAIgaIgCglIAEgIIADAtIgIAbIgzA8IgLAhIAJAxIAVAYIgLAOg");
	this.shape.setTransform(4,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,25.4);


(lib.Path_9 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAUIgDgBIAOgXIADgCIABgCIgGgRIADABIAJAQQABAAgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgMAWIAAAGIgEADIgEABIAAAAIACgGg");
	this.shape.setTransform(1.3,2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.6,5.3);


(lib.Path_8 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCgJIgDgIIAKABIABAFIgHAdg");
	this.shape.setTransform(0.7,1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.3,3.8);


(lib.Path_7 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIgDgNIAHgLIAAAWIgGAbg");
	this.shape.setTransform(0.5,2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1,5);


(lib.Path_6_0 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAgBIgEgOIAIgLIgBAXIgGAeg");
	this.shape.setTransform(0.5,2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1,5.5);


(lib.Path_6 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222424").s().p("AAuA2IgOgCIgmgaIgZgtIgCgSIgPAAIgMAOIACgOIAZgcIAfAAQALAIgCAAIgUAGIgHAYIAUAuIApAaIAKAAIAFAQIAFAEIAAABg");
	this.shape.setTransform(6.1,6.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.3,13.3);


(lib.Path_5_0 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCgBIAJgIIACAAIgRATg");
	this.shape.setTransform(1,1.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2,2.2);


(lib.Path_5 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABBAgIgwg3IgfgXIgZANIgjAlIAAgHIAhgiIAfgQIAeAcIAwA5IAHAWg");
	this.shape.setTransform(7.5,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,11);


(lib.Path_4_0 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCgBIAKgHIACAAIgKAIIgJAJg");
	this.shape.setTransform(1.1,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.1,2);


(lib.Path_4 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAzAdIgug4IgggVIgaANIgIAKIgBgJIAJgHIAbgPIAhAaIAuA7IAJAcg");
	this.shape.setTransform(6.3,5.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.6,11.5);


(lib.Path_3_3 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,252,0.047)","rgba(255,252,224,0.569)","rgba(255,251,206,0.886)","#FFFAC8"],[0,0.031,0.42,0.753,1],-11.6,-5.7,10.8,9.4).s().p("AgeA5IgqhMIAEg+IAiAmIA/AkIAsAxIgGAkIgTAEQgEAAhKgZg");
	this.shape.setTransform(7.3,8.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,16.6);


(lib.Path_3_2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,252,0.047)","rgba(255,252,224,0.569)","rgba(255,251,206,0.886)","#FFFAC8"],[0,0.031,0.42,0.753,1],-9,-8.7,7.8,12.4).s().p("AAYBfQgEgBg/guIgQhWIAXg6IAUAuIAyA0IAaA/IgQAgg");
	this.shape.setTransform(6,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,19.6);


(lib.Path_3_1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,252,0.047)","rgba(255,252,224,0.569)","rgba(255,251,206,0.886)","#FFFAC8"],[0,0.031,0.42,0.753,1],-3.7,-9.5,3.6,11.8).s().p("AACBRQgCgCglg3IALhHIAggoIADAqIAaA3IADA4IgVAWg");
	this.shape.setTransform(3.9,8.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.8,17.7);


(lib.Path_3_0 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAlIAMgWIAEgDIgQgfIgGgaIAXAnIAEARIgWAjg");
	this.shape.setTransform(1.5,4.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.9,9.3);


(lib.Path_3 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222424").s().p("AgOAfIgYgwIAFgbIASgNIAMAJIAMAMIAdBZIgMgFIgMgsIgOghIgagNIgHAYIAVAuIAmAUIACAFIAJAAIACAEIgKABg");
	this.shape.setTransform(3.9,5.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.9,11.6);


(lib.Path_2_3 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,252,0.047)","rgba(255,252,224,0.569)","rgba(255,251,206,0.886)","#FFFAC8"],[0,0.031,0.42,0.753,1],-9.3,-5.3,9.7,9.7).s().p("AhHAaIghgzIgBgwIA0AaIBUAeIBLBCIgEAHQgCgBhYATg");
	this.shape.setTransform(10.7,7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,14.9);


(lib.Path_2_2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,252,0.047)","rgba(255,252,224,0.569)","rgba(255,251,206,0.886)","#FFFAC8"],[0,0.031,0.42,0.753,1],-11.7,-8.8,7.9,11.1).s().p("AgBBeIhRhKIgWhAIALg0IAxAqIBVA1IBABcIgGAGQgCgBhigCg");
	this.shape.setTransform(10.6,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,19.5);


(lib.Path_2_1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,254,243,0.216)","rgba(255,252,219,0.647)","rgba(255,250,205,0.91)","#FFFAC8"],[0,0.133,0.451,0.749,1],-8.4,-14.2,6.2,15.8).s().p("AgYBXIg0hfIABhFIAbguIAiA4IA9BOIAdBtIgHAEQgCgChbgjg");
	this.shape.setTransform(7.7,12.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,24.9);


(lib.Path_2_0 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBgIIgCgFIgBgCIAJABIAAAHIgFAXg");
	this.shape.setTransform(0.5,1.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,3.4);


(lib.Path_2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222424").s().p("AgrAnIgZhCIACgOIAZgcIAfAAIAKAIIgVAGIgHAZIAUAtIABAAIAoAaIAJAAIAAgBIgWhCIAXAuIAOALIAJgLIABg+IACBYIgTATIgKAAIgkAFg");
	this.shape.setTransform(7,7.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.9,14.2);


(lib.Path_1_3 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,253,227,0)","#C4BE87"],[0,1],-6.2,-1.4,8,8.1).s().p("AhHAaIghgzIgBgwIAxBJIBYAwIBKABIgEAHQgCgBhYATg");
	this.shape.setTransform(10.7,7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,14.9);


(lib.Path_1_2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,253,227,0)","#C4BE87"],[0,1],-6,-2.1,7,11.8).s().p("AgBBeIhRhKIgWhAIALg0IAjBdIBTBKIBQAUIgGAGQgCgBhigCg");
	this.shape.setTransform(10.6,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,19.5);


(lib.Path_1_1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,253,227,0)","#C4BE87"],[0,1],-4.2,-4.1,3.4,13.3).s().p("AgYBXIg0hfIABhFIAbguIACBkIA1BhIBFAuIgHAEQgCgChbgjg");
	this.shape.setTransform(7.7,12.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,24.9);


(lib.Path_1_0 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFApIgLgYIgDgyIADgHIAKgEIgBABIgCAHIAKAnIATAXIgQATg");
	this.shape.setTransform(2.1,4.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.1,9);


(lib.Path_1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222424").s().p("AgEgDIgUgGIABAAIAXACIAZAOIgCAAIgNACg");
	this.shape.setTransform(2.5,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.1,2);


(lib.Path_0 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222424").s().p("AAVAIIgVgNIgYgDIAYACIAZAOIgEABg");
	this.shape.setTransform(2.5,0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.1,1.9);


(lib.Path = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222424").s().p("AhpBMIAvgQIBZhLIAjhCIAoBHIgmAoIhMAiIhPASg");
	this.shape.setTransform(10.6,8.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.3,16.5);


(lib.gameOverPlayAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{s1:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("Ah4iLIDxCLIjxCMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

	// Camada 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5A37").s().p("AmMERQgpAAgegdQgdgdAAgqIAAlZQAAgpAdgeQAegdApAAIMZAAQAqAAAdAdQAdAeAAApIAAFZQAAAqgdAdQgdAdgqAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AmMERQgpAAgegdQgdgdAAgqIAAlZQAAgpAdgeQAegdApAAIMZAAQAqAAAdAdQAdAeAAApIAAFZQAAAqgdAdQgdAdgqAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBD60E").s().p("AmMERQgpAAgegeQgdgcAAgqIAAlZQAAgpAdgdQAegeApAAIMZAAQAqAAAdAeQAdAdAAApIAAFZQAAAqgdAcQgdAegqAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AD1C").s().p("AmMERQgpAAgegeQgdgcAAgqIAAlZQAAgpAdgdQAegeApAAIMZAAQAqAAAdAeQAdAdAAApIAAFZQAAAqgdAcQgdAegqAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F38329").s().p("AmMERQgpAAgegeQgdgcAAgqIAAlZQAAgpAdgdQAegeApAAIMZAAQAqAAAdAeQAdAdAAApIAAFZQAAAqgdAcQgdAegqAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-27.3,99.6,54.7);


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
	this.shape.graphics.f("#333333").s().dr(-3.5,-8.95,7,17.9);
	this.shape.setTransform(5.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().dr(-3.5,-8.95,7,17.9);
	this.shape_1.setTransform(-5.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCuQgMABgIgKQgKgIABgMIAAkgQgBgNAKgJQAIgIAMgBIECAAQANABAIAIQAJAJAAANIAAEgQAAAMgJAIQgIAKgNgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EBEBEB","#B2B2B2"],[0,1],-3.8,-9.2,-3.8,9.3).s().p("AhHhYICPBYIiPBZIAAAAg");
	this.shape_3.setTransform(0,0,1,0.997);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#616161","#000000"],[0,1],-8.1,-14.8,6,10.9).s().p("AiACuQgNAAgIgIQgJgJAAgMIAAkgQAAgNAJgJQAIgIANgBIECAAQAMABAIAIQAKAJgBANIAAEgQABAMgKAJQgIAIgMAAg");
	this.shape_4.setTransform(0.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.5,32,35);


(lib.fullscreenEstados = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape.setTransform(-6.5,-4.4,0.998,0.998,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_1.setTransform(-4.4,-6.5,0.998,0.998,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_2.setTransform(6.5,-4.4,0.999,0.999,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_3.setTransform(4.4,-6.5,0.999,0.999,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_4.setTransform(6.5,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_5.setTransform(4.4,6.5,1,1,-90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_6.setTransform(-6.5,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_7.setTransform(-4.4,6.5,1,1,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_8.setTransform(-2.5,-4.5,0.998,0.998);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_9.setTransform(-4.5,-2.4,0.998,0.998,-90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_10.setTransform(2.4,-4.5,0.998,0.998);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_11.setTransform(4.5,-2.4,0.998,0.998,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_12.setTransform(2.5,4.5,0.999,0.999,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_13.setTransform(4.5,2.4,0.999,0.999,90);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_14.setTransform(-2.5,4.4,0.999,0.999,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_15.setTransform(-4.5,2.4,0.999,0.999,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Camada 2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCuQgMABgIgKQgKgIABgMIAAkgQgBgNAKgJQAIgIAMgBIECAAQANABAIAIQAJAJAAANIAAEgQAAAMgJAIQgIAKgNgBg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#616161","#000000"],[0,1],-8.1,-14.8,6,10.9).s().p("AiACuQgNAAgIgIQgJgJAAgMIAAkgQAAgNAJgJQAIgIANgBIECAAQAMABAIAIQAKAJgBANIAAEgQABAMgKAJQgIAIgMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.5,32,35);


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
	this.shape.graphics.f("#333333").s().p("AgNAfIglAAIAAg/IAnAAIA+g8IAAC5g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCuQgMABgIgKQgKgIABgMIAAkgQgBgNAKgJQAIgIAMgBIECAAQANABAIAIQAJAJAAANIAAEgQAAAMgJAIQgIAKgNgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAfIgmAAIAAg/IAoAAIA/g8IAAC5g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#616161","#000000"],[0,1],-8.1,-14.8,6,10.9).s().p("AiACuQgNAAgIgIQgJgJAAgMIAAkgQAAgNAJgJQAIgIANgBIECAAQAMABAIAIQAKAJgBANIAAEgQABAMgKAJQgIAIgMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.5,32,35);


(lib.btmusic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// music
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAPBOQgFgWAWgJQARgIAUACIAAhWIhTAAIAAA9IABAAIgBABIAAABQgBAMgHAKQgLARgVADQgcAEgFgXQgGgWAWgJQARgHAUACIAAhlIABAAIAAgBIB6AAIAACYIAAAAQgCAMgGAKQgLARgVADIgIABQgVAAgFgUg");
	this.shape.setTransform(-1.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCvQgMAAgJgJQgJgJAAgMIAAkhQAAgMAJgJQAJgJAMAAIECAAQANAAAJAJQAIAJABAMIAAEhQgBAMgIAJQgJAJgNAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPBOQgFgWAWgJQARgIAUACIAAhWIhTAAIAAA9IABAAIgBABIAAABQgBAMgHAKQgLARgVADQgcAEgFgXQgGgWAWgJQARgHAUACIAAhlIABAAIAAgBIB6AAIAACYIAAAAQgCAMgGAKQgLARgVADIgIABQgVAAgFgUg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#616161","#000000"],[0,1],-8.1,-14.8,6,10.9).s().p("AiACuQgNAAgIgIQgJgJAAgMIAAkgQAAgNAJgJQAIgIANgBIECAAQAMABAIAIQAKAJgBANIAAEgQABAMgKAJQgIAIgMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.5,32,35);


(lib.Trees = function() {
	this.initialize();

	// Camada 2
	this.instance = new lib.arvores();
	this.instance.setTransform(0,-106);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-106,300,106.1);


(lib.Obstacle = function() {
	this.initialize();

	// Camada 2
	this.instance = new lib.obstacle();
	this.instance.setTransform(58,-334,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-336.4,59.5,338);


(lib.Ground = function() {
	this.initialize();

	// actions
	this.instance = new lib.ground();

	this.addChild(this.instance);
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


(lib.Fence = function() {
	this.initialize();

	// Camada 2
	this.instance = new lib.cerca();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.3,35.4);


(lib.CloudsBand = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.129)").s().p("Eg1EANXIAAz/ICJCkIGbDHQBNiGBQiHQCgkLASACQARACEBiCQCAhBB9hCIQ1EtID4E4IBfEhIk5A1IlPiyIEUAGIC8gDIl7knIlLDsICmFiIOZAdIAUhoIHzCUIICjbIiRiYIjNibIA+mDILZh4IQoADQNpD9AuAUID2DnIjrEzIrQAbIicmGQlyALg7gBQgmABgBCMQAABGAGBEIFoCYINeCsIGiISg");
	this.shape.setTransform(339.8,85.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.129)").s().p("AJkLqIr5k2IhSjsIgclWIjyg4ImrABIhmERIEyCTICIjvIkShZIHrAAIhaDOQhhDWgeAYQgeAYjyhEIjshIIkmkFILUrDIHUAKQHcAOA1ASQA1ASH9BOQD+AnD0AjIgET/g");
	this.shape_1.setTransform(820.9,96.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960.1,171);


(lib.Clouds = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E2E7EA").ss(1,1,1).p("AFEgIIg+geIhDgZIiHAmIgUgyIhNgTIhYAIIhSA6IgHgdIgygEIg7AqIAJBBQBuAWAHAAQAIAAA2gJIAyAkICFgIIBCgyICWAyIA8gfg");
	this.shape.setTransform(127,54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2E7EA").s().p("AiHA7Qg2AJgIAAQgHAAhugWIgJhBIA7gqIAyAEIAHAdIBSg6IBYgIIBNATIAUAyICHgmIBDAZIA+AeIAABAIg8AfIiWgyIhCAyIiFAIg");
	this.shape_1.setTransform(127,54.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGuADIhcgzIiRAHIgRgQQgVgLgWgKQgrgWgEAAIhZAGIhYhBIijAOIhUCFIgigRIhfAeIgXBWIAyAsQADADA9gWQAegLAegMIAuAeIgJhDIA7grIAyAEIAHAdIBSg3IBWgIIBPATIAUAwICHgnIBDAZIA+AfIAABBIg8AgICFgaIAyhSg");
	this.shape_2.setTransform(122.6,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFwCAIAAhBIg+gfIhDgZIiHAnIgUgwIhPgTIhWAIIhSA3IgHgdIgygEIg7ArIAJBDIgugeIg8AXQg9AWgDgDIgygsIAXhWIBfgeIAiARIBUiFICjgOIBYBBIBZgGQAEAAArAWIArAVIARAQICRgHIBcAzIA9AxIgyBSIiFAag");
	this.shape_3.setTransform(122.6,47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADcAQIglgUIhTgDIgMgMIgngWIgoAJIgegUIg6gPIhCAaIgTAxIgOgLIgmAAQgIAGgGAJQgPASAAABIAAARIAgACIAtASIgHgfIAXgKIAeAKIAMgjIAwgFIAcALIARAVIARADIAbgbIAsAEIARARIAAAVIgXALIAuAFIAjgUIAzAPIAxgQg");
	this.shape_4.setTransform(392.4,58.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjVAzIgggCIAAgRQAAgCAPgRIANgQIAnAAIAOALIASgxIBEgaIA5APIAeAUIAogJIAnAWIAMAMIBTAEIAlATIAaAaIgyARIgygQIgjAUIgugEIAWgMIAAgVIgRgRIgrgEIgbAbIgRgDIgRgVIgcgLIgxAFIgLAkIgegLIgXAKIAHAfg");
	this.shape_5.setTransform(392.4,58.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E2E7EA").ss(1,1,1).p("ACEgQIgRgRIgsgEIgbAbIgTgDIgRgVIgagNIgwAHIgMAjIgegKIgXAKIAHAdIABAAIA/AKIBLACIAUAMIA+gIIAMgaIAXgLg");
	this.shape_6.setTransform(388,62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2E7EA").s().p("AAPAkIhLgCIg/gKIgBAAIgHgdIAXgKIAeAKIAMgjIAwgHIAaANIARAVIATADIAbgbIAsAEIARARIAAATIgXALIgMAaIg+AIg");
	this.shape_7.setTransform(388,62.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADcAQIgmgUIhSgDIgMgMIgngWIgoAJIgegUIg6gPIhDAaIgSAyIgOgMIgnAAQgHAHgHAIQgOASAAABIAAASIAfACIAuARIgHgfIAXgKIAdAKIAMgjIAxgFIAcALIAQAVIASAEIAagcIAsAEIARARIAAAVIgWAMIAtAFIAkgUIAyAPIAygRg");
	this.shape_8.setTransform(185.9,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjWAzIgfgCIAAgSQAAgCAOgRIAPgPIAmAAIAOALIATgxIBCgaIA6AOIAeAVIAogJIAnAWIALAMIBTAEIAmATIAaAaIgyARIgygQIgkAUIgugEIAYgMIAAgVIgSgRIgsgEIgaAcIgSgEIgQgVIgcgLIgwAEIgNAkIgdgKIgXAJIAHAgg");
	this.shape_9.setTransform(185.9,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E2E7EA").ss(1,1,1).p("ACEgQIgRgRIgsgFIgbAcIgTgDIgRgVIgagNIgwAGIgMAkIgegKIgXAJIAHAeIABAAIA/AKIBLACIAUAMIA+gIIAMgaIAXgLg");
	this.shape_10.setTransform(181.5,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2E7EA").s().p("AAPAkIhLgCIg/gKIgBAAIgHgeIAXgJIAeAKIAMgkIAwgGIAaANIARAVIATADIAbgcIAsAFIARARIAAATIgXALIgMAaIg+AIg");
	this.shape_11.setTransform(181.5,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E2E7EA").ss(1,1,1).p("AFFgIIg/geIhDgZIiHAmIgTgxIhOgUIhYAIIhSA6IgHgdIgygEIg8AqIAJBBQBvAWAHAAQAIAAA2gJIAyAkICFgIIBDgyICVAyIA9gfg");
	this.shape_12.setTransform(313,24.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2E7EA").s().p("AiHA7Qg2AJgIAAQgHAAhvgWIgJhBIA9gqIAxAEIAHAdIBSg6IBYgIIBOAUIATAxICHgmIBDAZIA+AeIAABAIg8AfIiWgyIhCAyIiEAIg");
	this.shape_13.setTransform(313,24.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGuADIhcgzIiRAHIgRgQQgVgLgWgKQgrgWgEAAIhZAGIhYhBIijAOIhVCFIghgRIhfAeIgXBWIAyAsQADADA9gWQAegLAegMIAtAeIgJhDIA8grIAyAEIAHAeIBSg4IBVgIIBQATIATAwICIgnIBDAZIA+AfIAABBIg8AgICFgaIAyhSg");
	this.shape_14.setTransform(308.6,16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AFwCAIAAhBIg+gfIhDgZIiIAnIgTgwIhQgTIhVAIIhSA4IgHgeIgygEIg8ArIAJBDIgtgeIg8AXQg9AWgDgDIgygsIAXhWIBfgeIAhARIBViFICjgOIBYBBIBZgGQAEAAArAWIArAVIARAQICRgHIBcAzIA9AxIgyBSIiFAag");
	this.shape_15.setTransform(308.6,16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AECA4IgNgvIg3gcIgUg3Ig1gRIgagiIg7gSIhRASIghBEIgpAHIgWApQg2AAgHgBQgEgBgTAWQgKANgJAMIgwARIgZAgIAAAQIBLAfIBDgSIBXAQIgCgEQgLgHgKgHQgVgOAAgBIAEgkIAfgYIApAOIgMgqIASgVIAxgUIAoAHIgKAiIAtgJIBBAHIAMAeIgKATIAUAWIASAdIgGAZIgpAMIAegCIBDgYIBZAIQAIgkAAgFQAAgFhAgYg");
	this.shape_16.setTransform(32.3,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ACpCEIAFgaIgRgcIgUgWIAJgTIgLgeIhBgHIgtAJIAKgiIgogHIgwAUIgSAVIALAqIgogOIggAYIgEAkQAAABAVAOIAVANIABAFIhWgQIhDASIhLgfIAAgQIAZggIAwgSIATgYQAUgWAEABQAGABA3AAIAVgpIApgHIAhhEIBRgSIA6ASIAbAiIA1ARIAUA3IA2AcIAOAuQBAAZAAAFQAAAFgIAkIhZgIIhDAYIgeACg");
	this.shape_17.setTransform(32.3,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E2E7EA").ss(1,1,1).p("ACcAxIgRgcIgVgVIAKgSIgMgeIhBgJIgtALIAKgkIgngHIgxATIgSAYIALApIgogNIggAWIgEAjQAAACAVAOQALAHAKAGIACAEIAkAJIAOgHQAPgGABACQACADAuAJQAZAEAYAEIA5gDIApgNg");
	this.shape_18.setTransform(34.1,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2E7EA").s().p("AADBSQgugJgCgDQgBgCgPAGIgOAHIgkgJIgCgEIgVgNQgVgOAAgCIAEgjIAggWIAoANIgLgpIASgYIAxgTIAnAHIgKAkIAtgLIBBAJIAMAeIgKASIAVAVIARAcIgGAZIgpANIg5ADIgxgIg");
	this.shape_19.setTransform(34.1,20.2);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,419.1,69.6);


(lib.bg = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#94D9F8","#009AB1"],[0,1],0,108.3,0,-232.8).s().p("EhK/Al5MAAAhLxMCV/AAAMAAABLxg");
	this.shape.setTransform(480,275,1,1.134);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,550);


(lib.BackCloud = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.129)").s().p("Eg1EANXIAAz/ICJCkIGbDHQBNiGBQiHQCgkLASACQARACEBiCQCAhBB9hCIQ1EtID4E4IBfEhIk5A1IlPiyIEUAGIC8gDIl7knIlLDsICmFiIOZAdIAUhoIHzCUIICjbIiRiYIjNibIA+mDILZh4IQoADQNpD9AuAUID2DnIjrEzIrQAbIicmGQlyALg7gBQgmABgBCMQAABGAGBEIFoCYINeCsIGiISg");
	this.shape.setTransform(339.8,85.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.129)").s().p("AJkLqIr5k2IhSjsIgclWIjyg4ImrABIhmERIEyCTICIjvIkShZIHrAAIhaDOQhhDWgeAYQgeAYjyhEIjshIIkmkFILUrDIHUAKQHcAOA1ASQA1ASH9BOQD+AnD0AjIgET/g");
	this.shape_1.setTransform(820.9,96.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960.1,171);


(lib.BackBuildings = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.buildings();
	this.instance.setTransform(0,-123);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-123,162.3,123);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var context = this;
		var playAgain = this.playAgain;
		
		this.show = function()
		{
			createjs.Tween.get(context, {override:true}).wait(500).to({y:225}, 500, createjs.Ease.quartOut);
		}
		
		this.hide = function()
		{
			createjs.Tween.get(context, {override:true}).wait(0).to({y:-225}, 250, createjs.Ease.quartIn);
		}
		
		function reload(event)
		{
			context.parent.reloadTheGame();
			playAgain.gotoAndPlay("s1");
		}
		
		playAgain.on("click", reload);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// button
	this.playAgain = new lib.gameOverPlayAgain();
	this.playAgain.setTransform(363.7,378.8);

	this.text = new cjs.Text("jogar", "22px 'Upheaval Pro'", "#EF5A37");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(361.7,411);

	this.text_1 = new cjs.Text("ranking", "22px 'Upheaval Pro'", "#EF5A37");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.setTransform(593.5,411);

	this.text_2 = new cjs.Text("3", "14px 'Upheaval Pro'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 11;
	this.text_2.setTransform(616.2,376.5);

	this.text_3 = new cjs.Text("2", "14px 'Upheaval Pro'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 11;
	this.text_3.setTransform(572.4,376.5);

	this.text_4 = new cjs.Text("1", "14px 'Upheaval Pro'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 11;
	this.text_4.setTransform(594.8,376.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE43").s().p("AhgBXIAAiuIDBAAIAACug");
	this.shape.setTransform(616.8,386.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BE43").s().p("AhgC0IAAlnIDBAAIAAFng");
	this.shape_1.setTransform(595.4,377.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4BE43").s().p("AhgB/IAAj9IDBAAIAAD9g");
	this.shape_2.setTransform(574.2,382.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF5A37").s().p("AmMERQgpAAgegdQgegdABgqIAAlZQgBgpAegeQAegdApAAIMZAAQAqAAAdAdQAeAeAAApIAAFZQAAAqgeAdQgdAdgqAAg");
	this.shape_3.setTransform(595.5,378.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.playAgain}]}).wait(1));

	// labels
	this.text_5 = new cjs.Text("prêmio", "21px 'Upheaval Pro'", "#EF5A37");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 11;
	this.text_5.setTransform(410.7,191.3);

	this.text_6 = new cjs.Text("0", "21px 'Upheaval Pro'");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 11;
	this.text_6.setTransform(626.3,211.1);

	this.text_7 = new cjs.Text("256", "21px 'Upheaval Pro'");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 11;
	this.text_7.setTransform(626.6,286.4);

	this.text_8 = new cjs.Text("melhor", "21px 'Upheaval Pro'", "#EF5A37");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 11;
	this.text_8.setTransform(626.5,264.2);

	this.text_9 = new cjs.Text("pontuação", "21px 'Upheaval Pro'", "#EF5A37");
	this.text_9.textAlign = "right";
	this.text_9.lineHeight = 11;
	this.text_9.setTransform(626.4,194.2);

	this.text_10 = new cjs.Text("FIM DE JOGO", "46px 'Upheaval Pro'", "#FFFFFF");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 35;
	this.text_10.lineWidth = 324;
	this.text_10.setTransform(478,126.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5}]}).wait(1));

	// quadro bg
	this.instance = new lib.gameOverCoin();
	this.instance.setTransform(327.1,216.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").p("AYaMoMgwzAAAQgpAAgdgdQgegdAAgqIAA2HQAAgpAegeQAdgdApAAMAwzAAAQApAAAdAdQAeAeAAApIAAWHQAAAqgeAdQgdAdgpAAg");
	this.shape_4.setTransform(480.1,256.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A4ZMoQgpAAgdgdQgegdAAgqIAA2HQAAgpAegeQAdgdApAAMAwzAAAQApAAAdAdQAeAeAAApIAAWHQAAAqgeAdQgdAdgpAAg");
	this.shape_5.setTransform(480.1,256.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").p("AaRZsMg0hAAAQgpAAgegeQgdgdAAgpMAAAgwPQAAgpAdgdQAegeApAAMA0hAAAQAqAAAdAeQAdAdAAApMAAAAwPQAAApgdAdQgdAegqAAg");
	this.shape_6.setTransform(480,275.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#613F42").s().p("A6QZsQgpAAgegeQgdgdAAgpMAAAgwPQAAgpAdgdQAegeApAAMA0hAAAQAqAAAdAeQAdAdAAApMAAAAwPQAAApgdAdQgdAegqAAg");
	this.shape_7.setTransform(480,275.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,-32,539.2,473.3);


(lib.Counter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1,s2:22});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(15).call(this.frame_36).wait(1));

	// frase
	this.instance = new lib.counter_frase();
	this.instance.setTransform(480,275);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},10).wait(10).to({alpha:0},15).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1}]},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,117,32);


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

	// bee
	this.instance = new lib.Path_15();
	this.instance.setTransform(-4.7,-16.7,1,1,0,0,0,7,8.3);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.setTransform(-12.3,-10.5,1,1,0,0,0,10.7,7.5);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.Path_2_3();
	this.instance_2.setTransform(-12.3,-10.5,1,1,0,0,0,10.7,7.5);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.Path_3_3();
	this.instance_3.setTransform(-4.4,-16.7,1,1,0,0,0,7.3,8.3);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.Path_14();
	this.instance_4.setTransform(-2.8,-18.7,1,1,0,0,0,5.2,9.8);
	this.instance_4.alpha = 0.602;

	this.instance_5 = new lib.Path_1_2();
	this.instance_5.setTransform(-12.4,-14.9,1,1,0,0,0,10.6,9.8);
	this.instance_5.alpha = 0.602;

	this.instance_6 = new lib.Path_2_2();
	this.instance_6.setTransform(-12.4,-14.9,1,1,0,0,0,10.6,9.8);
	this.instance_6.alpha = 0.602;

	this.instance_7 = new lib.Path_3_2();
	this.instance_7.setTransform(-2,-18.7,1,1,0,0,0,6,9.8);
	this.instance_7.alpha = 0.602;

	this.instance_8 = new lib.Path_12();
	this.instance_8.setTransform(-1.5,-17.8,1,1,0,0,0,2.8,8.8);
	this.instance_8.alpha = 0.602;

	this.instance_9 = new lib.Path_1_1();
	this.instance_9.setTransform(-9.6,-17.7,1,1,0,0,0,7.7,12.4);
	this.instance_9.alpha = 0.602;

	this.instance_10 = new lib.Path_2_1();
	this.instance_10.setTransform(-9.6,-17.7,1,1,0,0,0,7.7,12.4);
	this.instance_10.alpha = 0.602;

	this.instance_11 = new lib.Path_3_1();
	this.instance_11.setTransform(-0.4,-17.8,1,1,0,0,0,3.9,8.8);
	this.instance_11.alpha = 0.602;

	this.instance_12 = new lib.Path_10();
	this.instance_12.setTransform(-12,12.8,1,1,0,0,0,4,12.7);
	this.instance_12.alpha = 0.539;

	this.instance_13 = new lib.Path_1_0();
	this.instance_13.setTransform(-10.4,17.4,1,1,0,0,0,2,4.5);
	this.instance_13.alpha = 0.371;

	this.instance_14 = new lib.Path_2_0();
	this.instance_14.setTransform(-2.8,19.4,1,1,0,0,0,0.5,1.7);
	this.instance_14.alpha = 0.539;

	this.instance_15 = new lib.Path_3_0();
	this.instance_15.setTransform(1.5,11,1,1,0,0,0,1.5,4.7);
	this.instance_15.alpha = 0.539;

	this.instance_16 = new lib.Path_4_0();
	this.instance_16.setTransform(-1.1,16,1,1,0,0,0,1.1,1);
	this.instance_16.alpha = 0.539;

	this.instance_17 = new lib.Path_5_0();
	this.instance_17.setTransform(0,16.3,1,1,0,0,0,1,1.1);
	this.instance_17.alpha = 0.539;

	this.instance_18 = new lib.Path_6_0();
	this.instance_18.setTransform(-13,27.3,1,1,0,0,0,0.5,2.7);
	this.instance_18.alpha = 0.539;

	this.instance_19 = new lib.Path_7();
	this.instance_19.setTransform(-9.6,23.6,1,1,0,0,0,0.5,2.5);
	this.instance_19.alpha = 0.539;

	this.instance_20 = new lib.Path_8();
	this.instance_20.setTransform(-3.8,20.6,1,1,0,0,0,0.7,1.9);
	this.instance_20.alpha = 0.539;

	this.instance_21 = new lib.Path_0();
	this.instance_21.setTransform(8.9,9.1,1,1,0,0,0,2.5,0.9);
	this.instance_21.alpha = 0.539;

	this.instance_22 = new lib.Path_1();
	this.instance_22.setTransform(8.9,9.2,1,1,0,0,0,2.5,1);
	this.instance_22.alpha = 0.301;

	this.instance_23 = new lib.Path_2();
	this.instance_23.setTransform(7.5,3.4,1,1,0,0,0,7,7);
	this.instance_23.alpha = 0.301;

	this.instance_24 = new lib.Path_3();
	this.instance_24.setTransform(7.9,2.2,1,1,0,0,0,3.9,5.8);
	this.instance_24.alpha = 0.199;

	this.instance_25 = new lib.Path_4();
	this.instance_25.setTransform(20.5,3.3,1,1,0,0,0,6.3,5.8);
	this.instance_25.alpha = 0.539;

	this.instance_26 = new lib.Path_5();
	this.instance_26.setTransform(19.8,0.9,1,1,0,0,0,7.5,5.5);
	this.instance_26.alpha = 0.539;

	this.instance_27 = new lib.Path_6();
	this.instance_27.setTransform(6.6,3.1,1,1,0,0,0,6.1,6.7);
	this.instance_27.alpha = 0.199;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAHAZIgPgKIgIgNIADgRIANgJIAAAAIARAxg");
	this.shape.setTransform(10,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLADIACgYIARAIIAEAXIgJAMg");
	this.shape_1.setTransform(7.8,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2E1C5").s().p("AAaAzIgogZIgVgvIAHgXIAXgGIAMAMIAdBZg");
	this.shape_2.setTransform(8.1,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#69696A").s().p("ABAAiIgvg3IgggWIgZAMIgjAlIAAgOIAsgpIAZgLIAvA3IAbAmIAHAdg");
	this.shape_3.setTransform(19.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDD00").s().p("AgqA3IgahCIAIgzIAugXIAuAOIAjAtIACBYIgQAQIgEACIgJAAIglAGg");
	this.shape_4.setTransform(7.4,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#69696A").s().p("ABAAhIgvg4IgggVIgZANIgiAkIAAgOIArgoIAWgLIAjAhIAqA7IAHAdg");
	this.shape_5.setTransform(19.2,2.8);

	this.instance_28 = new lib.Path_9();
	this.instance_28.setTransform(0.9,13,1,1,0,0,0,1.3,2.6);
	this.instance_28.alpha = 0.371;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#636255").s().p("AgCgBIAIgIIAEAAIgEAJIgPAKg");
	this.shape_6.setTransform(0,16.2);

	this.instance_29 = new lib.Path_11();
	this.instance_29.setTransform(-5.6,11.8,1,1,0,0,0,2.4,7);
	this.instance_29.alpha = 0.539;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#343636").s().p("AgdB9IgOgcIgBg4IAOgnIA1g8IAGgWIAAgjIAFgLIAFACIAGArIgHAeIg2A7IgHAbIALAnIAMAQIABAQIgRAVg");
	this.shape_7.setTransform(-11.7,12.9);

	this.instance_30 = new lib.Path_13();
	this.instance_30.setTransform(-7.3,3.2,1,1,0,0,0,1.9,4);
	this.instance_30.alpha = 0.301;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#343636").s().p("AACAoIgOgNIgKgoIAKgaIAUABIAPAgIgJAjIgMALIAAAAg");
	this.shape_8.setTransform(-6.9,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#343636").s().p("AAKBEIgTgaIgOgrIAFgMIAhg1IAGgDIADAGIgQAhIgSAaIAMAgIATAaIABAQg");
	this.shape_9.setTransform(-5.6,11.8);

	this.instance_31 = new lib.Path_16();
	this.instance_31.setTransform(-3.6,5.6,1,1,0,0,0,1.4,2.5);
	this.instance_31.alpha = 0.301;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#343636").s().p("AgQAFIAGgXIANgKIAOASIgIAfIgRAIg");
	this.shape_10.setTransform(-3.3,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#343636").s().p("AgKAkIAMgXIADgDIgPgdIgGgcIAIAAIAXAnIACAVIgSAiIgKABg");
	this.shape_11.setTransform(1.6,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#636255").s().p("AgEAAIgCgIIAEgSIAFADIAEAVIgKAeg");
	this.shape_12.setTransform(-3.7,19.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#636255").s().p("AgEAFIgEgMIACgPIALgLIAEAEIgEAeIgMAhg");
	this.shape_13.setTransform(-12.5,26.6);

	this.instance_32 = new lib.Path_21();
	this.instance_32.setTransform(-2.4,3.2,1,1,0,0,0,7.4,7.3);
	this.instance_32.alpha = 0.398;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E4C10A").s().p("AgQBpIgzgoIgShKIAahFIA7ggIA6ASIAbAmIglA3IAUBbIgiATIgBAAIgxgGg");
	this.shape_14.setTransform(-1.5,-0.6);

	this.instance_33 = new lib.Path();
	this.instance_33.setTransform(-16.2,9,1,1,0,0,0,10.6,8.3);
	this.instance_33.alpha = 0.398;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#343636").s().p("AgWBJIgcgpIAChPIAhgsIAgALIARAMIARBkIgTAqIgQASg");
	this.shape_15.setTransform(-9.7,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#343636").s().p("AgZBcIgagoIgCg7IAJgcIA1hEIgVA3IACBGIAcAvIAkAQIgkAPIgSAEg");
	this.shape_16.setTransform(-19,5.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFDD00").s().p("AgcBdIgegwIgChGIAXg3IBBgbIgfAsIgCBPIAaAqIAoATIgMANIgrASg");
	this.shape_17.setTransform(-14.2,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#343636").s().p("AgLAZIgHgdIAFgaIAHAeIAMAVIANAHIgOADg");
	this.shape_18.setTransform(-25.5,14.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFDD00").s().p("AgRBEIgOgWIgHgeIAOhEIATgWIgJAcIADA7IAYAnIAaANIgrAKg");
	this.shape_19.setTransform(-23,9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#636255").s().p("AgCgBIAJgHIADAAIgDAIIgQAJg");
	this.shape_20.setTransform(-1.2,16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1B1D1D").s().p("AgPAwIACgLIAOgXIAEgBIgNggIgEgcIAIABIAUApIAAAUIgVAhg");
	this.shape_21.setTransform(0.9,10.8);

	this.instance_34 = new lib.Path_25();
	this.instance_34.setTransform(-4.4,13.1,1,1,0,0,0,2,4.8);
	this.instance_34.alpha = 0.371;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B1D1D").s().p("AAJA9IgRgXIgMgnIAEgKIAegwIAEgCIADAFIgOAeIgQAXIALAdIARAWIABAOg");
	this.shape_22.setTransform(-4.2,11.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#636255").s().p("AgDAAIgDgHIAFgRIADAEIAFATIgJAag");
	this.shape_23.setTransform(-2.6,18.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1B1D1D").s().p("AgbBzIgNgaIgBgzIANgkIAxg3IAGgVIAAghIAEgKIAFACIAFAoIgGAcIgyA2IgHAZIALAlIAMAOIAAAPIgQAUg");
	this.shape_24.setTransform(-8.4,10.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#636255").s().p("AgEAEIgDgKIACgOIAJgLIAFAEIgFAbIgKAfg");
	this.shape_25.setTransform(-9.2,22.9);

	this.instance_35 = new lib.heroSmoke();
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_34},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_33},{t:this.shape_14},{t:this.instance_32},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_31},{t:this.shape_9},{t:this.shape_8},{t:this.instance_30},{t:this.shape_7},{t:this.instance_29},{t:this.shape_6},{t:this.instance_28},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},5).to({state:[{t:this.instance_35}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).wait(5).to({alpha:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-30.1,55,60.2);


(lib.fullscreenButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var fullscreenSwitch = this;
		fullscreenSwitch.clickCont = 0;
		var estados = this.estados;
		
		function fullscreenHandler(event) 
		{
			fullscreenSwitch.clickCont++;
			if (fullscreenSwitch.clickCont % 2 == 0 && createjs.Touch.isSupported())
				return;
			
			/*var time = new Date();
			if (time.getTime() - clickInterval < 100)
				return;
			else
				clickInterval = time.getTime();*/
			
			toggleFullScreen();
		};
		
		// FULLSCREEN
		function toggleFullScreen() 
		{
			if (!document.fullscreenElement &&    // alternative standard method
				!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
				if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if (document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
				
				estados.gotoAndStop(1);
				
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				}
				
				estados.gotoAndStop(0);
			}
			
			window.scrollTo(0, 1);
			window.pageYOffset = 0;
		}
		
		fullscreenSwitch.on("click", fullscreenHandler);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 3
	this.estados = new lib.fullscreenEstados();

	this.timeline.addTween(cjs.Tween.get(this.estados).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-38.4,90.7,55.9);


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
			if (pauseSwitch.clickCont % 2 == 0 && createjs.Touch.isSupported())
				return;
			
			togglePlayPause();
		}
		
		function togglePlayPause()
		{
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
p.nominalBounds = new cjs.Rectangle(-22.3,-38.6,44.7,56.1);


(lib.audioComponent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var music = playSound("music", 1000);
		//music.setVolume(0.5);
		
		var context = this;
		var musica = this.musica;
		var sons = this.sons;
		
		function musicaHandler(event)
		{
			musica.cont++;
			if (musica.cont % 2 == 0 && createjs.Touch.isSupported())
				return;
			
			if (musica.currentFrame == 0) 
			{
				musica.gotoAndStop(1);
				music.setVolume(0.0);
			}
			else 
			{
				musica.gotoAndStop(0);
				music.setVolume(0.5);
			}
		}
		
		function sonsHandler(event)
		{
			sons.cont++;
			if (sons.cont % 2 == 0 && createjs.Touch.isSupported())
				return;
			
			if (sons.currentFrame == 0)
			{
				context.parent.enableSounds = false;
				sons.gotoAndStop(1);
			}
			else
			{
				context.parent.enableSounds = true;
				sons.gotoAndStop(0);
			}
		}
		
		musica.on("click", musicaHandler);
		musica.cont = 0;
		sons.on("click", sonsHandler);
		sons.cont = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// botao
	this.musica = new lib.btmusic();
	this.musica.setTransform(-39.3,0.2,1,1.001,0,0,0,0,0.2);

	this.sons = new lib.btsound();
	this.sons.setTransform(0,0.2,1,1.001,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sons},{t:this.musica}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-32.3,71.7,49.9);


(lib.Cenario01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var context = this;
		var counter = this.counter;
		var pontuacao = this.pontuacao;
		var gameOver = this.gameOver;
		var bg = this.bg;
		
		var clouds, cloudsBand, backClouds, buildings, trees, fence, obstacles, ground, hero;
		var coins, bonus;
		var speed = 7.5;
		var heroSpeed = 10.5;
		var speedUpLimit = -10.5;
		var speedDownLimit = 10.5;
		
		var moveUp = false;
		var numCoins = 5;
		
		var timeout = 0;
		
		var canMove = false;
		
		var pontos = 0;
		
		// criar cada objeto separadamente atribuindo para eles a velocidade principal de deslocamento
		// cada objeto deve fazer seus próprios calculos de velocidade baseado na velocidade passada
		
		this.initialize = function()
		{
			pontos = 0;
			atualizaPontuacao();
			
			counter.gotoAndPlay("s1");
			
			var scale = stage.scaleX;
			var scaledWidth = canvas.width / scale;
			var scaledHeight = canvas.height / scale;
			
			hero = createHero("Bee", scaledWidth * 0.3, scaledHeight * 0.4);
			coins = createCoins();
			
			//clouds 		= create("Clouds",			500, 70, scaledWidth * 0.1, scaledHeight * 0.1, 0.05);
			//cloudsBand 	= create("CloudsBand",		960, 148, 0, scaledHeight * 0.3, 1.2);
			//backClouds 	= create("BackClouds",		960, 172, 0, scaledHeight * 0.5, 0.1);
			//buildings 	= create("BackBuildings", 	160, 122, 0, scaledHeight - 60, 0.1);
			trees 		= create("Trees", 			scaledWidth * 0.45, 106, 0, scaledHeight - 80, 0.3);
			obstacles 	= create("Obstacle", 		scaledWidth * 0.4, 55, scaledWidth * 0.6, 0, 0.8, true); 
			obstacles.x = getScaledWidth();
			//obstacles = createObstacles();
			fence 		= create("Fence", 			86, 35, 0, scaledHeight - 115, 0.9);
			ground 		= create("Ground", 			398, 86, 0, scaledHeight - 80, 1);
			
			context.addChild(/*clouds, buildings, */trees, obstacles, fence, ground, coins, hero);
			
			context.on("mousedown", stageDownHandler, bg);
			//context.on("pressup", stageUpHandler);
			
			document.onkeydown = keyDownHandler;
			document.onkeyup = keyUpHandler;
			
			setTimeout(function() {
				stage.on("click", context.playGame, context, true);
			},500);
		}
		
		this.playGame = function(event)
		{
			stage.off("click", context.playGame);
			if (event)
				counter.gotoAndPlay("s2");
			canMove = true;
			context.setChildIndex(counter, context.getNumChildren() - 1);
		}
		
		this.stopGame = function()
		{
			canMove = false;
			gameOver.show();
			context.setChildIndex(gameOver, context.getNumChildren() - 1);
		}
		
		function createCoins()
		{
			var c = new Container.createContainer("Coins", {width:0, height:0, x:0, y:0});
			return c;
		}
		
		function createHero(nome, px, py)
		{
			var scale;
			var c = new Container.createContainer(nome, {width:0, height:0, x:px, y:py});
			
			var type = nome == "Bee" ? lib.Bee : nome == "Mosquito" ? lib.Mosquito : nome == "Ladybug" ? lib.Ladybug : nome == "Ant" ? lib.Ant : lib.Cater;
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
				}
			}
			c.on("tick", c.falling);
			return c;
		}
		
		function checkCoinsCollision()
		{
			var i = 0;
			var num = coins.getNumChildren();
			for (i = 0; i < num; i++)
			{
				if (coins.getChildAt(i))
				{
					var px = coins.getChildAt(i).x;
					var py = coins.getChildAt(i).y;
					
					if ((hero.x + 35 > px && hero.x - 35 < px) &&
						(hero.y - 35 < py && hero.y + 20 > py))
					{
						removeCoin(coins.getChildAt(i));
						pontos++;
						atualizaPontuacao();
					}
				}
			}
		}
		function checkGroundCollision()
		{
			if (hero.y > getScaledWidth() * 0.50 || hero.y < 0)
			{
				context.stopGame();
				hero.getChildAt(0).gotoAndPlay(1);
				return;
			}
		}
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
					
					if (obstacles.getChildAt(i).rotation == 0)
					{
						if ((hero.x + 5 > px && hero.x - 5 < px + 56) && (hero.y - 5 < py && hero.y + 5 > py - 334))
						{
							context.stopGame();
							hero.getChildAt(0).gotoAndPlay(1);
						}
					} 
					else
					{
						if ((hero.x + 5 > px - 56 && hero.x - 5 < px) && (hero.y - 5 < py + 334 && hero.y + 5 > py))
						{
							context.stopGame();
							hero.getChildAt(0).gotoAndPlay(1);
						}
					}
				}
			}
		}
		
		// remove um coin especifico e retorna o array
		function removeCoin(coin)
		{
			if (coin)
				coins.removeChild(coin);
		}
		
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
					
					var type = nome == "Ground" ? lib.Ground : nome == "Fence" ? lib.Fence : nome == "Trees" ? 
					lib.Trees : nome == "Obstacle" ? lib.Obstacle : nome == "BackBuildings" ? lib.BackBuildings : nome == "BackClouds" ? lib.BackClouds() : nome == "CloudsBand" ? lib.CloudsBand : lib.Clouds;
					g = new type();
					
					if (duplo)
					{
						//c.x = scale;
						var posY = Math.random() * 150 + 50;
					
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
		
		// cria as moedas do jogo
		function handleCoins(nome, py, s)
		{
			if (!canMove)
				return;
			
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
		
		function createCoin(nome, py, s, k, pos)
		{
			if (!pos)
				return;
			
			var coin = new lib.Coin();
			coin.x = getScaledWidth() + 25 + (50 * (k+1));
			coin.y = py + pos[k];
			//coin.scaleX = coin.scaleY = 0.75;
			coin.move = function() 
			{ 
				if (coin.x < - getScaledWidth() * 2)
					coins.removeChild(coins.getChildAt(0));
				
				if (canMove)
					coin.x -= speed * s; 
			}
			coin.on("tick", coin.move);
			coins.addChild(coin);
		}
		
		function getScaledWidth()
		{
			return canvas.width / stage.scaleX;
		}
		
		function getScaledHeight()
		{
			return canvas.height / stage.scaleY;
		}
		
		function cacheIt(g, nome)
		{
			if (nome == "Tree")
				g.cache(0, -106, 300, 106);
			else if (nome == "Obstacle")
				g.cache(0, -334, 56, 336);
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
				g.cache(-16, -16, 32, 32);
		}
		
		// controle do inseto
		function stageDownHandler(event)
		{
			moveUp = true;
			event.on("mouseup", stageUpHandler, bg)  
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
		
		function atualizaPontuacao()
		{
			pontuacao.txt.text = pontos + " pts";
		}
		
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
		}
		
		this.reloadTheGame = function(event)
		{
			removeComponents();
			context.initialize();
			context.stopGame();
			setTimeout(gameOver.hide, 100);
		}
		
		this.initialize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// reload
	this.reload = new lib.reloadButton();
	this.reload.setTransform(35,515.1,0.424,0.424);

	this.timeline.addTween(cjs.Tween.get(this.reload).wait(1));

	// game over
	this.gameOver = new lib.GameOver();
	this.gameOver.setTransform(480,-275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(1));

	// pontos
	this.pontuacao = new lib.pontuacao();
	this.pontuacao.setTransform(467,22.3,0.741,0.74,0,0,0,0,30.1);

	this.timeline.addTween(cjs.Tween.get(this.pontuacao).wait(1));

	// counter
	this.counter = new lib.Counter();
	this.counter.setTransform(480,275,1,1,0,0,0,480,275);

	this.timeline.addTween(cjs.Tween.get(this.counter).wait(1));

	// predios
	this.instance = new lib.BackBuildings();
	this.instance.setTransform(804.6,428.5,1,1,0,0,0,0,-49.8);
	this.instance.cache(-2,-125,166,127);

	this.instance_1 = new lib.BackBuildings();
	this.instance_1.setTransform(642.3,428.5,1,1,0,0,0,0,-49.8);
	this.instance_1.cache(-2,-125,166,127);

	this.instance_2 = new lib.BackBuildings();
	this.instance_2.setTransform(480,428.5,1,1,0,0,0,0,-49.8);
	this.instance_2.cache(-2,-125,166,127);

	this.instance_3 = new lib.BackBuildings();
	this.instance_3.setTransform(317.7,428.5,1,1,0,0,0,0,-49.8);
	this.instance_3.cache(-2,-125,166,127);

	this.instance_4 = new lib.BackBuildings();
	this.instance_4.setTransform(155.4,428.5,1,1,0,0,0,0,-49.8);
	this.instance_4.cache(-2,-125,166,127);

	this.instance_5 = new lib.BackBuildings();
	this.instance_5.setTransform(-6.9,428.5,1,1,0,0,0,0,-49.8);
	this.instance_5.cache(-2,-125,166,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// nuvens
	this.instance_6 = new lib.Clouds();
	this.instance_6.setTransform(732.3,63.3,1,1,0,0,0,208.5,33.8);
	this.instance_6.cache(-3,-3,423,74);

	this.instance_7 = new lib.Clouds();
	this.instance_7.setTransform(228.3,63.3,1,1,0,0,0,208.5,33.8);
	this.instance_7.cache(-3,-3,423,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// background
	this.bg = new lib.bg();
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
p.nominalBounds = new cjs.Rectangle(-116.9,-439,1314.5,1121.5);


(lib.Game = function() {
	this.initialize();

	// cenario 1
	this.cenario1 = new lib.Cenario01();

	this.addChild(this.cenario1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.9,-439,1083.5,989.1);


// stage content:
(lib.superflying = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var context = this;
		var game = this.game;
		
		var fullscreenSwitch = this.fullscreenSwitch;
		var pause = this.pause;
		
		this.playTheGame = function()
		{
			game.cenario1.playGame();
		}
		
		this.stopTheGame = function()
		{
			game.cenario1.stopGame();
		}
		
		createjs.Touch.enable(stage, true, true);
		
		// AJUSTES NAS DIMENSÕES
		var keepAspectRatio = true;
		
		window.onresize = function()
		{
			onResize();
		}
		
		function onResize()
		{
			// browser viewport size
			var w = window.innerWidth;
			var h = window.innerHeight;
			
			// stage dimensions
			var ow = 960; // your stage width
			var oh = 550; // your stage height
			
			if ((fullscreenSwitch.currentFrame == 1) && (window.innerWidth < window.innerHeight))
				keepAspectRatio = false;
			else 
				keepAspectRatio = true;
			
			if (keepAspectRatio)
			{
				// keep aspect ratio
				var scale = Math.min(w / ow, h / oh);
				stage.scaleX = scale;
				stage.scaleY = scale;
				
				// adjust canvas size
				stage.canvas.width = ow * scale;
				stage.canvas.height = oh * scale;
			}
			else
			{
				// scale to exact fit
				stage.scaleX = w / ow;
				stage.scaleY = h / oh;
				
				// adjust canvas size
				stage.canvas.width = ow * stage.scaleX;
				stage.canvas.height = oh * stage.scaleY;
			}
			
			//bg.cache(0, 0, stage.canvas.width / stage.scaleX, stage.canvas.height / stage.scaleY);
			// update the stage
			stage.update();
		}
		
		onResize();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// sound button
	this.audioComponent = new lib.audioComponent();
	this.audioComponent.setTransform(915,47.1,1.547,1.547,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.audioComponent).wait(20));

	// pause
	this.pause = new lib.btpause();
	this.pause.setTransform(105,47.5,1.546,1.546,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.pause).wait(20));

	// fullscreen
	this.fullscreenSwitch = new lib.fullscreenButton();
	this.fullscreenSwitch.setTransform(45,47.2,1.547,1.546);

	this.timeline.addTween(cjs.Tween.get(this.fullscreenSwitch).wait(20));

	// game
	this.game = new lib.Game();

	this.timeline.addTween(cjs.Tween.get(this.game).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.1,-164,1083.5,989.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;