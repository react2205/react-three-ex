import { useRef, useEffect } from 'react';

function Txt(props) {
	const txt = useRef(null);

	const init = () => {
		const boxs = txt.current.querySelectorAll('article');
		boxs.forEach((box, index) => {
			const tit = box.querySelector('h2');
			const tit_txt = tit.innerText;
			let newTags = '';
			let count = 0;
			for (const type of tit_txt) {
				newTags += `<span style='transition-delay: ${
					0.1 * count++
				}s'>${type}</span>`;
			}

			tit.innerHTML = newTags;
		});
	};

	const activation = () => {
		const boxs = txt.current.querySelectorAll('article');
		for (const box of boxs) box.classList.remove('on');
		boxs[props.Index].classList.add('on');
	};

	useEffect(() => {
		init();
		activation();
	}, [props.Index]);

	return (
		<section className='txt' ref={txt}>
			<article>
				<h2>Consect</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nihil
					totam minus, expedita debitis quas! Reiciendis distinctio in fugit
					molestiae.
				</p>
			</article>
			<article>
				<h2>Dolor</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit
					enim obcaecati. <br />
					<br />
					Rem id saepe sapiente provident. Itaque dicta explicabo, minima
					assumenda corporis nemo placeat optio quam consectetur! Vel ad
					praesentium aspernatur doloremque quae maxime ipsum exercitationem
					magnam ipsam voluptas?
				</p>
			</article>
			<article>
				<h2>Lorem</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi
					suscipit enim officiis porro, eligendi excepturi repudiandae corrupti
					molestiae.
				</p>
			</article>
			<article>
				<p>
					Necessitatibus eos maxime eaque quaerat iusto est modi temporibus.
					<br />
					<br />
					Aliquid quaerat accusamus amet blanditiis deserunt eaque, labore nobis
					tempore facere minus inventore totam quo nulla doloremque deleniti
					dolore qui officia consequatur corrupti. <br />
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quod!
				</p>
				<h2>Sit amet</h2>
			</article>
			<article>
				<h2>Adipisic</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
					<br />
					/Soluta deserunt quam impedit, sunt atque similique expedita accusamus
					omnis, pariatur debitis, perspiciatis adipisci exercitationem natus
					illum ratione neque id placeat voluptas sed minima odio sint.
				</p>
			</article>
			<article>
				<h2>Corporis</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
					Minima iste quo doloremque veritatis assumenda quam reiciendis! Et
					pariatur delectus dicta asperiores, iste, modi doloribus architecto
					rerum a omnis molestias.
				</p>
			</article>
		</section>
	);
}

export default Txt;
