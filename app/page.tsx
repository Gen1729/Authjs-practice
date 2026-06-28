// app/page.tsx
import { auth } from "@/auth"
import { SignInWithGoogleButton, SignInWithGitHubButton, SignOutButton } from "@/components/auth-buttons" // 👈 新しいボタンをインポート

export default async function Home() {
  const session = await auth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-gray-900">
      <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Auth.js デモアプリ</h1>

        {session ? (
          // ログインしている場合（GoogleでもGitHubでも共通でここが表示されます）
          <div>
            <p className="text-green-600 font-medium mb-4">ログイン中</p>
            {session.user?.image && (
              <img src={session.user.image} alt="Avatar" className="w-20 h-20 rounded-full mx-auto mb-4 border" />
            )}
            <h2 className="text-lg font-semibold">{session.user?.name}</h2>
            <p className="text-gray-500 text-sm mb-6">{session.user?.email}</p>
            <SignOutButton />
          </div>
        ) : (
          // ログインしていない場合（縦にボタンを並べる）
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 mb-3">ログインしていません。いずれかの方法で認証してください。</p>
            <SignInWithGoogleButton />
            <SignInWithGitHubButton /> {/* 👈 追加 */}
          </div>
        )}
      </div>
    </main>
  )
}