import { useState } from 'react';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import authImage from '../../projetSoutenance/img/auth.png';
import auth from '../../projetSoutenance/img/authentification.jpg';
import React from 'react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Fond flou */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: `url(${auth})` }}
      />
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Conteneur principal */}
      <div className="relative z-10 w-full max-w-3xl">
        <div
          className={`bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden transition-all duration-500 ${
            isLogin ? 'scale-100 animate-scale-in' : 'scale-95 animate-scale-out'
          }`}
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white/5 p-6">
              <img
                src={authImage}
                alt="Illustration"
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>

            {/* Formulaire */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center text-white space-y-4">
              <h2 className="text-4xl font-bold text-center mb-2">
                {isLogin ? 'Connexion' : 'Inscription'}
              </h2>
              <p className="text-center text-gray-300 mb-4 text-lg">
                {isLogin
                  ? 'Connexion sécurisée à votre espace'
                  : 'Créer votre compte FinanSmart AI'}
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="relative">
                    <UserIcon className="w-6 h-6 text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Nom"
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      required
                    />
                  </div>
                )}

                <div className="relative">
                  <EnvelopeIcon className="w-6 h-6 text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Adresse email"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <LockClosedIcon className="w-6 h-6 text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Mot de passe"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    required
                  />
                </div>

                {!isLogin && (
                  <div className="relative">
                    <LockClosedIcon className="w-6 h-6 text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirmer mot de passe"
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition text-lg font-medium shadow-sm hover:shadow-blue-500/40"
                >
                  {isLogin ? 'Se connecter' : "S'inscrire"}
                </button>
              </form>

              <div className="text-center text-sm mt-4 text-gray-300">
                {isLogin ? (
                  <>
                    Pas encore de compte ?{' '}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-blue-400 hover:underline"
                    >
                      Créer un compte
                    </button>
                  </>
                ) : (
                  <>
                    Déjà un compte ?{' '}
                    <button
                      onClick={() => setIsLogin(true)}
                      className="text-blue-400 hover:underline"
                    >
                      Se connecter
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
