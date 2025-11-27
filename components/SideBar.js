function SideBar({ isOpen, setIsOpen }) {
  try {
    return (
      <div className={`relative z-10 bg-[var(--secondary-color)] h-screen fixed transition-all ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`} data-name="sidebar" data-file="components/SideBar.js">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="text-4xl text-[var(--primary-color)]">λ</div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <div className="icon-menu text-xl"></div>
            </button>
          </div>
          
          <nav className="space-y-4">
            <a href="dashboard.html" className="flex items-center gap-3 text-white hover:text-[var(--primary-color)] transition">
              <div className="icon-home text-lg"></div>
              <span className="font-bold">Inicio</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-[var(--primary-color)] transition">
              <div className="icon-user text-lg"></div>
              <span className="font-bold">Usuario</span>
            </a>
            <button onClick={logout} className="flex items-center gap-3 text-white hover:text-[var(--primary-color)] transition w-full">
              <div className="icon-log-out text-lg"></div>
              <span className="font-bold">Cerrar Sesión</span>
            </button>
          </nav>
        </div>
        
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)} 
            className="absolute top-4 -right-10 bg-[var(--secondary-color)] text-white p-2 rounded-r"
          >
            <div className="icon-chevron-right text-lg"></div>
          </button>
        )}
      </div>
    );
  } catch (error) {
    console.error('SideBar component error:', error);
    return null;
  }
}