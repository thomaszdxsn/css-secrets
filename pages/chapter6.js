import React, {useState} from 'react';

import BasicLayout from "../components/BasicLayout";


const Page = () => (
    <BasicLayout>
        <section className="section29">
            <h2>二十九、选用合适的鼠标光标</h2>
            <button disabled>Button</button>
        </section>
        <section className="section30">
            <h2>三十、扩大可点击范围</h2>
            <button>+</button>
            <button>+</button>
        </section>
        <section className="section31">
            <h2>三十一、自定义复选框</h2>
            <input type="checkbox" id="awesome" autofocus />
            <label for="awesome">Awesome!</label>
            <br />
            <input type="checkbox" id="awesome2" checked />
            <label for="awesome2">Awesome!</label>
            <br />
            <input type="checkbox" id="awesome3" disabled />
            <label for="awesome3">Awesome!</label>
            <br />
            <input type="checkbox" id="awesome4" checked disabled />
            <label for="awesome4">Awesome!</label>
        </section>
        <section className="section32">
            <h2>三十二、通过阴影来弱化背景</h2>
            <div>
                <Chapter32 />
            </div>
            <div>
                <Chapter32 />
            </div>
        </section>
        <section className="section33">
            <h2>三十三、通过模糊来弱化背景</h2>
            <p>使用 filter:blur() 滤镜</p>
        </section>
        <section className="section34">
            <h2>三十四、滚动提示</h2>
            <ul>	
                <li>Ada Catlace</li>	
                <li>Alan Purring</li>
                <li>Schrödingcat</li>
                <li>Tim Purrners-Lee</li>
                <li>Webkitty</li>	
                <li>Json</li>
                <li>Void</li>
                <li>Neko</li>	
                <li>NaN</li>
                <li>Cat5</li>
                <li>Vector</li>
            </ul>
        </section>
        <section className="section35">
            <h2>三十五、交互式的图片对比控件</h2>
            <div class="image-slider">
                <div><img src="http://csssecrets.io/images/adamcatlace-before.jpg" alt="Before" /></div>
                <img src="http://csssecrets.io/images/adamcatlace.jpg" />
            </div>
        </section>
        <style jsx global>{`
            .image-slider > div::before {
                content: '';
                position: absolute;
                bottom: 0; right: 0;
                width: 12px; height: 12px;
                padding: 5px;
                background:
                    linear-gradient(-45deg, white 50%, transparent 0);
                cursor: ew-resize;
            }
            .image-slider {
                position: relative;
                display: inline-block;
            }
            .image-slider > div {
                position: absolute;
                top: 0; bottom:0; left: 0;
                width: 50%;
                overflow: hidden;
                resize: horizontal;
            }
            .image-slider img {
                display: block;
            }

            .section34 > ul {
                overflow: auto;
                width: 10rem;
                height: 8rem;
                padding: .3rem .5rem;
                border: 1px solid silver;
                background: 
                    linear-gradient(white, hsla(0, 0%, 100%, 0)),
                    radial-gradient(at top, rgba(0, 0, 0, .2),
                                    transparent 70%);
                background-repeat: no-repeat;
                background-size: 100% 15px;
                background-attachment: local scroll;
            }


            .section29 *:disabled {
                cursor: not-allowed;
            }

            .section30 > button {
                padding: .3em .5em;
                margin-bottom: 1rem;
                background: #58a;
                border-radius: 50%;
                color: white;
                font: bold 150%/1 sans-serif;
                cursor: pointer;
            }

            .section30 > button:first-of-type {
                border: 10px solid transparent;
                background-clip: padding-box;
                box-shadow: 0 0 0 1px rgba(0,0,0,.3) inset; 
            }

            .section30 > button:nth-of-type(2) {
                position: relative;
                border: 1px solid rgba(0,0,0,.3);
                box-shadow:  0 .1em .2em -.05em rgba(0,0,0,.5);
            }
            .section30 > button:nth-of-type(2)::before {
                content: '';
                position: absolute;
                top: -10px; right: -10px;
                bottom: -10px; left: -10px;
            }

            .section31 > input[type="checkbox"] + label::before {
                content: '\a0';
                display: inline-block;
                vertical-align: .2em;
                width: .8em;
                height: .8em;
                margin-left: .2em;
                border-radius: .2em;
                background: silver;
                text-indent: .15em;
                line-height: .65;
            }
            .section31 > input[type="checkbox"]:checked + label::before {
                content: '✓';
                background: yellowgreen;
            }
            .section31 > input[type="checkbox"] {
                position: absolute;
                clip: rec(0,0,0,0);
            }
            .section31 > input[type="checkbox"]:focus + label::before {
                box-shadow: 0 0 .1em .1em #58a;
            }
            .section31 > input[type="checkbox"]:disabled + label::before {
                background: gray;
                box-shadow: none;
                color: #555;
            }
            .section31 > *:not(h2) {
                font: 150%/1.6 sans-serif;
            }

            .section32 > div:first-of-type .lightbox {
                position: fixed;
                top: 50%; left: 50%;
                margin: -200px;
                box-shadow: 0 0 0 50vmax rgba(0, 0, 0, .8);
            }

            .section32 > div:nth-of-type(2) .lightbox {
                position: fixed;
                top: 50%; left: 50%;
                margin: -200px;
            }
            .section32 > div:nth-of-type(2) .lightbox::backdrop {
                background: rgba(0, 0, 0, .8);
            }
        `}</style>
    </BasicLayout>
)

