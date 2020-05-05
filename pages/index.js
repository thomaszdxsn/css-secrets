import React from 'react';
import Link from 'next/link'


const ThreeJsLinks = [
    {href: 'threejs/chapter1', title: '第一章：使用 Three.js 来开发你的第一个三维场景'},
    {href: 'threejs/chapter2', title: '第二章：构建 Three.js 应用的基本组件'},
    {href: 'threejs/chapter3', title: '第三章：学习使用 Three.js 中的光源', children: [
        {href: 'threejs/chapter3/ambient-light', title: 'ambient-light'}
    ]}
];

const CS291Links = [
    {href: 'cs291/lession2chapter13', title: '创建一个正方形'}
]


const Index = () => {
    const links = [
        {href: '/chapter1', title: '第一章：引言'},
        {href: '/chapter2', title: '第二章：背景与边框'},
        {href: '/chapter3', title: '第三章：形状'},
        {href: '/chapter4', title: '第四章：视觉效果'},
        {href: '/chapter5', title: '第五章：字体排印'},
        {href: '/chapter6', title: '第六章：用户体验'},
        {href: '/chapter7', title: '第七章：结构与布局'},
        {href: '/chapter8', title: '第八章：过渡与动画'}
    ]
    return (
        <>
        <h2>CSS揭秘</h2>
        <ul>
            {links.map(item => (
                <li key={item.href}>
                    <Link href={item.href} passHref>
                        <a>{item.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <hr />
        <h2>Three.js 开发指南</h2>
        <ul>
            {ThreeJsLinks.map((link, index) => (
                <li key={link.href}> 
                    <Link href={link.href} passHref>
                    <a>
                        {link.title}
                    </a>
                    </Link>
                    {link.children && (
                        <ul key={index}>
                            {link.children.map(subLink => (
                                <li key={subLink.href}>
                                    <Link href={subLink.href} passHref>
                                        <a>
                                            {subLink.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
    
        </ul>
        <hr />
        <h2>CS291</h2>
        <ul>
            {CS291Links.map(link => (
                <li key={link.href}>
                    <Link href={link.href} passHref>
                        <a>{link.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
};


export default Index

