import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  List,
  Wallet,
  Target,
  Brain,
  Settings,
  LogOut,
  Search,
  User,
} from "lucide-react";
import React from "react";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-blue-50 border-r shadow-md p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-10 tracking-tight">finanSmart AI</h2>
        <nav className="space-y-2">
          <NavItem to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem to="/transactions" icon={<List size={20} />} label="Transactions" />
          <NavItem to="/budgets" icon={<Wallet size={20} />} label="Budgets" />
          <NavItem to="/objectifs" icon={<Target size={20} />} label="Objectifs" />
          <NavItem to="/analyse-ia" icon={<Brain size={20} />} label="Analyse IA" />
          <NavItem to="/parametres" icon={<Settings size={20} />} label="Paramètres" />
        </nav>
        <div className="mt-auto pt-8">
          <NavItem to="/logout" icon={<LogOut size={20} />} label="Déconnexion" />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        

        <main className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Composant réutilisable pour les éléments de navigation
function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors
         ${isActive ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-white"}`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
