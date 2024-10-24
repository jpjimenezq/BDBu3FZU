import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onToggleAuthForm: () => void;
}

export function LoginForm({ onLogin, onToggleAuthForm }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        onLogin(email, password);
      } else {
        setErrorMessage(data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      setErrorMessage('Ocurrió un error en la conexión. Inténtalo de nuevo.');
      console.error('Error en el login:', error);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="space-y-2 relative">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff size={20} className="text-gray-500" />
              ) : (
                <Eye size={20} className="text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          LOGIN
        </button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <button
          onClick={onToggleAuthForm} 
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}
