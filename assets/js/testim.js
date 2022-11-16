// const testmCarousel = document.getElementById('testimonials_cards');
// 	const testimCardsList = Array.from(testmCarousel.cloneNode(true).children);
// 	const testimBar = document.getElementById('testimonials_bar');
// 	let testimCardsNum = 11;
// 	let testimCardGap = 30;

// 	shuffleCards(testimCardsList);

// 	createNewCardList(testmCarousel, testimCardsList, testimCardsNum);

// 	const setInterval = () => {
// 		document.documentElement.clientWidth < 1001 ? testimBar.setAttribute('max', 8) : testimBar.setAttribute('max', 7);
// 	}

// 	setInterval();

// 	testimBar.addEventListener('input', ev => {
// 		let transX = -ev.target.value * (testimCardsList[0].clientWidth + testimCardGap);
// 		testmCarousel.style.transform = `translateX(${transX}px)`;
// 	});

// 	window.addEventListener('resize', setInterval);
	


// function shuffleCards(array) {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		let j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// }

// function createNewCardList(block, cardArr, cardsNum) {
// 	block.innerHTML = "";

// 	for (let i = 0; i < cardsNum; i++) {
// 		block.prepend(cardArr[i]);
// 	}
// }
const testimonialsCard =  [
	`<div class="feedback" data-number="five">
	<div class="feedback__info">
		<div class="feedback__img">
			<img src="./assets/images/user_icon.svg" alt="feedback author img">
		</div>
		<div class="feedback__data">
			<p class="feedback__author">Nicole Jhons</p>
			<p class="feedback__location">USA</p>
			<p class="feedback__day">Today</p>
		</div>
	</div>
	<p class="feedback__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		<span class="feedback__text-mobile">gouillas
			Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
			<span class="feedback__text-tablet">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
				The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
			</span>
		</span>
   </p>
</div>`,
`<div class="feedback" data-number="six">
<div class="feedback__info">
	<div class="feedback__img">
		<img src="./assets/images/user_icon.svg" alt="feedback author img">
	</div>
	<div class="feedback__data">
		<p class="feedback__author">Adam Smith</p>
		<p class="feedback__location">Best Ecomonist</p>
		<p class="feedback__day">Today</p>
	</div>
</div>
<p class="feedback__text">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals
	<span class="feedback__text-mobile">gouillas
		Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
		<span class="feedback__text-tablet">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
			The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
		</span>
	</span>
</p>
</div>`,
`<div class="feedback" data-number="seven">
<div class="feedback__info">
	<div class="feedback__img">
		<img src="./assets/images/feedback-img-3.png" alt="feedback author img">
	</div>
	<div class="feedback__data">
		<p class="feedback__author">Emma Stoun</p>
		<p class="feedback__location">Actress</p>
		<p class="feedback__day">Today</p>
	</div>
</div>
<p class="feedback__text">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals
	<span class="feedback__text-mobile">gouillas
		Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
		<span class="feedback__text-tablet">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
			The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
		</span>
	</span>
</p>
</div>`,
`<div class="feedback" data-number="eight">
<div class="feedback__info">
	<div class="feedback__img">
		<img src="./assets/images/feedback-img-2.pn" alt="feedback author img">
	</div>
	<div class="feedback__data">
		<p class="feedback__author">Martin Eden</p>
		<p class="feedback__location">Yesterday</p>
		<p class="feedback__day">Today</p>
	</div>
</div>
<p class="feedback__text">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals
	<span class="feedback__text-mobile">gouillas
		Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
		<span class="feedback__text-tablet">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
			The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
		</span>
	</span>
</p>
</div>`,
`<div class="feedback" data-number="nine">
<div class="feedback__info">
	<div class="feedback__img">
		<img src="./assets/images/feedback-img-3.png" alt="feedback author img">
	</div>
	<div class="feedback__data">
		<p class="feedback__author">MC Donalds</p>
		<p class="feedback__location">KFC</p>
		<p class="feedback__day">Every day</p>
	</div>
</div>
<p class="feedback__text">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals
	<span class="feedback__text-mobile">gouillas
		Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
		<span class="feedback__text-tablet">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
			The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
		</span>
	</span>
</p>
</div>`,
`<div class="feedback" data-number="ten">
<div class="feedback__info">
	<div class="feedback__img">
		<img src="./assets/images/feedback-img-4.png" alt="feedback author img">
	</div>
	<div class="feedback__data">
		<p class="feedback__author">Harari Yuval</p>
		<p class="feedback__location">Humankind</p>
		<p class="feedback__day">Yesterday</p>
	</div>
</div>
<p class="feedback__text">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals
	<span class="feedback__text-mobile">gouillas
		Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
		<span class="feedback__text-tablet">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
			The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
		</span>
	</span>
</p>
</div>`,
`<div class="feedback" data-number="eleven">
<div class="feedback__info">
	<div class="feedback__img">
		<img src="./assets/images/feedback-img-2.png" alt="feedback author img">
	</div>
	<div class="feedback__data">
		<p class="feedback__author">Micheal Obama</p>
		<p class="feedback__location">Past USA</p>
		<p class="feedback__day">Today</p>
	</div>
</div>
<p class="feedback__text">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals
	<span class="feedback__text-mobile">gouillas
		Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
		<span class="feedback__text-tablet">My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
			The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
		</span>
	</span>
</p>
</div>`,
]
const progressBar = document.querySelector('.progress-bar')
const feedbacksWrapper = document.querySelector('.feedbacks__wrap')
const feedbacks = document.querySelector('.feedbacks')
let testimCardsNum = 11;
let testimCardGap = 30;
for(let i=0;i<progressBar.max; i++){
	feedbacks.innerHTML +=testimonialsCard[i]
}
progressBar.addEventListener('input', (event)=>{
	console.log(progressBar.value)
	//feedbacks.style.right = feedbackWidth*progressBar.value + 60 +'px'
	
	let transX = -event.target.value * (document.querySelectorAll('.feedback')[0].clientWidth + testimCardGap);
	feedbacks.style.transform = `translateX(${transX}px)`;
	
})