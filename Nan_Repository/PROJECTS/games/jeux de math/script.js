let n1 = 0
let n2 = 0
let levels = []
let currentLevel = null
let inter = null
let found = 0;
let operateur = null

const progress = document.querySelector("#progress")
let level_count = document.querySelector("#level")
let found_count = document.querySelector("#found")

function randomNumber(min, max)
{
	return (Math.floor(Math.random() * (max - min) + min))

}

function generateNumber(min, max,operateurs)
{
	let span1 = document.querySelector("#nl")
	let span2 = document.querySelector("#nr")

	n1 = randomNumber(min, max)
	n2 = randomNumber(min, max)
	operateur = operateurs.length>1 ? randomOperator(operateurs) : operateurs[0]
	span1.textContent = n1
	span2.textContent = n2
	decompte(currentLevel.nb_second)

}

function checkResult(e)
{
	if (Number(e.target.value) == (n1 + n2))
	{
		found++
		clearInterval(inter)
		progress.style.width = "400px"

		if (found == currentLevel.correct_response)
		{
			found = 0
			currentLevel = levels[currentLevel.level]
			level_count.textContent = currentLevel.level
			showAnimeLevel(currentLevel)
		}
		else 
		{
			generateNumber(currentLevel.min, currentLevel.max)
			e.target.value = ""
			found_count.textContent = found
		}
	}
}

function decompte(nb_second)
{
	let count  = nb_second
	inter = setInterval(() => {
		let percent  = (count * 400) / nb_second
		if(percent>240)
		{
			progress.style.backgroundColor="lime"
		} else if(percent>120){
			progress.style.backgroundColor="orange"

		} else
		(
			progress.style.backgroundColor="red"
		)
		progress.style.width = percent + "px"
		if (count == 0)
		{
			found = 0
			found_count.textContent = found
			clearInterval(inter)
			generateNumber(currentLevel.min, currentLevel.max)
		}
		count--
	}, 1000)

}

function showAnimeLevel(currentLevel)
{
	let span = document.querySelector("#level-state")
	span.textContent = currentLevel.level
	let parent = span.parentElement
	parent.parentElement.style.display = "block"
	parent.classList.add("anim-level")
	setTimeout(() => {
		parent.classList.remove("anim-level")
		parent.parentElement.style.display = "none"
		generateNumber(currentLevel.min, currentLevel.max)
	}, 6000)

}

window.addEventListener("load", async function(){
	levels = await fetch("./levels.json")
	levels = await levels.json()
	currentLevel = levels[0]
	level_count.textContent = currentLevel.level
	showAnimeLevel(currentLevel)
})
/* permet de choisir l'op??rateur*/
function randomOperator(tab)
{
	let number = Math.floor(Math.random()*tab.length)
	return tab[number]
}
