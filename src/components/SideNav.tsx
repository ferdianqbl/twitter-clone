import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function SideNav() {
  const session = useSession();
  const user = session?.data?.user;

  return (
    <nav className="sticky bottom-0 top-0 px-2 py-4">
      <ul className="flex flex-col gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user != null && (
          <li>
            <Link href={`profiles/${user.id}`}>Profile</Link>
          </li>
        )}
        {user != null ? (
          <li>
            <button onClick={() => void signOut()}>Log Out</button>
          </li>
        ) : (
          <li>
            <button onClick={() => void signIn()}>Log In</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
