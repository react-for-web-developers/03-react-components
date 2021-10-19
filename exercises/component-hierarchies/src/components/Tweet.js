import Avatar from './Avatar'

export default function Tweet() {
  return (
    <div>
      <Avatar />
      <div className="content">
        <div className="content-header">
          <a href="/author-profile">
            <span>Author Name</span>
            <span>@authorhandle</span>
          </a>
        </div>
        <div className="content-text">
          <span>Tweet message!</span>
        </div>
      </div>
      <div className="interaction-bar">
        <div className="comments"><span className="icon"><span className="count">15</span></span></div>
        <div className="retweets">
          <span className="icon">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
            <span className="count">2</span></span></div>
        <div className="likes"><span className="icon"><span className="count">4</span></span></div>
        <div className="share"><button><span className="icon"></span></button></div>
      </div>
    </div>
  )
}
