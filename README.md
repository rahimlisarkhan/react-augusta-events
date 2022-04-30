# React Augusta Events - ( useDragDrop, others - coming soon )

> One of the simplest forms of encryption

## Install

```
$ npm install --save react-augusta-events
```

### or

```
$ npm i -S react-augusta-events
```

## Usage

### 1. useDragDrop

- [Demo](https://codesandbox.io/s/usedragdrop-react-augusta-events-ifyk0s?file=/src/App.tsx)

```js
import {useDragDrop} from 'react-augusta-events/lib';


...
function App() {
  const { elRef, listening, isDropZone, isUpload } = useDragDrop({
    onUploadFile: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <div
          ref={elRef}
          className={isDropZone ? "in-drop" : "drop-zone"}
          {...listening}
        >
          {isUpload ? "Successufly upload!" : ( isDropZone ? "Now Drop you File" : "Upload you file" )}
        </div>
      </header>
    </div>
  );
}
```

## API

### 1. useDragDrop

Field: draggable : boolean - for draggable item,
<br/>
callback: onStart,
<br/>
callback: onUploadFile,
<br/>
callback: onEnterZone,
<br/>
callback: onOver,
<br/>
callback: onLeaveZone,
<br/>

## Developer

- [Sarkhan Rahimli](https://github.com/rahimlisarkhan)

[!["Your Developing Software Engineer"](https://media-exp1.licdn.com/dms/image/C4D03AQENKrP-fvxDeA/profile-displayphoto-shrink_800_800/0/1651258516656?e=1656547200&v=beta&t=QaiZibOa3cTNN64bFzNSt8BWO7NnTqDJkaXM1VP-yrk)](https://github.com/rahimlisarkhan)
