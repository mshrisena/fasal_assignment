import React from 'react'
import { useParams } from 'react-router-dom';

function Share() {
    const { id } = useParams();

    return (
      <div>
        <h1>Share Page</h1>
        <p>The ID captured from the URL is: {id}</p>
      </div>
    );
}

export default Share