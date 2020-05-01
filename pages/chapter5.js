import React from 'react';
import BasicLayout from "../components/BasicLayout";


const Page = () => (
    <BasicLayout>
        <section className="section20">
            <h2>二十、连字符断行</h2>
            <div>
                The only way to get rid of a temptation
                is to yield to it.
            </div>
        </section>
        <section className="section21">
            <h2>二十一、插入换行</h2>
            <dl>
                <dt>Name:</dt>
                <dd>Lea Verou</dd>

                <dt>Email:</dt>
                <dd>lea@verou.com</dd>

                <dt>Location:</dt>
                <dd>Earth</dd>
            </dl>
        </section>
        <section className="section22">
            <h2>二十二、文本行的斑马条纹</h2>
            <p>略...</p>
        </section>
        <section className="section23">
            <h2>二十三、调整tab的宽度</h2>
            <p>通过 tab-size 属性，可以设置 tab 的长度值</p>
        </section>
        <section className="section24">
            <h2>二十四、连字</h2>
            <p>略...</p>
        </section>
        <section className="section25">
            <h2>二十五、华丽的 & 符号</h2>

        </section>
        <style jsx>{`
            .section20 > div {
                height: 6rem;
                width: 7rem;
                hyphens: auto;
            }

            .section21 dd {
                margin: 0;
                font-weight: bold;
            }
            .section21 dd::after {
                content: '\A';
                white-space: pre;
            }
            .section21 dd,.section21 dt {
                display: inline;
            }
        `}</style>
    </BasicLayout>
)

export default Page;