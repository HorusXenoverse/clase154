AFRAME.registerComponent("bird",{
    init: function(){
        for(var index = 1; index <= 20; index++){
            var birdX = Math.floor(Math.random()*3000 + -1000)
            var birdY = Math.floor(Math.random()*2 + -1)
            var birdZ = Math.floor(Math.random()*3000 + - 1000)
    
            var birdID = `bird${index}`
            var birdPosition = {x: birdX, y: birdY, z: birdZ}
    
            this.createBird(birdID, birdPosition)
        }
    },
    
    createBird: function(id, position){
        var birdTerrain = document.querySelector("#terrain")
        var bird = document.createElement("a-entity")
        bird.setAttribute("id", id)
        bird.setAttribute("position", position)
        bird.setAttribute("scale", {x: 500, y: 500, z: 500})
        bird.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf")
        bird.setAttribute("animation-mixer", {})
        birdTerrain.appendChild(bird)
        
    }
})