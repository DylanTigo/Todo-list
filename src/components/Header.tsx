import Profile from "./ui/Profile";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
        <a href="/" className="font-bold">Dylan List</a>
        <Profile/>
    </header>
  )
}
