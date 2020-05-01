import React from  'react';

import BasicLayout from "../components/BasicLayout";



const Page = () => {
    return (
        <BasicLayout>
            <section>
                <button>Yes!</button>
            </section>
            <section>
                <ul>
                    <li>
                        item1
                    </li>
                    <li>
                        item2
                    </li>
                    <li>
                        item3
                    </li>
                </ul>
                <ol>
                    <li>
                        item1
                    </li>
                    <li>
                        item2
                    </li>
                    <li>
                        item3
                    </li>
                </ol>
            </section>
            <style jsx>
            {`
                section:first-of-type > button {
                    padding: .3em .8em;
                    border: 1px solid #446d88;
                    background: #58a linear-gradient(hsla(0, 0%, 100%, .2), transparent);
                    border-radius: .2em;
                    box-shadow: 0 .05em .25em gray;
                    text-shadow: 0 -.05em .05em #335166;
                    font-size: 1.25em;
                    line-height: 1.5;
                    color: white;
                    background-color: red;
                }

                section:nth-of-type(2) ul {
                    --accent-color: purple
                }
                section:nth-of-type(2) ol {
                    --accent-color: rebeccapurple;
                }
                section:nth-of-type(2) li {
                    color: var(--accent-color)
                }
            `}
            </style>
        </BasicLayout>
    )
};


export default Page