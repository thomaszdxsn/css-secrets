import * as THREE from 'three';
import {range} from '../utils';


class SceneMixin {
    canvasWidth = 846;
    canvasHeight = 494;
    canvasRadio = this.canvasWidth / this.canvasHeight;

    scene;
    camera;
    renderer;

    constructor(canvasId) {
        this.scene = new THREE.Scene();
        
        const windowScale = 4;
        const windowWidth = windowScale * this.canvasRadio;
        const windowHeight = windowScale;
        this.camera = new THREE.OrthographicCamera( windowWidth / - 2, windowWidth / 2, windowHeight / 2, windowHeight / - 2, 0, 40 );
        this.scene.add(this.camera);
``
        this.renderer = new THREE.WebGLRenderer({
            antialias: false,
            preserveDrawingBuffer: true
        })
        this.renderer.setSize(this.canvasWidth, this.canvasHeight);
        this.renderer.setClearColor(0xffffff, 1.0);

        this.appendToDOM(canvasId);

        const eye = new THREE.Vector3(0, 1, 0);
        this.camera.position.x = eye.x;
        this.camera.position.y = eye.y;
        this.camera.position.z = 20;
        this.camera.lookAt(eye);
        
        this.drawGrid();
        this.drawAxes();
        this.drawMeshs()
    }

    drawMeshs() {}

    appendToDOM(canvasId) {
        document.getElementById(canvasId).appendChild(
            this.renderer.domElement
        )
    }

    drawGrid() {
        const gridHelper = new THREE.GridHelper(10, 10);
        this.scene.add(gridHelper);
    }

    drawAxes() {
        const axes = new THREE.AxesHelper(20);
        this.scene.add(axes);
    }


    render() {
        this.renderer.render(this.scene, this.camera);
    }

}


export default class PolygonScene extends SceneMixin {

    constructor(scene) {
        super(scene);
    }

    drawMeshs() {
        this.drawPolygon(6);
    }

    drawPolygon(sides) {
        const geo = new THREE.Geometry();
        for (let pt of range(sides)) {
            // 逆时针转 90 度
            const angle = (Math.PI / 2) + (pt / sides) * 2 * Math.PI
            const x = Math.cos(angle);
            const y = Math.sin(angle);
            geo.vertices.push(new THREE.Vector3(x, y, 0.0));
        }

        for (let face of range(sides - 2)) {
            geo.faces.push(
                new THREE.Face3(0, face + 1, face + 2)
            );
        }

        const material = new THREE.MeshBasicMaterial({color: 0x2685AA, side: THREE.FrontSide});
        const mesh = new THREE.Mesh(geo, material)
        console.log(mesh)

        this.scene.add(mesh)
    }


}