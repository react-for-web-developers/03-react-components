import Avatar from './Avatar'

export default function ProfileToFollow() {
  return (
    <div>
      <Avatar />
      <div>
        <span className="name">Someone To Follow</span>
        <span className="handle">@someonetofollow</span>
      </div>
      <button className="follow">Follow</button>
    </div>
  )
}
