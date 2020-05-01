import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {getdata} from '../Services/Home/action';
import {connect} from 'react-redux';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.datalist();
  }

  render() {
    //   console.warn(this.props)
    const {datas} = this.props;
    //   console.warn(datas)

    return (
      <ImageBackground
        source={require('../Assets/layer_1.png')}
        style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Image source={require('../Assets/Hamburger_1.png')} />
          </View>

          <View>
            <Text style={styles.appName}>APP LOGO</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
          }}>
          <FlatList
            data={datas.results}
            horizontal
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <Image
                    style={{
                      height: 250,
                      width: 300,
                      borderTopStartRadius: 10,
                      borderBottomStartRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                    source={{
                      uri:
                        'https://image.tmdb.org/t/p/w500' + item.backdrop_path,
                    }}
                  />
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>

        <View
          style={{
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
                marginLeft: 20,
                marginBottom: 10,
              }}>
              Movies
            </Text>

            <Text
              style={{
                color: '#e4264e',
                marginRight: 20,
              }}>
              Show All
            </Text>
          </View>
          <FlatList
            data={datas.results}
            horizontal
            renderItem={({item}) => {
              return (
                
                
                <View
                  style={{
                    
                  }}>
                  <Image
                    style={{
                      height: 190,
                      width: 150,
                      borderTopStartRadius: 10,
                      borderBottomStartRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      marginLeft: 20,
                    }}
                    source={{
                      uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
                    }}
                  />

                <View style={{
                    backgroundColor:'#181f29',
                    marginLeft:20,
                    padding:10
                }}>
                
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between"
                }}>
                  
                    <Text style={{
                    color:"white",
                    textTransform:"uppercase",
                    
                }}>
                    {item.title}
                </Text>
                

                <Image source={require('../Assets/rating.png')}
                style={{
                    marginRight:10
                }}
                />
                
                </View>

                
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginTop:10
                }}>
                    <Text style={{
                    color:"white",
                    textTransform:"uppercase"
                }}>
                    {item.media_type}
                </Text>

               <Text
               style={{
                   color:"white",
                   marginRight:10
               }}
               >
                   {item.vote_average}
               </Text>
                
                
                </View>
                </View>

                </View>

              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  appName: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  datas: state.homedisplayReducer.datastore,
});

const mapDispatchToProps = {
  datalist: getdata,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
