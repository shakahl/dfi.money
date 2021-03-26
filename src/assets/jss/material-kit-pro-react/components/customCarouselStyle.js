const customCarouselStyle = {
  container: {
    display: "flex",
    backgroundColor: "#232633",
    marginBottom: "80px",
    justifyContent: "center",         
    alignItems: "center",
    flexWrap: "wrap",
  },
  aligntop: {
    display: "flex",
    width: "100%"
  },
  alignleft: {
    flexGrow: "1",
    width: "635px",
  },
  alignright: {
    flexGrow: "1.5",
    display: "flex",
    width: "810px",
  },
  alignright_firstimage: {
    overflow: "hidden",
    width:"110px",
    height:"220px",
    marginTop: "369px",
  },
  alignright_nextimage: {
    overflow: "hidden",
    width:"458px",
    height:"375px",
    marginTop: "94px",
  },
  titleimage: {
    width: "441px" ,
    height: "98px",
    marginLeft: "47px",
    marginTop: "40px",
  },
  title: {
    width: "331px",
    height: "56px",
    fontSize: "48px",
    fontFamily: "DINAlternate-Bold, DINAlternate",
    fontWeight: "bold",
    color: "#FFFFFF",
    lineHeight: "56px",
    marginLeft: "47px",
    marginTop: "70px",
  },
  titlenext: {
    width: "600px",
    height: "66px",
    fontSize: "24px",
    fontFamily: "PingFangSC-Regular, PingFang SC",
    fontWeight: "400",
    color: "#FFFFFF",
    lineHeight: "33px",
    marginLeft: "46px",
    marginTop: "8px",
  },
  titlebutton: {
    display: "flex",
    justifyContent: "center",         
    alignItems: "center",
    width: "300px",
    height: "60px",
    fontSize: "24px",
    fontFamily: "PingFangSC-Regular, PingFang SC",
    fontWeight: "400",
    backgroundColor: "#FF2E83",
    borderRadius: "30px",
    lineHeight: "33px",
    marginLeft: "46px",
    marginTop: "100px",
  },
  titlebuttona: {
    width: "140px",
    height: "28px",
    fontSize: "20px",
    fontFamily: "PingFangSC-Regular, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "28px",
  },
  producttitle: {
    display: "flex",
    justifyContent: "center",         
    alignItems: "center",
    marginTop: "80px"
  },
  producttitletext: {
    textAlign: "center",
    width: "412px",
    height: "67px",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
  },
  productleft: {
    flexGrow: "1",
    // width: "450px",
    height: "450px",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "67px",
    marginLeft: "56px",
    marginTop: "76px",
    textAlign: "center"
  },

  surroundbox: {
        position: "absolute",
        top:  "50%",
        left: "50%",
        width:  "20px",
        height:  "20px",
        marginLeft: "-10px",
        marginTop: "-10px",
    },
    centerpoint: {
      position: "absolute",
      top:  "50%",
      left: "50%",
      width:  "20px",
      height:  "20px",
      marginLeft: "-10px",
      marginTop: "-10px",
  },
    circle: {
        /* 这里一定要绝对定位，这样位置才能铺开来 */
        position: "absolute",
        top:  "-10px",
        left: "-10px",
        width: "40px",
        height:  "40px",
        lineHeight: "40px",
        borderRadius:  "50%",
        textAlign: "center",
    },
    circle2:{
      position: "absolute",

      lineHeight: "40px",
      borderRadius:  "50%",
      textAlign: "center",
        transform: "rotateZ(60deg) translateY(200px)"
    },
    circle4:{
      position: "absolute",

      lineHeight: "40px",
      borderRadius:  "50%",
      textAlign: "center",
        transform: "rotateZ(120deg) translateY(200px)"
    },
    circle6:{
      position: "absolute",

      lineHeight: "40px",
      borderRadius:  "50%",
      textAlign: "center",
        transform: "rotateZ(180deg) translateY(200px)"
    },
    circle8:{
        position: "absolute",

        lineHeight: "40px",
        borderRadius:  "50%",
        textAlign: "center",
        transform: "rotateZ(240deg) translateY(200px)"
    },
    circle10:{
      position: "absolute",

      lineHeight: "40px",
      borderRadius:  "50%",
      textAlign: "center",
        transform: "rotateZ(300deg) translateY(200px)"
    },
    circle12:{
      position: "absolute",

      borderRadius:  "50%",
      textAlign: "center",
        transform: "rotateZ(360deg) translateY(200px)"
    },
  
  // productright: {
  //   flexGrow: "1.5",
  //   textAlign: "center",
  //   width: "520px",
  //   height: "450px",
  //   fontSize: "48px",
  //   fontFamily: "PingFangSC-Medium, PingFang SC",
  //   fontWeight: "500",
  //   color: "#FFFFFF",
  //   lineHeight: "67px",
  //   marginLeft: "36px",
  //   marginTop: "12px",
  //   "& ul": {
  //     listStyle: "none",
  //     display: "flex",
  //     flexWrap: "wrap",
  //     justifyContent: "center",         
  //     alignItems: "center",
  //   },
  //   "& ul li": {
  //     flex: "48%",
  //     width: "320px",
  //     height: "80px",
  //     background: "#3D4257",
  //     borderRadius: "8px",
  //     marginTop: "50px",
  //     marginRight: "10px",
  //     textAlign: "center"
  //   },
  //   "& ul li a": {
  //     width: "144px",
  //     height: "33px",
  //     fontSize: "24px",
  //     fontFamily: "PingFangSC-Medium, PingFang SC",
  //     fontWeight: "500",
  //     color: "#FFFFFF",
  //     lineHeight: "33px",
  //     textAlign: "center",
  //   }
  // },
  productadvantage: {
    textAlign: "center",
    width: "988px",
    height: "280px",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "67px",
    marginLeft: "36px",
    marginTop: "12px",
    marginBottom: "20px",
    "& ul": {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around"
    },
    "& ul li": {
      flex: "30%",
      width: "336px",
      height: "266px",
      borderRadius: "8px",
      marginTop: "20px",
      marginRight: "16px"
    },
    "& ul li img": {
      overflow: "hidden",
      width: "116px",
      height: "122px",
      fontSize: "24px",
      fontFamily: "PingFangSC-Medium, PingFang SC",
      fontWeight: "500",
      color: "#FFFFFF",
      lineHeight: "33px",
      textAlign: "center",
      marginRight: "20px"
    },
    "& ul li span": {
      width: "336px",
      height: "90px",
      fontSize: "16px",
      fontFamily: "PingFangSC-Regular, PingFang SC",
      fontWeight: "400",
      color: "#FFFFFF",
    }
  },
  productecoproducts: {
    textAlign: "center",
    width: "998px",
    height: "650px",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "67px",
    // marginLeft: "36px",
    marginTop: "12px",
    "& ul": {
      width: "946px",
      height: "650px",
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",         
      alignItems: "center",
    },
    "& ul li": {
      // flex: "30%",
      width: "276px",
      height: "276px",
      background: "#333333",
      borderRadius: "16px",
      marginTop: "20px",
      marginLeft: "26px",
      textAlign: "center"
    },
    "& ul li img": {
      overflow: "hidden",
      width: "auto",
      maxWidth: "220px",
      height: "70px",
      fontSize: "24px",
      fontFamily: "PingFangSC-Medium, PingFang SC",
      fontWeight: "500",
      color: "#FFFFFF",
      lineHeight: "33px",
      textAlign: "center",
      // marginRight: "20px",
      marginTop: "40px",
      margin: "auto"
    },
    "& ul li .pcontext": {
      width: "230px",
      height: "24px",
      fontSize: "16px",
      fontFamily: "PingFangSC-Regular, PingFang SC",
      fontWeight: "400",
      color: "#FFFFFF",
      lineHeight: "24px"
    },
  },
  ecotitlebutton: {
    display: "flex",
    justifyContent: "center",         
    alignItems: "center",
    width: "160px",
    height: "40px",
    background: "#035EF8",
    borderRadius: "20px",
    textAlign: "center",
    marginLeft: "55px"
  },
  ecotitlebuttona: {
    width: "64px",
    height: "22px",
    fontSize: "16px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "22px",
    textAlign: "center",
    borderRadius: "20px",
  },
  productsupportedmine: {
    textAlign: "center",
    width: "1850px",
    height: "180px",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "67px",
    marginLeft: "36px",
    marginTop: "12px",
    "& ul": {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",         
      alignItems: "center",
    },
    "& ul li": {
      display: "flex",
      justifyContent: "center",         
      alignItems: "center",
      textAlign: "center",
      flex: "18%",
      width: "230px",
      height: "115px",
      background: "#3D4257",
      borderRadius: "8px",
      marginTop: "20px",
      marginRight: "6px"
    },
    "& ul li img": {
      overflow: "hidden",
      width: "144px",
      height: "57px",
      fontSize: "24px",
      fontFamily: "PingFangSC-Medium, PingFang SC",
      fontWeight: "500",
      color: "#FFFFFF",
      textAlign: "center",
      marginRight: "20px"
    }
  },
  productsupportedload: {
    display: "flex",
    justifyContent: "center",         
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center",
    width: "920px",
    height: "220px",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "67px",
    marginLeft: "36px",
    marginTop: "30px",
    "& ul": {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",         
    alignItems: "center",
    },
    "& ul li": {
      display: "flex",
      justifyContent: "center",         
      alignItems: "center",
      textAlign: "center",
      flex: "20%",
      width: "230px",
      height: "115px",
      background: "#3D4257",
      borderRadius: "8px",
      marginTop: "20px",
      marginRight: "6px"
    },
    "& ul li img": {
      overflow: "hidden",
      width: "144px",
      height: "57px",
      fontSize: "24px",
      fontFamily: "PingFangSC-Medium, PingFang SC",
      fontWeight: "500",
      color: "#FFFFFF",
      textAlign: "center",
      marginRight: "20px"
    }
  },
  productsupportedtext: {
    textAlign: "center",
    width: "235px",
    height: "33px",
    fontSize: "24px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#B2B2B2",
    lineHeight: "33px",
  },
  productpartner: {
    textAlign: "center",
    width: "1288px",
    height: "300px",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "67px",
    marginLeft: "36px",
    marginTop: "12px",
    "& ul": {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
    },
    "& ul li": {
      flex: "19%",
      width: "220px",
      height: "80px",
      background: "#3D4257",
      borderRadius: "8px",
      marginTop: "20px",
      marginRight: "6px"
    },
    "& ul li img": {
      overflow: 'hidden',
      width: "144px",
      height: "33px",
      fontSize: "24px",
      fontFamily: "PingFangSC-Medium, PingFang SC",
      fontWeight: "500",
      color: "#FFFFFF",
      lineHeight: "33px",
      textAlign: "center",
      marginRight: "20px"
    }
  },
  slider: {
    width: "100%",
    height: "100%",
    lineHeight: "0",
  },
  dots: {
    textAlign: "right",
    bottom: "20px",
    paddingRight: "30px",
    margin: "0",
    "& li": {
      width: "8px",
      height: "8px",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      margin: "0 4px",
    },
    "& li.slick-active": {
      width: "16px",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
    "& li button": {
      // visibility: "hidden",
      opacity: "0",
      padding: "0",
      width: "8px",
      height: "8px",
      // backgroundColor: "transparent",
    },
  },
};

export default customCarouselStyle;
