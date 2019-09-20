//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Patches = require('Patches');
const Scene = require('Scene');
const Reactive = require('Reactive');
const Diagnostics = require('Diagnostics');
var TouchGestures = require('TouchGestures');
var Canvas = require('Canvas');
//from script sayi = 1;
//const myNumber = Patches.getNumberValue('myNumber');
// How to access scene objects (uncomment line below to activate)
 
  //const text = Scene.root.find('2dText0');



// Locate the text in the Scene
var text = Scene.root.find('2dText0');
var particle = Scene.root.find("emitter0");
var manualRect = Scene.root.find("rectangle0");
var manualBtn = Scene.root.find("rectangle1");
var canvas = Scene.root.find("canvas0");
manualRect.hidden = true;
manualBtn.hidden = false;
canvas.hidden = false;
//canvas.hidden=true;
//canvas.height = 0;
//canvas.forCaptureOutput(false);
//canvas.forPreviewOutput(false);
particle.scale = 0;
  
// Create a boolean variable
const myBoolean = true;
var passBool = false;
var showBtn = Scene.root.find('Button10');
var okBtn = Scene.root.find('Button10');
var birBtn = Scene.root.find('Button1');
var ikiBtn = Scene.root.find('Button2');
var ucBtn = Scene.root.find('Button3');
var dortBtn = Scene.root.find('Button4');
var besBtn = Scene.root.find('Button5');
var altiBtn = Scene.root.find('Button6');
var yediBtn = Scene.root.find('Button7');
var sekizBtn = Scene.root.find('Button8');
var dokuzBtn = Scene.root.find('Button9');
var deleteBtn = Scene.root.find('Button11');
//var numberPlease = 2;


// Send the boolean value to the Patch Editor under the name 'myBoolean'

Patches.setBooleanValue('myBoolean', myBoolean);


// Get the 'myString' string value from the Patch Editor
const myString = Patches.getStringValue('myString');
const ikinciString = Patches.getStringValue('ikinciString');
const ucuncuString = Patches.getStringValue('ucuncuString');
const dorduncuString = Patches.getStringValue('dorduncuString');
/*const besinciString = Patches.getStringValue('besinciString');
const altinciString = Patches.getStringValue('altinciString');
const yedinciString = Patches.getStringValue('yedinciString');
const sekizinciString = Patches.getStringValue('sekizinciString');
const dokuzuncuString = Patches.getStringValue('dokuzuncuString');*/


/*

var son = myString.concat(ikinciString);
var deneme = ucuncuString.concat(dorduncuString);
var xd = son.concat(deneme);
text.text= xd;



//========TAMAMEN KODLA YAPMAK İÇİN YORUM SATIRI=========


var sayi1 = parseInt(xd.pinLastValue());
var sayi2 = 1234;

if(sayi1==sayi2){
  passBool = true;
  Patches.setBooleanValue('passBool', passBool);
}else{
  passBool =false;
  Patches.setBooleanValue('passBool', passBool);
}
  */

//Diagnostics.log(text.text.pinLastValue());
TouchGestures.onTap(manualBtn).subscribe(function() {
  
  manualRect.hidden = false;
  manualBtn.hidden = true;

});
TouchGestures.onTap(manualRect).subscribe(function() {
  
  manualRect.hidden = true;
  manualBtn.hidden = false;

});
//======================================================
var password = 2143;
var passText = 0;
TouchGestures.onTap(okBtn).subscribe(function() {
    if(passText == password){
      passBool = true;
      Patches.setBooleanValue('passBool', passBool);
      particle.scale = 0.05;
    }
    
      

});
//======================================================
TouchGestures.onTap(birBtn).subscribe(function() {
  if(passText ==0)
    passText++;
    else{
      passText = parseInt(passText.toString().concat("1"));
    }
    Diagnostics.log(passText);
    Diagnostics.log(passBool);
    text.text= passText.toString();
    particle.scale = 0.05;
});
//======================================================
TouchGestures.onTap(ikiBtn).subscribe(function() {
  if(passText == 0){
    passText =2;
  }else
    passText = parseInt(passText.toString().concat("2"));
  text.text= passText.toString();
  Diagnostics.log(passText);
});
//======================================================
TouchGestures.onTap(ucBtn).subscribe(function() {
  if(passText == 0){
    passText =3;
  }else
    passText = parseInt(passText.toString().concat("3"));
  
  text.text= passText.toString();
  Diagnostics.log(passText);
});
//======================================================
TouchGestures.onTap(deleteBtn).subscribe(function() {
  if(passText.toString().length != 1)
  passText = parseInt(passText.toString().slice(0,-1));
  else
    passText=0;
  Diagnostics.log(passText);
  text.text= passText.toString();
});
//======================================================
TouchGestures.onTap(dortBtn).subscribe(function() {
  if(passText == 0){
    passText =4;
  }else
    passText = parseInt(passText.toString().concat("4"));
  
  text.text= passText.toString();
  Diagnostics.log(passText);
});
//======================================================
TouchGestures.onTap(besBtn).subscribe(function() {
  if(passText == 0){
    passText =5;
  }else
    passText = parseInt(passText.toString().concat("5"));
  
  text.text= passText.toString();
  Diagnostics.log(passText);
});
//======================================================
TouchGestures.onTap(altiBtn).subscribe(function() {
  if(passText == 0){
    passText =6;
  }else
    passText = parseInt(passText.toString().concat("6"));
  
  text.text= passText.toString();
  Diagnostics.log(passText);
});
//======================================================
TouchGestures.onTap(yediBtn).subscribe(function() {
  if(passText == 0){
    passText =7;
  }else
    passText = parseInt(passText.toString().concat("7"));
  
  text.text= passText.toString();
  Diagnostics.log(passText);
});
//======================================================
TouchGestures.onTap(sekizBtn).subscribe(function() {
  if(passText == 0){
    passText =8;
  }else
    passText = parseInt(passText.toString().concat("8"));
  
  text.text= passText.toString();
  Diagnostics.log(passText);
});
//======================================================
TouchGestures.onTap(dokuzBtn).subscribe(function() {
  if(passText == 0){
    passText =9;
  }else
    passText = parseInt(passText.toString().concat("9"));
  
  text.text= passText.toString();
  Diagnostics.log(passText);
});
