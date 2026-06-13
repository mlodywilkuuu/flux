const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* 1. Sidebar - Nawigacja (Teams/Grupy) */}
      <aside className="w-64 border-r border-gray-800 p-4">
        <h1 className="text-xl font-bold text-blue-500 mb-6">Flux</h1>
        <nav className="space-y-4">
          <div className="hover:text-blue-400 cursor-pointer">Strumień Główny</div>
          <div className="hover:text-blue-400 cursor-pointer">Wiadomości (Skype)</div>
          <div className="hover:text-blue-400 cursor-pointer">Zespoły (Teams)</div>
        </nav>
      </aside>

      {/* 2. Główny Strumień (Feed) */}
      <main className="flex-1 overflow-y-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Witaj w Flux</h2>
        {/* Tu wrzucimy komponent postów */}
        <div className="space-y-4">
           {/* Przykładowy Post */}
           <div className="bg-gray-800 p-4 rounded-lg">Użytkownik: Treść posta...</div>
        </div>
      </main>

      {/* 3. Panel Aktywności (Pasek boczny Skype/Presence) */}
      <aside className="w-72 border-l border-gray-800 p-4">
        <h3 className="font-bold text-gray-400 mb-4">Aktywni znajomi</h3>
        <div className="space-y-2">
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500"></span>
             Jan Kowalski
           </div>
        </div>
      </aside>
    </div>
  );
};
