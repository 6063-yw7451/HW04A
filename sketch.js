function setup() {
  createCanvas(800,800);
}

function draw() {
  background(255);

 // draw four tracks
 stroke("#0F2B2B");
 noFill();
 strokeWeight(width / 250);
 translate(width / 2, height / 2);
 
 let ctd1 = width / 10;
 let ctd2 = (width * 3) / 10;
 let ctd3 = (width * 5) / 10;
 let ctd4 = (width * 7) / 10;
 circle(0, 0, ctd1);
 circle(0, 0, ctd2);
 circle(0, 0, ctd3);
 circle(0, 0, ctd4);

 // timer
 let s = map(millis() % 1000, 0, 1000, 0, TWO_PI) - HALF_PI;
 let m = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
 let h = map(minute(), 0, 60, 0, TWO_PI) - HALF_PI;
 let d = map(hour(), 0, 24, 0, TWO_PI) - HALF_PI;

 let ballSize = width / 40;

 // second clock ball
 noStroke();
 const from1 = color("#F1B9AE");
 const to1 = color("#DA5137");
 let sc = map(millis() % 1000, 0, 1000, 0, 1.0);
 let interCol1 = lerpColor(from1, to1, sc);
 
 fill(interCol1);
 circle((ctd1 / 2) * cos(s), (ctd1 / 2) * sin(s), ballSize);

 // minute clock ball
 const from2 = color("#C3BE90");
 const to2 = color("#BDB244");
 let mc = map(second(), 0, 60, 0, 1.0);
 let interCol2 = lerpColor(from2, to2, mc);
 
 fill(interCol2);
 circle((ctd2 / 2) * cos(m), (ctd2 / 2) * sin(m), 1.3 * ballSize);

 // hour clock ball
 const from3 = color("#BCE5CC");
 const to3 = color("#A2E4BC");
 let hc = map(minute(), 0, 60, 0, 1.0);
 let interCol3 = lerpColor(from3, to3, hc);
 
 fill(interCol3);
 circle((ctd3 / 2) * cos(h), (ctd3 / 2) * sin(h), 1.6 * ballSize);

 // day clock ball
 const from4 = color("#82BBBB");
 const to4 = color("#0FA8A9");
 let dc = map(hour(), 0, 24, 0, 1.0);
 let interCol4 = lerpColor(from4, to4, dc);
 
 fill(interCol4);
 circle((ctd4 / 2) * cos(d), (ctd4 / 2) * sin(d), 1.9 * ballSize);

}