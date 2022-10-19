function handleSubmit(event) {
    event.preventDefault()
	
	let urlText = document.getElementById('url').value
	
    if(Client.validateURL(urlText)) {

		console.log('::: Form Submitted :::')
		
		mcAPI('http://localhost:8081/api', {url: urlText})
		.then(function(res) {
			document.getElementById("language").innerHTML = `Language: ${res.language_list[0].name}`;
			var flagURL = 'https://countryflagsapi.com/svg/'+String(res.language_list[0].language);
			document.getElementById("flag").src = flagURL;
		})
	}else {
		alert('Seems like an invalid URL, please try with a valid URL.');
	}
}

const mcAPI = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const mcData = await response.json();
        console.log('Returned Data:', mcData)
        return mcData;
    } catch (error) {
        console.log('error', error);
    }
};

export { handleSubmit }