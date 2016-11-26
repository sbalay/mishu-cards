
import { Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const cardWidth = width - 40;
const cardHorizontalMargin = 5;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    flex: 1
  },
  scrollview: {
    flex: 1,
    backgroundColor: 'red',
    overflow: 'visible',
    width: cardWidth + cardHorizontalMargin * 2
  },
  scrollviewContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view: {
    backgroundColor: 'blue',
    height: 200,
    marginHorizontal: cardHorizontalMargin,
    width: cardWidth
  }
});
