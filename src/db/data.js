import { AiFillStar } from 'react-icons/ai'



const data = [

    {
        Img: "https://carandx.com/wp-content/uploads/2022/08/Mercedes-Benz-GLE-450-Coupe-2022-AG_White-23.jpg",
        title: "Mercedes-Benz-GLE-450-Coupe-2022-AG",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(123 reviews)",
        prevPrice: "$100",
        newPrice: "150",
        company: "Mercedes-Benz",
        color: "white",
        category: "car",
    },

    {
        Img: "https://www.carpro.com/hs-fs/hubfs/2023-toyota-corolla-xse-grille-carpro.jpg?width=1000&height=750&name=2023-toyota-corolla-xse-grille-carpro.jpg",
        title: "Toyota-Corolla-xse-grille",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "$200",
        newPrice: "200",
        company: "toyota",
        color: "white",
        category: "car",
    },



    {
        Img: "https://2021bestsuv.com/wp-content/uploads/2021/11/2023-Mercedes-Benz-GLS-facelift.jpg",
        title: "Mercedes-Benz GLS ",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "20000",
        newPrice: "100000",
        company: "Mercedes-Benz",
        color: "White",
        category: "car",
    },

    {
        Img: "https://bikesreviewed.com/wp-content/uploads/2021/07/card-ancheer-768x489.jpg",
        title: "ANCHEER BIKES ",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "123",
        newPrice: "200",
        company: "",
        color: "white",
        category: "bike",
    },


    {
        Img: "https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/0543/d96723a549d80aeaf914c2b28f1ba70cx.jpg",
        title: "Mercedes-Benz SL Roadster",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "200",
        newPrice: "300",
        company: "Mercedes-Benz",
        color: "red",
        category: "car",
    },

    {
        Img: "https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/1287/5183ce197569c5136349fb8614c27581x.jpg",
        title: " Mercedes-Benz EQB SUV",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "400000",
        newPrice: "1000000",
        company: "Mercedes-Benz",
        color: "black",
        category: "car",
    },

    {
        Img: "https://bikesreviewed.com/wp-content/uploads/2021/07/card-santa-cruz-1-768x489.jpg",
        title: "SANTA CRUZ BIKES",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "123",
        newPrice: "234",
        company: "",
        color: "",
        category: "bike",
    },

    {
        Img: "https://media.autochek.africa/file/w_384,q_75/1xW6dB8u.webp",
        title: "Toyota Hiace",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "90",
        newPrice: "100",
        company: "toyota",
        color: "black",
        category: "bus",
    },

    {
        Img: "https://pictures.dealer.com/b/bramanbmwbmw/0830/3d39ba96dda7483ad01f8672bddaf206x.jpg",
        title: "BMW iX",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "234",
        newPrice: "333",
        company: "Bmw",
        color: "red",
        category: "car",
    },

    {
        Img: "https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/0701/83075817dbfbe98e5f2b7ba3ef821321x.jpg",
        title: "Mercedes-Benz C-Class Cabriolet",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "200000",
        newPrice: "50000",
        company: "Mercedes-Benz",
        color: "White",
        category: "car",
    },

    {
        Img: "https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/1418/d8b9db44f56fd6e2f14c80299d9f3aa8x.jpg",
        title: "Mercedes-Benz CL23",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "300",
        newPrice: "500",
        company: "Mercedes-Benz",
        color: "White",
        category: "car",
    },

    {
        Img: "https://pictures.dealer.com/b/bramanbmwbmw/1971/853f298ca0e384a4f3689ef06f5d8230x.jpg",
        title: "Bmw",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "200",
        newPrice: "500",
        company: "Bmw",
        color: "red",
        category: "car",
    },

    {
        Img: "https://bikesreviewed.com/wp-content/uploads/2020/09/gt-bikes-768x432.png",
        title: " GT BIKES",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "234",
        newPrice: "234",
        company: "",
        color: "White",
        category: "bike",
    },

    {
        Img: "https://pictures.dealer.com/b/bramanbmwbmw/0441/7f6f40786f0400363e286ce13890658ex.jpg",
        title: "BMW 7 SERIES SEDAN",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "200",
        newPrice: "400",
        company: "Bmw",
        color: "White",
        category: "car",
    },

    {
        Img: "https://www.lexusofenglewood.com/assets/stock/ColorMatched_01/Transparent/320/cc_2023LEC25_01_320/cc_2023LEC250061_01_320_212.png",
        title: "LEXUS ES HYBRID",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "233",
        newPrice: "344",
        company: "Lexus",
        color: "black",
        category: "car",
    },

    {
        Img: "https://imagizer.imageshack.com/img924/3392/QSrHpK.jpg",
        title: "Explorer",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "33",
        newPrice: "45",
        company: "Ford",
        color: "black",
        category: "car",
    },

    //Toyota//


    {
        Img: "https://www.edmunds.com/assets/m/lexus/es-350/2017/oem/2017_lexus_es-350_sedan_base_fq_oem_1_600.jpg",
        title: "Lexus",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "700,000",
        newPrice: "40,000",
        company: "Lexus",
        color: "white",
        category: "car",
    },

    {
        Img: "https://www.motortrend.com/uploads/sites/5/2020/06/2020-Lexus-RX-450h-24.jpg",
        title: "Lexus-RX-450h",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(300,000 reviews)",
        prevPrice: "800,000",
        newPrice: "600,000",
        company: "Lexus",
        color: "White",
        category: "car",
    },

    {
        Img: "https://images.carexpert.com.au/app/uploads/2021/09/2022-Mercedes-Benz-G400d-HERO.jpg",
        title: "Mercedes-Benz-G400d",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(50,000 reviews)",
        prevPrice: "3000,000",
        newPrice: "5000,000",
        company: "Mercedes",
        color: "white",
        category: "car",
    },


    //BMW//
    {
        Img: "https://images.prismic.io/carwow/a08ee31b-4a98-4fdf-a91f-b4f84b8e0008_Audi_R8_Front_%C2%BE_moving.jpg",
        title: "Bmw",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "300,000",
        newPrice: "500,000",
        company: "Bmw",
        color: "white",
        category: "car",
    },

    {
        Img: "https://cdn.carbuzz.com/car-thumbnails/300x160/14000/600/14650.jpg",
        title: "Prius",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "200",
        newPrice: "234",
        company: "toyota",
        color: "black",
        category: "car",
    },



    {
        Img: "https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/0633/e7471ba7f147fb174858fa6e666431a2x.jpg",
        title: "2023 Mercedes-Benz AMG GT 4-Door Coupe",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "20000",
        newPrice: "100000",
        company: "Mercedes-Benz",
        color: "red",
        category: "car",
    },





    {
        Img: "https://cdn.carbuzz.com/car-thumbnails/300x160/3000/500/3597.jpg",
        title: "Camry Solara Convertible",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "890",
        newPrice: "1500",
        company: "toyota",
        color: "red",
        category: "car",
    },


    {
        Img: "https://www.germainfordofbeavercreek.com/static/dealer-18421/C4EHfb.jpg",
        title: "F-150",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "234",
        newPrice: "222",
        company: "Ford",
        color: "black",
        category: "car",
    },


    {
        Img: "https://pictures.dealer.com/b/bramanbmwbmw/0936/a97e6ab9ef86dec9d46065b9f1a20b5dx.jpg",
        title: "2023 BMW X4",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "111",
        newPrice: "213",
        company: "Bmw",
        color: "White",
        category: "car",
    },


    {
        Img: "https://www.lexusofenglewood.com/assets/stock/ColorMatched_01/Transparent/320/cc_2023LEC35_01_320/cc_2023LEC350010_01_320_083.png",
        title: "2023 LEXUS LC HYBRID",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "215",
        newPrice: "235",
        company: "Lexus",
        color: "White",
        category: "car",
    },


    {
        Img: "https://imagesdl.dealercenter.net/440/293/202307-0d6420910b0d466495794050ec361209.jpg",
        title: "2024 Toyota Carmy Hybrid SE",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "213",
        newPrice: "453",
        company: "toyota",
        color: "",
        category: "",
    },


    {
        Img: "https://pictures.dealer.com/b/bramanbmwbmw/0802/80b30bcce5af010200189cbd939bf637x.jpg",
        title: "2023 BMW X6",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "111",
        newPrice: "125",
        company: "Bmw",
        color: "black",
        category: "car",
    },


    {
        Img: "https://media.autochek.africa/file/w_384,q_75/MzJWj85S.webp",
        title: "2012 Toyota Hiace",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "1223",
        newPrice: "2234",
        company: "toyota",
        color: "White",
        category: "bus",
    },


    {
        Img: "https://media.autochek.africa/file/w_384,q_75/XPBskqQe.webp",
        title: "2022 Toyota Hiace",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(320,000 reviews)",
        prevPrice: "222",
        newPrice: "111",
        company: "toyota",
        color: "White",
        category: "bus",
    },


    {
        Img: "https://media.autochek.africa/file/w_384,q_75/elttmZid.webp",
        title: "",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "22",
        newPrice: "11",
        company: "toyota",
        color: "black",
        category: "bus",
    },


    {
        Img: "https://storage.googleapis.com/img.autochek.africa/94edae73-caad-4dd0-a9ac-9d90896aaab0-IMG.jpg",
        title: "2012 Toyota Hiace",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "111",
        newPrice: "13",
        company: "toyota",
        color: "black",
        category: "bus",
    },

    {
        Img: "https://bikesreviewed.com/wp-content/uploads/2020/09/raleigh-bikes-768x432.png",
        title: "RALEIGH BIKES",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "",
        newPrice: "",
        company: "",
        color: "black",
        category: "bike",
    },

    {
        Img: "https://bikesreviewed.com/wp-content/uploads/2021/07/card-cannondale-768x489.jpg",
        title: "CANNONDALE BIKES",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "123",
        newPrice: "234",
        company: "",
        color: "black",
        category: "bike",
    },

    {
        Img: "https://bikesreviewed.com/wp-content/uploads/2020/09/raleigh-bikes-768x432.png",
        title: "RALEIGH BIKES",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "120",
        newPrice: "150",
        company: "",
        color: "",
        category: "bike",
    },

    {
        Img: "https://cdn.carbuzz.com/car-thumbnails/300x160/15000/0/15045.jpg",
        title: "Land Cruiser",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(20,000 reviews)",
        prevPrice: "100",
        newPrice: "200",
        company: "toyota",
        color: "White",
        category: "car",
    },


    {
        Img: "https://bikesreviewed.com/wp-content/uploads/2020/09/huffy-bikes-768x432.png",
        title: "HUFFY BIKES",
        star: <AiFillStar className="ratings-star" />,
        reviews: "(30,000 reviews)",
        prevPrice: "123",
        newPrice: "234",
        company: "",
        color: "",
        category: "bike",
    },



];

export default data;