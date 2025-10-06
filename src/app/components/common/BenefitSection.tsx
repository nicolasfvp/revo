import React from 'react';

const BenefitSection: React.FC = () => {
    return (
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
    );
};

export default BenefitSection;