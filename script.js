AFRAME.registerComponent('markerhandler', {
    
    init: function () {
        
        this.toggle = false;
        this.vid = document.querySelector("#marker1")
        this.vide = document.querySelector("#marker2")
       
        alert("Marcadores se afastaram!");
        
    },
    tick: function () {
        const mixedCube = document.querySelector('#mixedCube');
        const marker1 = document.querySelector('#marker1').object3D;
        const marker2 = document.querySelector('#marker2').object3D;
        

        if (this.el.object3D.visible === true) {
            const distance = marker1.position.distanceTo(marker2.position);

            if (!this.toggle && distance < 0.3) { // Ajuste a distância conforme necessário
                this.toggle = true;
                mixedCube.setAttribute('visible', 'true');
                alert("Marcadores se aproximaram!");
                
            }
        }
    }
});





















