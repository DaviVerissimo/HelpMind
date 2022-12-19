const MULTICOLOR = [
    "#42A5F5",
    "#66BB6A",
    "#FFA726",
    "#db2525",
    "#1020c9",
    "#e0cd1d",
    "#557a15",
    "#e329e3",
    "#29e3d0",
    "#5e3004",
    "#6238ab",
    "#77767a",
    "#c9bcab",
    "#ed0c40",

    "#47A5F5",
    "#66BB6A",
    "#FFA776",
    "#db2525",
    "#1027c9",
    "#e7cd1d",
    "#757a15",
    "#e379e3",
    "#27e3d0",
    "#5e7704",
    "#6277ab",
    "#77767f",
    "#c1bcab",
    "#ed9c40",

]


const ESCALA_MINIMA_LEVE_MODERADA_GRAVE = [

    "#30db2e",
    "#e6ed0c",
    "#ed7d0c",
    "#ed0c0c",
]

class Cores {

    get_Multicolor() {
        return MULTICOLOR;
    }

    get_escala_minima_leve_moderada_grave() {
        return ESCALA_MINIMA_LEVE_MODERADA_GRAVE;
    }

}

export default new Cores();