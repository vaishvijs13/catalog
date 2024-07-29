<div className="min-h-screen flex items-center justify-center bg-gray-100">
<div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
  <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Login</h2>
  <form>
    <div className="mb-8">
      <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Email"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type="password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Password"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button">
        Sign In
      </button>
    </div>
  </form>
</div>
</div>