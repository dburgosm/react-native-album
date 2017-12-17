import React from 'react';
import { View, Text,Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

AlbumDetail = (props) => {

    const { album } = props;

    console.debug(album.thumbnail_image);

    return(
        <Card>
            <CardSection>
                <View style={styles.headerContainer}>
                    <Image
                        style={styles.headerThumbnail}
                        source={{ uri: album.thumbnail_image }}
                    />
                </View>
                <View style={styles.headerTextContent}>
                    <Text style={styles.headerTextContentTitle}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.bodyImage}
                    source={{ uri: album.image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={ () => Linking.openURL(album.url) }>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
  headerTextContent: {
      justifyContent: 'space-around',
      flexDirection: 'column'
  },
  headerThumbnail: {
      height: 50,
      width: 50
  },
  headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
  },
  headerTextContentTitle: {
    fontSize: 18
  },
  bodyImage: {
      height: 300,
      flex: 1,
      width: null
  }

};

export default AlbumDetail;