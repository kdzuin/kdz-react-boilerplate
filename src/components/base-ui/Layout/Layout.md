### General Information

The Layout is used as a main container for the markup in the Project. The component is **absolutely** positioned with 
minimal height of 100%.

It usually consists of:
* header;
* content(s);
* footer.

```jsx harmony
<div style={{
    position: 'relative',
    maxWidth: '100%',
    height: 480,
    outline: '1px solid #ccc'
}}>
    <Layout>
        <Layout.Header>
            <Text>Header block</Text>
        </Layout.Header>
        <Layout.Content>
            <Text>Content block</Text>
        </Layout.Content>
        <Layout.Footer>
            <Text>Footer block</Text>
        </Layout.Footer>
    </Layout>
</div>
```