# @shaquillehinds/react-native-dropdown-selector

A beautifully animated, fully customizable dropdown selector for React Native that intelligently adapts to screen position and just works out of the box.

[![npm version](https://img.shields.io/npm/v/@shaquillehinds/react-native-dropdown-selector.svg)](https://www.npmjs.com/package/@shaquillehinds/react-native-dropdown-selector)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎯 **Smart Positioning** - Automatically detects available screen space and renders upward or downward
- 🎨 **Fully Customizable** - Style every element from the button to individual items
- 🔄 **Smooth Animations** - Fluid spring and timing animations with configurable parameters
- 📱 **Cross-Platform** - Works seamlessly on iOS and Android with platform-specific optimizations
- 🎭 **Custom Components** - Replace default components with your own React components
- 🔍 **TypeScript Support** - Full type safety with generic type support
- 🪶 **Lightweight** - Minimal dependencies, built on react-native-essentials
- ♿ **Accessible** - Includes proper touch targets and visual feedback

## 📦 Installation

```bash
npm install @shaquillehinds/react-native-dropdown-selector
```

or

```bash
yarn add @shaquillehinds/react-native-dropdown-selector
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react-native-gesture-handler react-native-reanimated react-native-svg
```

Make sure to complete the installation setup for these libraries as per their documentation.

## 🚀 Basic Usage

```tsx
import { DropDownSelector } from '@shaquillehinds/react-native-dropdown-selector';
import { useState } from 'react';

function MyComponent() {
  const [selectedValue, setSelectedValue] = useState<string>('apple');

  const fruits = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Mango', value: 'mango' },
  ];

  return (
    <DropDownSelector
      items={fruits}
      selectedItem={selectedValue}
      onSelect={setSelectedValue}
      placeholder="Select a fruit"
    />
  );
}
```

## 🎨 Advanced Customization

### Styling the Dropdown Button

```tsx
<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  dropdownButtonProps={{
    backgroundColor: '#007AFF',
    borderRadius: 'large',
    padding: [2, 6],
  }}
  dropdownButtonTextProps={{
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }}
/>
```

### Custom Icon Component

```tsx
import { ChevronDown } from './icons';

<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  DropdownButtonIcon={({ isOpen, expandDirection }) => (
    <ChevronDown
      color="#007AFF"
      style={{
        transform: [{ rotate: isOpen ? '180deg' : '0deg' }],
      }}
    />
  )}
/>;
```

### Custom Dropdown Item Component

```tsx
<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  DropdownItemComponent={({ item, isSelected }) => (
    <View style={styles.customItem}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={[styles.itemText, isSelected && styles.selected]}>
        {item.label}
      </Text>
      {isSelected && <CheckIcon />}
    </View>
  )}
/>
```

### Configuring Animations

```tsx
<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  expandAnimationConfig={{
    type: 'spring',
    speed: 12,
    bounciness: 8,
  }}
  unMountDelayInMilliSeconds={250}
/>
```

### Controlling Expand Direction

```tsx
// Force expand upward
<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  expandDirection="up"
/>

// Force expand downward
<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  expandDirection="down"
/>

// Auto-detect (default behavior)
<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  // expandDirection not specified - automatically detects best direction
/>
```

### Custom Expand Distance

```tsx
<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  expandDistance={250} // Maximum height in pixels
/>
```

## 📚 API Reference

### Props

| Prop                            | Type                              | Required | Description                                       |
| ------------------------------- | --------------------------------- | -------- | ------------------------------------------------- |
| `items`                         | `DropDownItem<T>[]`               | ✅       | Array of items to display in dropdown             |
| `selectedItem`                  | `T`                               | ✅       | Currently selected item value                     |
| `onSelect`                      | `(item: T) => void`               | ✅       | Callback when an item is selected                 |
| `placeholder`                   | `string`                          | ✅       | Placeholder text when no item is selected         |
| `onOpen`                        | `() => void`                      | ❌       | Callback when dropdown opens                      |
| `onClose`                       | `() => void`                      | ❌       | Callback when dropdown closes                     |
| `unMountDelayInMilliSeconds`    | `number`                          | ❌       | Delay before unmounting dropdown (default: 300ms) |
| `isDisabled`                    | `boolean`                         | ❌       | Disables the dropdown selector                    |
| `disableShadow`                 | `boolean`                         | ❌       | Removes shadow from dropdown                      |
| `expandDirection`               | `'up' \| 'down'`                  | ❌       | Forces dropdown to expand in specific direction   |
| `expandDistance`                | `number`                          | ❌       | Maximum height for dropdown content               |
| `expandAnimationConfig`         | `AnimationConfig`                 | ❌       | Custom animation configuration                    |
| `containerProps`                | `LayoutProps`                     | ❌       | Props for the root container                      |
| `dropdownButtonProps`           | `RNPressableLayoutProps`          | ❌       | Props for the dropdown button                     |
| `dropdownButtonTextProps`       | `BaseTextProps`                   | ❌       | Props for the button text                         |
| `DropdownButtonIcon`            | `Component`                       | ❌       | Custom button icon component                      |
| `dropdownScrollViewProps`       | `ScrollViewProps`                 | ❌       | Props for the dropdown ScrollView                 |
| `dropdownContentContainerProps` | `LayoutProps`                     | ❌       | Props for the dropdown content container          |
| `DropdownItemComponent`         | `Component`                       | ❌       | Custom dropdown item component                    |
| `onDropdownItemPress`           | `(item: DropDownItem<T>) => void` | ❌       | Callback when dropdown item is pressed            |
| `dropdownItemProps`             | `TouchableLayoutProps`            | ❌       | Props for individual dropdown items               |
| `dropdownItemTextProps`         | `BaseTextProps`                   | ❌       | Props for dropdown item text                      |
| `DropdownItemSelectedIcon`      | `Component`                       | ❌       | Custom selected item icon component               |

### Types

#### DropDownItem<T>

```typescript
type DropDownItem<T> = {
  label: string; // Display text
  value: T; // Value (can be any type)
};
```

#### AnimationConfig

```typescript
type AnimationConfig =
  | (Omit<Animated.TimingAnimationConfig, 'toValue'> & { type: 'timing' })
  | (Omit<Animated.SpringAnimationConfig, 'toValue'> & { type: 'spring' });
```

### Custom Component Props

#### DropdownButtonIcon

```typescript
type DropdownButtonIconProps = {
  isOpen: boolean;
  expandDirection: 'up' | 'down';
};
```

#### DropdownItemComponent

```typescript
type DropdownItemComponentProps<T> = {
  item: DropDownItem<T>;
  isSelected: boolean;
};
```

#### DropdownItemSelectedIcon

```typescript
type DropdownItemSelectedIconProps<T> = {
  item: DropDownItem<T>;
};
```

## 🎯 Advanced Examples

### With TypeScript Generics

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

function UserSelector() {
  const [selectedUserId, setSelectedUserId] = useState<number>(1);

  const users: DropDownItem<number>[] = [
    { label: 'John Doe', value: 1 },
    { label: 'Jane Smith', value: 2 },
    { label: 'Bob Johnson', value: 3 },
  ];

  return (
    <DropDownSelector<number>
      items={users}
      selectedItem={selectedUserId}
      onSelect={setSelectedUserId}
      placeholder="Select a user"
    />
  );
}
```

### With Complex Objects

```tsx
interface Country {
  code: string;
  name: string;
  flag: string;
}

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState<string>('US');

  const countries: DropDownItem<string>[] = [
    { label: '🇺🇸 United States', value: 'US' },
    { label: '🇨🇦 Canada', value: 'CA' },
    { label: '🇬🇧 United Kingdom', value: 'GB' },
    { label: '🇦🇺 Australia', value: 'AU' },
  ];

  return (
    <DropDownSelector<string>
      items={countries}
      selectedItem={selectedCountry}
      onSelect={setSelectedCountry}
      placeholder="Select a country"
      onDropdownItemPress={(item) => {
        console.log('Selected country:', item.label);
      }}
    />
  );
}
```

### With Lifecycle Callbacks

```tsx
<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  onOpen={() => {
    console.log('Dropdown opened');
    // Track analytics, pause animations, etc.
  }}
  onClose={() => {
    console.log('Dropdown closed');
    // Resume animations, save state, etc.
  }}
  onDropdownItemPress={(item) => {
    console.log('Item pressed:', item);
    // Custom handling before selection
  }}
/>
```

### Fully Customized Theme

```tsx
<DropDownSelector
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
  containerProps={{
    margin: [2, 0],
  }}
  dropdownButtonProps={{
    backgroundColor: '#1E1E1E',
    borderRadius: 'large',
    padding: [3, 5],
    borderWidth: 1,
    borderColor: '#333',
  }}
  dropdownButtonTextProps={{
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  }}
  dropdownContentContainerProps={{
    backgroundColor: '#2A2A2A',
    borderRadius: 'soft',
  }}
  dropdownItemProps={{
    padding: [3, 5],
    backgroundColor: '#2A2A2A',
  }}
  dropdownItemTextProps={{
    color: '#FFFFFF',
    fontSize: 15,
  }}
  disableShadow={false}
/>
```

## 🔧 How It Works

### Smart Positioning

The dropdown automatically measures its position on the screen and determines whether there's enough space to expand downward. If not, it expands upward. This ensures the dropdown is always visible and accessible.

```tsx
// The component automatically:
// 1. Measures its position using onLayout
// 2. Calculates distance to bottom of screen
// 3. Compares with expandDistance (or default maxHeight)
// 4. Renders upward if insufficient space below
// 5. Animates chevron icon to match direction
```

### Animation System

The component uses `react-native-reanimated` for smooth, performant animations:

- **Dropdown expansion**: Configurable spring or timing animation
- **Chevron rotation**: Spring animation that follows expand direction
- **Android shadow**: Timing animation for platform-specific shadow rendering

### Modal Integration

Uses `@shaquillehinds/react-native-essentials` modal system for proper overlay handling, ensuring the dropdown appears above other content with correct z-index management.

## 🎨 Styling with react-native-essentials

This package leverages `@shaquillehinds/react-native-essentials` for its layout and styling system, which provides:

- Predefined border radius sizes (`soft`, `medium`, `large`)
- Shadow utilities with platform-specific handling
- Responsive sizing based on device orientation
- Flexible layout components with intuitive props

Example of essentials-powered styling:

```tsx
<DropDownSelector
  dropdownButtonProps={{
    borderRadius: 'medium', // Uses predefined radius
    padding: [2, 5], // [vertical, horizontal] shorthand
    backgroundColor: 'white',
  }}
/>
```

## 🐛 Troubleshooting

### Dropdown not appearing

Ensure you've installed and configured peer dependencies:

- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-svg`

### Items not scrolling

Check that `react-native-gesture-handler` is properly set up in your app's entry file:

```tsx
import 'react-native-gesture-handler';
// ... rest of your imports
```

### Shadow not showing on Android

The component handles Android shadows differently. If you're still not seeing shadows, try:

- Setting `disableShadow={false}` explicitly
- Checking that your Android API level supports the shadow properties

### Dropdown position incorrect

The component measures position on mount and when opened. If your layout shifts after initial render:

```tsx
// Force remeasure by adding key prop when layout changes
<DropDownSelector
  key={layoutKey}
  items={items}
  selectedItem={selectedValue}
  onSelect={setSelectedValue}
  placeholder="Select option"
/>
```

## 📝 Examples Repository

For more examples and complete implementation patterns, check out the [examples folder](https://github.com/shaquillehinds/react-native-dropdown-selector/tree/main/example) in the repository.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting pull requests.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/shaquillehinds/react-native-dropdown-selector.git

# Install dependencies
yarn install

# Run the example app
yarn example start
```

## 📄 License

MIT © [Shaquille Hinds](https://github.com/shaquillehinds)

## 🙏 Acknowledgments

Built with:

- [@shaquillehinds/react-native-essentials](https://www.npmjs.com/package/@shaquillehinds/react-native-essentials) - Layout and utility components
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) - Smooth animations
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/) - Touch handling
- [react-native-svg](https://github.com/software-mansion/react-native-svg) - Vector graphics

## 📮 Support

- 📧 Email: shaqdulove@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/shaquillehinds/react-native-dropdown-selector/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/shaquillehinds/react-native-dropdown-selector/discussions)

---

Made with ❤️ by [Shaquille Hinds](https://github.com/shaquillehinds)
