const HistorialModule = (() => {
    let state = {
        history: [
            { 
                id: 1, 
                status: 'Realizada', 
                appointmentDate: '2025-02-15',
                requestDate: '2025-02-10',
                service: 'Corte de Cabello', 
                stylist: 'María González', 
                total: '$200' 
            },
            { 
                id: 2, 
                status: 'Confirmada', 
                appointmentDate: '2025-02-28',
                requestDate: '2025-02-18',
                service: 'Tinte Completo', 
                stylist: 'Carlos Ruiz', 
                total: '$500' 
            },
            { 
                id: 3, 
                status: 'Rechazada', 
                appointmentDate: '2025-02-20',
                requestDate: '2025-02-12',
                service: 'Manicure', 
                stylist: 'Ana Martínez', 
                total: '$150' 
            },
            { 
                id: 4, 
                status: 'Pendiente', 
                appointmentDate: '2025-03-05',
                requestDate: '2025-02-22',
                service: 'Corte y Tinte', 
                stylist: 'María González', 
                total: '$650' 
            },
            { 
                id: 5, 
                status: 'Realizada', 
                appointmentDate: '2025-02-10',
                requestDate: '2025-02-05',
                service: 'Pedicure', 
                stylist: 'Ana Martínez', 
                total: '$180' 
            },
            { 
                id: 6, 
                status: 'Perdida', 
                appointmentDate: '2025-02-18',
                requestDate: '2025-02-14',
                service: 'Tratamiento Capilar', 
                stylist: 'Carlos Ruiz', 
                total: '$300' 
            }
        ],
        filters: {
            search: '',
            status: 'all',
            sortOrder: 'desc'
        }
    };

    const loadHTML = async () => {
        const container = document.getElementById('historial-section');
        if (!container) return;
        try {
            const response = await fetch('../HTML/historial.html');
            const html = await response.text();
            container.innerHTML = html;
            setupEventListeners();
            render();
        } catch (error) {
            console.error('Error cargando historial:', error);
            container.innerHTML = '<p class="placeholder-text">Error cargando el módulo</p>';
        }
    };

    const setupEventListeners = () => {
        // Búsqueda
        const searchInput = document.getElementById('historySearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                state.filters.search = e.target.value.toLowerCase();
                render();
            });
        }

        // Filtro de estado
        const statusFilter = document.getElementById('historyStatusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => {
                state.filters.status = e.target.value;
                render();
            });
        }

        // Ordenamiento
        const sortOrder = document.getElementById('historySortOrder');
        if (sortOrder) {
            sortOrder.addEventListener('change', (e) => {
                state.filters.sortOrder = e.target.value;
                render();
            });
        }

        // Limpiar filtros
        const clearFiltersBtn = document.getElementById('clearHistoryFilters');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => {
                state.filters = {
                    search: '',
                    status: 'all',
                    sortOrder: 'desc'
                };

                if (searchInput) searchInput.value = '';
                if (statusFilter) statusFilter.value = 'all';
                if (sortOrder) sortOrder.value = 'desc';

                render();
            });
        }
    };

    const getFilteredHistory = () => {
        let filtered = [...state.history];

        // Aplicar búsqueda
        if (state.filters.search) {
            filtered = filtered.filter(item => {
                const searchTerm = state.filters.search;
                return (
                    item.appointmentDate.includes(searchTerm) ||
                    item.service.toLowerCase().includes(searchTerm) ||
                    item.stylist.toLowerCase().includes(searchTerm) ||
                    item.status.toLowerCase().includes(searchTerm)
                );
            });
        }

        // Aplicar filtro de estado
        if (state.filters.status !== 'all') {
            filtered = filtered.filter(item => item.status === state.filters.status);
        }

        // Aplicar ordenamiento
        filtered.sort((a, b) => {
            const dateA = new Date(a.appointmentDate);
            const dateB = new Date(b.appointmentDate);
            
            if (state.filters.sortOrder === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        return filtered;
    };

    const getStatusClass = (status) => {
        const statusMap = {
            'Pendiente': 'pendiente',
            'Confirmada': 'confirmada',
            'Rechazada': 'rechazada',
            'Perdida': 'perdida',
            'Realizada': 'realizada'
        };
        return statusMap[status] || '';
    };

    const render = () => {
        const tbody = document.getElementById('historyTableBody');
        if (!tbody) return;
        
        const filtered = getFilteredHistory();

        if (filtered.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="no-history">No se encontraron citas con los filtros aplicados</td></tr>';
            return;
        }

        tbody.innerHTML = filtered.map(item => `
            <tr>
                <td><span class="status-badge ${getStatusClass(item.status)}">${item.status}</span></td>
                <td>${Utils.formatDate(item.appointmentDate)}</td>
                <td>${Utils.formatDate(item.requestDate)}</td>
                <td>${item.service}</td>
                <td>${item.stylist}</td>
                <td>${item.total}</td>
            </tr>
        `).join('');
    };

    const initialize = async () => {
        await loadHTML();
    };

    const show = () => {
        NavigationManager.showSection('historial-section');
        render();
    };

    return { initialize, show };
})();
