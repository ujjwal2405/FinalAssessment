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
import {getlivedata} from '../Services/Live/action'
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
          style={styles.topBar}>
          <View
            style={styles.hamburg}>
            <Image source={require('../Assets/Hamburger_1.png')} />
          </View>

          <View
            style={styles.applogo}>
            <Text style={styles.appName}>APP LOGO</Text>
          </View>

          <View
            style={styles.notification}>
            <Image source={require('../Assets/notification.png')} />
          </View>

          <View
            style={styles.search}>
            <Image source={require('../Assets/search.png')} />
          </View>
        </View>

        <View
          style={styles.flatView}>
          <FlatList
            data={datas.results}
            horizontal
            renderItem={({item}) => {
              return (
                <View
                  style={styles.backView}>
                  <Image
                    style={styles.backDrop}
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
          style={styles.movieTextView}>
          <View
            style={styles.movieInnerView}>
            <Text
              style={styles.movieText}>
              MOVIES
            </Text>

            <Text
              style={styles.showall}>
              Show All
            </Text>
          </View>
          <FlatList
            data={datas.results}
            horizontal
            renderItem={({item}) => {
              return (
                <View style={{}}>
                  <Image
                    style={styles.poster}
                    source={{
                      uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
                    }}
                  />

                  <View
                    style={styles.reviewView}>
                    <View
                      style={styles.titletextView}>
                      <Text
                        style={styles.titleText}>
                        {item.title}
                      </Text>

                      <Image
                        source={require('../Assets/rating.png')}
                        style={styles.ratingImg}
                      />
                    </View>

                    <View
                      style={styles.mediaType}>
                      <Text
                        style={styles.mediatext}>
                        {item.media_type}
                      </Text>

                      <Text
                        style={styles.voteText}>
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

        <View style={styles.movieTextView}>

<View
            style={styles.movieInnerView}>
            <Text
              style={styles.movieText}>
              LIVE CHANNELS
            </Text>

            <Text
              style={styles.showall}>
              Show All
            </Text>
          </View>

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
  topBar:{
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  hamburg:{
    marginTop: 5,
  },
  backDrop:{
    height: 250,
    width: 300,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  movieText:{
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
  },
  applogo:{
    marginLeft: 7,
  },
  notification:{
    marginLeft: 80,
    marginTop: 5,
  },
  search:{
    marginRight: 20,
    marginTop: 5,
  },
  flatView:{
    marginTop: 30,
  },
  backView:{
    marginLeft: 10,
  },
  poster:{
    height: 190,
    width: 150,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 20,
  },
  movieTextView:{
    marginTop: 30,
  },
  movieInnerView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showall:{
    color: '#e4264e',
    marginRight: 20,
  },
  reviewView:{
    backgroundColor: '#181f29',
    marginLeft: 20,
    padding: 10,
  },
  titleText:{
    color: 'white',
    textTransform: 'uppercase',
  },
  titletextView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mediaType:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ratingImg:{
    marginRight: 10,
  },
  mediatext:{
    color: 'white',
    textTransform: 'uppercase',
  },
  voteText:{
    color: 'white',
    marginRight: 10,
  }
});

const mapStateToProps = state => ({
  datas: state.homedisplayReducer.datastore,
  liveImages:state.livedisplayReducer.livestore
});

const mapDispatchToProps = {
  datalist: getdata,
  livedatalist:getlivedata
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
