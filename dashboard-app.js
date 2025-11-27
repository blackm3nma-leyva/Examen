class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 text-red-600">Error en la aplicación</div>;
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const user = getCurrentUser();

    React.useEffect(() => {
      if (!user) {
        window.location.href = 'index.html';
      }
    }, []);

    if (!user) return null;

    return (
      <div 
        className="min-h-screen"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        data-name="dashboard-app" 
        data-file="dashboard-app.js"
      >
        <div className="absolute inset-0 bg-[var(--primary-color)]/20"></div>
        <TopBar user={user} />
        <div className="relative flex">
          <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <main className={`flex-1 p-6 transition-all ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <StatsCard title="Total Usuarios" value="1,234" icon="users" color="bg-red-300" />
              <StatsCard title="Documentos" value="567" icon="file-text" color="bg-orange-300" />
              <StatsCard title="Proyectos" value="89" icon="briefcase" color="bg-green-500" />
              <StatsCard title="Actividad" value="95%" icon="activity" color="bg-blue-700" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Calendar />
              <ActivityChart />
            </div>
            
            <DocumentsPanel />
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);