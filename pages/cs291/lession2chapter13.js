import React, {useEffect} from 'react';
import * as THREE from 'three';


function drawSquare(x1, y1, x2, y2) {
    const square = new THREE.Geometry();
    square.vertices.push(new THREE.Vector3(x1, y1, 0));
    square.vertices.push(new THREE.Vector3(x1, y2, 0));
    square.vertices.push(new THREE.Vector3(x2, y2, 0));
    square.vertices.push(new THREE.Vector3(x2, y1, 0));

    square.faces.push(new THREE.Face3(0, 1, 2));
    square.faces.push(new THREE.Face3(2, 3, 0));

    return square;
}


function init() {
    const scene = new THREE.Scene();

    const axes = new THREE.AxesHelper(20);
    scene.add(axes);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('#000');

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);    
    scene.add(camera);

    const triangleGeometry = new THREE.Geometry();
    triangleGeometry.vertices.push(new THREE.Vector3(1, 1, 0));
    triangleGeometry.vertices.push(new THREE.Vector3(3, 1, 0));
    triangleGeometry.vertices.push(new THREE.Vector3(3, 3, 0));
    triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
    const triangleMaterial = new THREE.MeshBasicMaterial({
        color: 0x2685AA,
        side: THREE.DoubleSide
    });
    const triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
    scene.add(triangleMesh);

    const squareGeometry = drawSquare(3, 5, 7, 9);
    const squareMaterial = new THREE.MeshBasicMaterial({
        color: 0xF6731E,
        side: THREE.BackSide
    })
    const squareMesh = new THREE.Mesh(squareGeometry, squareMaterial);
    scene.add(squareMesh);

    document.getElementById('CS291L2C13').appendChild(renderer.domElement);
    camera.position.set(5, 5, 20)
    camera.lookAt(new THREE.Vector3(5, 5, 0));
    renderer.render(scene, camera);
}


export default function Page() {
    useEffect(() => {
        init();
    }, []);

    return (
        <div id='CS291L2C13' />
    )
}