

const letterS = "M1419.6 136.728C1439.4 136.728 1462.6 127.728 1462.6 103.528C1462.6 88.1276 1452.8 75.9276 1433 71.9276L1415 68.1276C1405.6 65.9276 1401.2 62.3276 1401.2 56.7276C1401.2 49.3276 1408.6 45.1276 1417.8 45.1276C1428.8 45.1276 1435.8 51.7276 1436.6 60.5276H1460C1459.2 36.9276 1438 26.1276 1418.4 26.1276C1398 26.1276 1377.4 37.7276 1377.4 58.7276C1377.4 74.9276 1389.2 84.7276 1406 88.3276L1425 92.3276C1433.2 93.9276 1438.8 98.5276 1438.8 105.728C1438.8 114.728 1430 117.728 1420.8 117.728C1408 117.728 1398.8 110.728 1398.2 99.3277H1374.8C1376 125.728 1397.8 136.728 1419.6 136.728Z";
const letterT1 = "M1525.66 135.728C1531.06 135.728 1536.26 135.128 1541.26 133.728V113.728C1537.26 114.528 1533.26 114.928 1530.06 114.928C1519.86 114.928 1512.86 110.328 1512.86 98.1276V48.9276H1538.46V29.1276H1512.86V0.327637H1489.06V29.1276H1469.06V48.9276H1489.06V98.7276C1489.06 126.928 1505.46 135.728 1525.66 135.728Z";
const letterR = "M1556.34 29.1276V133.728H1579.94V85.7276C1579.94 62.1276 1592.34 52.1276 1608.14 52.1276C1611.94 52.1276 1615.54 52.5276 1619.14 53.1276V29.5276C1615.74 28.7276 1612.74 28.1276 1607.54 28.1276C1594.74 28.1276 1583.54 36.1276 1579.14 47.7276V29.1276H1556.34Z";
const letterU = "M1672.57 136.728C1688.57 136.728 1699.57 128.128 1704.37 120.528V133.728H1727.17V29.1276H1703.37V89.5276C1703.37 104.528 1692.57 115.328 1679.37 115.328C1666.37 115.328 1659.17 105.528 1659.17 92.9276V29.1276H1635.37V97.7276C1635.37 119.928 1648.57 136.728 1672.57 136.728Z";
const letterC2 = "M1798.91 136.728C1825.31 136.728 1844.71 122.528 1849.11 97.5276H1824.91C1820.91 109.128 1811.51 115.328 1798.91 115.328C1783.51 115.328 1770.31 102.528 1770.31 81.3276C1770.31 60.3276 1783.51 47.5276 1798.91 47.5276C1810.51 47.5276 1820.91 53.1276 1824.91 64.9276H1849.11C1844.91 39.7276 1824.11 26.1276 1798.91 26.1276C1769.71 26.1276 1746.51 47.9276 1746.51 81.3276C1746.51 116.528 1769.71 136.728 1798.91 136.728Z";
const letterT2 = "M1910.95 135.728C1916.35 135.728 1921.55 135.128 1926.55 133.728V113.728C1922.55 114.528 1918.55 114.928 1915.35 114.928C1905.15 114.928 1898.15 110.328 1898.15 98.1276V48.9276H1923.75V29.1276H1898.15V0.327637H1874.35V29.1276H1854.35V48.9276H1874.35V98.7276C1874.35 126.928 1890.75 135.728 1910.95 135.728Z";


// const timeline = anime.timeline({
//     duration: 2500,
//     easing: 'easeOutExpo'
// });

anime({
    targets: '#dash',
    duration: 2500,
    easing: 'easeOutExpo',
    d: [{ value: 'M0.454993 70.3277V92.1276H1353.88V70.3277H0.454993Z' }]
});

anime({
    targets: '#s',
    duration: 2500,
    easing: 'easeOutExpo',
    d: [{ value: letterS }]
});

anime({
    targets: '#t1',
    duration: 2500,
    easing: 'easeOutExpo',
    d: [{ value: letterT1 }]
});

anime({
    targets: '#r',
    duration: 2500,
    easing: 'easeOutExpo',
    d: [{ value: letterR }]
});

anime({
    targets: '#u',
    duration: 2500,
    easing: 'easeOutExpo',
    d: [{ value: letterU }]
});

anime({
    targets: '#c2',
    duration: 2500,
    easing: 'easeOutExpo',
    d: [{ value: letterC2 }]
});

anime({
    targets: '#t2',
    duration: 2500,
    easing: 'easeOutExpo',
    d: [{ value: letterT2 }]
});

// timeline.add({
//     targets: '#c',
//     d:  [{ value: 'M111.055 325.273C111.055 298.873 96.855 279.473 71.855 275.073L71.855 299.273C83.455 303.273 89.655 312.673 89.655 325.273C89.655 340.673 76.855 353.873 55.655 353.873C34.655 353.873 21.855 340.673 21.855 325.273C21.855 313.673 27.455 303.273 39.255 299.273V275.073C14.055 279.273 0.45499 300.073 0.454991 325.273C0.454992 354.473 22.255 377.673 55.655 377.673C90.855 377.673 111.055 354.473 111.055 325.273Z'}]
// });

