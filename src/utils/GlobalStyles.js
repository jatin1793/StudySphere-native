import { Dimensions } from 'react-native';
import theme from '../theme/Colors';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const  globalStyles = {
    rowflex:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        width:"100%"
    },
    searchBox: {
        backgroundColor: '#f5f5f5',
        opacity:.8,
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 7,
        alignItems: 'center',
      },
    rowflex2:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"

    },
    rowflex3:{
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center",
      overflow: 'hidden',
    },
    rowflex4: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    globalFontFamily:{
      // fontFamily:"Urbanist-Black",
    },
    headingText:{
      color:"black",
      fontFamily:"Urbanist-SemiBold",
      fontSize:20,
      // fontWeight:"bold"`
    },
    text:{
      color:"black",
      fontFamily:"Urbanist-SemiBold",
      fontSize:16,
      // fontWeight:"bold"`
    },
    text2:{
        color:"black",
        fontFamily:"Urbanist-SemiBold",
        fontSize:13,
        // fontWeight:"bold"
      },
    text3:{
        color:"black",
        fontFamily:"Urbanist-Medium",
        fontSize:13,
        // fontWeight:"bold"
      },
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:theme.colors.whiteBg,
        paddingHorizontal:30,
        paddingVertical:30
        
    },
    container2:{
        width:"100%",
        height:"100%",
        backgroundColor:theme.colors.whiteBg,
        paddingHorizontal:12,
        paddingVertical:15
    },
    container3:{
        width:"100%",
        height:"100%",
        backgroundColor:theme.colors.whiteBg,
        paddingHorizontal:10,
        paddingVertical:10
        
    },
    loader:{
      marginTop:20,
      marginLeft:"auto",
      marginRight:"auto"
    },
    straightline: {
      width: '103%',
      backgroundColor: 'black',
      height: 1.5,
      opacity: 0.2,
      marginVertical: 7,
      marginLeft: -5,
    },
    jobPostbox:{backgroundColor:"white",width:"99%",paddingHorizontal:10,elevation:2,marginVertical:10,borderRadius:10,marginLeft:1,},
    box:{backgroundColor:"white",width:"99%",paddingHorizontal:10,elevation:2,marginVertical:10,borderRadius:10,marginLeft:1,paddingVertical:5},

    centerButton:{
      alignItems:"center",
      justifyContent:"center",
      borderRadius:10,
      backgroundColor:theme.colors.tertiary,
      paddingHorizontal:10,
      paddingVertical:3,marginVertical:10,
    },
    bigImage:{
      height:120,width:120,borderRadius:60,
    },
    asterisk:{
      color:'red'
  },
  iconsview:{
    height:35,width:35,backgroundColor:theme.colors.primary,borderRadius:20,justifyContent:"center",alignItems:"center"
}
,   bottomNav: {
  backgroundColor: theme.colors.primary,
  display: 'flex',
  height: 50,
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
  width: '100%',
  paddingHorizontal: 20,
  // paddingVertical: 14,
  paddingTop: -20,
  position: 'relative',
},
smallButton:{
  flexDirection: 'row',
  paddingHorizontal: 10,
  borderRadius: 10,
  backgroundColor: theme.colors.blue,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 3,
},
screenHeight: {
  height: height - 220
},
screenWidth: {
  width: width
},
}