export default Page;


const Chapter32 = () => {
    const [visible, setVisible] = useState(false);
return (

    <>
    <button onClick={() => setVisible(true)}>Open Modal</button>
    <div>
        <img src="http://csssecrets.io/images/adamcatlace.jpg" 
            class={visible ? 'lightbox' : null} 
            onClick={() => setVisible(false)}
        />
    </div> 
<p>Bacon ipsum dolor amet consectetur
 short loin
 ut
 tri-tip
 alcatra
 ground round
 jowl
 beef
 meatloaf
 in
 pork.  Elit
 chicken
 ea
 spare ribs.  Shank
 andouille
 ex
 boudin
 picanha
 turkey
 esse.  Do
 doner
 fugiat
 tongue.</p><p>Pork chop
 ad
 cow
 spare ribs
 capicola
 ball tip
 alcatra
 cillum
 magna
 short ribs
 tempor.  Pork loin
 do
 sint
 magna
 ea
 pork belly
 duis.  Shoulder
 ullamco
 chicken
 porchetta, ham
 anim
 veniam
 venison.  Fugiat
 tenderloin
 venison, turducken
 non
 pork chop
 ribeye
 enim.  Beef
 turkey
 salami, ipsum
 prosciutto
 commodo
 cupidatat.  Tri-tip
 ham hock
 non
 brisket
 pig
 cupim commodo
 ball tip
 nulla
 turkey
 kielbasa
 corned beef
 flank.  Hamburger
 pariatur
 ham, porchetta
 cupidatat
 sirloin
 pork loin
 quis
 nulla
 culpa
 tail
 esse.</p><p>Chuck
 filet mignon
 flank
 pork chop
 mollit
 enim
 veniam
 sed
 pork loin
 aliquip
 sausage
 prosciutto
 in
 deserunt.  Nostrud
 porchetta
 non
 nulla
 sunt.  Cupim et
 velit
 picanha
 laborum salami
 capicola
 exercitation
 alcatra
 sausage
 cillum
 shoulder
 minim
 esse.  Pig
 boudin
 aliquip
 aute, tail
 ut
 cow
 incididunt
 short loin
 aliqua.</p><p>Et
 dolor
 occaecat
 dolore
 doner
 shoulder.  Swine
 pancetta
 tri-tip
 irure
 turducken, kevin
 est
 meatball
 aliqua
 aute
 quis
 ham
 venison
 sunt.  Consequat
 pancetta
 sint
 beef
 turkey.  Fugiat
 occaecat
 commodo, short ribs
 corned beef
 aliquip
 elit
 eiusmod
 pork belly
 ut
 eu
 tri-tip.  Sint
 aute
 picanha
 proident
 corned beef
 ad
 beef
 dolore
 landjaeger.  Laboris
 est
 deserunt
 tempor, bresaola
 ham hock
 non
 brisket
 frankfurter
 ad
 leberkas
 aute
 sirloin.  Minim
 et
 ribeye
 shank
 pork loin
 sint
 corned beef
 ball tip
 dolor.</p><p>Doner
 alcatra
 pastrami
 pig, strip steak
 eu
 in
 frankfurter
 occaecat
 in
 filet mignon
 chuck
 short loin
 nulla
 meatloaf.  Adipisicing
 aliqua
 kielbasa
 nulla
 proident.  Ground round
 meatloaf
 kevin, shank
 adipisicing
 pork
 frankfurter
 t-bone
 spare ribs
 cupidatat.  Sed
 ham
 non
 duis
 enim, in
 ipsum
 fugiat
 est
 tongue
 short ribs
 ad
 bresaola
 prosciutto.  Non
 minim
 picanha, ad
 in
 occaecat
 fugiat
 veniam
 dolor
 deserunt.</p>
    </>
)
}