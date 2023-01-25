function ApiStart()
{
	var Text = document.getElementById('InputData').value;
	var ApiDatasDiv = document.getElementById('ApiDatas');
	var apiToken = "e8Ukadfelqx9kg3f10O"
	if(Text != "")
	{
		ApiDatasDiv.innerHTML = "";
		$.ajax({
		  type: "POST",
		  url: "https://eeozcan.com/wordsapi",
		  beforeSend: function(request) {
		    request.setRequestHeader("Authority", apiToken);
		  },
		  data: {
		    "InputText": Text,
		  },
		  success: function (data)
		  {
		  	console.log(data)
		    NewWords = "";
		    if(data.length > 0)
		    {
		    	for(var SelData = 0;SelData < data.length;SelData++)
			    {
			    	ApiDatasDiv.innerHTML += "<label>"+data[SelData].toString()+"</label><br>";
			    }
		    }
		    else
		    {
		    	ApiDatasDiv.innerHTML = "<label>Sonuç Bulunamadı</label>";
		    }
	       },
		});
	}
	else
	{
		alert("Lütfen Kelime Giriniz !");
	}
}