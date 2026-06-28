import { signIn, signOut } from "@/auth"

// ログインボタン
export function SignInWithGoogleButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="w-full px-4 py-2 bg-green-900 text-white rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2">
        Googleでログイン
      </button>
    </form>
  )
}

export function SignInWithGitHubButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit" className="w-full px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2">
        GitHubでログイン
      </button>
    </form>
  )
}

// ログアウトボタン
export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
        ログアウト
      </button>
    </form>
  )
}