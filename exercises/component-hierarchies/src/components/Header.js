import React from 'react'
import Avatar from './Avatar'

export default function Header() {
  return (
    <div>
      <Avatar/>
      <form action="">
        <label htmlFor="tweet">
          <input id="tweet" type="text" placeholder="What's happening" />
        </label>
        <button type="submit">Tweet</button>
      </form>
    </div>
  )
}
