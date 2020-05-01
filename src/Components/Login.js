import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {connect} from 'react-redux';
import {toggleLogin,toggleSuccess} from '../Services/Login/action'
const Realm = require('realm');
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        username:'',
        password:'',
        realm:null,

    };
  }


  dataSave() {
    const {realm} = this.state;
    realm.write(() => {
      realm.create('UserCreds', {username: 'Admin', password: 'Admin'});
    });
  }

  dataDelete() {
    const {realm} = this.state;
    realm.write(() => {
      let user = realm.objects('UserCreds');
      realm.delete(user);
    });
  }

  componentDidMount() {
    Realm.open({
      schema: [
        {
          name: 'UserCreds',
          properties: {username: 'string', password: 'string'},
        },
      ],
    }).then(realm => {
      this.setState({realm});
      this.dataDelete();
      this.dataSave();
    });
  }

  componentWillUnmount() {
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }

  static getDerivedStateFromProps(props, state) {
    const {navigation} = props;
    if (props.logIn) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }

    if (props.flag) {
      Alert.alert('Error', 'Wrong Login Credentials', [
        {
          text: 'Try Again',
          onPress: () => props.toggleSuccess(),
        },
      ]);
    }
    return null;
  }




  render() {
    const {username, password, realm} = this.state;
    return (
      <ImageBackground
        source={require('../Assets/layer_1.png')}
        style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../Assets/logo.png')} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.appName}>APP NAME</Text>
        </View>
        <Text>Hello</Text>

        <View style={styles.loginView}>
          <View style={styles.logView}>
            <Text style={styles.login}>Login</Text>
          </View>
          <View style={styles.signView}>
            <Text style={styles.signUp}>Sign Up</Text>
          </View>
        </View>

        <View style={styles.pleaseView}>
          <Text style={styles.please}>Please login to access your account</Text>
        </View>

        <View style={styles.textInput}>
          <Image source={require('../Assets/username.png')} 
          style={styles.iconImage}
          />

          <TextInput
            style={styles.textinput}
            placeholder="User Name"
            placeholderTextColor="white"
            onChangeText={text => {
                this.setState({username: text});
              }}
          />
        </View>
        <View style={styles.textInput}>
          <Image source={require('../Assets/password_2.png')}
           style={styles.iconImage}
           onChangeText={text => {
            this.setState({username: text});
          }}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Password"
            placeholderTextColor="white"
           
            onChangeText={text => {
                this.setState({username: text});
              }}
          />
        </View>
        <TouchableOpacity
        onPress={()=>{

            // this.props.toggleLogin(
            //     realm.objects('UserCreds'),
            //     username,
            //     password,
            //   );
             this.props.navigation.navigate('Home')
        }}
        >
        <View style={styles.logInButton}>
          <Text style={styles.loginText}>Log In</Text>
        </View>
        </TouchableOpacity>
      
      <View style={styles.forgotPasswordView}>
          <Text style={styles.forgotPasswordtext}>
              Forgot Password
          </Text>
      </View>
      
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    alignItems: 'center',
    marginTop: 80,
  },
  appName: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textView: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  login: {
    color: '#e4264e',
    fontSize: 28,
    fontWeight: 'bold',
  },
  signUp: {
    fontSize: 28,
    color: 'white',
  },
  logView: {
    paddingRight: 20,
    borderRightWidth: 1,
    borderRightColor: 'grey',
  },
  signView: {
    paddingLeft: 20,
  },
  please: {
    color: '#181f29',
    fontWeight: 'bold',
    fontSize: 15,
  },
  pleaseView: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#181f29',
    marginHorizontal: 20,
    marginTop: 25,
    color: 'white',
    flexDirection: 'row',
  },
  textinput: {marginLeft: 20,color:"white",padding:15},
  logInButton: {
    backgroundColor: '#e4264e',
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  loginText: {
    color: 'white',
  },
  forgotPasswordView:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:25
  },
  forgotPasswordtext:{
    color:"white"
  },
  iconImage:{
      alignSelf:"center",
      marginLeft:10
  }
});

const mapStateToProps = state => ({
    logIn: state.loginReducer.login,
    flag: state.loginReducer.flag,
  });

  const mapDispatchToProps = {
    toggleLogin: toggleLogin,
    toggleSuccess: toggleSuccess,
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login);
