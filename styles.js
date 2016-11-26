
import { Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

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
    width: width - 80
  },
  scrollviewContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view: {
    backgroundColor: 'blue',
    height: 200,
    marginHorizontal: 20,
    width: width - 120
  }
});
