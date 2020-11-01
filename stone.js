class Stone{
constructor(x,y){
var options = {
 isStatic:false,
 restitution:0,
 friction:1,
 density:1.2
}
this.x=x
this.y=y
this.body=(x,y,options)
this.image=loadImage("Plucking mangoes/stone.png")

World.add(World,this.body)
}
display(){
var angle = this.body.angle
push()
translate(this.body.position.x, this.body.position.y)
rotate(angle)
imageMode(CENTER)
image(this.image,this.x,this.y,thiss.width,this.height)
pop()
}







}