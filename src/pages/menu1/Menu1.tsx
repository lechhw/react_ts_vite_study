import React, { useEffect } from 'react';

const Menu1 = () => {
    const setError = async () => {
        console.log('111');
        await setTimeout(() => {
            console.log('222');
            throw new Error('Error Test');
        }, 100);
    };
    useEffect(() => {
        console.log('333');
        setError();
    }, []);

    return (
        <>
            <h1>Menu1</h1>
        </>
    );
};

export default Menu1;
