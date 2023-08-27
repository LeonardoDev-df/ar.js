AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.mixedCube = document.querySelector('#mixedCube');
        this.marker1 = document.querySelector('#marker1');
        this.marker2 = document.querySelector('#marker2');

        alert("Marcadores se afastaram!");
    },
    tick: function () {
        const marker1Visible = this.marker1.object3D.visible;
        const marker2Visible = this.marker2.object3D.visible;

        if (marker1Visible && marker2Visible) {
            const marker1Position = new THREE.Vector3();
            this.marker1.object3D.getWorldPosition(marker1Position);

            const marker2Position = new THREE.Vector3();
            this.marker2.object3D.getWorldPosition(marker2Position);

            const distance = marker1Position.distanceTo(marker2Position);

            if (distance < 1.5) {
                this.mixedCube.setAttribute('visible', 'true');
                console.log("Marcadores próximos: Distância " + distance.toFixed(2));
            } else {
                this.mixedCube.setAttribute('visible', 'false');
                console.log("Marcadores afastados: Distância " + distance.toFixed(2));
            }
        } else {
            this.mixedCube.setAttribute('visible', 'false');
            alert("Aguardando a detecção de ambos os marcadores...");
        }
    }
});

























