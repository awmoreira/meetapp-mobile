import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from '~/components/ImagePicker';

import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Switch,
  // ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetupsActions from '~/store/ducks/meetups';

import {
  Container,
  Content,
  Box,
  Label,
  SwitchContainer,
  SwitchText,
  TitleName,
  Input,
  Button,
  TextButton,
} from './styles';

import Header from '~/components/Header';

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
        <Header title="Novo meetup" />
        <Content>
          <ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
              <TitleName>Título</TitleName>
              <Input
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Digite o título do evento"
                placeholderTextColor="rgba(255, 255, 255, 0.3)"
                onChangeText={title => this.setState({ title })}
                value={title}
                returnKeyType="next"
                onSubmitEditing={() => this.descriptionInput.focus()}
              />

              <TitleName>Descrição</TitleName>
              <Input
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Descreva seu meetup"
                placeholderTextColor="rgba(255, 255, 255, 0.3)"
                multiline
                numberOfLines={4}
                onChangeText={description => this.setState({ description })}
                value={description}
                returnKeyType="done"
                blurOnSubmit
                ref={(el) => {
                  this.descriptionInput = el;
                }}
                onSubmitEditing={() => this.addressInput.focus()}
              />

              <TitleName>Imagem</TitleName>
              <ImagePicker name="file" setFieldValue={uploadedFiles} />

              <TitleName>Localização</TitleName>
              <Input
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Onde seu meetup irá acontecer?"
                placeholderTextColor="rgba(255, 255, 255, 0.3)"
                onChangeText={locale => this.setState({ locale })}
                value={locale}
                returnKeyType="next"
                ref={(el) => {
                  this.addressInput = el;
                }}
                onSubmitEditing={() => this.dateInput.focus()}
              />

              <TitleName>Data/horário</TitleName>
              <Input
                type="datetime"
                options={{
                  format: 'DD/MM/YYYY HH:mm',
                }}
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Digite a data e horário do evento"
                placeholderTextColor="rgba(255, 255, 255, 0.3)"
                onChangeText={date_event => this.setState({ date_event })}
                value={date_event}
                returnKeyType="done"
                ref={(el) => {
                  this.dateInput = el;
                }}
              />

              <Box>
                <Label>Preferências</Label>

                <SwitchContainer>
                  <SwitchText>Front-end</SwitchText>
                  <Switch
                    onValueChange={value => this.setState({ front: value })}
                    trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
                    value={front}
                    hitSlop={{
                      top: 0,
                      bottom: 0,
                      left: 10,
                      right: 10,
                    }}
                  />
                </SwitchContainer>

                <SwitchContainer>
                  <SwitchText>Back-end</SwitchText>
                  <Switch
                    onValueChange={value => this.setState({ back: value })}
                    trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
                    value={back}
                    hitSlop={{
                      top: 0,
                      bottom: 0,
                      left: 10,
                      right: 10,
                    }}
                  />
                </SwitchContainer>

                <SwitchContainer>
                  <SwitchText>Mobile</SwitchText>
                  <Switch
                    onValueChange={value => this.setState({ mobile: value })}
                    trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
                    value={mobile}
                    hitSlop={{
                      top: 0,
                      bottom: 0,
                      left: 10,
                      right: 10,
                    }}
                  />
                </SwitchContainer>

                <SwitchContainer>
                  <SwitchText>Devops</SwitchText>
                  <Switch
                    onValueChange={value => this.setState({ devops: value })}
                    trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
                    value={devops}
                    hitSlop={{
                      top: 0,
                      bottom: 0,
                      left: 10,
                      right: 10,
                    }}
                  />
                </SwitchContainer>

                <SwitchContainer>
                  <SwitchText>Manager</SwitchText>
                  <Switch
                    onValueChange={value => this.setState({ manager: value })}
                    trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
                    value={manager}
                    hitSlop={{
                      top: 0,
                      bottom: 0,
                      left: 10,
                      right: 10,
                    }}
                  />
                </SwitchContainer>

                <SwitchContainer>
                  <SwitchText>Marketing</SwitchText>
                  <Switch
                    onValueChange={value => this.setState({ marketing: value })}
                    trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
                    value={marketing}
                    hitSlop={{
                      top: 0,
                      bottom: 0,
                      left: 10,
                      right: 10,
                    }}
                  />
                </SwitchContainer>
              </Box>

              <Button activeOpacity={0.65} onPress={this.handleSubmit}>
                <TextButton>Salvar</TextButton>
              </Button>
            </KeyboardAvoidingView>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

// const FILE_SIZE = 2097152; // mb
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export default connect(
  null,
  mapDispatchToProps,
)(NewMeetup);
