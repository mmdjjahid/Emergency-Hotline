function getElement (name){
   return document.getElementsByClassName(name)
}

let title1 = ['National Emergency Number', 'Police Helpline Number', 'Fire Service Number', 'Ambulance Service', 'Women & Child Helpline', 'Anti-Corruption Helpline', 'Electricity Helpline', 'Brac Helpline', 'Bangladesh Railway Helpline ']
let dis = ['National Emergency', 'Police', 'Fire Service', 'Ambulance', 'Women & Child Helpline', 'Anti-Corruption', 'Electricity Outage', 'Brac', 'Bangladesh Railway']
let hotlineNumber = [999, 999, 999, '1994-999999', 109, 106, 16216, 16445, 163]
let dis2 = ['All', 'Police', 'Fire', 'Health','Help', 'Govt.', 'Electricity', 'NGO', 'Travel']


const allData = {
    title1 : title1,
    dis : dis,
    hotlineNumber : hotlineNumber,
    dis2 : dis2
}


for (let service=0; service<dis.length; service++){
    let serviceCard = getElement('serviceCard')[0]
    let iconColor = 'bg-red-100'
    let icon = "./assets/emergency.png"
    if (allData.dis[service] === 'Police'){
        iconColor = 'bg-sky-100'
        icon = './assets/police.png'
    } else if (allData.dis[service] === 'Fire Service'){
        icon = './assets/fire-service.png'
    } else if (allData.dis[service] === 'Ambulance'){
        icon = './assets/ambulance.png'
    }

    let newsService = document.createElement("div")
    newsService.innerHTML=`
        <div class="card bg-base-100  shadow-sm">
                    <div class="card-body">
                        <div class="flex justify-between items-center">
                            <figure class="p-3 rounded-2xl ${iconColor}">
                                <img class="w-8 h-8 " src="${icon}" alt="">
                            </figure>
                            <i class="cardHeart fa-regular fa-heart text-lg"></i>
                        </div>
                        <h2 class="serviceName card-title">${allData.title1[service]}</h2>
                        <p class='text-neutral-600'>${allData.dis[service]}</p>
                        <h2 class="serviceNumber card-title">${allData.hotlineNumber[service]}</h2>
                        <p class='text-neutral-600'>${allData.dis2[service]}</p>
                        <div class="card-actions justify-end grid grid-cols-2">            
                            <button class="copy btn btn-primary bg-gray-100 text-gray-600 border-none"><i class="fa-solid fa-copy"></i> Copy</button>
                            <button class="call btn btn-primary bg-green-600 border-none"><i class="fa-solid fa-phone"></i> Call</button>
                        </div>
                    </div>
                </div>
        `
        serviceCard.appendChild(newsService)
}




let heartPoints = getElement('cardHeart')
let callClicks = getElement("call")


for (let heartPoint of heartPoints ){
    heartPoint.addEventListener('click', function(){
        heart = getElement('heart')[0]
        heart.innerText = parseInt(heart.innerText) + 1
})
}

for (let callClick of callClicks ){
    callClick.addEventListener('click', function(e){
        gold = getElement('gold')[0]
        if (gold.innerText < 20) {
            alert(`you do not have enough coins you need minimum 20 coins`)
        }
        else{

            let serviceNumber = callClick.parentNode.parentNode.getElementsByClassName('serviceNumber')[0].innerText
            let serviceName = callClick.parentNode.parentNode.getElementsByClassName('serviceName')[0].innerText
            let time = new Date().toLocaleTimeString()
            alert(`📞 Calling ${serviceName} ${serviceNumber}...`)
            gold.innerText = gold.innerText - 20
            
            let history = getElement('history')[0]
            let newHistory = document.createElement('div')
            
            newHistory.innerHTML = `
            <div class="flex flex-row justify-between items-center card bg-base-200 sm:mt-6 mt-3 p-3">
                <div>
                    <p class="font-semibold text-lg">${serviceName}</p>
                    <p class="text-neutral-600 font-normal">${serviceNumber}</p>
                </div>
                <p class="hind-madurai-regular">${time}</p>

            </div>
            `
            history.appendChild(newHistory)

        }
        
})
}

getElement('clearBtn')[0].addEventListener('click', function (){
    let parent = getElement('history')[0]
    parent.innerHTML = ''
})


let copyBtns = getElement('copy')

for (let copyBtn of copyBtns){
    copyBtn.addEventListener('click', function(){
        let serviceNumber = copyBtn.parentNode.parentNode.getElementsByClassName('serviceNumber')[0].innerText
        let copyCounter = getElement('copyNum')[0]
        copyCounter.innerText = parseInt(copyCounter.innerText) + 1
        navigator.clipboard.writeText(serviceNumber)
        alert(`Number copy is complete: ${serviceNumber}`)
    })
}