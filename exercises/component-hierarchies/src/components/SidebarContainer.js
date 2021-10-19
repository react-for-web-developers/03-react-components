import ShowMore from './ShowMore';

export default function SidebarContainer({ title, children }) {
  return (
    <div>
      <h2>Title</h2>
      {children}
      <ShowMore />
    </div>
  )
}
