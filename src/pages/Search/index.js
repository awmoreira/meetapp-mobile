import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';

import { ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import MeetupsActions from '../../store/ducks/meetups';

import Header from '~/components/Header';

import {
  Container,
  Content,
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
          subscriptions_count: PropTypes.string,
        }),
      }),
    ).isRequired,
    nexts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        __meta__: PropTypes.shape({
          subscriptions_count: PropTypes.string,
        }),
      }),
    ).isRequired,
    recommended: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        __meta__: PropTypes.shape({
          subscriptions_count: PropTypes.string,
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

  handleInputSearch = (term) => {
    const { getSubscriptionsRequest, getNextsRequest, getRecommendedRequest } = this.props;

    getSubscriptionsRequest(term);
    getNextsRequest(term);
    getRecommendedRequest(term);
  };

  render() {
    const { subscriptions, nexts, recommended } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Header title="Busca" />
        <Content>
          <ScrollView>
            <Box>
              <SearchInput>
                <Icon name="ios-search" size={20} color="grey" />
                <Input
                  ref={(input) => {
                    this.searchInput = input;
                  }}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  autofocus
                  onChangeText={term => this.handleInputSearch(term)}
                  placeholder="Buscar meetups"
                  placeholderTextColor="grey"
                  returnKeyType="search"
                />
              </SearchInput>

              <Label>Inscrições</Label>
              {subscriptions.length === 0 && (
                <Message>
                  <MessageText>Nenhum meetup encontrado.</MessageText>
                </Message>
              )}
              <MeetupsList
                showsHorizontalScrollIndicator={false}
                // horizontal
                data={subscriptions}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <Meetup>
                    <ImageMeetup source={{ uri: `http://10.0.3.2:3333/files/${item.file_id}` }} />
                    <InfoBox>
                      <Info>
                        <Title>{item.title}</Title>
                        <Number>
                          {item.__meta__.subscriptions_count >= 0
                            ? `${item.__meta__.subscriptions_count} membros`
                            : 'Nenhum membro'}
                        </Number>
                      </Info>
                      <DetailsMeetup
                        onPress={() => navigate('Meetup', { id: item.id })}
                        activeOpacity={0.65}
                      >
                        <Icon name="ios-arrow-round-forward" size={16} color="#fff" />
                      </DetailsMeetup>
                    </InfoBox>
                  </Meetup>
                )}
              />
            </Box>

            <Box>
              <Label>Próximos meetups</Label>
              {nexts.length === 0 && (
                <Message>
                  <MessageText>Nenhum meetup encontrado.</MessageText>
                </Message>
              )}
              <MeetupsList
                showsHorizontalScrollIndicator={false}
                // horizontal
                data={nexts}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <Meetup>
                    <ImageMeetup source={{ uri: `http://10.0.3.2:3333/files/${item.file_id}` }} />
                    <InfoBox>
                      <Info>
                        <Title>{item.title}</Title>
                        <Number>
                          {item.__meta__.subscriptions_count >= 0
                            ? `${item.__meta__.subscriptions_count} membros`
                            : 'Nenhum membro'}
                        </Number>
                      </Info>
                      <DetailsMeetup
                        onPress={() => navigate('Meetup', { id: item.id })}
                        activeOpacity={0.65}
                      >
                        <Icon name="ios-arrow-round-forward" size={16} color="#fff" />
                      </DetailsMeetup>
                    </InfoBox>
                  </Meetup>
                )}
              />
            </Box>

            <Box>
              <Label>Recomendados</Label>
              {recommended.length === 0 && (
                <Message>
                  <MessageText>Nenhum meetup encontrado.</MessageText>
                </Message>
              )}
              <MeetupsList
                showsHorizontalScrollIndicator={false}
                // horizontal
                data={recommended}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <Meetup>
                    <ImageMeetup source={{ uri: `http://10.0.3.2:3333/files/${item.file_id}` }} />
                    <InfoBox>
                      <Info>
                        <Title>{item.title}</Title>
                        <Number>
                          {item.__meta__.subscriptions_count >= 0
                            ? `${item.__meta__.subscriptions_count} membros`
                            : 'Nenhum membro'}
                        </Number>
                      </Info>
                      <DetailsMeetup
                        onPress={() => navigate('Meetup', { id: item.id })}
                        activeOpacity={0.65}
                      >
                        <Icon name="ios-arrow-round-forward" size={16} color="#fff" />
                      </DetailsMeetup>
                    </InfoBox>
                  </Meetup>
                )}
              />
            </Box>
          </ScrollView>
        </Content>
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNavigationFocus,
)(Search);
