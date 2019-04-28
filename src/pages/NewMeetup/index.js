import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import MeetupsActions from '../../store/ducks/meetups';

import { Container } from './styles';

class NewMeetup extends Component {
  static propTypes = {
    addMeetupRequest: PropTypes.func.isRequired,
  };

  state = {
    uploadedFiles: [],

    title: '',
    description: '',
    file_id: '',
    locale: '',
    date_event: '',

    front: false,
    back: false,
    mobile: false,
    devops: false,
    manager: false,
    marketing: false,
  };

  handleDelete = async (id) => {
    await api.delete(`files/${id}`);
    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id),
    });
  };

  updateFile = (id, data) => {
    const { uploadedFiles } = this.state;
    this.setState({
      uploadedFiles: uploadedFiles.map(uploadedFile => (id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile)),
    });
  };

  handleUpload = (files) => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles),
    });

    uploadedFiles.forEach(this.processUpload);
  };

  processUpload = (uploadedFile) => {
    const data = new FormData();
    data.append('file', uploadedFile.file, uploadedFile.name);

    api
      .post('files', data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress,
          });
        },
      })
      .then((response) => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data.id,
          url: response.data.url,
        });
        this.setState({
          file_id: response.data.id,
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true,
        });
      });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { addMeetupRequest } = this.props;

    const {
      title,
      description,
      locale,
      date_event,
      file_id,

      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    } = this.state;

    const preference = {
      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    };

    addMeetupRequest(title, description, preference, locale, date_event, file_id);
  };

  render() {
    const {
      uploadedFiles,
      title,
      description,
      locale,
      date_event,

      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    } = this.state;

    return (
      <Container>
        <ScrollView>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <Header title="Novo Meetup" />
            <View style={styles.content}>
              <View style={styles.inputWrap}>
                <Text style={styles.label}>Título</Text>
                <TextInput
                  style={styles.input}
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  placeholder="Digite o título do evento"
                  placeholderTextColor="rgba(255, 255, 255, 0.3)"
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                  returnKeyType="next"
                  onSubmitEditing={() => this.descriptionInput.focus()}
                />
                {!!errors.title && <Text style={styles.error}>{errors.title}</Text>}
              </View>

              <View style={styles.inputWrap}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                  style={[styles.input, styles.textarea]}
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  placeholder="Fale um pouco sobre o evento"
                  placeholderTextColor="rgba(255, 255, 255, 0.3)"
                  multiline
                  numberOfLines={4}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  returnKeyType="done"
                  blurOnSubmit
                  ref={(el) => {
                    this.descriptionInput = el;
                  }}
                  onSubmitEditing={() => this.addressInput.focus()}
                />
                {!!errors.description && <Text style={styles.error}>{errors.description}</Text>}
              </View>

              <View style={styles.inputWrap}>
                <Text style={styles.label}>Imagem</Text>
                <ImagePicker name="file" setFieldValue={setFieldValue} />
                {!!errors.file && <Text style={styles.error}>{errors.file}</Text>}
              </View>

              <View style={styles.inputWrap}>
                <Text style={styles.label}>Local do evento</Text>
                <TextInput
                  style={styles.input}
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  placeholder="Digite o local do evento"
                  placeholderTextColor="rgba(255, 255, 255, 0.3)"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                  returnKeyType="next"
                  ref={(el) => {
                    this.addressInput = el;
                  }}
                  onSubmitEditing={() => this.dateInput.getElement().focus()}
                />
                {!!errors.address && <Text style={styles.error}>{errors.address}</Text>}
              </View>

              <View style={styles.inputWrap}>
                <Text style={styles.label}>Data/horário do evento</Text>

                <TextInputMask
                  type="datetime"
                  options={{
                    format: 'DD/MM/YYYY HH:mm',
                  }}
                  style={styles.input}
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  placeholder="Digite a data e horário do evento"
                  placeholderTextColor="rgba(255, 255, 255, 0.3)"
                  onChangeText={handleChange('date')}
                  onBlur={handleBlur('date')}
                  value={values.date}
                  returnKeyType="done"
                  ref={(el) => {
                    this.dateInput = el;
                  }}
                />
                {!!errors.date && <Text style={styles.error}>{errors.date}</Text>}
              </View>

              <View style={styles.inputWrap}>
                <Text style={styles.label}>Preferencias</Text>
                {themes.map(theme => (
                  <View key={theme.id} style={styles.switchContainer}>
                    <Text style={styles.switchText}>{theme.name}</Text>
                    <Switch
                      onValueChange={() => {
                        if (values.themes.includes(theme.id)) {
                          const nextValue = values.themes.filter(value => value !== theme.id);
                          setFieldValue('themes', nextValue);
                        } else {
                          const nextValue = values.themes.concat(theme.id);
                          setFieldValue('themes', nextValue);
                        }
                      }}
                      trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
                      thumbColor={
                        values.themes.includes(theme.id) ? '#e5556e' : 'rgba(255, 255, 255, 0.5)'
                      }
                      value={values.themes.includes(theme.id)}
                      hitSlop={{
                        top: 0,
                        bottom: 0,
                        left: 10,
                        right: 10,
                      }}
                    />
                  </View>
                ))}
                {!!errors.themes && <Text style={styles.error}>{errors.themes}</Text>}
              </View>

              <Touchable activeOpacity={0.65} style={styles.button} onPress={handleSubmit}>
                {!meetups.isSaving ? (
                  <Text style={styles.buttonText}>Salvar</Text>
                ) : (
                  <ActivityIndicator size="small" color="#fff" />
                )}
              </Touchable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(NewMeetup);
