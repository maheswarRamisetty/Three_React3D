
// src/App.tsx
import React from 'react';
import ModelViewer from './ModelViewer';

const App = () => {
  const modelUrl = '/path/to/your/model.gltf'; //use the above one furnitue_set.glb

  return (
    <div className="App">
      <ModelViewer modelUrl={modelUrl} />
    </div>
  );
};

export default App;
