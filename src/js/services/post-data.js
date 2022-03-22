const getData = async () => {
    const res = await fetch('http://www.mocky.io/v2/5944e07213000038025b6f30');

    return await res.json();
}

export {getData};