'use client';

import React, { useState, useEffect } from 'react';
import { LogIn, Users, Calendar, Bell, Mail, Send, Settings, Home, ListTodo, Plus, ChevronRight, BarChart3, HeartHandshake } from 'lucide-react';

// Dados de exemplo para simular um banco de dados
const DUMMY_EVENTS = [
  { id: 1, name: 'Maratona Solidária', date: '25/10/2025', description: 'Ajude a organizar a maratona anual de arrecadação de fundos.' },
  { id: 2, name: 'Festival de Arte Urbana', date: '12/11/2025', description: 'Participe da montagem e gestão de estandes no festival de arte da cidade.' },
  { id: 3, name: 'Mutirão de Limpeza', date: '01/12/2025', description: 'Ajude a limpar a orla da praia após a temporada de férias.' },
];

const DUMMY_VOLUNTEERS = [
  { id: 101, name: 'Ana Silva', email: 'ana.s@email.com', group: 'Limpeza Urbana' },
  { id: 102, name: 'João Santos', email: 'joao.s@email.com', group: 'Logística' },
  { id: 103, name: 'Maria Oliveira', email: 'maria.o@email.com', group: 'Atendimento' },
];

const DUMMY_GROUPS = [
  { id: 1, name: 'Limpeza Urbana', members: 15 },
  { id: 2, name: 'Logística', members: 8 },
  { id: 3, name: 'Atendimento', members: 12 },
];

// Componente para o layout principal e navegação
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'volunteer' ou 'organization'

  // Simula o login com base na seleção do usuário
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentPage(role === 'volunteer' ? 'volunteer-dashboard' : 'organization-dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentPage('home');
  };

  // Renderiza a página atual baseada no estado
  const renderPage = () => {
    if (!isLoggedIn) {
      switch (currentPage) {
        case 'home':
        default:
          return <HomePage onLogin={handleLogin} />;
        case 'register':
          return <RegisterPage />;
      }
    } else {
      switch (userRole) {
        case 'volunteer':
          return <VolunteerDashboard onLogout={handleLogout} />;
        case 'organization':
          return <OrganizationDashboard onLogout={handleLogout} />;
        default:
          return <HomePage onLogin={handleLogin} />;
      }
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 relative">
      <div className="absolute inset-0 bg-[url('/bg1.jpeg')] bg-cover bg-center bg-fixed opacity-50 z-0"></div>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <HeartHandshake className="text-purple-600 h-8 w-8" />
            <h1 className="text-2xl font-bold text-purple-600">REVO</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-gray-600 hover:text-purple-600 transition duration-300 flex items-center"
            >
              <Home className="h-4 w-4 mr-1" /> Início
            </button>
            <button
              onClick={() => setCurrentPage('register')}
              className="text-gray-600 hover:text-purple-600 transition duration-300 flex items-center"
            >
              <Plus className="h-4 w-4 mr-1" /> Cadastre-se
            </button>
            <button
              onClick={() => !isLoggedIn ? setCurrentPage('home') : handleLogout()}
              className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition duration-300 flex items-center"
            >
              <LogIn className="h-4 w-4 mr-2" /> {isLoggedIn ? 'Sair' : 'Entrar'}
            </button>
          </nav>
          <div className="md:hidden">
            {/* Menu responsivo pode ser adicionado aqui */}
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 relative z-10">
        {renderPage()}
      </main>
    </div>
  );
};

