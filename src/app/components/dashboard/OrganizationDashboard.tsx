import React from 'react';
import { Users, Calendar, Bell, Mail, Send, BarChart3 } from 'lucide-react';
import { DUMMY_VOLUNTEERS, DUMMY_EVENTS } from '@/app/lib/data'; // Importação dos dados

const OrganizationDashboard: React.FC = () => {
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
              <Mail className="h-5 w-5 text-gray-500 cursor-pointer hover:text-purple-600" />
              <Send className="h-5 w-5 text-gray-500 cursor-pointer hover:text-purple-600" />
              <Bell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-purple-600" />
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

export default OrganizationDashboard;