// timeline.add({
//     targets: '#o',
//     d:  [{ value: 'M111.055 209.885C111.055 180.085 90.855 156.285 55.655 156.285C20.655 156.285 0.454985 180.085 0.454986 209.885C0.454987 239.685 20.655 263.485 55.655 263.485C90.855 263.485 111.055 239.885 111.055 209.885ZM55.655 239.685C32.455 239.685 21.455 225.685 21.455 209.885C21.455 194.285 32.455 180.085 55.655 180.085C78.855 180.085 89.855 194.285 89.855 209.885C89.855 225.685 78.855 239.685 55.655 239.685Z'}]
// });

// timeline.add({
//     targets: ['#dash', '#S'],
//     d: [{ value: 'M0.454993 70.3277V92.1276H1353.88V70.3277H0.454993Z' }, { value: letterS }]
// });


{/* <svg width="1927" height="378" viewBox="0 0 1927 378" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M111.055 325.273C111.055 298.873 96.855 279.473 71.855 275.073L71.855 299.273C83.455 303.273 89.655 312.673 89.655 325.273C89.655 340.673 76.855 353.873 55.655 353.873C34.655 353.873 21.855 340.673 21.855 325.273C21.855 313.673 27.455 303.273 39.255 299.273V275.073C14.055 279.273 0.45499 300.073 0.454991 325.273C0.454992 354.473 22.255 377.673 55.655 377.673C90.855 377.673 111.055 354.473 111.055 325.273Z" fill="white"/>
<path d="M111.055 209.885C111.055 180.085 90.855 156.285 55.655 156.285C20.655 156.285 0.454985 180.085 0.454986 209.885C0.454987 239.685 20.655 263.485 55.655 263.485C90.855 263.485 111.055 239.885 111.055 209.885ZM55.655 239.685C32.455 239.685 21.455 225.685 21.455 209.885C21.455 194.285 32.455 180.085 55.655 180.085C78.855 180.085 89.855 194.285 89.855 209.885C89.855 225.685 78.855 239.685 55.655 239.685Z" fill="white"/>
<path d="M0.454993 70.3277V92.1276H1353.88V70.3277H0.454993Z" fill="white"/>
<path d="M1419.6 136.728C1439.4 136.728 1462.6 127.728 1462.6 103.528C1462.6 88.1276 1452.8 75.9276 1433 71.9276L1415 68.1276C1405.6 65.9276 1401.2 62.3276 1401.2 56.7276C1401.2 49.3276 1408.6 45.1276 1417.8 45.1276C1428.8 45.1276 1435.8 51.7276 1436.6 60.5276H1460C1459.2 36.9276 1438 26.1276 1418.4 26.1276C1398 26.1276 1377.4 37.7276 1377.4 58.7276C1377.4 74.9276 1389.2 84.7276 1406 88.3276L1425 92.3276C1433.2 93.9276 1438.8 98.5276 1438.8 105.728C1438.8 114.728 1430 117.728 1420.8 117.728C1408 117.728 1398.8 110.728 1398.2 99.3277H1374.8C1376 125.728 1397.8 136.728 1419.6 136.728Z" fill="white"/>
<path d="M1525.66 135.728C1531.06 135.728 1536.26 135.128 1541.26 133.728V113.728C1537.26 114.528 1533.26 114.928 1530.06 114.928C1519.86 114.928 1512.86 110.328 1512.86 98.1276V48.9276H1538.46V29.1276H1512.86V0.327637H1489.06V29.1276H1469.06V48.9276H1489.06V98.7276C1489.06 126.928 1505.46 135.728 1525.66 135.728Z" fill="white"/>
<path d="M1556.34 29.1276V133.728H1579.94V85.7276C1579.94 62.1276 1592.34 52.1276 1608.14 52.1276C1611.94 52.1276 1615.54 52.5276 1619.14 53.1276V29.5276C1615.74 28.7276 1612.74 28.1276 1607.54 28.1276C1594.74 28.1276 1583.54 36.1276 1579.14 47.7276V29.1276H1556.34Z" fill="white"/>
<path d="M1672.57 136.728C1688.57 136.728 1699.57 128.128 1704.37 120.528V133.728H1727.17V29.1276H1703.37V89.5276C1703.37 104.528 1692.57 115.328 1679.37 115.328C1666.37 115.328 1659.17 105.528 1659.17 92.9276V29.1276H1635.37V97.7276C1635.37 119.928 1648.57 136.728 1672.57 136.728Z" fill="white"/>
<path d="M1798.91 136.728C1825.31 136.728 1844.71 122.528 1849.11 97.5276H1824.91C1820.91 109.128 1811.51 115.328 1798.91 115.328C1783.51 115.328 1770.31 102.528 1770.31 81.3276C1770.31 60.3276 1783.51 47.5276 1798.91 47.5276C1810.51 47.5276 1820.91 53.1276 1824.91 64.9276H1849.11C1844.91 39.7276 1824.11 26.1276 1798.91 26.1276C1769.71 26.1276 1746.51 47.9276 1746.51 81.3276C1746.51 116.528 1769.71 136.728 1798.91 136.728Z" fill="white"/>
<path d="M1910.95 135.728C1916.35 135.728 1921.55 135.128 1926.55 133.728V113.728C1922.55 114.528 1918.55 114.928 1915.35 114.928C1905.15 114.928 1898.15 110.328 1898.15 98.1276V48.9276H1923.75V29.1276H1898.15V0.327637H1874.35V29.1276H1854.35V48.9276H1874.35V98.7276C1874.35 126.928 1890.75 135.728 1910.95 135.728Z" fill="white"/>
</svg> */}

