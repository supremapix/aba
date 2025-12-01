import React, { useState } from 'react';
import Button from '../components/Button';
import { Heart, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonorArea: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center text-aba-blue mb-4">
            <Heart className="h-10 w-10 fill-current" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 font-serif">
            {isLogin ? 'Área do Doador' : 'Criar Conta'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin 
              ? 'Acesse para ver seus recibos e relatórios.' 
              : 'Junte-se a nós e transforme vidas.'}
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm -space-y-px">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="sr-only">Nome Completo</label>
                <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-aba-blue focus:border-aba-blue focus:z-10 sm:text-sm" placeholder="Nome Completo" />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">E-mail</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${isLogin ? 'rounded-t-md' : ''} focus:outline-none focus:ring-aba-blue focus:border-aba-blue focus:z-10 sm:text-sm`} placeholder="Endereço de e-mail" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-aba-blue focus:border-aba-blue focus:z-10 sm:text-sm" placeholder="Senha" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {isLogin && (
              <>
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-aba-blue focus:ring-aba-blue border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Lembrar-me</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-aba-blue hover:text-aba-darkBlue">Esqueceu a senha?</a>
                </div>
              </>
            )}
          </div>

          <div>
            <Button type="submit" fullWidth className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-aba-blue hover:bg-aba-darkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aba-blue">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-blue-300 group-hover:text-blue-200" aria-hidden="true" />
              </span>
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </Button>
          </div>
        </form>

        <div className="text-center mt-4">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-gray-600 hover:text-aba-blue font-medium"
          >
            {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já é doador? Faça login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorArea;