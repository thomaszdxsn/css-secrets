import React, {useLayoutEffect} from 'react';
import * as THREE from 'three';
import * as Stats from 'stats.js';
import * as dat from 'dat.gui';

import BasicLayout from "../../components/BasicLayout"
import { render } from 'react-dom';


class Controls {
    planeGeometry;
    scene;
    numberOfObjects;

    rotationSpeed = 0.02;

    constructor(scene, planeGeometry) {
        this.planeGeometry = planeGeometry;
        this.scene = scene;
        this.numberOfObjects = scene.children.length;
  
    }

    removeCube() {
        const allChildren = this.scene.children;
        const lastObject = allChildren[allChildren.length - 1];
        if (lastObject instanceof THREE.Mesh) {
            this.scene.remove(lastObject);
            this.numberOfObjects = this.scene.children.length;
        }
    }

    addCube() {
        const cubeSize = Math.ceil((Math.random() * 3));
        const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
        const cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;
        cube.name = `cube-${this.numberOfObjects}`;

        cube.position.x = -30 + Math.round(Math.random() * this.planeGeometry.parameters.width);
        cube.position.y = Math.round(Math.random() * 5)
        cube.position.z = -20 + Math.round(Math.random() * this.planeGeometry.parameters.height);

        this.scene.add(cube);
        this.numberOfObjects = this.scene.children.length;
    }

    outputObjects() {
        console.log(this.scene.children)
    }


}


function initStats() {
    const stats = new Stats();
    stats.setMode(0);      // FPS

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.getElementById('threejs-chapter2-stats').appendChild(stats.domElement);
    return stats;
}


function init() {
    if (typeof process.browser === 'undefined') {
        return
    }
    const stats = initStats();

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog('#fff', .015, 100);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);    
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor('#fff', 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    const axes = new THREE.AxesHelper(20);
    scene.add(axes)

    const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
    const planeMaterial = new THREE.MeshLambertMaterial({color: '#fff'});
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);

    const spotlight = new THREE.SpotLight('#FFF');
    spotlight.position.set(-40, 60, -10);
    spotlight.castShadow = true;
    scene.add(spotlight);

    const controls = new Controls(scene, planeGeometry);
    const gui = new dat.GUI();
    gui.add(controls, 'rotationSpeed', 0, .5);
    gui.add(controls, 'addCube');
    gui.add(controls, 'removeCube');
    gui.add(controls, 'outputObjects');
    gui.add(controls, 'numberOfObjects').listen();

    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    document.getElementById('threejs-chapter2-webgl').appendChild(renderer.domElement);
    render()

    function render() {
        stats.update();

        scene.traverse(e => {
            if (e instanceof THREE.Mesh && e != plane) {
                e.rotation.x += controls.rotationSpeed;
                e.rotation.y += controls.rotationSpeed;
                e.rotation.z += controls.rotationSpeed;
            }
        })

        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

};



export default function Page() {
    useLayoutEffect(() => {
        init();
    }, [process.browser])
    return (
        <BasicLayout>
            <div id="threejs-chapter2-stats" />
            <div id="threejs-chapter2-webgl" />
        </BasicLayout>
    )
}