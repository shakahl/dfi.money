import zIndex from "@material-ui/core/styles/zIndex";

const customCarouselStyle = {
    container: {
      display: "flex",
      backgroundColor: "#232633",
      justifyContent: "center",         
      alignItems: "center",
      flexWrap: "wrap",
    },
    "@media (max-width: 576px)": {
      aligntop: {
        display: "flex",
        width: "auto",
        height: "auto",
        flexWrap: "wrap",
        justifyContent: "center",  
        alignItems: "center",
      },
      alignleft: {
        overflow:"hidden",
        width:'auto',
        height:"auto",
      },
      alignright: {
        overflow:"hidden",
        width:'auto',
        height:"auto",
      },
      alignright_man: {
        overflow: "hidden",
        width:"auto",
        height:"342px",
        marginTop: "94px",
        marginBottom: "50px",
      },
      titleimage: {
        overflow: "hidden",
        width: "212px" ,
        height: "41px",
        marginLeft: "147px",
        marginTop: "63px",
        marginRight: "247px",
      },
      title: {
        width: "166px",
        height: "28px",
        fontSize: "24px",
        fontFamily: "DINAlternate-Bold, DINAlternate",
        fontWeight: "bold",
        color: "#FFFFFF",
        lineHeight: "56px",
        marginLeft: "147px",
        marginTop: "59px",
        marginBottom: "60px",
        marginRight: "60px"
      },
      titlenext: {
        width: "338px",
        height: "40px",
        fontSize: "14px",
        fontFamily: "PingFangSC-Regular, PingFang SC",
        fontWeight: "400",
        color: "#FFFFFF",
        lineHeight: "33px",
        marginLeft: "146px",
        marginTop: "58px",
        marginRight: "60px"
      },
      titlebutton: {
        display: "flex",
        justifyContent: "center",         
        alignItems: "center",
        width: "240px",
        height: "40px",
        fontSize: "24px",
        fontFamily: "PingFangSC-Regular, PingFang SC",
        fontWeight: "400",
        backgroundColor: "#FF2E83",
        borderRadius: "30px",
        lineHeight: "33px",
        marginLeft: "146px",
        marginTop: "60px",
        marginRight: "60px"
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
    },
    "@media (min-width: 576px)": {
      aligntop: {
        display: "flex",
        width: "auto",
        height: "auto",
        flexWrap: "wrap",
        // justifyContent: "center",     
        alignItems: "center",
      },
      alignleft: {
        overflow:"hidden",
        width:'auto',
        height:"auto",
      },
      alignright: {
        overflow:"hidden",
        width:'auto',
        height:"auto",
      },
      alignright_man: {
        overflow: "hidden",
        width:"470px",
        height:"auto",
        marginTop: "114px",
        marginBottom: "50px",
      },
      titleimage: {
        overflow: "hidden",
        width: "441px" ,
        height: "98px",
        marginLeft: "47px",
        marginTop: "63px",
        marginRight: "247px",
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
        marginTop: "59px",
        marginBottom: "60px",
        marginRight: "60px"
      },
      titlenext: {
        width: "632px",
        height: "66px",
        fontSize: "24px",
        fontFamily: "PingFangSC-Regular, PingFang SC",
        fontWeight: "400",
        color: "#FFFFFF",
        lineHeight: "33px",
        marginLeft: "46px",
        marginTop: "58px",
        marginRight: "60px"
      },
      titlebutton: {
        display: "flex",
        justifyContent: "center",         
        alignItems: "center",
        width: "300px",
        height: "60px",
        backgroundColor: "#FF2E83",
        borderRadius: "30px",
        marginLeft: "46px",
        marginTop: "60px",
        marginRight: "60px"
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
    },
  producttitle: {
    display: "flex",
    justifyContent: "center",         
    alignItems: "center",
    marginTop: "160px"
  },
  producttitletext: {
    textAlign: "center",
    width: "auto",
    height: "auto",
    fontSize: "32px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: "36px"
  },
  productleft: {
    width: "auto",
    height: "auto",
    marginTop: "76px",
  },

  surroundbox: {
        position: "absolute",
        cursor: "pointer",
        top:  "50%",
        left: "50%",
        width:  "20px",
        height:  "20px",
        marginLeft: "-33px",
        marginTop: "5px",
        // "& div:nth-child(1):hover:after": {
        //   position: "absolute",
        //   left: "15px",
        //   top: "5px",
        //   padding: "5px",
        //   backgroundColor: "#0095ff",
        //   borderRadius: "5px",
        //   color: "#fff",
        //   /*这里显示的内容为表格中自定义的labelTooltip属性对应的值*/
        //   content: "attr(" + "labelTooltipfasfasfasdffffafasdfasfasfasd)",
        //   zIndex: "2",
        //   width: "120px"
        // },

        // "& img:nth-child(1)": {
        //   transform:"rotate(-60deg)"
        // },
        // "& img:nth-child(2)": {
        //   transform:"rotate(0)"
        // },
        // "& img:nth-child(3)": {
        //   transform:"rotate(-180deg)"
        // },
        // "& img:nth-child(4)": {
        //   transform:"rotate(-240deg)"
        // },
        // "& img:nth-child(5)": {
        //   transform:"rotate(-300deg)"
        // },
        // "& img:nth-child(6)": {
        //   transform:"rotate(-360deg)"
        // },
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
        transform: "rotateZ(60deg) translateY(170px)"
    },
    circle4:{
      position: "absolute",

      lineHeight: "40px",
      borderRadius:  "50%",
      textAlign: "center",
        transform: "rotateZ(120deg) translateY(170px)"
    },
    circle6:{
      position: "absolute",

      lineHeight: "40px",
      borderRadius:  "50%",
      textAlign: "center",
        transform: "rotateZ(180deg) translateY(170px)"
    },
    circle8:{
        position: "absolute",

        lineHeight: "40px",
        borderRadius:  "50%",
        textAlign: "center",
        transform: "rotateZ(240deg) translateY(170px)"
    },
    circle10:{
      position: "absolute",

      lineHeight: "40px",
      borderRadius:  "50%",
      textAlign: "center",
        transform: "rotateZ(300deg) translateY(170px)"
    },
    circle12:{
      position: "absolute",

      borderRadius:  "50%",
      textAlign: "center",
        transform: "rotateZ(360deg) translateY(170px)"
    },
  productadvantage: {
    textAlign: "center",
    width: "1920px",
    height: "auto",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "67px",
    // marginLeft: "36px",
    marginTop: "12px",
    // marginBottom: "20px",
    "& ul": {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around"
    },
    "& ul li": {
      width: "336px",
      height: "auto",
      borderRadius: "8px",
      marginTop: "20px",
      marginRight: "16px"
    },
    "& ul li img": {
      overflow: "hidden",
      width: "auto",
      height: "auto",
      fontSize: "24px",
      fontFamily: "PingFangSC-Medium, PingFang SC",
      fontWeight: "500",
      color: "#FFFFFF",
      lineHeight: "33px",
      textAlign: "center",
      marginRight: "20px",
      marginBottom: "30px"
    },
    "& ul li p": {
      width: "auto",
      height: "auto",
      fontSize: "24px",
      fontFamily: "PingFangSC-Regular, PingFang SC",
      fontWeight: "400",
      color: "#FFFFFF",
    },
    "& ul li span": {
      width: "auto",
      height: "auto",
      fontSize: "16px",
      fontFamily: "PingFangSC-Regular, PingFang SC",
      fontWeight: "500",
      lineHeight: "22px",
      color: "#FFFFFF",
    }
  },
  productecoproducts: {
    textAlign: "center",
    width: "1920px",
    height: "auto",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    // marginLeft: "36px",
    marginTop: "12px",
    "& ul": {
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
      marginRight: "6px",
      textAlign: "center"
    },
    "& ul li img": {
      overflow: "hidden",
      width: "auto",
      height: "auto",
      fontSize: "24px",
      fontFamily: "PingFangSC-Medium, PingFang SC",
      fontWeight: "500",
      color: "#FFFFFF",
      textAlign: "center",
      // marginRight: "20px",
      marginTop: "40px",
      marginBottom: "20px"
    },
    "& ul li .pcontext": {
      width: "230px",
      height: "24px",
      fontSize: "16px",
      fontFamily: "PingFangSC-Regular, PingFang SC",
      fontWeight: "400",
      color: "#FFFFFF",
      lineHeight: "24px",
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
    marginLeft: "55px",
    marginTop: "30px"
  },
  ecotitlebuttona: {
    width: "auto",
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
    width: "auto",
    height: "auto",
    fontSize: "48px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: "67px",
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
      width: "230px",
      height: "115px",
      background: "#3D4257",
      borderRadius: "8px",
      marginTop: "20px",
      marginRight: "6px"
    },
    "& ul li img": {
      overflow: "hidden",
      width: "auto",
      height: "auto",
      textAlign: "center",
    }
  },
  productsupportedload: {
    display: "flex",
    justifyContent: "center",         
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center",
    width: "auto",
    height: "auto",
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
      width: "230px",
      height: "115px",
      marginTop: "20px",
      marginRight: "6px",
      background: "#3D4257",
      borderRadius: "8px",
    },
    "& ul li img": {
      overflow: "hidden",
      width: "auto",
      height: "auto",
      textAlign: "center",
    }
  },
  productsupportedtext: {
    textAlign: "center",
    //attention:keep width
    width: "235px",
    height: "auto",
    fontSize: "24px",
    fontFamily: "PingFangSC-Medium, PingFang SC",
    fontWeight: "500",
    color: "#B2B2B2",
    lineHeight: "33px",
  },
  productpartner: {
    display: "flex",
    justifyContent: "center",         
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center",
    width: "1920px",
    height: "auto",
    marginTop: "30px",
    "& ul": {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",         
      alignItems: "center",
    },
    "& ul li": {
      position: "relative",
      width: "309px",
      height: "115px",
      background: "#3D4257",
      marginTop: "40px",
      marginRight: "6px",
      justifyContent: "center",         
      alignItems: "center",
      textAlign: "center"
    },
    
    "& ul li img": {
      overflow: 'hidden',
      width: "auto",
      height: "auto",
      marginTop: "40px",
      textAlign: "center",
    },
  //   "& ul li img:nth-child(2)": {
  //     content: 'view',
  //     color: "#ffffff",
  //     position: "absolute",
  //     marginTop: "-25px",
  //     marginLeft: "-15px",
  //     textAlign: "center",
  // },

  "& ul li img:nth-child(2)" : {
    position: "absolute",
    top: "-65px",
    //note: need to set right
    right: "0px",
},
"& ul li img:nth-child(2):before":{
    position: "absolute",
    content: "",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%, -50%, 0)"
},
"& ul li img:nth-child(2):after":
  {
    position: "absolute",
    content: "",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%, -50%, 0)"
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
