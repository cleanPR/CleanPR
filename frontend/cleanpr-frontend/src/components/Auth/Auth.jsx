import React from 'react'

function Auth() {

  const handleLogin = () => {
    window.location.href = "http://localhost:8081/oauth2/authorization/github"
  }


  return (
    <div>
      <button onClick={handleLogin}>Login with github</button>
    </div>
  )
}

export default Auth
