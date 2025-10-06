// components/dashboard/VolunteerDashboard.tsx
import React from 'react';
import { Calendar, Bell, ChevronRight } from 'lucide-react';
import { DUMMY_EVENTS } from '@/app/lib/data'; // Importação dos dados

const VolunteerDashboard: React.FC = () => {
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

export default VolunteerDashboard;