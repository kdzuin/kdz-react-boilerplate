### Horizontal options
#### Default Layout
```jsx harmony
<ButtonGroup>
    <Button 
        text="Button"
        type={Button.Type.FILLED} 
    />
    <Button 
        text="Button"
        type={Button.Type.STROKE} 
    />
    <Button 
        text="Button"
        type={Button.Type.MONOCHROME} 
    />
</ButtonGroup>
```
#### Centered layout
```jsx harmony
<ButtonGroup alignment={ButtonGroup.Alignment.CENTERED}>
    <Button 
        text="Button"
        type={Button.Type.FILLED} 
    />
    <Button 
        text="Button"
        type={Button.Type.STROKE} 
    />
    <Button 
        text="Button"
        type={Button.Type.MONOCHROME} 
    />
</ButtonGroup>
```
### Vertical options
#### Default layout
```jsx harmony
<ButtonGroup layout={ButtonGroup.Layout.VERTICAL}>
    <Button 
        text="Button"
        type={Button.Type.FILLED}
    />
    <Button 
        text="Button"
        type={Button.Type.STROKE} 
    />
    <Button 
        text="Button"
        type={Button.Type.MONOCHROME} 
    />
    <Button 
        text="Button"
        type={Button.Type.TRANSPARENT} 
        color={Button.Color.Palette.GRAY_40}
    />
</ButtonGroup>
```

#### Vertical centered layout
```jsx harmony
<ButtonGroup layout={ButtonGroup.Layout.VERTICAL} alignment={ButtonGroup.Alignment.CENTERED}>
    <Button 
        text="Button"
        type={Button.Type.FILLED}
    />
    <Button 
        text="Button"
        type={Button.Type.STROKE} 
    />
    <Button 
        text="Button"
        type={Button.Type.MONOCHROME} 
    />
    <Button 
        text="Button"
        type={Button.Type.TRANSPARENT} 
        color={Button.Color.Palette.GRAY_40}
    />
</ButtonGroup>
```

#### Vertical layout with wide buttons
```jsx harmony
<ButtonGroup layout={ButtonGroup.Layout.VERTICAL}>
    <Button 
        text="Button"
        type={Button.Type.FILLED}
        narrow={false}
    />
    <Button 
        text="Button"
        type={Button.Type.STROKE} 
        narrow={false}
    />
    <Button 
        text="Button"
        type={Button.Type.MONOCHROME} 
        narrow={false}
    />
    <Button 
        text="Button"
        type={Button.Type.TRANSPARENT} 
        color={Button.Color.Palette.GRAY_40}
        narrow={false}
    />
</ButtonGroup>
```
