const BASE_URL = 'https://localhost:44301/api/Employee';

export const employeeApi = {
    // Fetch all records
    getAll: async () => {
        const response = await fetch(`${BASE_URL}/GetAll`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    },

    // Future API additions can live here neatly:
    // update: async (id, data) => { ... },
    // delete: async (id) => { ... }
};