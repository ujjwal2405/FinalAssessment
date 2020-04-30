import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import getdata from '../Services/Home/action'
import {connect} from 'react-redux';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
//   componentDidMount() {
//     this.props.datalist();
//   }
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Text>Hi</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

 
});


const mapStateToProps = state => ({
    data: state.homedisplayReducer.datastore,

  });
  
  const mapDispatchToProps = {
    datalist: getdata,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);

