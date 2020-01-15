import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from "./styles";
import {  } from '../../actions';

export class HomeScreen extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = { location: '' };
  }

  async componentDidMount() {
    
  }

  goToPage(page) {
    this.props.navigation.navigate(page);
  }

  render() {
    const { navigation } = this.props;
    const { location } = this.state;
    return (
       <View style={{flex: 1, justifyContent: 'space-between', backgroundColor:'#003948',}}>
        
      </View>
    );
  }
}

export default connect(
  state => ({
    
  }),{
    
})(HomeScreen);
