
fetch('http://localhost:8080/car')
    .then(rsp => {
        if (rsp.status == 200)
            return rsp.json()
        throw new Error('Car not found')
    })
    .then(data => {
        document.getElementById('id').value = data.id
        document.getElementById('owner_name').value = data.owner.name
        document.getElementById('owner_surename').value = data.owner.surename
        document.getElementById('Manufacturer').value = data.manufacturer.name
        document.getElementById('Model').value = data.model
        document.getElementById('Country').value = data.manufacturer.country
        document.getElementById('Year').value = data.year
        document.getElementById('owner_phone').value = data.owner.phone
        document.getElementById('owner_Email').value = data.owner.email
        document.getElementById('created_At').value = formatDate(data.createdAt)
        document.getElementById('updated_At').value = formatDate(data.updatedAt)
    })
    .catch(error => {
        console.error(error.message)
    })

document.getElementById('save').addEventListener('click', () =>{

    if (owner_name == null || owner_name == '') {
        alert('Field can`t be blank')
        return
    }
    
    
    if (owner_surename == null || owner_surename == '') {
        alert('Field can`t be blank')
        return
    }
    
    if (manufacturer == null || manufacturer == '') {
        alert('Field can`t be blank')
        return
    }
    
    if (model == null || model == '') {
        alert('Field can`t be blank')
        return
    }
    
    if (country == null || country == '') {
        alert('Field can`t be blank')
        return
    }
    
    if (year == null || year == '') {
        alert('Field can`t be blank')
        return
    }
    
    if (owner_phone == null || owner_phone == '') {
        alert('Field can`t be blank')
        return
    }
    
    
    if (owner_email == null || owner_email == '') {
        alert('Field can`t be blank')
        return
    }
    

    fetch('http://localhost:8080/car', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            owner_name: document.getElementById('owner_name').value,
            owner_surename: document.getElementById('owner_surename').value,
            manufacturer: document.getElementById('Manufacturer').value,
            model: document.getElementById('Model').value,
            country: document.getElementById('Country').value,
            year: document.getElementById('Year').value,
            owner_phone: document.getElementById('owner_phone').value,
            owner_email: document.getElementById('owner_Email').value,
            created_At: document.getElementById('created_At').value,
            updated_At: document.getElementById('updated_At').value
        })
    })
        .then(rsp => {
            if (rsp.ok) {
                window.location.href = './index.html'
                alert('Changes saved successfully')
                return
            }
            alert(`Error adding  (HTTP ${rsp.status})`)
        })
})