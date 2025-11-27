function TopBar({ user }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);

    return (
      <div className="relative z-20 bg-black border-b-2 border-[var(--primary-color)] px-6 py-4 flex justify-end items-center gap-4" data-name="topbar" data-file="components/TopBar.js">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="text-white hover:text-[var(--primary-color)] transition"
          >
            <div className="icon-bell text-xl"></div>
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded shadow-lg p-4">
              <p className="text-sm text-gray-600">Sin notificaciones nuevas</p>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-black to-[var(--primary-color)] flex items-center justify-center">
            <span className="text-white font-bold text-sm">{user.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          <span className="text-white font-bold">{user.name}</span>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TopBar component error:', error);
    return null;
  }
}