```jsx harmony
<div>
    <Text>Block text</Text>
    <div>
        <Text inline={true}>Inline text</Text> <Text inline={true}>Inline text</Text>
    </div>
    <Text>Block text with <Text inline={true}>Inline text</Text></Text>
</div>
```

```jsx harmony
<div>
    <div><Text type={Text.Type.H1}>Header 1</Text></div>
    <div><Text type={Text.Type.H2}>Header 2</Text></div>
    <div><Text type={Text.Type.H3}>Header 3</Text></div>
    <div><Text type={Text.Type.PARAGRAPH}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi!</Text></div>
    <div><Text type={Text.Type.SMALL_TEXT}>Small Text. Lorem ipsum dolor sit amet.</Text></div>
</div>
```

### Typography relationships

#### H1 + H2
```jsx harmony
<div>
    <Text type={Text.Type.H1}>Header 1</Text>
    <Text type={Text.Type.H2}>Header 2</Text>
</div>
```

#### H1 + P
```jsx harmony
<div>
    <Text type={Text.Type.H1}>Header 1</Text>
    <Text type={Text.Type.PARAGRAPH}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi!</Text>
</div>
```

#### H2 + H3
```jsx harmony
<div>
    <Text type={Text.Type.H2}>Header 2</Text>
    <Text type={Text.Type.H3}>Header 3</Text>
</div>
```

#### H2 + P
```jsx harmony
<div>
    <Text type={Text.Type.H2}>Header 2</Text>
    <Text type={Text.Type.PARAGRAPH}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi!</Text>
</div>
```

#### H3 + P
```jsx harmony
<div>
    <Text type={Text.Type.H3}>Header 3</Text>
    <Text type={Text.Type.PARAGRAPH}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi!</Text>
</div>
```

#### P + H2
```jsx harmony
<div>
    <Text type={Text.Type.PARAGRAPH}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi!</Text>
    <Text type={Text.Type.H2}>Header 2</Text>
</div>
```

#### P + H3
```jsx harmony
<div>
    <Text type={Text.Type.PARAGRAPH}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi!</Text>
    <Text type={Text.Type.H3}>Header 3</Text>
</div>
```

#### P + P
```jsx harmony
<div>
    <Text type={Text.Type.PARAGRAPH}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi!</Text>
    <Text type={Text.Type.PARAGRAPH}>Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi!</Text>
</div>
```

### Composition
```jsx harmony
<div>
    <Text type={Text.Type.H1}>Lorem ipsum.</Text>

    <Text type={Text.Type.H2}>Lorem ipsum dolor.</Text>
    <Text type={Text.Type.H3}>Lorem ipsum dolor sit amet.</Text>
    <Text type={Text.Type.PARAGRAPH}>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
    <Text type={Text.Type.PARAGRAPH}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deserunt harum omnis ratione totam veritatis.</Text>

    <Text type={Text.Type.H2}>Lorem ipsum dolor sit amet.</Text>
    <Text type={Text.Type.PARAGRAPH}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus illum magni necessitatibus odit, placeat porro quas quibusdam voluptatum. Harum?</Text>
    <Text type={Text.Type.H3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, sit.</Text>
    <Text type={Text.Type.PARAGRAPH}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet beatae consequuntur deserunt exercitationem facilis harum illum magni molestiae natus, neque non placeat quaerat quas quis reiciendis repudiandae saepe sapiente tempora temporibus totam unde voluptates. Aperiam laborum quam ratione ut.</Text>
    <Text type={Text.Type.PARAGRAPH}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, sequi!</Text>
</div>
```
