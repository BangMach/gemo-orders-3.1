import Link from "next/link"

export default function Nav() {
  return (
    <aside className="text-white p-4 mb-4">
      <Link href={"/"} className="flex gap-1 mb-4">
        <span> Dashboard</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link href={"/"}>Drink</Link>
        <Link href={"/"}>Breakfast</Link>
        <Link href={"/"}>Order</Link>
        <Link href={"/"}>Setting</Link>
      </nav>
    </aside>
  )
}
