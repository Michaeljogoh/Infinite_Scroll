const container = document.querySelector('.container');
const text = Array.from(document.querySelectorAll(".text"));


window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(createPost,1000);

	}
});

function createPost(){
	const post = document.createElement('div');
	text.forEach(item=>{
		post.className = 'text';
	post.innerHTML = container.innerHTML ;
	})
	
	
	container.append(post);
}                        