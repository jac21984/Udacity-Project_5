function handleSubmit(event) {
    event.preventDefault()
	
	let formText = document.getElementById('url').value
	
    if(Client.validateURL(formText)) {

		console.log('::: Form Submitted :::')
		
		postData('http://localhost:8081/api', {url: formText})
		.then(function(res) {
			
			document.getElementById("language").innerHTML = `Language: ${res.language_list[0].name}`;
			var flagURL = 'https://countryflagsapi.com/svg/'+String(res.language_list[0].language);
			document.getElementById("flag").src = flagURL;
		})
	}else {
		alert('Seems like an invalid URL, please try with a valid URL.');
	}
}

const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

export { handleSubmit }