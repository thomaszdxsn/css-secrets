import React, { useLayoutEffect } from 'react'
import * as THREE from 'three';
import * as Stats from 'stats.js';
import * as dat from 'dat.gui';

import BasicLayout from "../../components/BasicLayout";


function initStats(type) {
    const panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
    const stats = new Stats();
    stats.showPanel(panelType);
    document.body.appendChild(stats.dom);
    return stats;
}

function init() {
    if (!process.browser) {
        return;
    }
    const stats = initStats();

    const controls = new function() {
        this.rotationSpeed = .02;
        this.bouncingSpeed = .02;
    }
    const gui = new dat.GUI();
    gui.add(controls, 'rotationSpeed', 0, 0.5);
    gui.add(controls, 'bouncingSpeed', 0, 0.5);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor('#000');
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    const axes = new THREE.AxesHelper(20);
    scene.add(axes);

    // 创建光源
    const spotlight = new THREE.SpotLight('#fff');
    spotlight.position.set(-40, 40, -15);
    spotlight.castShadow = true;
    spotlight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotlight.shadow.camera.far = 130;
    spotlight.shadow.camera.near = 40;
    scene.add(spotlight);

    // 创建平面
    const planeGeometry = new THREE.PlaneGeometry(60, 20);
    const planeMaterial = new THREE.MeshLambertMaterial({color: '#FFF'});
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);
    plane.receiveShadow = true;
    scene.add(plane);

    // 创建方块
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshLambertMaterial({color: '#F00'});
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 3, 0);
    cube.castShadow = true;
    scene.add(cube);

    // 创建球体
    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    const sphereMaterial = new THREE.MeshLambertMaterial({color: '#77F'});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(20, 4, 2);
    sphere.castShadow = true;
    scene.add(sphere);

    // 将摄像头放在 scene 中间
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // 追加一个渲染节点
    document.getElementById('threejs-chapter1').appendChild(renderer.domElement);

    let step = 0;
    function renderScene() {
        stats.update();

        cube.rotation.x += controls.rotationSpeed;
        cube.rotation.y += controls.rotationSpeed;
        cube.rotation.z += controls.rotationSpeed;

        step += controls.bouncingSpeed;
        sphere.position.x = 20 + 10*(Math.cos(step));
        sphere.position.y = 2 + 10 * Math.abs(Math.sin(step));

        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    }

    renderScene();
}





export default () => {
    useLayoutEffect(() => {
        init();
    }, [process.browser]);
    return (
        <BasicLayout>
            <div id="threejs-chapter1" />
        </BasicLayout>
    )
}