// Componente para a página inicial
const HomePage = ({ onLogin }) => {
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
          onClick={() => onLogin('volunteer')}
          className="w-full md:w-auto px-8 py-3 bg-purple-600 text-white rounded-lg shadow-xl hover:bg-purple-700 transition duration-300 transform hover:scale-105"
        >
          Sou Voluntário
        </button>
        <button
          onClick={() => onLogin('organization')}
          className="w-full md:w-auto px-8 py-3 bg-white text-purple-600 rounded-lg shadow-xl border border-purple-600 hover:bg-purple-50 transition duration-300 transform hover:scale-105"
        >
          Sou Organização
        </button>
      </div>
      <div className="mt-12 p-8 backdrop-blur-md rounded-lg">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Benefícios do REVO</h3>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-purple-600 mb-2">Para Voluntários</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Sensação de realização pessoal</li>
              <li>Acesso fácil a oportunidades de voluntariado</li>
              <li>Comunicação direta com organizadores</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg">
            <h4 className="text-xl font-semibold text-purple-600 mb-2">Para Organizações</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Economia com pessoal e recursos</li>
              <li>Banco de dados centralizado de voluntários</li>
              <li>Maior facilidade e eficiência no gerenciamento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente para a página de registro (simulada)
const RegisterPage = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white/80 backdrop-blur-md rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Cadastro de Voluntário</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" placeholder="seu.email@exemplo.com" />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

// Componente do Dashboard para Voluntário
const VolunteerDashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md">Olá, Voluntário!</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card de Eventos Alocados */}
        <div className="p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="text-purple-600 mr-3 h-6 w-6" />
            <h3 className="text-xl font-semibold text-gray-800">Seus Eventos</h3>
          </div>
          <ul className="space-y-4">
            {DUMMY_EVENTS.slice(0, 2).map(event => (
              <li key={event.id} className="p-4 bg-gray-50/70 rounded-lg shadow-sm flex items-start space-x-3">
                <ChevronRight className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-purple-600">{event.name}</h4>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-4 text-purple-600 hover:text-purple-700 font-semibold transition duration-300">
            Ver todos
          </button>
        </div>
        {/* Card de Notificações */}
        <div className="p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Bell className="text-purple-600 mr-3 h-6 w-6" />
            <h3 className="text-xl font-semibold text-gray-800">Notificações</h3>
          </div>
          <ul className="space-y-4">
            <li className="p-4 bg-yellow-50/70 rounded-lg shadow-sm">
              <p className="text-sm font-semibold text-gray-800">Nova escala disponível para a Maratona Solidária.</p>
            </li>
            <li className="p-4 bg-blue-50/70 rounded-lg shadow-sm">
              <p className="text-sm font-semibold text-gray-800">Lembrete: Mutirão de Limpeza na próxima semana!</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Componente do Dashboard para Organização
const OrganizationDashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md">Painel de Organização</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card de Gerenciamento de Voluntários */}
        <div className="p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Users className="text-purple-600 mr-3 h-6 w-6" />
            <h3 className="text-xl font-semibold text-gray-800">Voluntários</h3>
          </div>
          <ul className="space-y-4">
            {DUMMY_VOLUNTEERS.slice(0, 3).map(volunteer => (
              <li key={volunteer.id} className="p-4 bg-gray-50/70 rounded-lg shadow-sm flex justify-between items-center">
                <span className="font-semibold">{volunteer.name}</span>
                <span className="text-sm text-gray-500">{volunteer.group}</span>
              </li>
            ))}
          </ul>
          <button className="mt-4 text-purple-600 hover:text-purple-700 font-semibold transition duration-300">
            Gerenciar Voluntários
          </button>
        </div>
        {/* Card de Eventos */}
        <div className="p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="text-purple-600 mr-3 h-6 w-6" />
            <h3 className="text-xl font-semibold text-gray-800">Eventos</h3>
          </div>
          <ul className="space-y-4">
            {DUMMY_EVENTS.map(event => (
              <li key={event.id} className="p-4 bg-gray-50/70 rounded-lg shadow-sm">
                <span className="font-semibold block">{event.name}</span>
                <span className="text-sm text-gray-500">{event.date}</span>
              </li>
            ))}
          </ul>
          <button className="mt-4 text-purple-600 hover:text-purple-700 font-semibold transition duration-300">
            Gerenciar Eventos
          </button>
        </div>
        {/* Card de Notificações (simulação de envio) */}
        <div className="p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Bell className="text-purple-600 mr-3 h-6 w-6" />
            <h3 className="text-xl font-semibold text-gray-800">Enviar Notificação</h3>
          </div>
          <textarea
            className="w-full h-24 p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="Digite a mensagem para os voluntários..."
          ></textarea>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span className="font-semibold">Canais:</span>
            <div className="flex space-x-3">
              <Mail className="h-5 w-5 text-gray-500 cursor-pointer hover:text-purple-600" title="Email" />
              <Send className="h-5 w-5 text-gray-500 cursor-pointer hover:text-purple-600" title="SMS/WhatsApp" />
              <Bell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-purple-600" title="App" />
            </div>
          </div>
          <button className="w-full mt-4 py-2 px-4 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
            Enviar
          </button>
        </div>
      </div>
      {/* Seção de Relatórios */}
      <div className="mt-8 p-6 bg-white/80 backdrop-blur-md rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <BarChart3 className="text-purple-600 mr-3 h-6 w-6" />
          <h3 className="text-xl font-semibold text-gray-800">Relatórios</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Aqui você poderá gerar relatórios de participação e engajamento dos voluntários.
        </p>
        <button className="py-2 px-4 bg-white text-purple-600 rounded-lg border border-purple-600 hover:bg-purple-50 transition duration-300">
          Gerar Relatório de Exemplo
        </button>
      </div>
    </div>
  );
};

export default App;
