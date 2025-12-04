const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");

g.fillStyle = "brown";
g.fillRect(370, 350, 60, 80);

g.fillStyle = "green";

g.beginPath();
g.moveTo(400, 100);
g.lineTo(350, 180);
g.lineTo(450, 180);
g.closePath();
g.fill();

g.beginPath();
g.moveTo(400, 150);
g.lineTo(300, 260);
g.lineTo(500, 260);
g.closePath();
g.fill();


g.beginPath();
g.moveTo(400, 220);
g.lineTo(250, 360);
g.lineTo(550, 360);
g.closePath();
g.fill();

g.beginPath();
g.arc(400, 80, 15, 0, Math.PI * 2);
g.fillStyle = "yellow";
g.fill();

g.beginPath();
g.arc(360, 250, 10, 0, Math.PI * 2);
g.fillStyle = "red";
g.fill();

g.beginPath();
g.arc(440, 250, 10, 0, Math.PI * 2);
g.fillStyle = "blue";
g.fill();

g.beginPath();
g.arc(350, 280, 10, 0, Math.PI * 2);
g.fillStyle = "yellow";
g.fill();

g.beginPath();
g.arc(390, 220, 10, 0, Math.PI * 2);
g.fillStyle = "purple";
g.fill();

g.beginPath();
g.arc(420, 230, 10, 0, Math.PI * 2);
g.fillStyle = "cyan";
g.fill();

g.beginPath();
g.arc(330, 240, 10, 0, Math.PI * 2);
g.fillStyle = "pink";
g.fill();

g.beginPath();
g.arc(470, 240, 10, 0, Math.PI * 2);
g.fillStyle = "orange";
g.fill();

g.beginPath();
g.arc(310, 300, 10, 0, Math.PI * 2);
g.fillStyle = "lime";
g.fill();

g.beginPath();
g.arc(460, 300, 10, 0, Math.PI * 2);
g.fillStyle = "gold";
g.fill();

g.beginPath();
g.arc(360, 330, 10, 0, Math.PI * 2);
g.fillStyle = "white";
g.fill();

g.beginPath();
g.arc(440, 330, 10, 0, Math.PI * 2);
g.fillStyle = "skyblue";
g.fill();

g.beginPath();
g.arc(400, 260, 10, 0, Math.PI * 2);
g.fillStyle = "violet";
g.fill();

g.beginPath();
g.arc(390, 310, 10, 0, Math.PI * 2);
g.fillStyle = "magenta";
g.fill();

g.beginPath();
g.arc(400, 150, 10, 0, Math.PI * 2);
g.fillStyle = "violet";
g.fill();

g.beginPath();
g.arc(390, 180, 10, 0, Math.PI * 2);
g.fillStyle = "purple";
g.fill();


g.fillStyle = "lightgray";       
g.fillRect(150, 420, 50, 35);

g.beginPath();                  
g.moveTo(150, 420);
g.lineTo(175, 390);
g.lineTo(200, 420);
g.closePath();
g.fillStyle = "brown";
g.fill();


g.fillStyle = "yellow";
g.fillRect(165, 430, 20, 12);


g.fillStyle = "lightgray";
g.fillRect(310, 430, 45, 32);

g.beginPath();
g.moveTo(310, 430);
g.lineTo(332, 405);
g.lineTo(355, 430);
g.closePath();
g.fillStyle = "brown";
g.fill();

g.fillStyle = "yellow";
g.fillRect(322, 438, 18, 10);



g.fillStyle = "lightgray";
g.fillRect(550, 410, 55, 38);

g.beginPath();
g.moveTo(550, 410);
g.lineTo(577, 380);
g.lineTo(605, 410);
g.closePath();
g.fillStyle = "brown";
g.fill();

g.fillStyle = "yellow";
g.fillRect(565, 422, 22, 14);

g.strokeStyle = "grey";
g.lineWidth = 2;


function snowflake(x, y, size) {
    
    g.beginPath();
    g.moveTo(x, y - size);
    g.lineTo(x, y + size);
    g.stroke();

    
    g.beginPath();
    g.moveTo(x - size, y);
    g.lineTo(x + size, y);
    g.stroke();

    
    g.beginPath();
    g.moveTo(x - size * 0.7, y - size * 0.7);
    g.lineTo(x + size * 0.7, y + size * 0.7);
    g.stroke();

    g.beginPath();
    g.moveTo(x - size * 0.7, y + size * 0.7);
    g.lineTo(x + size * 0.7, y - size * 0.7);
    g.stroke();
}



snowflake(100, 80, 8);
snowflake(200, 60, 8);
snowflake(300, 90, 8);
snowflake(500, 70, 8);
snowflake(650, 100, 8);
snowflake(750, 60, 8);

snowflake(150, 180, 8);
snowflake(250, 200, 8);
snowflake(350, 160, 8);
snowflake(450, 190, 8);
snowflake(550, 170, 8);
snowflake(700, 210, 8);

snowflake(120, 320, 8);
snowflake(220, 350, 8);
snowflake(330, 330, 8);
snowflake(520, 340, 8);
snowflake(620, 310, 8);
snowflake(740, 350, 8);




g.fillStyle = "red";
g.font = "40px serif";
g.fillText("Merry Christmas", 250, 500);
