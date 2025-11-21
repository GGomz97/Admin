const EstilistasModule = (() => {
    let state = { 
        stylists: [
            { 
                id: 1, 
                name: 'María González', 
                phone: '555-0101',
                user: 'maria.gonzalez',
                services: 'Corte, Tinte, Tratamientos',
                schedule: 'Lun-Vie 9:00-18:00',
                occupation: 'Estilista Senior',
                image: null
            },
            { 
                id: 2, 
                name: 'Carlos Ruiz', 
                phone: '555-0102',
                user: 'carlos.ruiz',
                services: 'Corte, Barba, Coloración',
                schedule: 'Mar-Sab 10:00-19:00',
                occupation: 'Barbero Profesional',
                image: null
            }
        ], 
        editingId: null 
    };
    let elements = {};

    const loadHTML = async () => {
        const container = document.getElementById('estilistas-section');
        if (!container) return;
        try {
            const response = await fetch('../HTML/estilistas.html');
            const html = await response.text();
            container.innerHTML = html;
            updateDOMReferences();
            setupEventListeners();
            render();
        } catch (error) {
            console.error('Error:', error);
            container.innerHTML = '<p class="placeholder-text">Error cargando el módulo</p>';
        }
    };

    const updateDOMReferences = () => {
        elements = {
            list: document.getElementById('stylistsList'),
            addBtn: document.getElementById('addStylistBtn'),
            modal: document.getElementById('addStylistModal'),
            form: document.getElementById('addStylistForm'),
            modalTitle: document.getElementById('stylistModalTitle')
        };
    };

    const setupEventListeners = () => {
        if (elements.addBtn) {
            elements.addBtn.addEventListener('click', () => {
                state.editingId = null;
                elements.form.reset();
                if (elements.modalTitle) {
                    elements.modalTitle.textContent = 'Nuevo estilista';
                }
                ModalManager.open(elements.modal);
            });
        }

        if (elements.form) {
            elements.form.addEventListener('submit', handleSubmit);
        }

        const cancelBtn = document.querySelector('.cancel-stylist');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                ConfirmationManager.confirmCancel(() => {
                    ModalManager.close(elements.modal);
                    elements.form.reset();
                    state.editingId = null;
                });
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        ConfirmationManager.confirmSave(() => {
            if (state.editingId) {
                const stylist = state.stylists.find(s => s.id === state.editingId);
                if (stylist) {
                    Object.assign(stylist, data);
                }
                ConfirmationManager.showSuccess('Estilista actualizado exitosamente');
            } else {
                state.stylists.push({ 
                    id: Utils.generateId(), 
                    ...data,
                    image: null
                });
                ConfirmationManager.showSuccess('Estilista agregado exitosamente');
            }
            
            ModalManager.close(elements.modal);
            elements.form.reset();
            state.editingId = null;
            render();
        });
    };

    const render = () => {
        if (!elements.list) return;

        if (state.stylists.length === 0) {
            elements.list.innerHTML = '<p class="placeholder-text">No hay estilistas registrados</p>';
            return;
        }

        elements.list.innerHTML = state.stylists.map(stylist => `
            <div class="stylist-card">
                <div class="stylist-image" style="${stylist.image ? `background-image: url(${stylist.image})` : 'background-color: #C0C0C0'}">
                    ${!stylist.image ? '<i class="fas fa-user" style="font-size: 48px; color: white;"></i>' : ''}
                </div>
                <div class="stylist-info">
                    <h3>${stylist.name}</h3>
                    <p><strong>Teléfono:</strong> ${stylist.phone}</p>
                    <p><strong>Usuario:</strong> ${stylist.user}</p>
                    <p><strong>Servicios:</strong> ${stylist.services}</p>
                    <p><strong>Horarios:</strong> ${stylist.schedule}</p>
                    <p><strong>Ocupación:</strong> ${stylist.occupation}</p>
                </div>
                <div class="stylist-actions">
                    <button class="edit-card-btn" onclick="EstilistasModule.editStylist(${stylist.id})">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button class="schedule-btn" onclick="EstilistasModule.viewSchedule(${stylist.id})">
                        <i class="fas fa-calendar"></i> Horario
                    </button>
                    <button class="delete-card-btn" onclick="EstilistasModule.deleteStylist(${stylist.id})">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            </div>
        `).join('');
    };

    const editStylist = (stylistId) => {
        const stylist = state.stylists.find(s => s.id === stylistId);
        if (!stylist) return;

        state.editingId = stylistId;
        
        if (elements.modalTitle) {
            elements.modalTitle.textContent = 'Editar estilista';
        }

        // Llenar el formulario con los datos del estilista
        Object.keys(stylist).forEach(key => {
            const input = elements.form.querySelector(`[name="${key}"]`);
            if (input && key !== 'id' && key !== 'image') {
                input.value = stylist[key];
            }
        });

        ModalManager.open(elements.modal);
    };

    const deleteStylist = (stylistId) => {
        ConfirmationManager.confirmDelete(() => {
            state.stylists = state.stylists.filter(s => s.id !== stylistId);
            render();
            ConfirmationManager.showSuccess('Estilista eliminado exitosamente');
        });
    };

    const viewSchedule = (stylistId) => {
        alert('Función de visualización de horario en desarrollo');
    };

    const initialize = async () => {
        await loadHTML();
    };

    const show = () => {
        NavigationManager.showSection('estilistas-section');
    };

    return { 
        initialize, 
        show,
        editStylist,
        deleteStylist,
        viewSchedule
    };
})();
