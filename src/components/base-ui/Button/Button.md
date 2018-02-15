### Basic Usage

**Normal state** & **Disabled state**
```jsx
const { BrowserRouter } = require('react-router-dom');
;<BrowserRouter>
    <ButtonGroup>
        <Button
            text="Button"
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Link"
            href="https://badoo.com"
        />
        <Button
            text="Link to _blank"
            href="https://badoo.com"
            openInBlank={true}
        />
        <Button
            text="Real Button"
            isRealButton={true}
        />
        <Button
            icon={(
                <Icon name="icon-pencil" />
            )}
            text="Button"
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
</BrowserRouter>
```

### Types

#### ```Button.Type```
```jsx harmony
<ButtonGroup layout={ButtonGroup.Layout.VERTICAL}>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            isLoading={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            isLoading={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            isLoading={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            isLoading={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
</ButtonGroup>
```

#### ```Button.Type``` and ```Button.Color```
```jsx harmony
<ButtonGroup layout={ButtonGroup.Layout.VERTICAL}>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            color={Button.Color.Palette.BLUE_RAIN}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            color={Button.Color.Palette.BLUE_RAIN}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            color={Button.Color.Palette.BLUE_RAIN}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            color={Button.Color.Palette.BLUE_RAIN}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            color={Button.Color.Palette.BLUE_RAIN}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            color={Button.Color.Palette.BLUE_RAIN}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            color={Button.Color.Palette.BLUE_RAIN}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            color={Button.Color.Palette.BLUE_RAIN}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            color={Button.Color.Palette.BLUE_RAIN}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            color={Button.Color.Palette.BLUE_RAIN}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            color={Button.Color.Palette.BLUE_RAIN}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            color={Button.Color.Palette.BLUE_RAIN}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            color={Button.Color.Palette.BLUE_RAIN}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            color={Button.Color.Palette.BLUE_RAIN}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            color={Button.Color.Palette.BLUE_RAIN}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            color={Button.Color.Palette.BLUE_RAIN}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
</ButtonGroup>
```

#### ```Button.Type``` and ```light={true}```
```jsx harmony
<ButtonGroup layout={ButtonGroup.Layout.VERTICAL}>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            light={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            light={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            light={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            light={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            icon={<Icon name="icon-pencil" />}
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            light={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            light={true}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            light={true}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            light={true}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            light={true}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            icon={<Icon name="icon-pencil" />}
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            light={true}
            isHovered={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            light={true}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            light={true}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            light={true}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            light={true}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            icon={<Icon name="icon-pencil" />}
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            light={true}
            isPressed={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
    <ButtonGroup>
        <Button
            text="Filled"
            type={Button.Type.FILLED}
            light={true}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Stroke"
            type={Button.Type.STROKE}
            light={true}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Transparent"
            type={Button.Type.TRANSPARENT}
            light={true}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            light={true}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
        <Button
            icon={<Icon name="icon-pencil" />}
            text="Monochrome"
            type={Button.Type.MONOCHROME}
            light={true}
            isDisabled={true}
            onClick={function () {
                console.log('button clicked');
            }}
        />
    </ButtonGroup>
</ButtonGroup>
```

### Sizes

**Button.Size.SMALL**
```jsx
<ButtonGroup>
    <Button
        text="Size.SMALL"
        size={Button.Size.SMALL}
        onClick={function () {
            console.log('button clicked');
        }}
    />
    <Button
        icon={(
            <Icon name="icon-pencil" />
        )}
        text="Size.SMALL"
        size={Button.Size.SMALL}
        onClick={function () {
            console.log('button clicked');
        }}
    />
</ButtonGroup>
```

**Button.Size.MEDIUM**
```jsx
<ButtonGroup>
    <Button
        text="Size.MEDIUM"
        size={Button.Size.MEDIUM}
        onClick={function () {
            console.log('button clicked');
        }}
    />
    <Button
        icon={(
            <Icon name="icon-pencil" />
        )}
        text="Size.MEDIUM"
        size={Button.Size.MEDIUM}
        onClick={function () {
            console.log('button clicked');
        }}
    />
</ButtonGroup>
```

**Button.Size.LARGE**
```jsx
<ButtonGroup>
    <Button
        text="Size.LARGE"
        size={Button.Size.LARGE}
        onClick={function () {
            console.log('button clicked');
        }}
    />
    <Button
        icon={(
            <Icon name="icon-pencil" />
        )}
        text="Size.LARGE"
        size={Button.Size.LARGE}
        onClick={function () {
            console.log('button clicked');
        }}
    />
</ButtonGroup>
```

**Button.Size.XLARGE**
```jsx
<ButtonGroup>
    <Button
        text="Size.XLARGE"
        size={Button.Size.XLARGE}
        onClick={function () {
            console.log('button clicked');
        }}
    />
    <Button
        icon={(
            <Icon name="icon-pencil" />
        )}
        text="Size.XLARGE"
        size={Button.Size.XLARGE}
        onClick={function () {
            console.log('button clicked');
        }}
    />
</ButtonGroup>
```

### Colors

#### Palette
```jsx harmony
class PaletteButtons extends React.Component {
    render() {
        const mockData = Button.Color.Palette;
        const result = [];
        Object.values(mockData).forEach(function (key, index) {
            result.push(
                <div style={{width: 250, maxWidth: '100%'}} key={key}>
                    <Button
                        text={`Palette.${Object.keys(mockData)[index]}`}
                        narrow={false}
                        color={key}
                        onClick={function () {
                            console.log('button clicked');
                        }}
                    />
                </div>
            );
        });
        return (
            <ButtonGroup>
                {result}
            </ButtonGroup>
        )
    }
}
;<PaletteButtons/>
```
