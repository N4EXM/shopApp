import S25Img from './assets/S25Img.png'
import Oneplus13Img from './assets/Oneplus13.png'
import Redminote13Img from './assets/Redminote13.jpg'
import GalaxyA05sImg from './assets/GalaxyA05s.jpg'
import Iphone16Img from './assets/Iphone16.jpg'
import S25UltraImg from './assets/S25Ultra.jpg'

import clothesImg from './assets/clothesImg.png'
import jackJonesJacket from './assets/Jack&JonesJacket.jpg'
import jackJonesShirt from './assets/Jack&JonesShirt.jpg'
import OgloveGloves from './assets/OgloveGloves.jpg'
import GenericJacket from './assets/GenericJacket.jpg'
import ShoesImg from './assets/Shoes.jpg'

import MultiCable from './assets/4-in-1-Cable.png'
import DualPlugAdaptor from './assets/DualPlugAdaptor.png'
import KensingtonHybridDock from './assets/KensingtonHybridDock.png'
import SanDiskUltra from './assets/SanDiskUltraTypeC.png'
import SeendaFoldable from './assets/SeendaFoldableKeyboard.png'
import USB_C_plug from './assets/USB-C-Plug_40W.png'

import SonyCH7 from './assets/SonyCH7.jpg'
import JBL520 from './assets/JBL520.jpg'
import AnkerH3 from './assets/AnkerH3.jpg'
import BeatsStudio3 from './assets/BeatsStudio3.jpg' 
import BoseQuietComfort from './assets/BoseQuietComfort.jpg'
import Y01Wireless from './assets/Y01Wireless.jpg'

const smartphones = [
    {
        id:0,
        name:"Samsung Galaxy S25",
        category: "Smartphones",
        image: S25Img,
        price:"650.00",
        isWishlisted: true,
        stars:"4.2",
        reviewCount: 5000
    },
    {
        id:1,
        name:"Iphone 16+",
        category: "Smartphones",
        image: Iphone16Img,
        price:"800.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:2,
        name:"Samsung Galaxy S25 Ultra",
        category: "Smartphones",
        image:S25UltraImg,
        price:"1100.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:3,
        name:"Redmi note 13",
        category: "Smartphones",
        image: Redminote13Img,
        price:"209.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:4,
        name:"Samsung Galaxy A05s",
        category: "Smartphones",
        image: GalaxyA05sImg,
        price:"800.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:5,
        name:"Oneplus 13",
        category: "Smartphones",
        image: Oneplus13Img,
        price:"1100.00",
        isWishlisted: true,
        stars:"4.2",
        reviewCount: 5000
    },
]

const clothes = [
    {
        id:0,
        name:"Hisdern shirt",
        category: "Clothes",
        image: clothesImg,
        price:"30.20",
        isWishlisted: true,
        stars:"4.2",
        reviewCount: 5000
    },
    {
        id:1,
        name:"Jack&Jones shirt",
        category: "clothes",
        image: jackJonesShirt,
        price:"20.50",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:2,
        name:"Jack&Jones Jacket",
        category: "clothes",
        image: jackJonesJacket,
        price:"40.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:3,
        name:"OGloves gloves",
        category: "clothes",
        image: OgloveGloves,
        price:"8.80",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:4,
        name:"Generic Jacket",
        category: "clothes",
        image: GenericJacket,
        price:"30.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:5,
        name:"Generic shoes",
        category: "clothes",
        image: ShoesImg,
        price:"22.00",
        isWishlisted: true,
        stars:"4.2",
        reviewCount: 5000
    },
]

const tech = [
    {
        id:0,
        name:"4 in 1 charger",
        category: "Tech",
        image: MultiCable,
        price:"1.20",
        isWishlisted: true,
        stars:"4.2",
        reviewCount: 5000
    },
    {
        id:1,
        name:"Dual plug Adaptor",
        category: "Tech",
        image: DualPlugAdaptor,
        price:"6.50",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:2,
        name:"Kensington Hybrid Dock",
        category: "Tech",
        image: KensingtonHybridDock,
        price:"20.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:3,
        name:"SanDisk Ultra Type C",
        category: "Tech",
        image: SanDiskUltra,
        price:"12.80",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:4,
        name:"Seenda Foldable Keyboard",
        category: "Tech",
        image: SeendaFoldable,
        price:"20.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:5,
        name:"USB C type C plug",
        category: "Tech",
        image: USB_C_plug,
        price:"22.00",
        isWishlisted: true,
        stars:"4.2",
        reviewCount: 5000
    },
]

const headphones = [
    {
        id:0,
        name:"Sony CH7",
        category: "Headphones",
        image: SonyCH7,
        price:"30.20",
        isWishlisted: true,
        stars:"4.2",
        reviewCount: 5000
    },
    {
        id:1,
        name:"JBl 520 headphones",
        category: "Headphones",
        image: JBL520,
        price:"40.50",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:2,
        name:"Anker H3",
        category: "Headphones",
        image: AnkerH3,
        price:"32.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:3,
        name:"Beats Studio 3",
        category: "Headphones",
        image: BeatsStudio3,
        price:"33.80",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:4,
        name:"Bose Quiet Comfort",
        category: "Headphones",
        image: BoseQuietComfort,
        price:"50.00",
        isWishlisted: false,
        stars: "4.5",
        reviewCount: 5000
    },
    {
        id:5,
        name:"Y01 wireless headphones",
        category: "Headphones",
        image: Y01Wireless,
        price:"70.00",
        isWishlisted: true,
        stars:"4.2",
        reviewCount: 5000
    },
]

export {smartphones, tech, clothes, headphones}