import React, { useState } from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export default function DashboardUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions] = useState([
    { date: "15/04/2024", description: "Supermarché", category: "Alimentation", amount: -85 },
    { date: "14/04/2024", description: "Salaire", category: "Revenu", amount: 2500 },
    { date: "13/04/2024", description: "Essence", category: "Transport", amount: -45 },
    { date: "12/04/2024", description: "Netflix", category: "Loisirs", amount: -12 },
  ]);

  const filteredTransactions = transactions.filter((t) =>
    `${t.date} ${t.description} ${t.category} ${t.amount}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const pieData = [
    { name: "Alimentation", value: 400 },
    { name: "Transport", value: 300 },
    { name: "Loisirs", value: 200 },
    { name: "Santé", value: 100 },
  ];

  const COLORS = ["#60a5fa", "#34d399", "#fbbf24", "#f87171"];

  const barData = [
    { name: "Jan", revenu: 2400, depenses: 1398 },
    { name: "Fév", revenu: 2210, depenses: 980 },
    { name: "Mar", revenu: 2290, depenses: 3908 },
    { name: "Avr", revenu: 2000, depenses: 2780 },
  ];

  return (
    <div className="space-y-6">
      {/* Barre de recherche */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Recherche transaction..."
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cartes Statistiques */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Solde Actuel" value="4 200 €" note="+2% ce mois" />
        <Card title="Dépenses Mensuelles" value="1 450 €" note="Alim. 30%, Transp. 20%" />
        <Card title="Épargne" value="500 €" note="Objectif : 10 000 €" />
        <Card title="Alertes IA" value="Optimise ton budget loisirs" note="150 € non utilisés" />
      </section>

      {/* Graphiques */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold text-gray-700 mb-2">Dépenses par Catégorie</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold text-gray-700 mb-2">Cash Flow Mensuel</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenu" fill="#34d399" />
              <Bar dataKey="depenses" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Transactions filtrées */}
      <section className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold text-gray-700 mb-4">Dernières Transactions</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-600">
              <th className="pb-2">Date</th>
              <th>Description</th>
              <th>Catégorie</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((t, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{t.date}</td>
                  <td>{t.description}</td>
                  <td>{t.category}</td>
                  <td className={t.amount < 0 ? "text-red-500" : "text-green-600"}>
                    {t.amount < 0 ? "-" : "+"}{Math.abs(t.amount)} €
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">Aucune transaction trouvée.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Conseils IA */}
      <section className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold text-gray-700 mb-2">Conseils IA</h3>
        <p className="text-gray-600 text-sm">
          Tu as dépensé <strong>20% de plus</strong> en restaurants ce mois-ci. Essaye de cuisiner à la maison pour économiser <strong>100 €</strong> !
        </p>
      </section>
    </div>
  );
}

function Card({ title, value, note }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col justify-between">
      <h4 className="text-sm font-medium text-gray-600">{title}</h4>
      <div className="text-xl font-semibold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{note}</div>
    </div>
  );
}
