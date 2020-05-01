import React from 'react';
import BasicLayout from "../components/BasicLayout";


const Page = () => (
    <BasicLayout>
        <section className="section9">
            <h2>九、自适应的椭圆</h2>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </section>
        <section className="section10">
            <h2>十、平行四边形</h2>
            <div>
                <span>Click me</span>
            </div>
            <div>
                <span>Click me</span>
            </div>
        </section>
        <section className="section11">
            <h2>十一、菱形图片</h2>
            <div>
                <img src="https://avatars0.githubusercontent.com/u/23616426?s=460&v=4" />
            </div>
            <div>
                <img src="https://avatars0.githubusercontent.com/u/23616426?s=460&v=4" />
            </div>
        </section>
        <section className="section12">
            <h2>十二、切角效果</h2>
            <div>
                Hey, focus!You're supposed to
                be looking at my corners, not 
                reading my text. The text is just placeholder!
            </div>
            <div>
                Hey, focus!You're supposed to
                be looking at my corners, not 
                reading my text. The text is just placeholder!
            </div>
            <div>
                Hey, focus!You're supposed to
                be looking at my corners, not 
                reading my text. The text is just placeholder!
            </div>
            <div>
                Hey, focus!You're supposed to
                be looking at my corners, not 
                reading my text. The text is just placeholder!
            </div>
            <div>
                Hey, focus!You're supposed to
                be looking at my corners, not 
                reading my text. The text is just placeholder!
            </div>
            <div>
                Hey, focus!You're supposed to
                be looking at my corners, not 
                reading my text. The text is just placeholder!
            </div>
        </section>
        <section className="section13">
            <h2>十三、梯形标签页</h2>
            <div className="tab1">
                TRAPEZOID
            </div>
        </section>
        <section className="section14">
            <h2>十四、简单的饼图</h2>
            <div className="pie" style={{animationDelay: '-20s'}} />
            <div className="pie" style={{animationDelay: '-60s'}} />
        </section>
        <style jsx>
            {`
                .section9 > div {
                    margin-bottom: .5rem;
                    background: #fb3;
                    width: 10rem;
                    height: 10rem;
                }

                .section9 > div:first-of-type {
                    border-radius: 5rem;
                }

                .section9 > div:nth-of-type(2) {
                    border-radius: 5rem / 5rem;
                }

                .section9 > div:nth-of-type(3) {
                    border-radius: 50%;
                }

                .section9 > div:nth-of-type(4) {
                    border-radius: 50% / 100% 100% 0 0;     
                }

                .section9 > div:nth-of-type(5) {
                    border-radius: 100% 0 0 100% / 50%;
                }

                .section9 > div:nth-of-type(6) {
                    border-radius: 100% 0 0 0;
                }

                .section10 > div {
                    margin-bottom: 1rem;
                }

                .section10 > div:nth-of-type(1) {
                    padding: 1rem;
                    background: #58a;
                    transform: skewX(-45deg);
                }

                .section10 > div:nth-of-type(1) > span {
                    display: inline-block;
                    transform: skewX(45deg);
                }

                .section10 > div:nth-of-type(2) {
                    padding: 1rem;
                    position: relative;
                }

                .section10 > div:nth-of-type(2)::before {
                    content: '';
                    position: absolute;
                    top: 0; right: 0; bottom: 0; left: 0;
                    z-index: -1;
                    background: #58a;
                    transform: skewX(-45deg);
                }

                .section11 > div:first-of-type {
                    width: 15rem;
                    transform: rotate(45deg);
                    overflow: hidden;
                }

                .section11 > div:first-of-type > img {
                    max-width: 100%;
                    transform: rotate(-45deg) scale(1.42);
                }

                .section11 > div:nth-of-type(2) > img {
                    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
                    transition: 1s clip-path;
                }

                .section11 > div:nth-of-type(2) > img:hover {
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                }

                .section12 > div {
                    width: 15rem;
                    padding: 1rem;
                    margin-bottom: 1rem;
                }

                .section12 > div:nth-of-type(1) {
                    background: linear-gradient(-45deg, transparent 15px, #58a 0);
                }
                .section12 > div:nth-of-type(2) {
                    background: linear-gradient(-45deg, transparent 15px, #58a 0),
                        linear-gradient(45deg, transparent 15px, #655 0);
                }
                .section12 > div:nth-of-type(3) {
                    background: linear-gradient(-45deg, transparent 15px, #58a 0) right,
                        linear-gradient(45deg, transparent 15px, #655 0) left;
                    background-size: 50% 100%;
                }
                .section12 > div:nth-of-type(4) {
                    background: linear-gradient(-45deg, transparent 15px, #58a 0) right,
                        linear-gradient(45deg, transparent 15px, #655 0) left;
                    background-size: 50% 100%;
                    background-repeat: no-repeat;
                }
                .section12 > div:nth-of-type(5) {
                    background: 
                        linear-gradient(135deg, transparent 15px, #58a 0) top left,
                        linear-gradient(-135deg, transparent 15px, #58a 0) top right,
                        linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
                        linear-gradient(45deg, transparent 15px, #58a 0) bottom left;
                    background-size: 50% 50%;
                    background-repeat: no-repeat;
                }
                .section12 > div:nth-of-type(6) {
                    background-color: #58a;
                    border: 1rem solid transparent;
                    border-image: 1 url('data:image/svg+xml,\
                        <svg xmlns="http://www.w3.org/2000/svg"\
                            width="3" height="3" fill="%2358a">\
                        <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2" />\
                        </svg>
                    ')
                }

                .section13 > .tab1 {
                    position: relative;
                    display: inline-block;
                    padding: .5rem 1rem .35rem;
                    color: white;
                }
                .section13 > .tab1::before {
                    content: '';
                    position: absolute;
                    top: 0; right: 0;left: 0; bottom: 0;
                    z-index: -1;
                    background: #58a;
                    transform: perspective(.5rem) rotateX(5deg);
                }
                .section14 > .pie {
                    width: 10rem;
                    height: 10rem;
                    border-radius: 50%;
                    background: yellowgreen;
                    background-image: linear-gradient(to right, transparent 50%, #655 0);
                }
                .section14 > .pie::before {
                    content: '';
                    display: block;
                    margin-left: 50%;
                    height: 100%;
                    border-radius: 0 100% 100% 0 / 50%;
                    background-color: inherit;
                    transform-origin: left;
                    animation: spin 50s linear infinite,
                            bg 100s step-end infinite;
                    animation-play-state: paused;
                    animation-delay: inherit;
                }

                @keyframes spin {
                    to {transform: rotate(.5turn)}
                }

                @keyframes bg {
                    50% {background: #655};
                }
            `}
        </style>
    </BasicLayout>
);


export default Page