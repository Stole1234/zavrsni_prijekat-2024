const searchTitle = document.getElementById('search');
const table = document.getElementById('table');




if (searchParam != null && searchParam != '') {
    searchTitle.innerText = 'Car search';
    fetchCars(`/search?query=${searchParam}`);
} else {
    fetchCars();
}

function fetchCars(url = '') {
    fetch(`http://localhost:8080/car${url}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                alert('No cars found');
                return;
            }
            updateTable(data);
        })
        .catch(error => console.error('Error fetching cars:', error));
}

function updateTable(car) {
    table.innerHTML = '';

    car.forEach(car => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${car.id}</td>
            <td>${car.owner.name}</td>
            <td>${car.owner.surname}</td>
            <td>${car.manufacturer.name}</td>
            <td>${car.model}</td>
            <td>${car.manufacturer.country}</td>
            <td>${car.year}</td>
            <td>${car.owner.phone}</td>
            <td>${car.owner.email}</td>
            <td>${formatDate(car.createdAt)}</td>
            <td>${formatDate(car.updatedAt)}</td>
            <td>
                <div class="btn-group">
                    <a href="./edit.html?id=${car.id}" class="btn btn-sm btn-success">
                        <i class="fa-solid fa-user-pen"></i> Edit
                    </a>
                    <button class="btn btn-sm btn-danger remove" onclick="deleteCar(${car.id})">
                        <i class="fa-solid fa-trash"></i> Delete
                    </button>
                </div>
            </td>
        `;

        table.appendChild(tr);
    });
}

function formatDate(iso) {
    if (iso == null) return 'N/A';
    return iso;
}

function deleteCar(id) {
    if (confirm('Do you want to delete car?')) {
        fetch(`http://localhost:8080/car/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.status == 204) {
                    window.location.href = './index.html';
                    alert('Car deleted successfully');
                } else {
                    alert(`Error deleting car (HTTP ${response.status})`);
                }
            })
            .catch(error => console.error('Error deleting car:', error));
    }
}
