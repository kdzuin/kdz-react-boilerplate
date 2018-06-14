## General declaration

### Layout
#### Normal layout
```js
<CtaBox>
    <CtaBox.Header text={"Lorem ipsum dolor."}/>
    <CtaBox.Text text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque distinctio error excepturi hic illo illum, itaque veniam veritatis voluptatum."}/>
    <CtaBox.Buttons>
        <Button
            text={"Perform an action!"}
            onClick={() => console.log('CTA button was clicked')}
        />
        <Button
            type={Button.Type.STROKE}
            text={"And maybe something else"}
            onClick={() => console.log('CTA button was clicked')}
        />
    </CtaBox.Buttons>
</CtaBox>
```
#### Compact layout
```js
<CtaBox isCompact={true}>
    <CtaBox.Header text={"Lorem ipsum dolor."}/>
    <CtaBox.Text text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque distinctio error excepturi hic illo illum, itaque veniam veritatis voluptatum."}/>
    <CtaBox.Buttons>
        <Button
            text={"Perform an action!"}
            onClick={() => console.log('CTA button was clicked')}
        />
        <Button
            type={Button.Type.STROKE}
            text={"And maybe something else"}
            onClick={() => console.log('CTA button was clicked')}
        />
    </CtaBox.Buttons>
</CtaBox>
```

### Colour scheme
#### Light scheme
```js
<div style={{background: '#7000e3'}}>
    <CtaBox isLight={true}>
        <CtaBox.Header text={"Lorem ipsum dolor."}/>
        <CtaBox.Text text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque distinctio error excepturi hic illo illum, itaque veniam veritatis voluptatum."}/>
        <CtaBox.Buttons>
            <Button
                color={Button.Color.Palette.WHITE}
                text={"Perform an action!"}
                onClick={() => console.log('CTA button was clicked')}
            />
            <Button
                color={Button.Color.Palette.WHITE}
                type={Button.Type.STROKE}
                text={"And maybe something else"}
                onClick={() => console.log('CTA button was clicked')}
            />
        </CtaBox.Buttons>
    </CtaBox>
</div>
```
