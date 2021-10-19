import Avatar from './Avatar'

export default function AccountSwitcherButton() {
  return (
    <button>
      <Avatar />
      <div className="nameTitle">Some Name</div>
      <div className="nameHandle">@somename</div>
      <button className="more">...</button>
    </button>
  )
}
