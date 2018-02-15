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
