import {
  BaseText,
  Layout,
  TouchableLayout,
} from '@shaquillehinds/react-native-essentials';
import type { DropDownSelectorControllerReturnType } from '../../DropDownSelector.controller';
import type { DropDownSelectorProps } from '../../DropDownSelector.types';
export function DropDownRow<T>({
  controller,
  props,
}: {
  controller: DropDownSelectorControllerReturnType<T>;
  props: DropDownSelectorProps<T>;
}) {
  return (
    <Layout
      borderRadius="soft"
      backgroundColor={'#FAFAFA'}
      padding={controller.canRenderDown ? [5, 0, 0, 0] : [0, 0, 5, 0]}
      showsHorizontalScrollIndicator={false}
      {...props.dropdownContentContainerProps}
      flexDirection="row"
      scrollable
      horizontal
      onLayout={controller.handleSelectionItemsListLayout}
    >
      {props.items.map((item) =>
        props.DropdownItemComponent ? (
          <props.DropdownItemComponent
            key={item.label}
            item={item}
            isSelected={item.value === props.selectedItem}
          />
        ) : (
          <TouchableLayout
            key={item.label}
            height={4}
            padding={[0, 3]}
            spaceEnd
            center
            {...props.dropdownItemProps}
            style={[props.dropdownItemProps?.style]}
            onPress={() => {
              props.onSelect(item.value);
              controller.setShowItems(false);
              props.onDropdownItemPress?.(item);
            }}
          >
            <BaseText numberOfLines={1} {...props.dropdownItemTextProps}>
              {item.label}
            </BaseText>
            {item.value === props.selectedItem ? (
              <Layout
                absolute
                top={0}
                square={1}
                backgroundColor={props.DropdownSelectedItemIconColor || '#888'}
                borderRadius="full"
              />
            ) : null}
          </TouchableLayout>
        )
      )}
    </Layout>
  );
}
