//PROVISORIO
const semestres = [
    { name:2021.1},
    { name:2021.2},
    { name:2022.1},
    { name:2022.2},
    { name:2023.1},
    { name:2023.2},
    { name:2024.1},
    { name:2024.2},
    { name:2025.1},
    { name:2025.2},
    { name:2026.1},
    { name:2026.2},
    { name:2027.1},
    { name:2027.2},
    { name:2028.1},
    { name:2028.2},
    { name:2029.1},
    { name:2029.2},
    { name:2030.1},
    { name:2030.2},
    { name:2031.1},
    { name:2031.2},
    { name:2032.1},
    { name:2032.2},
    { name:2033.1},
    { name:2033.2},
    { name:2034.1},
    { name:2034.2},
    { name:2035.1},
    { name:2035.2},
    { name:2036.1},
    { name:2036.2},
    { name:2037.1},
    { name:2037.2},
    { name:2038.1},
    { name:2038.2},
    { name:2039.1},
    { name:2039.2},
    { name:2040.1},
    { name:2040.2},
    { name:2041.1},
    { name:2041.2},
    { name:2042.1},
    { name:2042.2},
    { name:2043.1},
    { name:2043.2},
    { name:2044.1},
    { name:2044.2},
    { name:2045.1},
    { name:2045.2},
    { name:2046.1},
    { name:2046.2},
    { name:2047.1},
    { name:2047.2},
    { name:2048.1},
    { name:2048.2},
    { name:2049.1},
    { name:2049.2},
    { name:2050.1},
    { name:2050.2},
    { name:2051.1},
    { name:2051.2},
    { name:2052.1},
    { name:2052.2},
    { name:2053.1},
    { name:2053.2},
    { name:2054.1},
    { name:2054.2},
    { name:2055.1},
    { name:2055.2},
    { name:2056.1},
    { name:2056.2},
    { name:2057.1},
    { name:2057.2},
    { name:2058.1},
    { name:2058.2},
    { name:2059.1},
    { name:2059.2},
    { name:2060.1},
    { name:2060.2},
    { name:2061.1},
    { name:2061.2},
    { name:2062.1},
    { name:2062.2},
    { name:2063.1},
    { name:2063.2},
    { name:2064.1},
    { name:2064.2},
    { name:2065.1},
    { name:2065.2},
    { name:2066.1},
    { name:2066.2},
    { name:2067.1},
    { name:2067.2},
    { name:2068.1},
    { name:2068.2},
    { name:2069.1},
    { name:2069.2},
    { name:2070.1},
    { name:2070.2},
    { name:2071.1},
    { name:2071.2},
    { name:2072.1},
    { name:2072.2},
    { name:2073.1},
    { name:2073.2},
    { name:2074.1},
    { name:2074.2},
    { name:2075.1},
    { name:2075.2},
    { name:2076.1},
    { name:2076.2},
    { name:2077.1},
    { name:2077.2},
    { name:2078.1},
    { name:2078.2},
    { name:2079.1},
    { name:2079.2},
    { name:2080.1},
    { name:2080.2},
    { name:2081.1},
    { name:2081.2},
    { name:2082.1},
    { name:2082.2},
    { name:2083.1},
    { name:2083.2},
    { name:2084.1},
    { name:2084.2},
    { name:2085.1},
    { name:2085.2},
    { name:2086.1},
    { name:2086.2},
    { name:2087.1},
    { name:2087.2},
    { name:2088.1},
    { name:2088.2},
    { name:2089.1},
    { name:2089.2},
    { name:2090.1},
    { name:2090.2},
    { name:2091.1},
    { name:2091.2},
    { name:2092.1},
    { name:2092.2},
    { name:2093.1},
    { name:2093.2},
    { name:2094.1},
    { name:2094.2},
    { name:2095.1},
    { name:2095.2},
    { name:2096.1},
    { name:2096.2},
    { name:2097.1},
    { name:2097.2},
    { name:2098.1},
    { name:2098.2},
    { name:2099.1},
    { name:2099.2},
    { name:2100.1},
    { name:2100.2},
    { name:2101.1},
    { name:2101.2},
    { name:2102.1},
    { name:2102.2},
    { name:2103.1},
    { name:2103.2},
    { name:2104.1},
    { name:2104.2},
    { name:2105.1},
    { name:2105.2},
    { name:2106.1},
    { name:2106.2},
    { name:2107.1},
    { name:2107.2},
    { name:2108.1},
    { name:2108.2},
    { name:2109.1},
    { name:2109.2},
    { name:2110.1},
    { name:2110.2},
    { name:2111.1},
    { name:2111.2},
    { name:2112.1},
    { name:2112.2},
    { name:2113.1},
    { name:2113.2},
    { name:2114.1},
    { name:2114.2},
    { name:2115.1},
    { name:2115.2},
    { name:2116.1},
    { name:2116.2},
    { name:2117.1},
    { name:2117.2},
    { name:2118.1},
    { name:2118.2},
    { name:2119.1},
    { name:2119.2},
    { name:2120.1},
    { name:2120.2},
    { name:2121.1},
    { name:2121.2},
    { name:2122.1},
    { name:2122.2},
    { name:2123.1},
    { name:2123.2},
    { name:2124.1},
    { name:2124.2},
    { name:2125.1},
    { name:2125.2},
    { name:2126.1},
    { name:2126.2},
    { name:2127.1},
    { name:2127.2},
    { name:2128.1},
    { name:2128.2},
    { name:2129.1},
    { name:2129.2},
    { name:2130.1},
    { name:2130.2},
    
];

class listaSemestres {

    getSemestres() {

        return semestres;
    }



}

export default new listaSemestres();