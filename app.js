const heading = React.createElement('h1', { id: "heading"}, "Hello Wold!")


const parent = React.createElement('div', {id : "parent"}, [
    React.createElement('div' , {id: "child"} , [
        React.createElement('h1', {}, 'this is h1 tag'),
        React.createElement('h2', {}, 'this is h2 tag')
    ]) ,  React.createElement('div' , {id: "child2"} , [
        React.createElement('h1', {}, 'this is h1 tag'),
        React.createElement('h2', {}, 'this is h2 tag')
    ])
])
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(parent)
root.render(parent)