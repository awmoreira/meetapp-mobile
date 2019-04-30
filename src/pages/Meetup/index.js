import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsMeetupDetails from '../../store/ducks/meetupDetails';
import ActionsSubscriptions from '../../store/ducks/subscriptions';

import {
  Container,
  Content,
  ImageMeetup,
  Info,
  Title,
  Subs,
  Description,
  LocaleLabel,
  Locale,
  Button,
  TextButton,
} from './styles';

import Header from '~/components/Header';

class Meetup extends Component {
  static propTypes = {
    getMeetupRequest: PropTypes.func.isRequired,
    addSubscriptionRequest: PropTypes.func.isRequired,
    meetup: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      file_id: PropTypes.number,
      subscriptions: PropTypes.arrayOf(PropTypes.shape()),
      locale: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.number,
        }),
      }),
    }).isRequired,
  };

  componentDidMount() {
    this.loadMeetup();
  }

  loadMeetup = () => {
    const { id } = this.props.navigation.state.params;
    const { getMeetupRequest } = this.props;

    getMeetupRequest(id);
  };

  handleSubmitSubscription = () => {
    const { id } = this.props.meetup;
    const { addSubscriptionRequest } = this.props;
    addSubscriptionRequest(id);
  };

  render() {
    const { meetup } = this.props;

    return (
      <Container>
        <Header title={`Meetup ${meetup.title}`} isStacked />
        <Content>
          <ImageMeetup source={{ uri: `http://10.0.3.2:3333/files/${meetup.file_id}` }} />
          <Info>
            <Title>{meetup.title}</Title>
            <Subs>
              {meetup.subscriptions ? `${meetup.subscriptions.length} membros` : 'Nenhum membro'}
            </Subs>

            <Description>{meetup.description}</Description>

            <LocaleLabel>Realizado em:</LocaleLabel>
            <Locale>{meetup.locale}</Locale>

            <Button onPress={this.handleSubmitSubscription}>
              <TextButton>Inscreva-se</TextButton>
            </Button>
          </Info>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetupDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ActionsMeetupDetails, ...ActionsSubscriptions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
