import React from 'react';
import Link from 'next/link'


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
        <ul>
            {links.map(item => (
                <li key={item.href}>
                    <Link href={item.href} passHref>
                        <a>{item.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
};


export default Index

