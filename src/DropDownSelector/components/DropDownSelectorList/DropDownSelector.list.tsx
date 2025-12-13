import {
  AnimateComponent,
  isAndroid,
  shadowStyles,
} from '@shaquillehinds/react-native-essentials';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import type { DropDownSelectorControllerReturnType } from '../../DropDownSelector.controller';
import type { DropDownSelectorProps } from '../../DropDownSelector.types';
import { DropDownColumn } from './DropDownColumn';
import { DropDownRow } from './DropDownRow';

export function DropDownSelectorList<T>({
  props,
  controller,
}: {
  props: DropDownSelectorProps<T>;
  controller: DropDownSelectorControllerReturnType<T>;
}) {
  return (
    <View
      style={
        !props.disableShadow
          ? { ...shadowStyles({ shadowOpacity: 0.15 }) }
          : undefined
      }
    >
      {!props.disableShadow && isAndroid && (
        <AnimateComponent
          ref={controller.animateAndroidShadowRef}
          initialPosition={0}
          style={controller.androidShadowAnimatedStyle}
          autoStart
          toPosition={controller.androidShadowAnimationConfig}
        />
      )}

      <ScrollView
        ref={controller.scrollViewRef}
        scrollEnabled={props.dropDownItemsLayout === 'row'}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        {...props.dropdownScrollViewProps}
        style={[
          controller.scrollViewStyle,
          props.dropdownScrollViewProps?.style,
        ]}
      >
        <AnimateComponent
          ref={controller.animateComponentRef}
          style={controller.selectionItemsListAnimatedStyle}
          initialPosition={
            controller.canRenderDown
              ? -controller.relativeY(110)
              : controller.relativeY(110)
          }
          autoStart
          toPosition={
            props.expandAnimationConfig
              ? { ...props.expandAnimationConfig, toValue: 0 }
              : controller.selectionItemsListAnimationConfig
          }
        >
          {props.dropDownItemsLayout === 'row' ? (
            <DropDownRow controller={controller} props={props} />
          ) : (
            <DropDownColumn controller={controller} props={props} />
          )}
        </AnimateComponent>
      </ScrollView>
    </View>
  );
}
