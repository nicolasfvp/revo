// app/page.tsx
'use client';

import React, { useState } from 'react';

// Importando componentes modularizados
import Header from '@/app/components/layout/Header';
import BenefitSection from '@/app/components/common/BenefitSection';
import LoginPage from '@/app/components/auth/LoginPage';
import RegisterPage from '@/app/components/auth/RegisterPage';
import VolunteerDashboard from '@/app/components/dashboard/VolunteerDashboard';
import OrganizationDashboard from '@/app/components/dashboard/OrganizationDashboard';

// Tipagem para o papel do usuário
type UserRole = 'volunteer' | 'organization' | null;

// Componente para a Página Inicial (Home)
const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section className="max-w-[85%] m-auto text-center py-20 bg-white/10 backdrop-blur-xl rounded-xl shadow-lg">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Conectando <span className="text-purple-600">Voluntários</span> e <span className="text-purple-600">Causas</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Uma plataforma para simplificar a gestão de voluntários, facilitando a organização, a escala e a comunicação para eventos.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <button
          onClick={() => onNavigate('login')}
          className="w-full md:w-auto px-8 py-3 bg-purple-600 text-white rounded-lg shadow-xl hover:bg-purple-700 transition duration-300 transform hover:scale-105"
        >
          Acessar Minha Conta
        </button>
        <button
          onClick={() => console.log('Explorar Eventos')}
          className="w-full md:w-auto px-8 py-3 bg-white text-purple-600 rounded-lg shadow-xl border border-purple-600 hover:bg-purple-50 transition duration-300 transform hover:scale-105"
        >
          Explorar Eventos
        </button>
      </div>
      <BenefitSection />
    </section>
  );
};


// Componente para o layout principal e navegação (App)
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null); // 'volunteer' ou 'organization'

  // Simula o login com base na seleção do usuário
  const handleLogin = (role: 'volunteer' | 'organization') => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentPage(role === 'volunteer' ? 'volunteer-dashboard' : 'organization-dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    if (!isLoggedIn) {
      switch (currentPage) {
        case 'login':
          return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
        case 'register':
          return <RegisterPage onSuccessfulRegister={() => setCurrentPage('login')} />;
        case 'home':
        default:
          return <HomePage onNavigate={setCurrentPage} />;
      }
    } else {
      switch (userRole) {
        case 'volunteer':
          return <VolunteerDashboard />;
        case 'organization':
          return <OrganizationDashboard />;
        default:
          return <HomePage onNavigate={setCurrentPage} />;
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 relative">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 bg-[url('/bg1.jpeg')] bg-cover bg-center bg-fixed opacity-50 z-0"></div>

      {/* Cabeçalho Modularizado */}
      <Header
        isLoggedIn={isLoggedIn}
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
      />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;