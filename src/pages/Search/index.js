import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import MeetupsActions from '../../store/ducks/meetups';

import {
  Container,
  SearchInput,
  Input,
  Box,
  Label,
  MeetupsList,
  Meetup,
  ImageMeetup,
  InfoBox,
  Info,
  Title,
  Number,
  DetailsMeetup,
  Message,
  MessageText,
} from './styles';

class Search extends Component {
  static propTypes = {
    getSubscriptionsRequest: PropTypes.func.isRequired,
    getNextsRequest: PropTypes.func.isRequired,
    getRecommendedRequest: PropTypes.func.isRequired,
    subscriptions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        __meta__: PropTypes.shape({
          subscriptions_count: PropTypes.number,
        }),
      }),
    ).isRequired,
    nexts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        __meta__: PropTypes.shape({
          subscriptions_count: PropTypes.number,
        }),
      }),
    ).isRequired,
    recommended: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        __meta__: PropTypes.shape({
          subscriptions_count: PropTypes.number,
        }),
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { getSubscriptionsRequest, getNextsRequest, getRecommendedRequest } = this.props;

    getSubscriptionsRequest();
    getNextsRequest();
    getRecommendedRequest();

    this.searchInput.focus();
  }

  handleInputSearch = (e) => {
    const { getSubscriptionsRequest, getNextsRequest, getRecommendedRequest } = this.props;

    getSubscriptionsRequest(e.target.value);
    getNextsRequest(e.target.value);
    getRecommendedRequest(e.target.value);
  };

  render() {
    const { subscriptions, nexts, recommended } = this.props;

    return (
      <Container>
        <Box>
          <SearchInput>
            <Input
              ref={(input) => {
                this.searchInput = input;
              }}
              type="text"
              onChange={this.handleInputSearch}
              placeholder="Buscar meetups"
            />
          </SearchInput>
          <Label>Inscrições</Label>
          {subscriptions.length === 0 && (
            <Message>
              <MessageText>Nenhuma inscrição realizada.</MessageText>
            </Message>
          )}
          <MeetupsList>
            {subscriptions
              && subscriptions.map(meetup => (
                <Meetup key={meetup.id}>
                  <ImageMeetup source={{ uri: `http://127.0.0.1:3333/files/${meetup.file_id}` }} />
                  <InfoBox>
                    <Info>
                      <Title>{meetup.title}</Title>
                      <Number>
                        {meetup.__meta__.subscriptions_count > 0
                          ? `${meetup.__meta__.subscriptions_count} membros`
                          : 'Nenhum membro'}
                      </Number>
                    </Info>
                    <DetailsMeetup
                      onPress={() => navigation.navigate('Meetup', { meetup })}
                      activeOpacity={0.65}
                    >
                      <Icon name="ios-arrow-round-forward" size={16} color="#fff" />
                    </DetailsMeetup>
                  </InfoBox>
                </Meetup>
              ))}
          </MeetupsList>
        </Box>

        <Box>
          <Label>Próximos meetups</Label>
          {nexts.length === 0 && (
            <Message>
              <MessageText>Não existe próximos meetups.</MessageText>
            </Message>
          )}
          <MeetupsList>
            {nexts
              && nexts.map(meetup => (
                <Meetup key={meetup.id}>
                  <ImageMeetup source={{ uri: `http://127.0.0.1:3333/files/${meetup.file_id}` }} />
                  <InfoBox>
                    <Info>
                      <Title>{meetup.title}</Title>
                      <Number>
                        {meetup.__meta__.subscriptions_count > 0
                          ? `${meetup.__meta__.subscriptions_count} membros`
                          : 'Nenhum membro'}
                      </Number>
                    </Info>
                    <DetailsMeetup
                      onPress={() => navigation.navigate('Meetup', { meetup })}
                      activeOpacity={0.65}
                    >
                      <Icon name="ios-arrow-round-forward" size={16} color="#fff" />
                    </DetailsMeetup>
                  </InfoBox>
                </Meetup>
              ))}
          </MeetupsList>
        </Box>

        <Box>
          <Label>Recomendados</Label>
          {recommended.length === 0 && (
            <Message>
              <MessageText>Escolha suas preferências de meetups.</MessageText>
            </Message>
          )}
          <MeetupsList>
            {recommended
              && recommended.map(meetup => (
                <Meetup key={meetup.id}>
                  <ImageMeetup source={{ uri: `http://127.0.0.1:3333/files/${meetup.file_id}` }} />
                  <InfoBox>
                    <Info>
                      <Title>{meetup.title}</Title>
                      <Number>
                        {meetup.__meta__.subscriptions_count > 0
                          ? `${meetup.__meta__.subscriptions_count} membros`
                          : 'Nenhum membro'}
                      </Number>
                    </Info>
                    <DetailsMeetup
                      onPress={() => navigation.navigate('Meetup', { meetup })}
                      activeOpacity={0.65}
                    >
                      <Icon name="ios-arrow-round-forward" size={16} color="#fff" />
                    </DetailsMeetup>
                  </InfoBox>
                </Meetup>
              ))}
          </MeetupsList>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  subscriptions: state.meetups.subscriptions,
  nexts: state.meetups.nexts,
  recommended: state.meetups.recommended,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
