function DocumentsPanel() {
  try {
    const documents = [
      { id: 1, name: 'Reporte Mensual.pdf', status: 'Completado', date: '2025-11-25' },
      { id: 2, name: 'Proyecto Lambda.docx', status: 'En Proceso', date: '2025-11-26' },
      { id: 3, name: 'Análisis de Datos.xlsx', status: 'Pendiente', date: '2025-11-20' }
    ];

    const getStatusColor = (status) => {
      if (status === 'Completado') return 'bg-green-500';
      if (status === 'En Proceso') return 'bg-[var(--primary-color)]';
      return 'bg-gray-400';
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-lg" data-name="documents-panel" data-file="components/DocumentsPanel.js">
        <h3 className="text-xl font-bold mb-4">Documentos Recientes</h3>
        <div className="space-y-3">
          {documents.map(doc => (
            <div key={doc.id} className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="icon-file-text text-xl text-gray-600"></div>
                <div>
                  <p className="font-bold text-sm">{doc.name}</p>
                  <p className="text-xs text-gray-500">Última modificación: {doc.date}</p>
                </div>
              </div>
              <span className={`${getStatusColor(doc.status)} text-white text-xs px-3 py-1 rounded-full`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('DocumentsPanel component error:', error);
    return null;
  }
}