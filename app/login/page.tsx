export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">ログイン</h1>

                <form className="flex flex-col gap-4">
                    <input type="email" placeholder="メールアドレス" className="border p-2 rounded" />
                    <input type="password" placeholder="パスワード" className="border p-2 rounded" />
                    <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700" >
                    ログイン
                    </button>
                </form>
            </div>
        </div>
    )
}