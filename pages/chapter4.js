import React from 'react';
import BasicLayout from "../components/BasicLayout";



const Page = () => (
    <BasicLayout>
        <section className="section15">
            <h2>十五、单侧投影</h2>
            <div />
            <div />
            <div />
        </section>
        <section className="section16">
            <h2>十六、不规则投影</h2>
            <p>使用 filter 来实现投影效果，因为一些自定义CSS元素是没有办法通过 box-shadow 生成完美投影的</p>
        </section>
        <section className="section17">
            <h2>十七、染色效果</h2>
            <img src="http://csssecrets.io/images/tiger.jpg" />
        </section>
        <section className="section18">
            <h2>十八、毛玻璃效果</h2>
            <div>
                <article>
                <blockquote>
                    "The only way to get rid of a temptation[...]"
                    <footer>--
                        <cite>
                            Oscar Wilde,
                            The Picture of Dorian Gray
                        </cite>
                    </footer>
                </blockquote>
                </article>
            </div>
        </section>
        <section className="section19">
            <h2>十九、折角效果</h2>
        </section>

        <style jsx>{`
            .section15 > div {
                height: 10rem;
                width: 10rem;
                background-color: #fb3;
                margin-bottom: 1rem;
            }

            .section15 > div:first-of-type {
                box-shadow: 3px 3px 6px -3px black;
            }

            .section15 > div:nth-of-type(2) {
                box-shadow: 0 5px 4px -4px black;
            }

            .section15 > div:nth-of-type(3) {
                box-shadow: 5px 0 5px -5px black,
                            -5px 0 5px -5px black;
            }

            .section17 img {
                width: 400px;
                height: 200px;
                transition: .5s filter;
                filter: sepia(1) saturate(4) hue-rotate(295deg);
            }

            .section17 img:hover,
            .section17 img:focus {
                filter: none;
            }

            .section18 > div {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 10rem;
                background: url('http://csssecrets.io/images/tiger.jpg') 0 / cover fixed;
            }

            .section18 > div > article {
                width: 80%;
                position: relative;
                background: hsla(0,0%,100%,.3);
                overflow: hidden;
            }
            .section18 > div > article::before {
                content: '';
                position: absolute;
                top: 0; left: 0; bottom: 0; right: 0;
                filter: blur(20px);
                margin: -30px;
            }

        `}</style>
    </BasicLayout>
)


export default Page