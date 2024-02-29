import { useLoaderData, defer } from 'react-router-dom';
const Menu2 = () => {
    const loaderData = useLoaderData();
    console.log('>>>>>LoaderData', loaderData);

    return <div>Menu2 page</div>;
};

export const loader = async () => {
    const [_, sampleData] = await Promise.all([
        new Promise((resolve) => setTimeout(resolve, 2000)), // 지연 모의화
        fetch('/sample.json').then((res) => res.json()),
    ]);
    return defer({ sampleData });
};

export default Menu2;
