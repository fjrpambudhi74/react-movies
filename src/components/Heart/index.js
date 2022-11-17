import React from 'react'
import './index.css'

function Heart({iconActive}) {
  return (
    <div className="heart-icon">
      <input
        id="heart"
        type="checkbox"
        defaultChecked={iconActive}
      />
      <label for="heart">❤</label>
    </div>
  );
}

export default Heart