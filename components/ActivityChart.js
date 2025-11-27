const ChartJS = window.Chart;

function ActivityChart() {
  try {
    const chartRef = React.useRef(null);
    const chartInstance = React.useRef(null);

    React.useEffect(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new ChartJS(ctx, {
          type: 'line',
          data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
              label: 'Actividad',
              data: [65, 78, 90, 81, 96, 72, 88],
              borderColor: '#ff8c00',
              backgroundColor: 'rgba(255, 140, 0, 0.1)',
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            plugins: { legend: { display: false } }
          }
        });
      }

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, []);

    return (
      <div className="bg-white border-2 border-[var(--primary-color)] rounded-lg p-6 shadow-lg" data-name="activity-chart" data-file="components/ActivityChart.js">
        <h3 className="text-xl font-bold mb-4">Actividad del Usuario</h3>
        <canvas ref={chartRef}></canvas>
      </div>
    );
  } catch (error) {
    console.error('ActivityChart component error:', error);
    return null;
  }
}