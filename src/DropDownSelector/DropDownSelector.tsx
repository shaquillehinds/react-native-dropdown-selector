import {
  Layout,
  maxZIndex,
  ComponentMounter,
  ModalForegroundWrapper,
  ModalWrapper,
} from '@shaquillehinds/react-native-essentials';
import { DropDownSelectorController } from './DropDownSelector.controller';
import type { DropDownSelectorProps } from './DropDownSelector.types';
import { DropDownSelectorButton } from './components/DropDownSelector.button';
import { DropDownSelectorList } from './components/DropDownSelectorList';

export function DropDownSelector<T>(props: DropDownSelectorProps<T>) {
  const controller = DropDownSelectorController(props);

  return (
    <Layout
      {...props.containerProps}
      style={[{ zIndex: maxZIndex }, props.containerProps?.style]}
      onLayout={controller.handleLayout}
    >
      <ComponentMounter
        showComponent={controller.showItems}
        setShowComponent={controller.setShowItems}
        unMountDelayInMilliSeconds={controller.unMountDelayInMilliSeconds}
        onComponentShow={props.onOpen}
        onComponentClose={props.onClose}
        component={
          <ModalWrapper enableBackgroundContentPress>
            <ModalForegroundWrapper>
              <DropDownSelectorList props={props} controller={controller} />
            </ModalForegroundWrapper>
          </ModalWrapper>
        }
      />
      <DropDownSelectorButton props={props} controller={controller} />
    </Layout>
  );
}
