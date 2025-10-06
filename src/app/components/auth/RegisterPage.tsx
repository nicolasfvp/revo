'use client';

import React, { useState } from 'react';
import { User, Briefcase } from 'lucide-react';

interface RegisterPageProps {
    onSuccessfulRegister: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onSuccessfulRegister }) => {
    const [registerType, setRegisterType] = useState<'volunteer' | 'organization'>('volunteer');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Cadastro de ${registerType === 'volunteer' ? 'Voluntário' : 'Organização'} simulado com sucesso! Redirecionando para login...`);
        onSuccessfulRegister();
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-2xl border border-purple-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Crie sua Conta REVO</h2>

            {/* Seletor de Tipo de Cadastro */}
            <div className="flex justify-center space-x-4 mb-6">
                <button
                    type="button"
                    onClick={() => setRegisterType('volunteer')}
                    className={`py-2 px-4 rounded-full transition-all duration-300 font-semibold ${
                        registerType === 'volunteer'
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    <User className="inline h-4 w-4 mr-2" /> Sou Voluntário
                </button>
                <button
                    type="button"
                    onClick={() => setRegisterType('organization')}
                    className={`py-2 px-4 rounded-full transition-all duration-300 font-semibold ${
                        registerType === 'organization'
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    <Briefcase className="inline h-4 w-4 mr-2" /> Sou Organização
                </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Campos de formulário aqui... */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">{registerType === 'volunteer' ? 'Nome Completo' : 'Nome da Organização'}</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2" placeholder={registerType === 'volunteer' ? 'Seu nome' : 'ONG Exemplo de Ajuda'} />
                </div>
                {registerType === 'organization' && (
                     <div>
                        <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">CNPJ (apenas números)</label>
                        <input type="text" id="cnpj" name="cnpj" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2" placeholder="00.000.000/0001-00" />
                    </div>
                )}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input type="email" id="email-register" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2" placeholder="seu.email@exemplo.com" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Crie uma Senha</label>
                    <input type="password" id="password-register" name="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2" placeholder="Mínimo 6 caracteres" />
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300 font-semibold">
                    Cadastrar {registerType === 'volunteer' ? 'Voluntário' : 'Organização'}
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;