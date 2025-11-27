function LoginForm() {
  try {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      const user = authenticateUser(username, password);
      if (user) {
        window.location.href = 'dashboard.html';
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    };

    return (
      <div className="relative z-10 bg-blur border border-white/20 rounded-lg p-8 w-96" data-name="login-form" data-file="components/LoginForm.js">
        <div className="flex items-center justify-center mb-6">
          <div className="text-6xl text-[var(--primary-color)]">λ</div>
        </div>
        <h1 className="text-3xl font-bold text-white text-center mb-6">Lambda System</h1>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/90 text-gray-900"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white font-bold mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/90 text-gray-900"
              required
            />
          </div>

          {error && <p className="text-red-400 text-center mb-4">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-white font-bold py-3 rounded hover:opacity-90 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}