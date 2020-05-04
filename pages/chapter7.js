import React from 'react';
import BasicLayout from "../components/BasicLayout";


const Page = () => (
    <BasicLayout>
        <section className="section36">
            <h2>三十六、自适应内部元素</h2>
            <div>
                <p>Let’s assume we have some text here. Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone occaecat.</p>
                <figure>
                    <img src="http://csssecrets.io/images/adamcatlace.jpg" />
                    <figcaption>
                        The great Sir Adam Catlace was named after Countess Ada Lovelace, the first programmer ever.
                    </figcaption>
                </figure>
                <p>We also have some more text here. Et laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta.</p>
            </div>
        </section>
        <section className="section37">
            <h2>三十七、精确控制表格列宽</h2>
            <p>略...</p>
        </section>
        <section className="section38">
            <h2>三十八、根据兄弟元素的数量来设置样式</h2>
            <p>略...</p>
        </section>
        <section className="section39">
            <h2>三十九、满幅的背景，定宽的内容</h2>
            <p>略...</p>
        </section>
        <section className="section40">
            <h2>四十、垂直居中</h2>
            <p>略...</p>
        </section>
        <section className="section40">
            <h2>四十一、紧贴底部的页脚</h2>
            <p>略...</p>
        </section>
        <style jsx>{`
            .section36 figure {
                max-width: 300px;
                max-width: min-content;
                margin: auto;
            }
            .section36 figure > img {
                max-width: inherit;
            }
        `}</style>
    </BasicLayout>
)


export default Page