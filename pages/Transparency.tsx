import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { FileText, Download, BarChart2 } from 'lucide-react';

const Transparency: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-aba-blue py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold font-serif mb-2">Transparência</h1>
          <p className="text-blue-200">Prestação de contas clara e acessível.</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 text-center">
              <BarChart2 className="h-12 w-12 text-aba-green mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-1">92%</div>
              <p className="text-gray-600">Dos recursos aplicados diretamente nos projetos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 text-center">
              <BarChart2 className="h-12 w-12 text-aba-orange mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-1">8%</div>
              <p className="text-gray-600">Custos administrativos e captação</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 text-center">
              <BarChart2 className="h-12 w-12 text-aba-blue mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-1">Auditado</div>
              <p className="text-gray-600">Contas aprovadas pelo conselho fiscal</p>
            </div>
          </div>

          <SectionTitle title="Documentos e Relatórios" subtitle="Downloads" centered={false} />
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
             <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                 <tr>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documento</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Período</th>
                   <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ação</th>
                 </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                 {[
                   { name: "Relatório Anual de Atividades", period: "2023" },
                   { name: "Balanço Patrimonial", period: "2023" },
                   { name: "Demonstração de Resultados", period: "2023" },
                   { name: "Estatuto Social", period: "Vigente" },
                   { name: "Certificado CMDCA", period: "Vigente" },
                 ].map((doc, idx) => (
                   <tr key={idx} className="hover:bg-gray-50">
                     <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center">
                         <FileText className="h-5 w-5 text-gray-400 mr-3" />
                         <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                       </div>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                       {doc.period}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                       <a href="#" className="text-aba-blue hover:text-blue-900 flex items-center justify-end">
                         <Download className="h-4 w-4 mr-1" /> Baixar
                       </a>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transparency;