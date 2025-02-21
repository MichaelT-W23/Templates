import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/RouterBtn.css'

function RouterBtn({ path, buttonText }) {
  return (
    <Link to={path} className="button">
      {buttonText}
    </Link>
  );
}

export default RouterBtn;