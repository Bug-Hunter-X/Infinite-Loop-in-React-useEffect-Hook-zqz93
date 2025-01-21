```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The dependency array now includes count, preventing the infinite loop.
    setCount(count + 1);
  }, [count]); // Added count to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```