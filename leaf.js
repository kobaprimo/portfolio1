function createLeaf () {
    const leaf = document.createElement('img');
    leaf.src = 'leaf.png';
    leaf.className = 'leaf';
    document.body.appendChild(leaf);
    leaf.style.position = 'fixed';               // fixedで画面に固定
    leaf.style.top = '-50px'; 
    leaf.style.left = Math.random() * window.innerWidth + 'px'
    
    const size = 20 + Math.random() * 30;
    leaf.style.width = size + 'px'
    leaf.style.height = 'auto';

    leaf.style.animationDuration = 5 + Math.random() * 5 + 's';

    setTimeout(() => {
        leaf.remove();
    },10000);
}

const intervalId = setInterval(createLeaf, 100);

// 5秒後に葉っぱを作るのを止めたい場合
setTimeout(() => {
    clearInterval(intervalId);
    console.log('葉っぱの生成を止めました！');
}, 5000);
