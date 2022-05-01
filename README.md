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

- [Demo 1](https://codesandbox.io/s/usedragdrop-react-augusta-events-ifyk0s?file=/src/App.tsx)
```js

import { useDragDrop } from 'react-augusta-events/lib';


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
<br/>
<br/>


### 2. useClipboard

- [Demo 2](https://codesandbox.io/s/gallant-hill-qz49cn?file=/src/App.tsx:23-930)

```js
import { useClipboard } from "react-augusta-events/lib";
import { useState } from "react";

export default function App() {
  let [value, setValue] = useState("");
  let { elRef, boards, isCopy, isPaste, isCut } = useClipboard({
    copyValue: (data) => {
      console.log("copy", data);
    },
    cutValue: (data) => {
      console.log("cut", data);
    },
    pasteValue: (data) => {
      console.log("paste", data);
      setValue(data.pasteText);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>{value}</h1>
        {isCopy && <p>"Copy code!"</p>}
        {isCut && <p>"Cut code!"</p>}
        {isPaste && <p>"Paste code!"</p>}
        <input
          ref={elRef}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          className="copyCard"
          {...boards}
        />
      </header>
    </div>
  );
}

```

- [Demo 3](https://codesandbox.io/s/useclipboard-react-augusta-events-2h04e4?file=/src/App.tsx:148-160)

```js
import { useClipboard } from 'react-augusta-events/lib';


...
  let { elRef, boards, isCopy } = useClipboard({
    copyValue: (data) => {
      console.log("copy",data);
    },
  })

  return (
    <div className="App">
    <header className="App-header">
      {isCopy && <h2>"Copy code!"</h2>}
      <div ref={elRef} className="copyCard" {...boards}>
        #f4bf4a 
      </div>
    
    </header>
  </div>
  );
```

## API
Field: isCopy : boolean - for copy text,
Field: isPaste : boolean - for paste text,
Field: isCut : boolean - for cut text,

<br/>
callback: copyValue,
<br/>
callback: pasteValue,
<br/>
callback: cutValue,
<br/>
callback: onOver,
<br/>
callback: onLeaveZone,
<br/>
## Developer

- [Sarkhan Rahimli](https://github.com/rahimlisarkhan)

[!["Your Developing Software Engineer"](https://media-exp1.licdn.com/dms/image/C4D03AQENKrP-fvxDeA/profile-displayphoto-shrink_800_800/0/1651258516656?e=1656547200&v=beta&t=QaiZibOa3cTNN64bFzNSt8BWO7NnTqDJkaXM1VP-yrk)](https://github.com/rahimlisarkhan)
