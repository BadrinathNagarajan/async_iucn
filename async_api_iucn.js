
let API_URL='https://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee'

async function getdata(){
    let res= await fetch('https://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee',{
        method:'GET',
        'Content-Type':'application/json'
    })
    let data = await res.json();
    console.log(data)
    console.log(data.results)
    console.log(data.results.length)
    constructtabledata(data)
}

getdata();


async function constructtabledata(data){
    for(let i=0;i<data.results.length;i++){
        let tab= document.getElementById('table')
        let row = document.createElement('tr')
        row.setAttribute('class','trow')
        row.innerHTML=`<tr>
        <td scope="row">${i+1}</td>
        <td>${data.results[i].isocode}</td>
        <td>${data.results[i].country}</td>   
        <td><button type="button" class="btn btn-primary">
        <a href="https://en.wikipedia.org/wiki/${data.results[i].country}" class="nav-link activate" target="_blank">DETAILS</a>
    </button></td>     
      </tr>`

      tab.appendChild(row)
    }
}