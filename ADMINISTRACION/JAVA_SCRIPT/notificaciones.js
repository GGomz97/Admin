const NotificacionesModule = (() => {
    let state = {
        notifications: [
            { 
                id: 1, 
                client: 'Juan Pérez', 
                service: 'Corte de Cabello', 
                date: '2025-02-25', 
                time: '10:00',
                requestDate: '2025-02-20',
                stylist: 'María González',
                duration: '1 hora',
                total: '$200',
                status: 'pendientes' 
            },
            { 
                id: 2, 
                client: 'María López', 
                service: 'Tinte y Tratamiento', 
                date: '2025-02-26', 
                time: '14:00',
                requestDate: '2025-02-21',
                stylist: 'Carlos Ruiz',
                duration: '2 horas',
                total: '$500',
                status: 'pendientes' 
            },
            { 
                id: 3, 
                client: 'Carlos Gómez', 
                service: 'Manicure', 
                date: '2025-02-24', 
                time: '11:00',
                requestDate: '2025-02-19',
                stylist: 'Ana Martínez',
                duration: '45 min',
                total: '$150',
                status: 'confirmadas' 
            },
            { 
                id: 4, 
                client: 'Sofía Díaz', 
                service: 'Corte y Tinte', 
                date: '2025-02-20', 
                time: '15:30',
                requestDate: '2025-02-15',
                stylist: 'María González',
                duration: '2.5 horas',
                total: '$650',
                status: 'realizadas' 
            }
        ],
        currentFilter: 'pendientes',
        expandedNotifications: new Set(),
        contextMenuTarget: null
    };

    const loadHTML = async () => {
        const container = document.getElementById('notificaciones-section');
        if (!container) return;
        try {
            const response = await fetch('../HTML/notificaciones.html');
            const html = await response.text();
            container.innerHTML = html;
            setupEventListeners();
            render(state.currentFilter);
        } catch (error) {
            console.error('Error cargando notificaciones:', error);
            container.innerHTML = '<p class="placeholder-text">Error cargando el módulo</p>';
        }
    };

    const setupEventListeners = () => {
        // Pestañas de filtrado
        document.querySelectorAll('.notification-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.notification-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                state.currentFilter = tab.dataset.status;
                state.expandedNotifications.clear();
                render(state.currentFilter);
            });
        });

        // Link al historial
        const historyLink = document.getElementById('viewHistoryLink');
        if (historyLink) {
            historyLink.addEventListener('click', (e) => {
                e.preventDefault();
                NavigationManager.updateActiveNavItem('historial');
                HistorialModule.show();
            });
        }

        // Cerrar menú contextual al hacer clic fuera
        document.addEventListener('click', (e) => {
            const contextMenu = document.getElementById('notificationContextMenu');
            if (contextMenu && !contextMenu.contains(e.target)) {
                contextMenu.classList.remove('active');
            }
        });
    };

    const render = (status) => {
        const container = document.getElementById('notificationsContainer');
        if (!container) return;
        
        const filtered = state.notifications.filter(n => n.status === status);
        
        if (filtered.length === 0) {
            container.innerHTML = '<div class="no-notifications">No hay notificaciones en esta categoría.</div>';
            return;
        }
        
        container.innerHTML = filtered.map(notification => `
            <div class="notification-card ${state.expandedNotifications.has(notification.id) ? 'expanded' : ''}" data-id="${notification.id}">
                <div class="notification-header" onclick="NotificacionesModule.toggleExpand(${notification.id})">
                    <div class="notification-info">
                        <div class="notification-client">${notification.client}</div>
                        <div class="notification-service">${notification.service}</div>
                    </div>
                    <div class="notification-header-actions">
                        ${status === 'pendientes' || status === 'confirmadas' ? 
                            `<i class="fas fa-ellipsis-v notification-menu-icon" onclick="NotificacionesModule.showContextMenu(event, ${notification.id})"></i>` 
                            : ''}
                        <i class="fas fa-chevron-down notification-expand-icon"></i>
                    </div>
                </div>
                <div class="notification-details">
                    <div class="notification-details-grid">
                        <div class="notification-detail-item">
                            <div class="notification-detail-label">Fecha de Cita</div>
                            <div class="notification-detail-value">${Utils.formatDate(notification.date)}</div>
                        </div>
                        <div class="notification-detail-item">
                            <div class="notification-detail-label">Hora</div>
                            <div class="notification-detail-value">${notification.time}</div>
                        </div>
                        <div class="notification-detail-item">
                            <div class="notification-detail-label">Estilista</div>
                            <div class="notification-detail-value">${notification.stylist}</div>
                        </div>
                        <div class="notification-detail-item">
                            <div class="notification-detail-label">Duración</div>
                            <div class="notification-detail-value">${notification.duration}</div>
                        </div>
                        <div class="notification-detail-item">
                            <div class="notification-detail-label">Total</div>
                            <div class="notification-detail-value">${notification.total}</div>
                        </div>
                        <div class="notification-detail-item">
                            <div class="notification-detail-label">Fecha Solicitud</div>
                            <div class="notification-detail-value">${Utils.formatDate(notification.requestDate)}</div>
                        </div>
                    </div>
                    ${status === 'pendientes' ? `
                        <div class="notification-actions">
                            <button class="notification-btn confirm" onclick="NotificacionesModule.confirmNotification(${notification.id})">
                                Confirmar
                            </button>
                            <button class="notification-btn reject" onclick="NotificacionesModule.rejectNotification(${notification.id})">
                                Rechazar
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    };

    const toggleExpand = (notificationId) => {
        if (state.expandedNotifications.has(notificationId)) {
            state.expandedNotifications.delete(notificationId);
        } else {
            state.expandedNotifications.add(notificationId);
        }
        render(state.currentFilter);
    };

    const showContextMenu = (event, notificationId) => {
        event.stopPropagation();
        const contextMenu = document.getElementById('notificationContextMenu');
        if (!contextMenu) return;

        state.contextMenuTarget = notificationId;

        // Posicionar el menú
        contextMenu.style.left = `${event.pageX}px`;
        contextMenu.style.top = `${event.pageY}px`;
        contextMenu.classList.add('active');

        // Configurar acciones del menú
        const menuItems = contextMenu.querySelectorAll('.context-menu-item');
        menuItems.forEach(item => {
            item.onclick = () => {
                const action = item.dataset.action;
                if (action === 'accept') {
                    confirmNotification(notificationId);
                } else if (action === 'reject') {
                    rejectNotification(notificationId);
                } else if (action === 'cancel') {
                    cancelNotification(notificationId);
                }
                contextMenu.classList.remove('active');
            };
        });
    };

    const confirmNotification = (notificationId) => {
        const notification = state.notifications.find(n => n.id === notificationId);
        if (!notification) return;

        ConfirmationManager.confirmSave(() => {
            notification.status = 'confirmadas';
            state.expandedNotifications.delete(notificationId);
            render(state.currentFilter);
            ConfirmationManager.showSuccess('Cita confirmada exitosamente');
        });
    };

    const rejectNotification = (notificationId) => {
        const notification = state.notifications.find(n => n.id === notificationId);
        if (!notification) return;

        ConfirmationManager.confirmDelete(() => {
            notification.status = 'rechazadas';
            state.expandedNotifications.delete(notificationId);
            render(state.currentFilter);
            ConfirmationManager.showSuccess('Cita rechazada');
        });
    };

    const cancelNotification = (notificationId) => {
        const notification = state.notifications.find(n => n.id === notificationId);
        if (!notification) return;

        ConfirmationManager.confirmDelete(() => {
            notification.status = 'rechazadas';
            state.expandedNotifications.delete(notificationId);
            render(state.currentFilter);
            ConfirmationManager.showSuccess('Cita cancelada');
        });
    };

    const initialize = async () => {
        await loadHTML();
    };

    const show = () => {
        NavigationManager.showSection('notificaciones-section');
        render(state.currentFilter);
    };

    return { 
        initialize, 
        show,
        toggleExpand,
        showContextMenu,
        confirmNotification,
        rejectNotification,
        cancelNotification
    };
})();
