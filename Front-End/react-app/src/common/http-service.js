import axios from 'axios';

class HttpService {
    baseUrl = 'http://192.168.33.11';
    
    getAllLocations() {
        return axios.get(`${this.baseUrl}/locations`).then(r => r.data);
    }

    getLocationByCompany(id) {
        return axios.get(`${this.baseUrl}/locations/company/${id}`).then(r => r.data);
    }

    addLocation(name, company_id) {
        return axios.post(`${this.baseUrl}/locations/add`, {
            "name": name,
            "company_id": company_id
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    getAllProblems() {
        return axios.get(`${this.baseUrl}/problems`).then(r => r.data);
    }

    getProblemByLocation(id) {
        return axios.get(`${this.baseUrl}/problems/location/${id}`).then(r => r.data);
    }

    getProblemByTechnician(id) {
        return axios.get(`${this.baseUrl}/problems/technician/${id}`).then(r => r.data);
    }

    addProblem(description, date, fixed, location_id) {
        return axios.post(`${this.baseUrl}/problems/add`, {
            "location_id": location_id,
            "description": description,
            "date": date,
            "fixed": fixed
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    updateTechnician(problem_id, technician) {
        return axios.post(`${this.baseUrl}/problems/updateTechnician/${problem_id}`, {
            "technician": technician
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    deleteTechnician(problem_id) {
        return axios.post(`${this.baseUrl}/problems/deleteTechnician/${problem_id}`).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    fixProblem(problem_id) {
        return axios.post(`${this.baseUrl}/problems/fixProblem/${problem_id}`).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    getAllStatusReports() {
        return axios.get(`${this.baseUrl}/statusreports`).then(r => r.data);
    }

    getStatusReportByLocation(id) {
        return axios.get(`${this.baseUrl}/statusreports/location/${id}`).then(r => r.data);
    }

    addStatusReport(date, location_id, status) {
        return axios.post(`${this.baseUrl}/statusreports/add`, {
            "location_id": location_id,
            "date": date,
            "status": status
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    getAllCompanies() {
        return axios.get(`${this.baseUrl}/companies`).then(r => r.data);
    }

    getCompanyByUser(id) {
        return axios.get(`${this.baseUrl}/companies/user/${id}`).then(r => r.data);
    }

    getAllProblemreactions() {
        return axios.get(`${this.baseUrl}/problemreactions`).then(r => r.data);
    }

    getProblemreactionsByProblem(id) {
        return axios.get(`${this.baseUrl}/problemreactions/problem/${id}`).then(r => r.data);
    }

    addProblemreaction(problem_id, rating, description) {
        return axios.post(`${this.baseUrl}/problemreactions/add/${problem_id}`, {
            "rating": rating,
            "description": description
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
    
    getAllUsers() {
        return axios.get(`${this.baseUrl}/users`).then(r => r.data);
    }

    getUsersByRole(role) {
        return axios.get(`${this.baseUrl}/users/role/${role}`).then(r => r.data);   
    }

    addUser(name, role) {
        return axios.post(`${this.baseUrl}/users/add`, {
            "name": name,
            "role": role
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    updateUser(id, name, role) {
        return axios.post(`${this.baseUrl}/users/update/${id}`, {
            "name": name,
            "role": role
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    deleteUser(id) {
        return axios.post(`${this.baseUrl}/users/delete/${id}`).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

}

const httpService = new HttpService();

export default httpService;