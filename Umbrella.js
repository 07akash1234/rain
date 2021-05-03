class Umbrella{
    constructor(x,y){
        var option = {isStatic:true}
        this.img=loadImage("walking_1.png")

        this.umbrella=Bodies.circle(x,y,50,option)
         this.radius=50
         World.add(world,this.umbrella)
             }
             display(){
                imageMode(CENTER)
                image(this.img,this.umbrella.position.x,this.umbrella.position.y,300,300)
                



             } 
}