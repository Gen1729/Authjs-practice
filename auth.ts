import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github" // 👈 追加

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google, 
    GitHub // 👈 配列に追加するだけ！
  ],
})