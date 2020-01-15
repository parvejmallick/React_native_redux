const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

export default {
  homeFullArea:{
    backgroundColor:'#003948',
    alignItems:'center',
    height:'80%',
    paddingVertical:15,
    paddingHorizontal:15,
    paddingTop : '20%'
    //justifyContent:'center',
  },
  whiteText:{
    color:'#fff'
  },
  logoLog:{
    width:170,
    height:170,
    marginVertical:20
  },
  scancamera:{
    width:60,
    height:60,
    marginVertical:10,
    padding: 10
  },
  scene: {
    flex: 1,
  },
  fullArea:{
    flex:1,
    backgroundColor:'#003948',
    height:'100%',
  }
};