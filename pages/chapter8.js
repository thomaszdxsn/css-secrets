import React from 'react';
import BasicLayout from "../components/BasicLayout";


const Page = () => (
    <BasicLayout>
        <section className="section42">
            <h2>四十二、缓动效果</h2>
        </section>
        <section className="section44">
            <h2>四十四、闪烁效果</h2>
            <p className="highlight">text for test</p>
        </section>
        <section className="section45">
            <h2>四十五、打字动画</h2>
            <div>
                <h1>CSS is Awesome</h1>
            </div>
        </section>
        <style jsx>{`
            @keyframes blink-smooth { 50% {color: transparent} };
            @keyframes typing {from {width: 0}};
            @keyframes caret {50% {border-color: transparent}};

            .section44 > .highlight {
                animation: .5s blink-smooth 6 alternate;
            }

            .section45 h1 {
                width: 15ch;
                animation typing 6s steps(15),
                    caret 1s steps(1) infinite;
                white-space: nowrap;
                overflow: hidden;
                border-right: .05em solid;
            }
        `}</style>
    </BasicLayout>
)


export default Page;