import React, { Component } from 'react';
import clamp from '../../utils/clamp';
import COLORS from '../../utils/colors';
import NoMoreCards from '../Card/NoMoreCards';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SWIPE_THRESHOLD = 120;

class SwipeCards extends Component {

  _animateEntrance() {
    Animated.spring(
      this.state.enter,
      { toValue: 1, friction: 8 }
    ).start();
  }

  _goToNextCard() {
    const currentCardIdx = this.state.cardIdx;
    const newIdx = currentCardIdx + 1;

    // Checks to see if last card.
    // If props.loop=true, will start again from the first card.
    const card = newIdx > this.props.cards.length - 1
      ? this.props.loop ? this.props.cards.get(0) : null
      : this.props.cards.get(newIdx);

    this.setState({
      card: card,
      cardIdx: newIdx,
    });
  }

  _resetState() {
    this.state.pan.setValue({x: 0, y: 0});
    this.state.enter.setValue(0);
    this._goToNextCard();
    this._animateEntrance();
  }

  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5),
      card: this.props.cards.get(0),
      cardIdx: 0,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        let velocity;

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
          this.state.pan.x._value > 0
            ? this.props.handleYup(this.state.card)
            : this.props.handleNope(this.state.card);

          this.props.cardRemoved
            ? this.props.cardRemoved(this.props.cards.indexOf(this.state.card))
            : null;

          Animated.decay(this.state.pan, {
            velocity: {x: velocity, y: vy},
            deceleration: 0.98,
          }).start(this._resetState.bind(this));
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 4,
          }).start();
        }
      },
    });
  }

  componentDidMount() {
    this._animateEntrance();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards && nextProps.cards.size > 0) {
      this.setState({
        card: nextProps.cards.get(0),
      });
    }
  }

  renderCard(card) {
    return this.props.renderCard(card);
  }

  renderNoMoreCards() {
    return (<NoMoreCards navigator={this.props.navigator} />);
  }

  render() {
    const { pan, enter } = this.state;

    const [translateX, translateY] = [pan.x, pan.y];

    const rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ['-30deg', '0deg', '30deg']});
    const opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]});
    const scale = enter;

    const animatedCardstyles = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};

    const yupOpacity = pan.x.interpolate({inputRange: [0, 150], outputRange: [0, 1]});
    const yupScale = pan.x.interpolate({inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp'});
    const animatedYupStyles = {transform: [{scale: yupScale}], opacity: yupOpacity};

    const nopeOpacity = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0]});
    const nopeScale = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp'});
    const animatedNopeStyles = {transform: [{scale: nopeScale}], opacity: nopeOpacity};

    return (
      <View style={styles.container}>
        { this.state.card
            ? (
            <Animated.View style={[styles.card, animatedCardstyles]} {...this._panResponder.panHandlers}>
              {this.renderCard(this.state.card)}
            </Animated.View>
            )
            : this.renderNoMoreCards() }


        { this.props.renderNope
          ? this.props.renderNope(pan)
          : (
              this.props.showNope
              ? (
                <Animated.View style={[styles.nope, animatedNopeStyles]}>
                  <Text style={styles.nopeText}>{this.props.noText ? this.props.noText : 'Nope!'}</Text>
                </Animated.View>
                )
              : null
            )
        }

        { this.props.renderYup
          ? this.props.renderYup(pan)
          : (
              this.props.showYup
              ? (
                <Animated.View style={[styles.yup, animatedYupStyles]}>
                  <Text style={styles.yupText}>{this.props.yupText ? this.props.yupText : 'Yup!'}</Text>
                </Animated.View>
              )
              : null
            )
        }

      </View>
    );
  }

}

SwipeCards.propTypes = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  yup: {
    borderColor: COLORS.teal,
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    bottom: 20,
    borderRadius: 5,
    right: 20,
  },
  yupText: {
    fontSize: 16,
    color: COLORS.teal,
  },
  nope: {
    borderColor: COLORS.red,
    borderWidth: 2,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 20,
  },
  nopeText: {
    fontSize: 16,
    color: COLORS.red,
  },
});

export default SwipeCards;
