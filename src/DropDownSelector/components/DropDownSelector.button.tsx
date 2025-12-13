import {
  AnimateComponent,
  BaseText,
  Layout,
  RNPressableLayout,
  shadowStyles,
  maxZIndex,
} from '@shaquillehinds/react-native-essentials';
import type { DropDownSelectorProps } from '../DropDownSelector.types';
import type { DropDownSelectorControllerReturnType } from '../DropDownSelector.controller';
import { ChevronUp } from '../svgs/ChevronUp';

export function DropDownSelectorButton<T>({
  props,
  controller,
}: {
  props: DropDownSelectorProps<T>;
  controller: DropDownSelectorControllerReturnType<T>;
}) {
  return (
    <RNPressableLayout
      disabled={props.isDisabled}
      activeOpacity={1}
      flexDirection="row"
      backgroundColor={'white'}
      borderRadius="medium"
      padding={[1, 5]}
      spaceBetween
      center
      {...props.dropdownButtonProps}
      style={[
        {
          zIndex: maxZIndex + 3,
          ...shadowStyles({ shadowOpacity: 0.1 }),
        },
        props.dropdownButtonProps?.style,
      ]}
      onPress={(e) => {
        controller.pageYRef.current = e.nativeEvent.pageY;
        controller.setShowItems((prev) => !prev);
        props.dropdownButtonProps?.onPress?.(e);
      }}
    >
      <BaseText
        numberOfLines={1}
        {...props.dropdownButtonTextProps}
        style={[{ maxWidth: '90%' }, props.dropdownButtonTextProps?.style]}
      >
        {controller.label || props.placeholder || 'Select an item'}
      </BaseText>
      {props.DropdownButtonIcon ? (
        <props.DropdownButtonIcon
          isOpen={controller.showItems}
          expandDirection={
            props.expandDirection || controller.canRenderDown ? 'down' : 'up'
          }
        />
      ) : controller.canRenderDown === null ? undefined : (
        <Layout {...props.dropdownButtonIconContainerProps}>
          <AnimateComponent
            ref={controller.animateChevronRef}
            style={controller.chevronAnimatedStyle}
            initialPosition={controller.canRenderDown ? -1 : 1}
            toPosition={controller.chevronAnimationConfig}
          >
            <ChevronUp color={'black'} {...props.dropdownButtonIconProps} />
          </AnimateComponent>
        </Layout>
      )}
    </RNPressableLayout>
  );
}
