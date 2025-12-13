import {
  BaseText,
  Layout,
  TouchableLayout,
  RadioIcon,
} from '@shaquillehinds/react-native-essentials';
import type { DropDownSelectorControllerReturnType } from '../../DropDownSelector.controller';
import type { DropDownSelectorProps } from '../../DropDownSelector.types';
export function DropDownColumn<T>({
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
      {...props.dropdownContentContainerProps}
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
            flexDirection="row"
            center
            spaceBetween
            padding={[1, 5]}
            {...props.dropdownItemProps}
            onPress={() => {
              props.onSelect(item.value);
              controller.setShowItems(false);
              props.onDropdownItemPress?.(item);
            }}
          >
            <Layout width={'85%'}>
              <BaseText numberOfLines={1} {...props.dropdownItemTextProps}>
                {item.label}
              </BaseText>
            </Layout>
            {item.value === props.selectedItem ? (
              props.DropdownItemSelectedIcon ? (
                <props.DropdownItemSelectedIcon item={item} />
              ) : (
                <RadioIcon
                  isSelected={true}
                  selectedColor={props.DropdownSelectedItemIconColor}
                />
              )
            ) : null}
          </TouchableLayout>
        )
      )}
    </Layout>
  );
}
