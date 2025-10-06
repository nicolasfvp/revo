'use client';

import React, { useState } from 'react';
import { User, Briefcase } from 'lucide-react';

interface LoginPageProps {
    onLogin: (role: 'volunteer' | 'organization') => void;
    onNavigate: (page: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate }) => {
    const [selectedRole, setSelectedRole] = useState<'volunteer' | 'organization'>('volunteer');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulação de autenticação. Chama a função de login com o papel selecionado
        onLogin(selectedRole);
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-2xl border border-purple-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Acessar Conta REVO</h2>

            {/* Seletor de Perfil */}
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    type="button"
                    onClick={() => setSelectedRole('volunteer')}
                    className={`p-4 rounded-lg text-center transition-all duration-300 w-full ${
                        selectedRole === 'volunteer'
                            ? 'bg-purple-600 text-white shadow-lg ring-2 ring-purple-400'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    <User className="h-6 w-6 mx-auto mb-2" />
                    <span className="font-semibold">Voluntário</span>
                </button>
                <button
                    type="button"
                    onClick={() => setSelectedRole('organization')}
                    className={`p-4 rounded-lg text-center transition-all duration-300 w-full ${
                        selectedRole === 'organization'
                            ? 'bg-purple-600 text-white shadow-lg ring-2 ring-purple-400'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    <Briefcase className="h-6 w-6 mx-auto mb-2" />
                    <span className="font-semibold">Organização</span>
                </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Campos de formulário aqui... */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input type="email" id="email-login" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2" placeholder="seu.email@exemplo.com" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                    <input type="password" id="password-login" name="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2" placeholder="********" />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg shadow-xl hover:bg-purple-700 transition duration-300 font-semibold text-lg transform hover:scale-[1.01]"
                >
                    Entrar como {selectedRole === 'volunteer' ? 'Voluntário' : 'Organização'}
                </button>
                <p className="text-center text-sm text-gray-600 pt-2">
                    Não tem uma conta? <button type="button" onClick={() => onNavigate('register')} className="text-purple-600 hover:text-purple-800 font-semibold">Cadastre-se agora</button>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;