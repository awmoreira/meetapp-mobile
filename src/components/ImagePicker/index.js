import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RNImagePicker from 'react-native-image-picker';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FileType from 'react-native-file-type';

import { Container, ImgPicker } from './styles';

const options = {
  title: 'Select Avatar',
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class ImagePicker extends Component {
  static propTypes = {
    setFieldValue: PropTypes.func.isRequired,
  };

  state = {
    file: false,
    imagePreviewUri: null,
  };

  handleImageChange = () => {
    const { setFieldValue } = this.props;

    RNImagePicker.launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.tron.log('User cancelled image picker');
      } else if (response.error) {
        console.tron.log('ImagePicker Error: ', response.error);
      } else {
        delete response.data;
        let { type } = response;

        if (!type) {
          const fileType = await FileType(response.uri);
          type = fileType.mime;
        }

        this.setState({
          imagePreviewUri: { uri: response.uri },
          file: true,
        });
        setFieldValue({
          name: response.fileName,
          type,
          size: response.fileSize,
          uri: Platform.OS === 'android' ? response.uri : response.uri.replace('file://', ''),
        });
      }
    });
  };

  showPreloadImage = () => {
    const { file, imagePreviewUri } = this.state;

    let comp = null;

    if (file) {
      comp = <ImgPicker source={imagePreviewUri} />;
    } else {
      comp = <Icon name="ios-camera" size={30} color="rgba(255, 255, 255, 0.5)" />;
    }

    return comp;
  };

  render() {
    return (
      <Container
        hitSlop={{
          top: 5,
          left: 10,
          right: 10,
          bottom: 5,
        }}
        activeOpacity={0.65}
        onPress={this.handleImageChange}
      >
        {this.showPreloadImage()}
      </Container>
    );
  }
}

export default ImagePicker;
