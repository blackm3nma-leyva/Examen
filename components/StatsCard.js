function StatsCard({ title, value, icon, color }) {
  try {
    return (
      <div className={`${color} rounded-lg p-6 shadow-lg`} data-name="stats-card" data-file="components/StatsCard.js">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm font-bold">{title}</p>
            <h3 className="text-white text-3xl font-bold mt-2">{value}</h3>
          </div>
          <div className={`icon-${icon} text-4xl text-white/50`}></div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatsCard component error:', error);
    return null;
  }
}