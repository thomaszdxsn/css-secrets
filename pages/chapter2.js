import React from 'react';
import BasicLayout from "../components/BasicLayout";

const Page = () => (
    <BasicLayout>
        <section>
            <h2>一、半透明边框</h2>
            <div>
                <p>Can I haz semi-</p>
                <p>transparent borders?</p>
                <p>Pretty Please?</p>
            </div>
        </section>
        <section>
            <h2>二、多重边框</h2>
            <div />
            <div />
        </section>
        <section>
            <h2>三、灵活的背景定位</h2>
            <div>
                Code Pirate
            </div>
            <div>
                Code Pirate
            </div>
            <div>
                Code Pirate
            </div>
        </section>
        <section>
            <h2>四、边框内圆角</h2>
            <div className='something-meaningful'>
                I have a nice subtle inner rounding
                don't I look pretty?
            </div>
        </section>
        <section className='section5'>
            <h2>五、条纹背景</h2>
            <article className='hr'>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </article>
            <hr style={{width: '100%'}} />
            <article className='vert'>
                <div />
            </article>
        </section>
        <section className='section6'>
            <h2>六、复杂的背景图案</h2>
            <p>略...</p>
        </section>
        <section className='section7'>
            <h2>七、伪随机背景</h2>
            <p>略...</p>
        </section>
        <section className='section8'>
            <h2>八、连续的图像边框</h2>
            <div />
        </section>
        <style jsx>{`
            section:first-of-type {
                background-color: #999;
            }

            section:first-of-type > div {
                display: block;
                text-align: center;
                background: white;
                border 10px solid hsla(0, 0%, 100%, .5);
                background-clip: padding-box;
            }

            section:nth-of-type(2) > div {
                height: 10rem;
                width: 10rem;
                margin: 2rem;
            }

            section:nth-of-type(2) > div:nth-of-type(1) {
                background-color: yellowgreen;
                box-shadow: 
                    0 0 0 10px #655,
                    0 0 0 15px deeppink,
                    0 2px 5px 15px rgba(0, 0, 0, .6);
            }

            section:nth-of-type(2) > div:nth-of-type(2) {
                background-color: yellowgreen;
                border: 10px solid #655;
                outline: 5px dotted deeppink;
                outline-offset: -20px;
            }

            section:nth-child(3) > div {
                height: 10rem;
                width: 10rem;
                margin-top: 2rem;
            }

            section:nth-of-type(3) > div:nth-of-type(1) {
                background: 
                    url(http://csssecrets.io/images/code-pirate.svg)
                    no-repeat
                    bottom
                    right
                    #58a;
                background-position: right 20px bottom 10px;
            }

            section:nth-of-type(3) > div:nth-of-type(2) {
                padding: 10px;
                background: 
                    url(http://csssecrets.io/images/code-pirate.svg)
                    no-repeat
                    #58a;
                background-position: right 10px bottom 10px;
                background-origin: content-box;
            }

            section:nth-of-type(3) > div:nth-of-type(3) {
                padding: 10px;
                background: 
                    url(http://csssecrets.io/images/code-pirate.svg)
                    no-repeat
                    #58a;
                background-position: calc(100% - 20px) calc(100% - 10px);
            }

            .something-meaningful {
                background: tan;
                border-radius: .8em;
                padding: 1em;
                box-shadow: 0 0 0 .6em #655;
                outline: .6em solid #655;
            }

            .section5 div {
                width: 10rem;
                height: 10rem;
                margin-top: 2rem;
            }

            .section5 > .hr > div:first-of-type {
                background: linear-gradient(#fb3, #58a);
            }

            .section5 > .hr > div:nth-of-type(2) {
                background: linear-gradient(#fb3 20%, #58a 80%);
            }

            .section5 > .hr > div:nth-of-type(3) {
                background: linear-gradient(#fb3 50%, #58a 50%);
            }

            .section5 > .hr > div:nth-of-type(4) {
                background: linear-gradient(#fb3 50%, #58a 50%);
                background-size: 100% 30px;
            }

            .section5 > .hr > div:nth-of-type(5) {
                background: linear-gradient(#fb3 30%, #58a 30%);
                background-size: 100% 30px;
            }

            .section5 > .hr > div:nth-of-type(6) {
                background: linear-gradient(#fb3 30%, #58a 0);
                background-size: 100% 30px;
            }

            .section5 > .vert > div:nth-of-type(1) {
                background: linear-gradient(to right, #fb3 50%, #58a 0);
                background-size: 30px 100%;
            }

            .section8 > div {
                height: 10rem;
                width: 10rem;
                border 1px solid transparent;
                background:
                    linear-gradient(white, white) padding-box,
                    repeating-linear-gradient(-45deg,
                        black 0, black 25%, white 0, white 50%
                        ) 0 / .6em .6em;
                animation: ants 12s linear infinite;
            }

            @keyframes ants {to {background-position: 100%}}
        `}</style>
    </BasicLayout>
)

export default Page;