'use client';

import React from 'react';
import { LogIn, Plus, Home, HeartHandshake } from 'lucide-react';

// Tipagem para as props
interface HeaderProps {
    isLoggedIn: boolean;
    onNavigate: (page: string) => void;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onNavigate, onLogout }) => {
    const handleAuthClick = () => {
        if (isLoggedIn) {
            onLogout();
        } else {
            onNavigate('login');
        }
    };

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
                    <HeartHandshake className="text-purple-600 h-8 w-8" />
                    <h1 className="text-2xl font-bold text-purple-600">REVO</h1>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <button
                        onClick={() => onNavigate('home')}
                        className="text-gray-600 hover:text-purple-600 transition duration-300 flex items-center"
                    >
                        <Home className="h-4 w-4 mr-1" /> Início
                    </button>
                    <button
                        onClick={() => onNavigate('register')}
                        className="text-gray-600 hover:text-purple-600 transition duration-300 flex items-center"
                    >
                        <Plus className="h-4 w-4 mr-1" /> Cadastre-se
                    </button>
                    <button
                        onClick={handleAuthClick}
                        className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition duration-300 flex items-center"
                    >
                        <LogIn className="h-4 w-4 mr-2" /> {isLoggedIn ? 'Sair' : 'Entrar'}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;