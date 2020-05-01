import React from 'react';
import Link from 'next/link';


const BasicLayout = props => {
    return (
        <>
            <nav>
                <Link href={'/'} passHref>
                    <a>home</a>
                </Link>
            </nav>
            <main>
                {props.children}
            </main>
            <style jsx global>
                {`
                    nav: {
                        height: 1rem;
                    }
                    
                    main {
                        display: flex;
                        margin-top: 2rem;
                        align-items: center;
                        flex-flow: column nowrap;
                    }
                    
                    main > section {
                        display: flex;
                        align-items: center;
                        flex-flow: column nowrap;
                        width: 80%;
                        margin-bottom: 2rem;
                        padding: 1rem;
                        border: 1px dotted black;
                    }
                `}
            </style>
        </>
    )
};

export default BasicLayout;