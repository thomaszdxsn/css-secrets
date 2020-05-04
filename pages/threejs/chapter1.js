import React, { useEffect } from 'react'
import * as THREE from 'three';

import BasicLayout from "../../components/BasicLayout";

function init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor('#000');
    renderer.setSize(window.innerWidth, window.innerHeight);

    const axes = new THREE.AxesHelper(20);
    scene.add(axes);

    // 创建平面
    const planeGeometry = new THREE.PlaneGeometry(60, 20);
    const planeMaterial = new THREE.MeshBasicMaterial({color: '#AAA'});
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);
    scene.add(plane);

    // 创建方块
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshBasicMaterial({color: '#F00', wireframe: true});
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 3, 0);
    scene.add(cube);

    // 创建球体
    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    const sphereMaterial = new THREE.MeshBasicMaterial({color: '#77F', wireframe: true});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(20, 4, 2);
    scene.add(sphere);

    // 将摄像头放在 scene 中间
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // 追加一个渲染节点
    document.getElementById('threejs-chapter1').appendChild(renderer.domElement);

    renderer.render(scene, camera);
}



export default () => {
    useEffect(() => {
        init();
    }, [])
    return (
        <BasicLayout>
            <div id="threejs-chapter1" />
        </BasicLayout>
    )
}