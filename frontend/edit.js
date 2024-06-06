function formatDate(iso) {
    return iso == null ? 'N/A' : iso
}

const id = new URLSearchParams(window.location.search).get('id')

if (!id) {
    window.location.href = './index.html'
}

fetch(`http://localhost:8080/car/${id}`)
    .then(rsp => {
        if (!rsp.ok) {
            throw new Error(`Automobil sa ID-jem ${id} nije pronađen (HTTP ${rsp.status})`)
        }
        return rsp.json()
    })
    .then(data => {
        document.getElementById('id').value = data.id
        document.getElementById('owner_name').value = data.owner.name
        document.getElementById('owner_surname').value = data.owner.surename
        document.getElementById('manufacturer').value = data.manufacturer.name
        document.getElementById('model').value = data.model
        document.getElementById('country').value = data.manufacturer.country
        document.getElementById('year').value = data.year
        document.getElementById('owner_phone').value = data.owner.phone
        document.getElementById('owner_email').value = data.owner.email
        document.getElementById('created_at').value = formatDate(data.createdAt)
        document.getElementById('updated_at').value = formatDate(data.updatedAt)
    })
    .catch(error => {
        console.error('Greška:', error.message);
        alert(`Došlo je do greške pri učitavanju podataka: ${error.message}`)
    })

document.getElementById('save-btn').addEventListener('click', () => {
    const data = {
        owner_name: document.getElementById('owner_name').value,
        owner_surename: document.getElementById('owner_surname').value,
        manufacturer: document.getElementById('manufacturer').value,
        model: document.getElementById('model').value,
        country: document.getElementById('country').value,
        year: document.getElementById('year').value,
        owner_phone: document.getElementById('owner_phone').value,
        owner_email: document.getElementById('owner_email').value,
        created_At: document.getElementById('created_at').value,
        updated_At: document.getElementById('updated_at').value
    };

    fetch(`http://localhost:8080/car/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(rsp => {
        if (rsp.ok) {
            alert('Promene su uspešno sačuvane')
            window.location.href = './index.html'
        } else {
            alert(`Greška pri čuvanju promena (HTTP ${rsp.status})`)
        }
    })
    .catch(error => {
        console.error('Greška:', error)
        alert('Došlo je do greške pri čuvanju promena')
    });
});
