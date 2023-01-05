import React, { useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(props.change);

      
      
  
  return (
    <>
    {    
        error && <div>{somethingNotDefined}</div>
    }
    </>
  );
};

export default Component;
