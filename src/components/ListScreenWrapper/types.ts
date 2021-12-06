import { StyleProp, ViewStyle } from 'react-native';

export type ListScreenWrapperPropsType = {
  children?: Element | null | false | (Element | null | false)[];
  title?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onRefresh?: () => void;
  refreshing?: boolean;
  headerHeight?: number;
};
